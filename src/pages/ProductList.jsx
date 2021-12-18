import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { Products } from "../components/Products";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;`;
const Option = styled.option``;

export const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title> Kapde bc</Title>
      <FilterContainer>
        <Filter>
          <FilterText> Filter products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option> White</Option>
            <Option> Black</Option>
            <Option> Red</Option>
            <Option> Yellow</Option>
            <Option> Pink</Option>
            <Option> Puk</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option> S</Option>
            <Option> M</Option>
            <Option> XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </FilterText>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};
