import React, { useState, useContext } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Swal from "sweetalert2";
import styled from "styled-components";
import { Context } from "../context/Context";
import Sidebar from "./Sidebar";
import axios from "axios";
import Footer from "./Footer";
import Loader from "./Loader";

const TextEditor = () => {
  const { state } = useContext(Context);
  const name = state.user?.username;

  const [formValue, setFormValue] = useState({
    title: "",
    desc: "",
    // files: null,
    username: name,
    categories: "",
    facebook: "",
    twitter: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(event.target.files[0],'eefe'

    // if (name === "file") {
    //   setFormValue((prevState) => {
    //     return {
    //       ...prevState,
    //       files
    //       // [name]: event.target.files[0],
    //     };
    //   });
    // }
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const [loading, setloading] = useState(false);
  const { title, desc, username, categories, facebook, twitter } = formValue;
  const handleEditor = (event, editor) => {
    const data = editor.getData();
    setFormValue({ ...formValue, desc: data });
    // setDesc(data);
  };
  let x = sessionStorage.getItem("user");
  let token = JSON.parse(x).token;

  const handleSubmit = async (e) => {
    setloading(true);
    e.preventDefault();

    const baseURL = process.env.REACT_APP_BACKEND_URL;
    const newPost = {
      title,
      desc,
      username,
      categories,
      facebook,
      twitter,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post(baseURL + "/upload", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        return error;
      }
      try {
        await axios.post(baseURL + "/post", newPost, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        Swal.fire({
          icon: "success",
          title: "Article Created",
        });
        setloading(false);
        window.location.replace("/app/articles");
      } catch (error) {
        setloading(false);
        return error;
      }
    }
  };

  return (
    <>
      {loading && <Loader />}
      <EditorWrapper>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputText1" class="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={handleChange}
              id="exampleInputText1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={title}
              onChange={handleChange}
              id="exampleInputText"
              aria-describedby="textHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label">
              Article Category
            </label>
            <input
              type="text"
              className="form-control"
              name="categories"
              value={categories}
              onChange={handleChange}
              id="exampleInputText"
              aria-describedby="textHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputText1" className="form-label">
              Facebook Link
            </label>
            <input
              type="text"
              className="form-control"
              name="facebook"
              value={facebook}
              onChange={handleChange}
              id="exampleInputText1"
              aria-describedby="textHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputText1" className="form-label">
              Twitter Link
            </label>
            <input
              type="text"
              className="form-control"
              name="twitter"
              value={twitter}
              onChange={handleChange}
              id="exampleInputText1"
              aria-describedby="textHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="fileInput" className="form-label">
              <i className="icon fa fa-plus"></i> Upload Picture
            </label>
            <input
              type="file"
              className="form-control"
              name="file"
              style={{ display: "none" }}
              id="fileInput"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt="image1"
              className="uploaded-pic"
            />
          )}

          <div className="form-group">
            <label>Message</label>
            <div className="editor">
              <CKEditor
                editor={ClassicEditor}
                data={desc}
                config={{
                  allowedContent: true,
                  // ckfinder: {
                  //   uploadUrl: "http://localhost:3000/uploads",
                  // },
                }}
                onChange={handleEditor}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={
              !file ||
              !title ||
              !desc ||
              !username ||
              !categories ||
              !facebook ||
              !twitter
            }
            className="btn btn-primary mt-4"
          >
            Submit
          </button>
        </form>
      </EditorWrapper>
      <Sidebar />
      <Footer />
    </>
  );
};

const EditorWrapper = styled.div`
  grid-area: content;
  padding: 1rem;
  width: 100%;
  margin: 6rem auto;
  margin-top: 6rem;

  form {
    background-color: #fff;
    border-radius: 20px;
    border: none;
    padding: 2rem 4rem 2rem 2rem;
  }

  .uploaded-pic {
    margin: 1rem 0;
    width: 250px;
    object-fit: contain;
  }

  .icon {
    font-size: 1rem;
    border-radius: 30px;
    border: 3px solid blue;
    padding: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    margin: 2rem auto;

    form {
      padding: 2rem 1rem;
      padding-top: 0;
    }
  }
`;

export default TextEditor;
