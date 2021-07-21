import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
	background-image: url('/assets/main.jpg');
    background-repeat: no-repeat;
    background-size:cover;
    margin-top:5rem;
    padding: 10rem 2rem;

    .title{
        max-width: 50%;
        text-align: center;
        color: #fff;
        font-weight: bold;
        margin: 0 auto;
    
    }
`;

const Banner = () => {
	return (
		<BannerWrapper>
			<h2 className="title">Create your Experience by bring your Imagination through Text and Imprints</h2>
		</BannerWrapper>
	);
};

export default Banner;
