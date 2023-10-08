import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Productviewpage(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4001/getallprd')
        .then(res=>res.json())
        .then(details=>setData(details))
    },[])
    function handledelete(product_id){
      alert(product_id)
      var deletedata = {
        product_id:product_id
      }
      alert(deletedata.product_id)
      axios.post('http://localhost:4001/deletebyadminprd',deletedata)
      .then((res)=>{
        if(res.data.status==="error"){
          alert("data aare not deleted")
        }
        else if(res.data.status==="success"){
          alert("data is deleted")
        }
      })
    }
    return(<>
    <section>
    <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">KR Farm</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/adminpages/:id">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  </section>
    <section>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 w-100">
           {
            data.map((value,index)=>(
              <>
              <div className="col">
              <div className="card">
                <img src={value.prd_image} className="product-card" alt="..."/>
                <div className="card-body">
                  <h3 className="card-title">Prduct name : {value.prd_name}</h3>
                  <h3 className="card-title">Prduct id : {value.product_id}</h3>
                  <p className="card-text">Prduct Qty : {value.prd_qty}</p>
                  <p className="card-text">Prduct Price : {value.prd_price}</p>
                  <p className="card-text">Prduct Created by : {value.created_by}</p>
                  <p className="card-text">Prduct Created Date : {value.created_date}</p>
                  <p className="card-text">Prduct Updated by : {value.updated_by}</p>
                  <p className="card-text">Prduct Updated Date : {value.updated_date}</p>
                  <Link to={`/updateproduct/${value.product_id}`} className="btn btn-primary">Update</Link><button className="btn btn-danger" disabled onClick={()=>{handledelete(value.product_id)}}>Delete</button>
                </div>
              </div>
              </div>
              </>
            ))
           }
        </div>
    </section>
    </>);
}