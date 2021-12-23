import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import { Product } from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  /* only 4 */
  flex-wrap: wrap;
  justify-content: center;
`;

// take/catch the function variables {cat,fiters[size,color], sort}
export const Products = ({ cat, filter, sort }) => {
  // fetching data
  const [products, setProducts] = useState([]);
  // whwnever we change filter, we have to change so
  const [filteredProducts, setFilteredProducts] = useState([]);

  // fetch data
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    // calling the funtion
    getProducts();
  }, [cat]);
  // as cat changes, change the funtion

  useEffect(() => {
    // filtering actuioal prouducts based on category
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filter]);

  // sorting products
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, []);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};
