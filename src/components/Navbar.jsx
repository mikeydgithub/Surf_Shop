import { Search, ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import styled from 'styled-components'
import {mobile} from '../responsive'
import '../styles/navBar.scss'



const Container  = styled.div`
    ${mobile({ height: "50px", marginBottom: "30px"})};
`;

const Wrapper = styled.div`
    ${mobile({ padding: "10px 0px" })};
    
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const SearchText = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 2px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "15px" })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}

`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper className='navbar active'>
            <Left>
                <SearchText>
                Search
                </SearchText>
                <SearchContainer>                
                <Input placeholder="Search"/>
                <Search style={{color: "gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                Surf Side
                </Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem>ProductList</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartCheckoutOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar