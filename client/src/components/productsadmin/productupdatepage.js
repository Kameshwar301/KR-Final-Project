import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Productupdatepage(){
    var {id} = useParams()
    const [prdname,setPrdname] = useState('')
    const [prdbrand,setPrdbrand] = useState('')
    const [prdtype,setPrdtype] = useState('')
    const [prdimage,setPrdimage] = useState('')
    const [prdqty,setPrdqty] = useState('')
    const [prdprice,setPrdprice] = useState('')
    const [prddesc,setPrddesc] = useState('')
    const [prdstock,setPrdstock] = useState('')

    useEffect(()=>{
        fetch('http://localhost:4001/getoneproduct/'+id)
        .then(res=>res.json())
        .then((data)=>{
            setPrdname(data[0].prd_name)
            setPrdbrand(data[0].prd_brand)
            setPrdtype(data[0].prd_type)
            setPrdimage(data[0].prd_image)
            setPrdqty(data[0].prd_qty)
            setPrdprice(data[0].prd_price)
            setPrddesc(data[0].prd_desc)
            setPrdstock(data[0].prd_stock)
        })
    },[])

    function handleupdateproduct(event){
            event.preventDefault()
    
            var productname = document.getElementById("productname").value
            var productbrand = document.getElementById("productbrand").value
            var producttype = document.getElementById("producttype").value
            var productimage = document.getElementById("productimage").value
            var productqty = document.getElementById("productqty").value
            var productprice = document.getElementById("productprice").value
            var productdesc = document.getElementById("productdesc").value
            var productstock = document.getElementById("productstock").value
    
            var productupdatedetatils = {
                productname:productname,
                productbrand:productbrand,
                producttype:producttype,
                productimage:productimage,
                productqty:productqty,
                productprice:productprice,
                productdesc:productdesc,
                productstock:productstock
            }
            if(productname==='' || productbrand==='' || productimage==='' || productqty==='' || productprice===''){
                alert("Field can not empty!")
            }
            else{
                axios.put('http://localhost:4001/updateadproduct/'+id, productupdatedetatils)
                .then((res)=>{
                    if(res.data.status==="error"){
                        alert("Product is not updated!")
                    }
                    else if(res.data.status==="success"){
                        alert("Product are updated!")
                        window.location.href="/viewproduct"
                    }
                })
            }
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
          <a class="nav-link active" aria-current="page" href="/adminpages/:id">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  </section>
        <section>
        <div>
            <form onSubmit={handleupdateproduct}>
                <table>
                    <tbody>
                        <tr><td><label>Product Name *</label></td><td><input type="text" id="productname" value={prdname}/></td></tr>
                        <tr><td><label>Product Brand *</label></td><td><input type="text" id="productbrand" value={prdbrand}/></td></tr>
                        <tr><td><label>Product Type</label></td><td><input type="text" id="producttype" value={prdtype}/></td></tr>
                        <tr><td><label>Product Image *</label></td><td><input type="text" id="productimage" value={prdimage}/></td></tr>
                        <tr><td><label>Product Qty *</label></td><td><input type="number" id="productqty" value={prdqty}/></td></tr>
                        <tr><td><label>Product Price *</label></td><td><input type="number" id="productprice" value={prdprice}/></td></tr>
                        <tr><td><label>Product desc</label></td><td><input type="text" id="productdesc" value={prddesc}/></td></tr>
                        <tr><td><label>Product Stock</label></td><td><input type="text" id="productstock" value={prdstock}/></td></tr>
                    </tbody>
                    <tfoot>
                        <tr><td colSpan="2"><button type="submit" className="btn btn-primary">Update Product</button></td></tr>
                    </tfoot>
                </table>
            </form>
        </div>
    </section>
    </>)
}