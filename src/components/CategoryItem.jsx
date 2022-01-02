import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

// styled components ahead
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  /* cover willl make them same size like  a poster */
  object-fit: cover;
  ${mobile({
    height: "20vh",
  })}
`;
const Info = styled.div`
  /* if children is absolute, parent must be relative */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  font-weight: 600;
  color: gray;
`;

export const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  );
};
