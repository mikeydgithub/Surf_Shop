import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    margin-top: 10px;
    position: relative;
    
`;

// props used for left and right arrows.
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    cursor: pointer;
    opacity: 0.5;

`;

const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
`;
const ImageContainer = styled.div`
    flex:1;
`

const Image = styled.img`

`;

const InfoContainer = styled.div`
    flex: 1;
`;

const Slider = () => {
  return (

    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <ImageContainer>
                <Image src=""/>
            </ImageContainer>
            <InfoContainer>

            </InfoContainer>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
    </Container>

  )
};

export default Slider
