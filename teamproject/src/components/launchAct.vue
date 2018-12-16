<template id="welcome">
  <div class="container">
	  <div id="jumbotron">
	        <div class="welcome-message col-md-12">
	          <h1>Launch Your Activity</h1>
	          <p class="text-info">And <em>wait for</em> other interesting souls</p>
	        </div>
	  </div>
    <div class="row">
		
      <div class="col-lg-8 col-md-8 col-sm-12"> 
        <div class="left">
		       <div class="row"><h2 class="text-muted text-center">activity</h2></div>
					 <hr>
		       <div class="image ">
		      	<a><img src="../assets/activity/篮球.jpg" class="img-thumbnail" ></a>
		      	<a><img src="../assets/activity/排球.jpg" class="rounded-circle"></a>
		      	<a><img src="../assets/activity/足球.jpg"  ></a>
		      </div>
		      <div class="image ">
		      	<a><img src="../assets/activity/旅行.jpg" class="rounded-circle"></a>
		      	<a><img src="../assets/activity/聚餐.jpg" ></a>
		      	<a><img src="../assets/activity/读书.jpg" class="rounded-circle"></a>
		      </div>
	      </div>
			</div>

      <div class="col-lg-4 col-md-4">
				<div class="row"><h2 class="text-muted text-center">luanch</h2></div>
				 <hr>
        <div class="row">
					 <div class="col-md-4 ">活动发起人</div><input class="col-md-8" v-model="actperson"  type="text" />
        </div>
				<hr>
         <div class="row">
					 <div class="col-md-4">活 动 名</div><input class="col-md-8" v-model="actname"  type="text"/>
        </div>
				<hr>
				 <div class="row">
					 <div class="col-md-4">活动的时间</div><input class="col-md-8" v-model="actplace"  type="text"/>
        </div>
				<hr>
				<div class="row">
				<button @click="create" class="btn btn-info col-md-4" >
				<!-- <span class="glyphicon glyphicon-search"></span> -->
				发起活动
				</button>
				
        <router-link :to="{ path: '/HelloWorld' }"></router-link> 
        </div>
			</div>      
   </div>
   <div class="row">...</div>
</div>
</template>


<script>


export default{
        name: 'launchAct',
        data(){
            return{
                actperson:'',
                actname:'',
                actplace:'',
            }
        },
        methods:{
            create() {
                if(this.actname!=''&&this.actperson!=''&&this.actplace!=''){
					
										this.$router.push({ path: `/` });
										}
										

                else{
                    alert("请不要漏填信息")
                }
						},
						downloadFile(fileName, content){
    						var aLink = document.createElement('a');
    						var blob = new Blob([content]);
    						var evt = document.createEvent("HTMLEvents");
    						evt.initEvent("click", false, false);//initEvent 不加后两个参数在FF下会报错, 感谢 Barret Lee 的反馈
    						aLink.download = fileName;
    						aLink.href = URL.createObjectURL(blob);
								aLink.dispatchEvent(evt);
								this.$router.push({ path: `/` });

           }

        }
    }
</script>

<style scoped>
h1{
    color: gray;
    border-bottom: 1px solid black;
}
h2{
	position: relative;
	height: 50px;
	margin-left: 40%;
	margin-right: 120px ;
	margin-bottom:0px;
}
#welcome .container .carousel-inner img{
	width: 100%;
      height: 100%;
}
#welcome{
	margin-top: 30px;
	background-color: #FFF;
}
#welcome .container{
	position: relative;
}
#jumbotron{
	margin-top: 0px;
	background: rgb(194, 200, 201) url('../../src/assets/activity/读书.jpg');
	background-size: 50% 100%;
	position: relative;
	height: 300px;
	margin-left: 120px;
	margin-right: 120px ;
	margin-bottom:30px;
}
#jumbotron .welcome-message {
	background-color: rgba(255, 255, 255, 0.37); 
	/* translucent overlay */
	position: absolute;
	top: 100px;
	left: 0;
	padding: 20px 0px 20px 50px;
	margin: 0px 0px 0px 0px ;
}
img{
	padding:0px;
	outline: none;
    height: 200px;
    width: 200px;
}


input {
width: 150;
height: 30px;
}

</style>