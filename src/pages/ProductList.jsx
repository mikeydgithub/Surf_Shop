import styled from "styled-components"
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div`

`;

const Title = styled.h1`

`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;

`;

const Filter = styled.div`
    margin: 20px;

`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600px;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;

`;

const Option = styled.option`

`;

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Surfboards</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                Filter Products:
                </FilterText>
                <Select>
                    <Option disabled selected>
                    Products
                    </Option>
                    <Option>Surfboards</Option>
                    <Option>Shirts</Option>
                    <Option>Swimsuit</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                    Color
                    </Option>
                    <Option>Green</Option>
                    <Option>Black</Option>
                    <Option>Yellow</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>
                Sort Products:
                </FilterText>
                <Select>
                    <Option selected>
                    Newest
                    </Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
