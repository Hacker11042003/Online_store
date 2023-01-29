import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const App = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  if(products===null){
    return <h3>Loading...</h3>
  }

  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {products?.map((el) => {
       return(
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="145"
            image={el.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {el.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {el.description}
            </Typography>
            <Typography>
              {el.price}$
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to card</Button>
          </CardActions>
        </Card>
       )
      })}
    </div>
  );
};

export default App;
