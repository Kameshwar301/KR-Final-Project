import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Adupdate(){
    var {id} = useParams()
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [roll,setRoll] = useState('')
    const [username,setUsername] = useState('')
    const [isActive,setIsactive] = useState('')
    const [phone,setPhone] = useState('')
    const [updatedby,setUpdatedby] = useState('')

    useEffect(()=>{
        fetch('http://localhost:4001/getone/'+id)
        .then(data=>data.json())
        .then((res)=>{
            setFirstname(res[0].first_name)
            setLastname(res[0].last_name)
            setEmail(res[0].email)
            setRoll(res[0].roll)
            setUsername(res[0].username)
            setIsactive(res[0].is_active)
            setPhone(res[0].phone_number)
            setUpdatedby(res[0].updated_by)
        })
    },[])

    function handleupdateuser(event){
        event.preventDefault()

        var firstname = document.getElementById("firstname").value
        var lastname = document.getElementById("lastname").value
        var email = document.getElementById("email").value
        var username = document.getElementById("username").value
        var roll = document.getElementById("roll").value
        var isActive = document.getElementById("isActive").value
        var phone = document.getElementById("phone").value
        var uBy = document.getElementById("updatedby").value

        var updatedetails={
            firstname:firstname,
            lastname:lastname,
            email:email,
            username:username,
            roll:roll,
            isActive:isActive,
            phone:phone,
            uBy:uBy
        }
        if(firstname==='' || lastname==='' || email==='' || username==='' || roll===''){
            alert("Field is not empty!")
        }
        else{
            axios.put('http://localhost:4001/updateaduser/'+id,updatedetails)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("Data is not updated!")
                }
                else if(res.data.status==="success"){
                    alert("Data updated successfully!")
                    window.location.href=`/viewuser`
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
                <div><h1>Update details</h1></div>
                <form onSubmit={handleupdateuser}>
                    <table>
                        <tbody>
                           <tr><td><label>First Name</label></td><td><input type="text" id="firstname" value={firstname} onChange={(updatedata)=>{setFirstname(updatedata.target.value)}}/></td></tr>
                           <tr><td><label>Last Name</label></td><td><input type="text" id="lastname" value={lastname} onChange={(updatedata)=>{setLastname(updatedata.target.value)}}/></td></tr>
                           <tr><td><label>Email</label></td><td><input type="text" id="email" value={email} onChange={(updatedata)=>{setEmail(updatedata.target.value)}}/></td></tr>
                           <tr><td><label>Username</label></td><td><input type="text" id="username" value={username} onChange={(updatedata)=>{setUsername(updatedata.target.value)}}/></td></tr>
                           <tr><td><label>Roll</label></td><td><select id="roll" value={roll} onChange={(updatedata)=>{setRoll(updatedata.target.value)}}>
                            <option>---Select---</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                            </select></td></tr>
                           <tr><td><label>Is Active</label></td><td><input type="number" id="isActive" value={isActive} onChange={(updatedata)=>{setIsactive(updatedata.target.value)}}/></td></tr>
                           <tr><td><label>Phone</label></td><td><input type="number" id="phone" value={phone} onChange={(updatedata)=>{setPhone(updatedata.target.value)}}/></td></tr>
                           <tr><td><label>Updated By</label></td><td><input type="text" id="updatedby" value={updatedby} onChange={(updatedata)=>{setUpdatedby(updatedata.target.value)}}/></td></tr>
                           
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2"><input type="submit" className="btn btn-success" value="Submit"/></td>
                            </tr>
                        </tfoot>
                    </table>
                </form>
            </div>
        </section>
    </>);
}