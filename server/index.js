const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const mysql = require("mysql")
const crypto = require("crypto")
const {request} = require("http")
const { error, log } = require("console")

var storeex = express()
storeex.use(cors())
storeex.use(bodyparser.json())

storeex.use(express.json())
storeex.use(bodyparser.urlencoded({extended:true}))
storeex.use(express.static('public'))

let localdb =mysql.createConnection({
    host:"localhost",
    port:3309,
    user:"root",
    password:"Kameshwar@301",
    database:"node_project"
})

localdb.connect((error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("db is connected")
    }
})

storeex.post('/register',(request,response)=>{
    let uuid = crypto.randomUUID().toString()
    let roll = 'user'
    let isActive = 1
    let date = new Date()
    let todaydate = date.toISOString().slice(0,10)
    let {firstname,lastname,email,password} = request.body
    let registerquery = 'insert into user_table(user_id,first_name,last_name,email,password,username,roll,is_active,created_by,created_date,updated_by,updated_date) values(?,?,?,?,?,?,?,?,?,?,?,?)'
    localdb.query(registerquery,[uuid,firstname,lastname,email,password,email,roll,isActive,uuid,todaydate,uuid,todaydate],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    })
})

storeex.post('/login',(request,response)=>{
    let {username,password} = request.body
    let loginquery = 'select * from user_table where username=?'
    localdb.query(loginquery,[username],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else if(result.length>0){
            let dbusername = result[0].username
            let dbpassword = result[0].password
            let id = result[0].user_id
            let roll = result[0].roll
            if(dbusername===username && dbpassword===password){
                response.send({"status":"success","id":id,"roll":roll})
            }
            else{
                response.send({"status":"invalid"})
            }
        }
        else{
            response.send({"status":"empty_set"})
        }
    })
})

storeex.get('/getall',(request,response)=>{
    let selectallquery='select * from user_table'

    localdb.query(selectallquery,(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
            console.log(result)
        }
    })
})

storeex.get('/getone/:id',(request,response)=>{
    let {id} = request.params
    let getonequery = 'select * from user_table where user_id=?'
    localdb.query(getonequery,[id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send(result)
            console.log(result)
        }
    })
})

storeex.put('/updateaduser/:id',(request,response)=>{
    let {id} =request.params
    let {firstname,lastname,email,username,roll,isActive,phone,uBy} = request.body
    let updatequery = 'update user_table set first_name=?,last_name=?,email=?,username=?,roll=?,is_active=?,phone_number=?, updated_by=? where user_id=?'
    localdb.query(updatequery,[firstname,lastname,email,username,roll,isActive,phone,uBy,id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    })
})

storeex.post('/deletebyadmin',(request,response)=>{
    let user_id = request.body.user_id
    let deletequery = 'delete from user_table where user_id=?'
    localdb.query(deletequery,[user_id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    })
})


storeex.post('/insertproduct',(request,response)=>{
    let uuid = crypto.randomUUID().toString()
   
    let date = new Date()
    let todaydate = date.toISOString().slice(0,10)
    let {productname,productbrand,producttype,productimage,productqty,productprice,productstock} = request.body
    let registerquery = 'insert into product_table(product_id,prd_name,prd_brand,prd_type,prd_image,prd_qty,prd_price,prd_stock,created_by,created_date,updated_by,updated_date) values(?,?,?,?,?,?,?,?,?,?,?,?)'
    localdb.query(registerquery,[uuid,productname,productbrand,producttype,productimage,productqty,productprice,productstock,uuid,todaydate,uuid,todaydate],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    })
})

storeex.get('/getallprd',(request,response)=>{
    let selectallquery='select * from product_table'

    localdb.query(selectallquery,(error,result)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
            console.log(result)
        }
    })
})

storeex.get('/getoneproduct/:id',(request,response)=>{
    let {id} = request.params
    let getonequery = 'select * from product_table where product_id=?'
    localdb.query(getonequery,[id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send(result)
            console.log(result)
        }
    })
})

storeex.put('/updateadproduct/:id',(request,response)=>{
    let {id} =request.params
    let {productname,productbrand,producttype,productimage,productqty,productprice,productdesc,productstock} = request.body
    let updatequery = 'update product_table set prd_name=?,prd_brand=?,prd_type=?,prd_image=?,prd_qty=?,prd_price=?,prd_desc=?,prd_stock=? where product_id=?'
    localdb.query(updatequery,[productname,productbrand,producttype,productimage,productqty,productprice,productdesc,productstock,id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    })
})

storeex.post('/deletebyadminprd',(request,response)=>{
    let product_id = request.body.product_id
    let deletequery = 'delete from product_table where product_id=?'
    localdb.query(deletequery,[product_id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
            console.log(result)
        }
    })
})

storeex.listen(4001,()=>{
    console.log("your port is running in 4001")
})