import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Viewusers(){
    
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4001/getall')
        .then(res=>res.json())
        .then(details=>setData(details))
    },[])

    function handledelete(user_id){
        alert(user_id)
        var deletedata ={
            user_id:user_id
        }
        alert(deletedata.user_id)
        axios.post('http://localhost:4001/deletebyadmin',deletedata)
        .then((res)=>{

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
                <table className="table-bordered">
                    <thead>
                    <tr>
                        <th>user_id</th>
                        <th>first_name</th>
                        <th>last_name</th>
                        <th>email</th>
                        <th>username</th>
                        <th>roll</th>
                        <th>is_active</th>
                        <th>ph_num</th>
                        <th>crtd_by</th>
                        <th>crtd_date</th>
                        <th>updtd_by</th>
                        <th>updtd_date</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value,index)=>(
                                <>
                                <tr>
                                    <td>{value.user_id}</td>
                                    <td>{value.first_name}</td>
                                    <td>{value.last_name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.username}</td>
                                    <td>{value.roll}</td>
                                    <td>{value.is_active}</td>
                                    <td>{value.phone_number}</td>
                                    <td>{value.created_by}</td>
                                    <td>{value.created_date}</td>
                                    <td>{value.updated_by}</td>
                                    <td>{value.updated_date}</td>
                                    <td><Link to={`/update/${value.user_id}`} className="btn btn-primary">Update</Link><br/>
                                    <button className="btn btn-danger" onClick={()=>{handledelete(value.user_id)}}>Delete</button></td>
                                </tr>
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    </>)
}