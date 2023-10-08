import React from "react";
import Menu from "../menu";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  function handlersignup(event){
    event.preventDefault()

    var firstname = document.getElementById("firstname").value
    var lastname = document.getElementById("lastname").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var rePassword = document.getElementById("rePassword").value
    if(password !== rePassword){
      alert("check password")
    }
    else if(password === rePassword){
      alert("password matched")
      var userdetails = {
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password
      }
      if(firstname==="" || firstname === null){
        alert("Enter the first name!")
      }
      else if(lastname==="" || lastname === null){
        alert("Enter the last name!")
      }
      else if(email==="" || email === null){
        alert("Enter the email")
      }
      else if(password==="" || password === null){
        alert("Enter the password!")
      }
      else(
        axios.post('http://localhost:4001/register',userdetails)
        .then((res)=>{
          if(res.data.status==="error"){
            alert("User account not created!")
          }
          else if(res.data.status==="success"){
            alert("User account created successfully")
          }
        })
      )
    }
    }  
  return (
    <>
      <Menu/>
      <section>
        <div id="signUp-Page" className="signUp-page">
          <div className="card signin">
            <form onSubmit={handlersignup} className="signup-form">
              <table>
                <thead>
                  <tr>
                    <th colSpan="2" className="text-center">
                      SignUp Form
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>First Name</td>
                    <td>
                      <input type="text" id="firstname" placeholder="Enter your First Name"/>
                    </td>
                  </tr>
                  <tr>
                    <td>Last Name</td>
                    <td>
                      <input type="text" id="lastname" placeholder="Enter your Last Name"/>
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>
                      <input type="email" id="email" placeholder="Enter your email"/>
                    </td>
                  </tr>
                  <tr>
                    <td>Password</td>
                    <td>
                      <input type="password" id="password" placeholder="Enter your Password"/>
                    </td>
                  </tr>
                  <tr>
                    <td>Re-Enter password</td>
                    <td>
                      <input type="password" id="rePassword" placeholder="re-enter your password" />
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2" className="text-center">
                      <button type="submit" className="btn bg-primary text-light">Create account</button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                        Already have an account <Link to='/login'>login</Link>
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
