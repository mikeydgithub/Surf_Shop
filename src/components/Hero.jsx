import React from 'react';
import styled from 'styled-components'

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;

`;
const ImgContainer = styled.div`
    flex: 1;

`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const Hero = ({ imageSrc }) => {
  return (
    <div className="Hero">
      <img src={imageSrc} alt="Travel" className="Image" />
      <h1 className="Title">Surfing made awesome.</h1>
    </div>
  );
};

export default Hero;
