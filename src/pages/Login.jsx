import styled from "styled-components"
import {mobile} from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.2), 
        rgba(255,255,255,0.2)
        ),
        url("https://user-images.githubusercontent.com/94988620/176942522-e07c082d-f02c-484e-b5d4-0ba936b0e7ee.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    ${mobile({ width: "100%" })}
`;

const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Button>Login</Button>
                <Link>Forgot password? Reset here</Link>
                <Link>Create a New Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login