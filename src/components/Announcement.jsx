import styled from "styled-components"


const Container = styled.div`
  height: 35px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  width: 100% vw;
  overflow: auto;
`;

const Announcement = () => {
  return (
    <Container>
        Free Shipping For Orders Over $50!
    </Container>
  )
}

export default Announcement

