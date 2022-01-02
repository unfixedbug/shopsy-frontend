import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { Products } from "../components/Products";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

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
  ${mobile({
    width: "0px 20px",
    display: "flex",
    flexDirection: "column",
  })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  ${mobile({
    marginRight: "0px",
  })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({
    margin: "10px 0px",
  })}
`;
const Option = styled.option``;

export const ProductList = () => {
  const location = useLocation(); //current path! XOXO
  // category
  const cat = location.pathname.split("/")[2];
  // /filters
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  // funtion onchange
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      // to pass color and size (both) if not passsed only size ? color will be updated
      ...filter,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title> {cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText> Filter products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled selected>
              Color
            </Option>
            <Option> white</Option>
            <Option> black</Option>
            <Option> red</Option>
            <Option> yellow</Option>
            <Option> blue</Option>
            <Option> green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled selected>
              Size
            </Option>
            <Option> S</Option>
            <Option> M</Option>
            <Option> XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};
