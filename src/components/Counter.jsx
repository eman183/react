import React, { useEffect, useRef, useState } from 'react'

const Counter=()=>{
  const [count,setCount]=useState(0);
  let myInterval=useRef(null);
   useEffect(()=>{
  myInterval.current=setInterval(() => {
  setCount((count)=>count+1);
  console.log("counted")
}, 1000);
  return ()=>{
  clearInterval(myInterval);
  }}
,[]);
    //     setInterval(() => {
    //         this.setState({count:this.state.count+1});
    //         console.log(this.state.count+1)
    //     }, 1000);
    // }


return <div>{count}</div>

};

    
export default Counter;
