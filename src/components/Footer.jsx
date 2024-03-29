import { Email, GitHub, Instagram, LinkedIn, Phone, Room } from '@mui/icons-material';
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
    flex: 1;
    direction: column;
    padding: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })};
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Surf Side</Logo>
            <Desc>
                Created by Michael Diamond using React and Material UI
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <GitHub/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <LinkedIn/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>
                    Home
                </ListItem>
                <ListItem>
                    Cart
                </ListItem>
                <ListItem>
                    My Account
                </ListItem>
                <ListItem>
                    Order Tracking
                </ListItem>
                <ListItem>
                    Wishlist
                </ListItem>
                <ListItem>
                    Terms
                </ListItem>
            </List>
        </Center>
        <Right>
            <Title>
            Contact
            </Title>
            <ContactItem>
            <Room style={{marginRight: '10px'}}/>Gainesville, FL
            </ContactItem>
            <ContactItem>
            <Email style={{marginRight: '10px'}}/> mikediamond334@gmail.com
            </ContactItem>
            <ContactItem>
            <Phone style={{marginRight: '10px'}}/> 954-295-9085
            </ContactItem>

        </Right>

    </Container>
  )
}

export default Footer