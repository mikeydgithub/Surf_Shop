import styled from "styled-components"
import {mobile} from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.2), 
        rgba(255,255,255,0.2)
        ),
        url("https://user-images.githubusercontent.com/94988620/176937884-2f4bbf25-943a-43df-8c99-d2dda77a9c23.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    ${mobile({ width: "100%" })}
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                By creating an account, I consent to the prcoessing of my personal data in 
                accordance with the <b>Privacy Ploicy</b>
                </Agreement>
                <Button>Create Account</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register