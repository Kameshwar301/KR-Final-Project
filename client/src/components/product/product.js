import React, { useEffect, useState } from "react";
import Menu from "../menu";
import axios from "axios";

export function Product(){
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4001/getallprd")
    .then(res=>res.json())
    .then(details=>setData(details))
  },[])
    return(<>
    <Menu/>
    <section id="homeProductPage" className="bg-success">
        <div className="home-product-page">
        <div class="row row-cols-1 row-cols-md-3 g-4 m-1">
{
    data.map((value,index)=>(
      <>
      <div className="col">
      <div className="card">
        <img src={value.prd_image} className="product-card" alt="..."/>
        <div className="card-body">
          <h3 className="card-title">Product name : {value.prd_name}</h3>
          <h3 className="card-title">Product brand : {value.prd_brand}</h3>
          <p className="card-text">Prduct Qty : {value.prd_qty}</p>
          <p className="card-text">Prduct Price :₹ {value.prd_price}</p>
          </div>
      </div>
      </div>
      </>
    ))
  }
       </div>
        </div>
    </section>
    <section id="contact" className="contact">
    <div id="footer contact-page">
        <div class="card contact-details mt-5 bg-dark text-light">
  <div class="cards-body">
    <h5 class="card-title">KR Country Chicken Farm</h5>
    <p class="card-text">Modakurichi,</p>
    <p class="card-text">Erode - 638104</p>
    <p class="card-text">Phone number - 9543158302</p>
    
  </div>
</div>
        </div>
    </section>
    </>)
}