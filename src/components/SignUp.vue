<template>
    <div class="login-dark">
         <img class="logo" src="../assets/Netflix_Logo_PMS.png"/>
         <form method="post" >
             <h2>Sign Up Now</h2>
             <div class="illustration"><i class="icon ion-ios-locked-outline"></i></div>
             <div class="form-group"><input class="form-control" type="text" v-model="username" style = "font-size: 15px;" placeholder="Username"></div>
             <div class="form-group"><input class="form-control" type="text" v-model="email" style = "font-size: 15px;" placeholder="Email"></div>
             <div class="form-group"><input class="form-control" type="password" v-model="password" style = "font-size: 15px;" placeholder="Password"></div>
             <div class="form-group"><input class="form-control" type="password" v-model="cfpassword" style = "font-size: 15px;" placeholder="Confirm Password"></div>
             <div class="form-group">
                             <input type="checkbox" class="checkbox">
                             <span class="check-label" style = "font-size: 14px;"> I agree to the <a href="">Terms</a> and <a href="">Privacy Policy.</a></span>
                         </div>
             <div class="form-group"><button  v-on:click="signUp" class="btn btn-danger btn-block  mb-6" type="button">Create Account</button></div>
             </form>
     </div>
 </template>
 <script>
 import axios from 'axios'
 export default {
     name : 'SignUp',
     data()
     {
         return{
             username: '',
             email: '',
             password: '',
             cfpassword:'',
         }
     },
     methods:{
         async signUp()
         {
             let result = await axios.post("http://localhost:3001/users",{
                 username:this.username,
                 email:this.email,
                 password:this.password,
                 cfpassword:this.cfpassword
 
             });
             console.warn(result);
             if(result.status==201){
                 localStorage.setItem("userinfo",JSON.stringify(result.data))
                 this.$router.push({name:'Home'})
                 alert("Account created!");
             }
         }
     },
     mounted()
     {
         let user = localStorage.getItem('userinfo');
         if(user)
         {
             this.$router.push({name:'Home'})
         }
     }
 }
 </script>
 <style>
 
 .login-dark {
   height:950px;
   background: black url(../assets/bg.png);
   background-size:cover;
   position:relative;
 }
 
 .login-dark form {
   max-width:320px;
   width:90%;
   background-color:rgba(000, 000, 000, 0.75);
   padding:40px;
   border-radius:4px;
   transform:translate(-50%, -50%);
   position:absolute;
   top:50%;
   left:50%;
   color:#fff;
   box-shadow:4px 4px 5px rgba(0,0,0,0.2);
 }
 
 .login-dark .illustration {
   text-align:center;
   padding:15px 0 20px;
   font-size:100px;
   color:#f9f9f9;
 }
 
 .login-dark form .form-control {
   background:none;
   border:none;
   border-bottom:1px solid rgb(231, 227, 227);
   border-radius:0;
   box-shadow:none;
   outline:none;
   color:inherit;
 }
 
 .login-dark form .btn-primary {
   background:rgb(216, 77, 77);
   border:none;
   border-radius:4px;
   padding:11px;
   box-shadow:none;
   margin-top:26px;
   text-shadow:none;
   outline:none;
 }
 
 .login-dark form .btn-primary:hover, .login-dark form .btn-primary:active {
   background: rgb(197, 122, 122);
   outline:none;
 }
 
 .login-dark form .forget {
   display:block;
   text-align:center;
   font-size:12px;
   color:#fff;
   opacity:0.9;
   text-decoration:none;
 }
 
 .login-dark form .forgot:hover, .login-dark form .forgot:active {
   text-decoration:none;
 }
 
 .login-dark form .btn-primary:active {
   transform:translateY(1px);
 }
 .logo{
     width: 300px;
 }
 .h2,h2{
     font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
     text-align: center;
 }
 </style>
 