<template>
<div>
<div id="login_page">
  
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a @click="create1" class="btn btn-default btn-lg col-md-4" style="color:white" >
				<!-- <span class="glyphicon glyphicon-search"></span> -->
				发起活动
				</a>
         
        <a @click="tomain" class="btn btn-default btn-lg col-md-4" style="color:white" >
				<!-- <span class="glyphicon glyphicon-search"></span> -->
				返回主页
				</a>
        
       
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
              <a class="nav-link"  @click="user">UserCenter
                <span class="sr-only">(current)</span>
              </a>
              <router-link :to="{ path: '/user' }"></router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Help</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"  @click="login">Register & Login
                 <span class="sr-only">(current)</span>  
              </a>
              <router-link :to="{ path: '/login' }"></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

	<div class="jumbotron">
        <div class="col-lg-12 col-md-12 col-sm-12">
		    <h1>Welcome！</h1>
		    <p class="text-success">log in to find more like-minded friends!</p>
        </div>
	</div>
    
    <div class="row">
        <div class ="col-lg-4 col-md-4">
            <div style="padding: 100px 100px 10px;">
	            <form class="bs-example bs-example-form" role="form">
		            <div class="input-group">
			            <input type="text" class="form-control" v-model="name" placeholder="用户名/邮箱/手机号">
		            </div>
                    <br>
		            <div class="input-group">
			            <input type="password" class="form-control" v-model="password" placeholder="密码">
		            </div>
	            </form>
            </div>
            <div class="form-group">
		        <div class="col-sm-offset-2 col-sm-10">
			        <div class="checkbox">
				        <label>
					        <input type="checkbox"> 下次自动登录
				        </label>
			        </div>
		        </div>
	        </div>
            <hr>
            <div class="row">
				<button @click="judge" class="btn btn-info btn-block" >
				<!-- <span class="glyphicon glyphicon-search"></span> -->
				登录
				</button> 
                <router-link :to="{ path: '/HelloWorld' }"></router-link>
            </div>
        </div>
    </div>
    <div class="row">...</div>
   <footer class="py-5 bg-dark" style="">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Invitor 2018</p>
      </div>
      <!-- /.container -->
    </footer>
</div>
</div>
</div>
</template>

<script>

export default{
    name:'login',
    data(){
        return{
            name:'',
            password:'' 
        }
    },
    methods:{
        create1(){
          this.$router.push({ path: `/launchAct` });   
        },
         tomain(){
          this.$router.push({ path: `/` });
        },
        user(){
          this.$router.push({ path: `/user` });
        },
        login(){
          this.$router.push({ path: `/login` });
        },
        judge(){
          if(this.name!=''&&this.password!=''){
            this.$router.push({ path: `/user` });
					}
					else{
            alert("您还有账号或密码未填！")
          }
        }
    }
}
</script>   
