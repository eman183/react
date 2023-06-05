import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { FaAccessibleIcon} from "react-icons/fa";
import Counter from './Counter';
import { CartContext } from '../Contexts/CartContext';
const MyCard = ({product})=>
{
    const{cartCount,setCartCount}=useContext(CartContext)
    const {image,title,description,price}=product;
 
    const[quentity,setQuentity]=useState(0);
    // const[count,setCount]=useState(0);

    const add= ()=>{
      setQuentity(quentity+1);
      setCartCount(cartCount+1)
    };
    const remove= ()=>{
      setQuentity(quentity-1);
      setCartCount(cartCount-1)
    };
    // useEffect(()=>{
    //  console.log(quentity);
    // },[quentity,count]);
    // useEffect(()=>{
    //   console.log("mounted");
    //   // return ()=>{
    //   //   console.log("unmount")
    //   // }
    //  },[]);
 
    return (
        <div className="col-12 col-md-6 col-lg-3">
        <Card style={{ width: '18rem' }}>
          <div>cart:{cartCount}</div>
        <Card.Img style={{height:"380px",objectFit:"contain"}} variant="top" src={image} />
        <Card.Body>
          <Card.Title style={{height:"72px",overflow:"hidden"}}>{title}</Card.Title>
          <Card.Text style={{height:"72px",overflow:"hidden"}}>
           {description}
          </Card.Text>
          <Button variant="primary">{price}< FaAccessibleIcon /> </Button>
          <div className="d-flex my-2 justify-content-between">
             <Button style={quentity>0 ? {}:{width:"100%"}} onClick={add} variant="success">add</Button>
             
             {
                quentity>0 ? <><p>{quentity}</p> 
                <Button onClick={remove} variant="danger">remove</Button>
                <Counter />

                </> : ""
             }
          </div>
        </Card.Body>
      </Card>
      </div>
    )
  }

export default MyCard;