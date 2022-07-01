import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none" };
    background-color: ${props => props.type === "filled" ? "black" : "transparent" };
    color: ${props => props.type === "filled" && "white" };
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
   
`;

const Product = styled.div`
`;

const ProductDetail = styled.div`

`;

const Image = styled.div`
    
`;

const Details = styled.div`
    
`;

const ProductName = styled.div`
    
`;

const ProductId = styled.div`
    
`;
const ProductColor = styled.div`
    flex: 1;
`;

const ProductSize = styled.div`
    flex: 1;
`;

const PriceDetail = styled.div`
    flex: 1;
`;

const Summary = styled.div`
    flex: 1;
`;

const Cart = () => {
  return (
    <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
        <Title>
            Your Cart
        </Title>
        <Top>
            <TopButton>Continue Shopping</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist</TopText>
            </TopTexts>
            <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://user-images.githubusercontent.com/94988620/176513508-26ea5e14-7089-4604-b7e5-b1f00b9ea962.jpg"/>
                        <Details>
                            <ProductName><b>Product:</b> Blue Swim Suit</ProductName>
                            <ProductId><b>ID:</b> 84848488484</ProductId>
                            <ProductColor/>
                            <ProductSize><b>Size:</b>37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <b>Price:</b>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>Summary</Summary>
        </Bottom>
    </Wrapper>
    cart
    <Footer/>
    </Container>
  )
}

export default Cart
