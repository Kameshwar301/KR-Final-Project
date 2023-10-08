import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Userpage(){

    var {id} = useParams()
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    useEffect(()=>{
      fetch("http://localhost:4001/getone/"+id)
      .then(data=>data.json())
      .then((res)=>{
        setFname(res[0].first_name)
        setFname(res[0].last_name)
      })
    })

    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4001/getallprd')
        .then(res=>res.json())
        .then(details=>setData(details))
    },[])

    return(
        <>
        
        <section>
    <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">KR Farm</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
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
            <h1>Welcome <span className="text-primary"> {fname} {lname}</span>!</h1>
            <div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {
                        data.map((value,index)=>(
                            <>
                            <div className="col">
                            <div class="card card-data">
                                <img src={value.prd_image} class="card-img" alt="..."/>
                                    <div class="card-body">
                                        <h3 className="card-title">{value.prd_name}</h3>
                                        <h4 className="card-brand">{value.prd_brand}</h4>
                                        <h4 className="card-qty">Quantity:  {value.prd_qty}</h4>
                                        <h4 className="card-qty">Price:  {value.prd_price}</h4>
                                        <button className="btn btn-primary">Add to cart</button>
                                    </div>
                                </div>
                                </div>
                            </>
                        ))
                    }
                
                </div>
            </div>
        </section>
        </>
    );
}