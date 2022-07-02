import styled from "styled-components"
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

const Container = styled.div`
`;

const Image = styled.img`
background: url(https://user-images.githubusercontent.com/78709516/176972458-22549c13-8f68-4553-a081-26ec15e89381.jpg);
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    z-index: 1;
`;

const Hero = () => {
  return (
    <Container>
    <Navbar/>
    <Image />
    <Announcement/>
    <Slider/>
    <Footer/>
    </Container>
  )
}

export default Hero

