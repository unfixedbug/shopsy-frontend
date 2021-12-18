import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FlterContainer = styled.div``;
const Flter = styled.div``;
const FlterTitle = styled.div``;
const FlterColor = styled.div``;
const FlterSize = styled.div``;
const FlterSizeOption = styled.div``;
export const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="" />
        </ImageContainer>
        <InfoContainer>
          <Title>Cotton jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            voluptas repellat magni tenetur. Eaque aut autem, suscipit ipsam
            voluptatum, doloribus repellendus deserunt eos fugiat officia
            consequatur, nobis ab dignissimos itaque. Harum aliquam est delectus
            cupiditate facilis repellendus, culpa deleniti voluptates.
          </Desc>
          <Price>250 -/</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkBlue" />
              <FilterColor color="Gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>Xl</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
