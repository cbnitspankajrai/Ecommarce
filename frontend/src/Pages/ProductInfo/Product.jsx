import React from "react";
import { useParams } from "react-router-dom";
import { dealData } from "../HomePage/data";
import { Body, Colors, DetailsContainer, Heading, ImageContainer, Offers, Price, Ratting } from "./Style";
import GradeIcon from '@mui/icons-material/Grade';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Box, Button } from "@mui/material";

function Product() {
  const { id } = useParams();
  const ProductData=dealData.find((data)=>data.id===id) 
  const offers=[
    {
      type:"Special Price",
      description:"Get extra 20% off (price inclusive of cashback/coupon)"
    },
    {
      type:"Bank Offer",
      description:"5% Cashback on Flipkart Axis Bank Card"
    },
    {
      type:"Partner Offer",
      description:"Sign up for Flipkart Pay Later and get Flipkart Gift Card worth upto ₹500*"
    }
  ]


  return <>
  <Body>
      <ImageContainer>
        <img src={ProductData.url} alt="Product Image"/>
      </ImageContainer>
      <DetailsContainer>
        <h3 style={{fontSize:21,marginBottom:"10px"}}>{ProductData.title.shortTitle}</h3>   
        <Ratting>
      <GradeIcon sx={{width:"16px"}}/>
      <span style={{fontWeight:"bold",marginTop:"3px"}}>4.0</span>
        </Ratting>             
        <Price>₹ {ProductData.price?.mrp}</Price>

            <Heading>Available offers</Heading>
            {
              offers.map((data)=>{
                return(
                  <> 
                  <Offers>
                  <LocalOfferIcon sx={{color:"green"}}/> &nbsp; <p style={{fontWeight:"bold"}}>{data.type}&nbsp; </p>
                  <p>{data.description}</p>
                  </Offers>
                  </>
                )
              })

            }

          <Heading>Available Colour</Heading>
         <Box sx={{display:"flex",width:"150px",justifyContent:"space-evenly"}}>
          <Colors color="black"/>
          <Colors color="red"/>
          <Colors color="yellow"/>
          <Colors color="pink"/>
         </Box>

         <Heading>Available Size</Heading>
          <Box>
            <Button variant="outlined">S</Button>
            <Button variant="outlined">M</Button>
            <Button variant="outlined">L</Button>
            <Button variant="outlined">XL</Button>
            <Button variant="outlined">XXL</Button>
          </Box>

      </DetailsContainer>

  </Body>
  
  
  </>;
}

export default Product;
