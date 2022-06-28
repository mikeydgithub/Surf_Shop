import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, {useState} from 'react'
import styled from "styled-components"
import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: white;
    margin-top: 10px;
    position: relative;
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
`;

// props used for left and right arrows.
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: rgb(223, 221, 221);
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
    z-index: 2;

`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * - 100}vw);
    transition: all 1.5s ease;
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.bg}
`;
const ImageContainer = styled.div`
    flex:1;
`

const Image = styled.img`
    height: 80%;
    margin-left: 100px;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-wight: 500;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <Slide bg={item.bg}>
                <ImageContainer>
                    <Image src={item.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}!</Title>
                    <Description>{item.description}</Description>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>
            ))}

            <Slide bg='#6FB1B3'>
                <ImageContainer>
                    <Image src="https://user-images.githubusercontent.com/94988620/176242621-64b48f97-41ca-4979-a59d-17f8e4741507.jpg"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Summer Sale</Title>
                    <Description>You don't want to miss this Wave!</Description>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>
            <Slide bg='#6FB1B3'>
                <ImageContainer>
                    <Image src="https://user-images.githubusercontent.com/94988620/176242621-64b48f97-41ca-4979-a59d-17f8e4741507.jpg"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Clothes with a mission</Title>
                    <Description>Find your fit!</Description>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>

  )
};

export default Slider
