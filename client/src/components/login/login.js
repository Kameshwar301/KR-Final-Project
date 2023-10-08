import React from "react";
import Menu from '../menu';
import axios from "axios";

export default function Login() {
  function handlelogin(event){
    event.preventDefault()

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    var logindetails = {
      username:username,
      password:password
    }
    if(username===""){
      alert("Enter your Email!")
    }
    else if(password===""){
      alert("Enter the password!")
    }
    else{
      axios.post("http://localhost:4001/login",logindetails)
      .then((res)=>{
        if(res.data.status==="success"){
          var roll = res.data.roll
          var id = res.data.id 
          if(roll === "admin"){
            alert("Admin Page!")
            window.location.href=`/adminpages/${id}`
          }
          else if(roll === "user"){
            alert("User Page!")
            window.location.href=`/userpage/${id}`
          }
        }
        else if(res.data.status==="invalid"){
          alert("Password is invalid!")
        }
        else if(res.data.status==="empty_set"){
          alert("username & password is invalid!")
        }
        else if(res.data.status==="error"){
          alert("Contact admin!")
        }
      })
    }
  }
  return (
    <>
      <Menu/>
      <section>
        <div className="login-Page">
          <div className="card login">
            <form onSubmit={handlelogin} className="text-white">
              <table>
                <thead>
                  <tr>
                    <th colSpan="2" className="text-center text-black">
                      Login Page
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-black">Email</td>
                    <td>
                      <input type="text" id="username" />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-black">Password</td>
                    <td>
                      <input type="password" id="password"/>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2" className="text-center">
                      <input type="submit" className="btn bg-primary text-light" value="Login" />
                    </td>
                  </tr>
                </tfoot>
              </table>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
