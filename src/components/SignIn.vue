<template>  
    <div class="login-dark">
        <img class="logo" src="../assets/Netflix_Logo_PMS.png"/>
        <form method="post" >
            <h2>Sign In</h2>
            <div class="illustration"><i class="icon ion-ios-locked-outline"></i></div>
            <div class="form-group"><input class="form-control" type="text" v-model="username" style = "font-size: 15px;" placeholder="Username"></div>
            <div class="form-group"><input class="form-control" type="password" v-model="password" style = "font-size: 15px;" placeholder="Password"></div>
            <div class="form-group"><button  v-on:click="login" class="btn btn-danger btn-block  mb-6" type="button">Sign In</button></div>
            <p class="forget">Don't have an account?  <router-link to ="/signUp" class="text-white-50 fw-bold">Sign Up</router-link></p></form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'SignIn',
  data()
    {
        return{
            username: '',
            password: ''
        }
    },
    methods:{
      async login()
      {
          let result = await axios.get(
            `http://localhost:3001/users?username=${this.username}&password=${this.password}`
          );
            
          if(result.status==200 && result.data.length>0)
            {
              localStorage.setItem("userinfo",JSON.stringify(result.data[0]))
              this.$router.push({name:'Home'});
              alert("Sign In Success");
            }else{
                alert("Invalid Username or Password!")
            }
            console.warn(result);
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
  height:100vh;
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
  box-shadow:3px 3px 4px rgba(0,0,0,0.2);
}

.login-dark .illustration {
  text-align:center;
  padding:15px 0 20px;
  font-size:50px;
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
  font-size:14px;
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
    width: 200px;
}
.h2,h2{
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

</style>
