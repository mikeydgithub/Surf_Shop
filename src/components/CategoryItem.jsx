
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 10px;
    height: 70vh;
    position: relative;
    cursor: pointer;
    &:hover{
    transform: scale(1.05);
    }
    transition: all 0.5s ease;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.div`
    color: white;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 40px;
    text-shadow: 0 0 4px black;

`;
const Button = styled.div`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    &:hover{
    transform: scale(1.2);
    }
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
