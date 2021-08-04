import React, { useState, useContext } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Swal from "sweetalert2";
import styled from "styled-components";
import { Context } from "../context/Context";
import Sidebar from "./Sidebar";
import axios from "axios";
import Footer from "./Footer";

const TextEditor = () => {
  const { state } = useContext(Context);
  const name = state.user?.username;
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(name);
  const [categories, setCategories] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");

  const handleEditor = (event, editor) => {
    const data = editor.getData();
    setDesc(data);
  };
  let x = localStorage.getItem("user");
  let token = JSON.parse(x).token;
console.log(token)
  const handleSubmit = async (e) => {
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
        window.location.replace("/articles");
      } catch (error) {
        return error;
      }
    }
  };

  return (
    <>
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
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setTitle(e.target.value)}
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
              onChange={(e) => setCategories(e.target.value)}
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
              onChange={(e) => setFacebook(e.target.value)}
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
              onChange={(e) => setTwitter(e.target.value)}
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
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <div className="editor">
              <CKEditor
                editor={ClassicEditor}
                data={desc}
                config={{
                  allowedContent: true,
                  ckfinder: {
                    uploadUrl: "http://localhost:3000/uploads",
                  },
                }}
                onChange={handleEditor}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
        {/* {file && <img src={URL.createObjectURL(file)} alt="image1" />} */}
        {/* <div>
			</div> */}
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
  margin-top: 12rem;

  form {
    background-color: #fff;
    border-radius: 20px;
    border: none;
    padding: 6rem 4rem 4rem 4rem;
  }

  .icon {
    font-size: 1rem;
    border-radius: 30px;
    border: 3px solid blue;
    padding: 0.5rem;
  }
`;

export default TextEditor;
