import axios from "axios";
import React from "react";

export function Productsinsertpage(){
    function handleinsertproduct(event){
        event.preventDefault()

        var productname = document.getElementById("productname").value
        var productbrand = document.getElementById("productbrand").value
        var producttype = document.getElementById("producttype").value
        var productimage = document.getElementById("productimage").value
        var productqty = document.getElementById("productqty").value
        var productprice = document.getElementById("productprice").value
        var productstock = document.getElementById("productstock").value

        var productdetatils = {
            productname:productname,
            productbrand:productbrand,
            producttype:producttype,
            productimage:productimage,
            productqty:productqty,
            productprice:productprice,
            productstock:productstock
        }
        if(productname==='' || productbrand==='' || productimage==='' || productqty==='' || productprice===''){
            alert("Field can not empty!")
        }
        else{
            axios.post('http://localhost:4001/insertproduct', productdetatils)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("Product is not inserted!")
                }
                else if(res.data.status==="success"){
                    alert("Product are inserted!")
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
            <form onSubmit={handleinsertproduct}>
                <table>
                    <tbody>
                        <tr><td><label>Product Name *</label></td><td><input type="text" id="productname"/></td></tr>
                        <tr><td><label>Product Brand *</label></td><td><input type="text" id="productbrand"/></td></tr>
                        <tr><td><label>Product Type</label></td><td><input type="text" id="producttype"/></td></tr>
                        <tr><td><label>Product Image *</label></td><td><input type="text" id="productimage"/></td></tr>
                        <tr><td><label>Product Qty *</label></td><td><input type="number" id="productqty"/></td></tr>
                        <tr><td><label>Product Price *</label></td><td><input type="number" id="productprice"/></td></tr>
                        <tr><td><label>Product Stock</label></td><td><input type="text" id="productstock"/></td></tr>
                    </tbody>
                    <tfoot>
                        <tr><td colSpan="2"><button type="submit" className="btn btn-primary">Insert Product</button></td></tr>
                    </tfoot>
                </table>
            </form>
        </div>
    </section>
    </>);
}