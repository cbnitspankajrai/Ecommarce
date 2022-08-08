import { Box } from "@mui/system";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button, Divider, IconButton } from "@mui/material";
import React from "react";
import {
  CartContainer,
  ChildContainer,
  CompanyOfProduct,
  CostLine,
  Delivered,
  FullPage,
  HeaderButtons,
  HeaderOfCart,
  HeadHeading,
  Heading,
  HeadParagraph,
  HeadSection,
  ListItems,
  OrderList,
  PricingContainer,
  ProductDeatils,
  PromoCode,
  Qantity,
  TitleOfProduct,
} from "./Style";

function Cart() {
  return (
    <FullPage>
      <Box style={{ display: "flex" }}>
        <CartHeader />
      </Box>

      <Box
        sx={{ display: "flex", width: "98vw", justifyContent: "space-evenly" }}
      >
        <ItemsComponent />
        <PricingSection />
      </Box>
    </FullPage>
  );
}

//cart header component
const CartHeader = () => {
  return (
    <>
      <HeadSection>
        <HeadHeading>My Cart</HeadHeading>
        <HeadParagraph>
          View and edit all your items of cart
          <br />
          And also increase the quantity of product.
        </HeadParagraph>
      </HeadSection>
    </>
  );
};

//items container
const ItemsComponent = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          width:"70%"
        }}
      >
        <CartContainer>
          <HeaderOfCart>
            <HeaderButtons
              variant="outlined"
              right={20}
              startIcon={<FavoriteBorderIcon />}
            >
              Move All To Wish List
            </HeaderButtons>
            <HeaderButtons
              variant="outlined"
              right={270}
              startIcon={<DeleteOutlineIcon />}
              sx={{color:"red",borderColor:"red"}}
            >
              Remove All
            </HeaderButtons>
          </HeaderOfCart>
          <Divider variant="middle" />

          {/* Orders List    */}
          <OrderList>
            <ListItems sx={{position:"relative"}}>
            
             {/* Remove button */}
             <IconButton sx={{position:"absolute",right:10,top:0}}><CloseIcon sx={{color:"red"}}/> </IconButton>

              <img
                src="https://rukminim1.flixcart.com/image/332/398/k5wse4w0/kids-ethnic-set/a/q/f/2-3-years-boys-festive-casual-full-sleev-pure-cotton-raja-jacket-original-imafzhfmwjk5tuek.jpeg?q=50"
                alt="Product"
              />

              {/* First Product */}
              <ProductDeatils >
                <TitleOfProduct>
                  BabyBoy Cream Color <br /> Kurta long name
                </TitleOfProduct>
                <CompanyOfProduct>Company Name</CompanyOfProduct>
                <p>
                   
                  Size : XL &nbsp; | &nbsp;
                  <span style={{ fontWeight: "bold" }}>Rs. 1250</span>
                </p>
              </ProductDeatils>

              <Qantity >
                <IconButton><AddCircleOutlineIcon/> </IconButton>
                <input type='text' value={1} style={{fontWeight:"bold",fontSize:16}}/>
                <IconButton> <RemoveCircleOutlineIcon/> </IconButton>


              </Qantity>
              <Delivered>
              <Button  variant="outlined" startIcon={<FavoriteBorderIcon />}>Move To Wish List </Button>
              </Delivered>
            </ListItems>

           


          </OrderList>
          <Divider variant="middle" />
        </CartContainer>
      </Box>
    </>
  );
};

const PricingSection = () => {
  return (
    <>
      <PricingContainer>
        <Heading>Order Summary</Heading>
        <Divider variant="middle" />
        <p
          style={{
            fontStyle: "italic",
            marginBottom: "-10px",
            marginLeft: "12px",
            marginTop: "20px",
          }}
        >
          Have a promo code ?
        </p>

        <Box
          sx={{
            display: "flex",
            padding: "10px",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <PromoCode type="text" placeholder="Enter Promo Code Here" />
          <Button variant="contained" sx={{ height: "30px" }}>
            Check
          </Button>
          <Divider variant="middle" />
        </Box>

        <ChildContainer>
          <CostLine>
            <p>Shipping Cost</p> <p className="price">0.00</p>
          </CostLine>
          <CostLine>
             
            <p>Discount</p> <p style={{ color: "green" }}>- 20.00</p> 
          </CostLine>
          <CostLine>
             
            <p>Tax</p> <p className="price">0.00</p>
          </CostLine>
          <CostLine>
             
            <p>Price</p> <p className="price">0.00</p>
          </CostLine>
          <Divider variant="fullWidth" />
          <CostLine>
             
            <p>Sub Total</p> <p className="price">0.00</p>
          </CostLine>
        </ChildContainer>
        <Box
          sx={{ margin: "10px 0", display: "flex", justifyContent: "center" }}
        >
          <Button variant="contained" size="small">
             
            Proceed To Payment 
          </Button>
        </Box>
      </PricingContainer>
    </>
  );
};

export default Cart;
