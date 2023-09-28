<template>
	<footer class="footer">
		<div class="container">
			<div class="footer-col">
				<div class="social-links">
					<a href=""><i class="fab fa-facebook-f"></i></a>
					<a href=""><i class="fab fa-instagram"></i></a>
					<a class=""><i class="fab fa-twitter"></i></a>
					<a class=""><i class="fab fa-youtube"></i></a>
				</div>
			</div>
			<div class="row">
				<div class="footer-col">
					<ul>
						<li><a href="">Audio Desription</a></li>
						<li><a href="">Investor Relation</a></li>
						<li><a href="">Legal Notices</a></li>
						<li><a href=""><button class = "btn btn-outline-light mt-2 mb-2" style = "font-size: 14px">Service Code</button></a></li>
						<li><a href="">@ 1997-2023 Netflix, Inc</a></li>
					</ul>
				</div>
				<div class="footer-col">
					<ul>
						<li><a href="">Help Center</a></li>
						<li><a href="">Jobs</a></li>
						<li><a href="">Cookie Preferences</a></li>
					</ul>
				</div>
				<div class="footer-col">
					<ul>
						<li><a href="">Gift Cards</a></li>
						<li><a href="">Terms of Use</a></li>
						<li><a href="">Corporate Information</a></li>
					</ul>
				</div>
				<div class="footer-col">
					<ul>
						<li><a href="">Media Center</a></li>
						<li><a href="">Privacy</a></li>
						<li><a href="">Contact Us</a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default{
	data(){
	return{
	title: 'Footer Design',
	}
  }
}
</script>

<style>
	body{
	line-height: 1.5;
	font-family: 'Poppins', sans-serif;
}
*{
	margin:0;
	padding:0;
	box-sizing: border-box;
}
.container{
	max-width: 1170px;
	margin:auto;
    text-align: left;
	position: relative;
}
.row{
	display: flex;
	flex-wrap: wrap;
    margin: auto;
}
ul{
	list-style: none;
}
.footer{
	background-color: #24262b;
    padding: 20px 0;
}
.footer-col{
   width: 25%;
   padding: 0 15px;
}
.footer-col h4{
	font-size: 18px;
	color: #ffffff;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
}
.footer-col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: #e91e63;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}
.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 15px;
	text-transform: capitalize;
	color: #ffffff;
	text-decoration: none;
	font-weight: 300;
	color: #bbbbbb;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: #ffffff;
	padding-left: 8px;
}
.footer-col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
	color: #24262b;
	background-color: #ffffff;
}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}
</style>