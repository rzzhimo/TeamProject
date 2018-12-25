<template>

<div id="user_page">
  
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
              <a class="nav-link" href="#">Register & Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="row">
      <div class="col-md-11 col-md-offset-1">
        <div class="row" id="user_message1">
          <div class="col-md-2 col-xs-12">
            <a class="thumbnail" href="#">
              <img width="150" height="171" alt="" class="user" src="../assets/activity/篮球.jpg">
            </a>
          </div>
          <div class="col-md-7 col-xs-8">
            
            <h3 class=" text-left">智能方块</h3>
            <form class="form-horizontal">
              <div class="form-group text-left">
                
                <label class=" text-left">学校：SJTU</label>
                <label class=" text-left"> |性别: 男</label>
              </div>
              <div class="form-group text-left">
                <label class="text-left">introdution:</label>
                <input type="text"  size='50'  style="background:transparent; border:none;" >
              </div>
            </form>
          </div>
          <div class="col-md-offset-2 col-md-1" >
            
            
          </div>
        </div>
      </div>
    </div>
    <hr/>
      <div class="row">
      <div class="col-md-7 col-md-offset-1" id="user_message2">
        <div class="user-content"  >
          <div class="text-muted text-left"><strong>我的历史活动</strong></div>
            <div class="tab" >
              <ul class="nav nav-tabs" >
                  <li  class="active"><a @click="tosec1" aria-controls="home"  data-toggle="tab">学习</a></li>
                  <li ><a  @click="tosec2"  aria-controls="home"  data-toggle="tab">读书</a></li>
                  <li ><a   @click="tosec3" data-toggle="tab">运动</a></li>
                  <li ><a   @click="tosec4" data-toggle="tab">娱乐</a></li>
                  <li ><a  @click="tosec5" data-toggle="tab">采风</a></li>
              </ul>
              <!-- Tab panes -->
              
              <section1 class="row text-muted text-left" v-if="secs[0]">
              </section1>
              <section2 class="row text-muted text-left" v-if="secs[1]">
              </section2>
              <section3 class="row text-muted text-left" v-if="secs[2]">
              </section3>
              <section4 class="row text-muted text-left" v-if="secs[3]">
              </section4>
              <section5 class="row text-muted text-left" v-if="secs[4]">
              </section5>
              
            </div>
            
        </div>
      </div>
      <div class="col-md-4" id="user_message3">
        <div class="page-header text-left"><strong>消息框</strong></div>
        <div class="user row text-left">
        <ul>
          <li><p>菜小迅 发起了 周末约海王电影</p></li>
          <li><p>菜小迅 参与了 周二软院肝代码活动</p></li>
          <li><p>菜小迅 结束了 周一打篮球活动</p></li>
        </ul>
      </div>
        
          <h4><span class="fa fa-pencil-square" aria-hidden="true"></span>&nbsp;发起了12次活动</h4>
          <h4><span class="fa fa-star" aria-hidden="true"></span>&nbsp;被3名用户关注</h4>
          <div class="page-header"><strong>我的关注</strong></div>
              <table class="table">
                <tr>
                  <td>关注的话题</td>
                  <td>学习</td>
                </tr>
                <tr>
                  <td>参与的活动</td>
                  <td>周末约海王电影</td>
                </tr>
                <tr>
                  <td>关注的用户</td>
                  <td>菜小迅、魔方纪元等用户</td>
                </tr>
              </table>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <footer class="py-5 bg-dark" style="">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Invitor 2018</p>
      </div>
      <!-- /.container -->
    </footer>
  </div>

</template>


<script>
import section1 from '../components/section1'
import section2 from '../components/section2'
import section3 from '../components/section3'
import section4 from '../components/section4'
import section5 from '../components/section5'

import activities from '../assets/data.json'
export default {
  components:{
    section1,
    section2,
    section3,
    section4,
    section5
  },
  name: 'user',
        data(){
            return{
                msg:activities[0].Date,
                theTime:"/"+activities[0].Time,
                actname:"/"+activities[0].Venue,
                info:"附加信息是："+activities[0].Information,
                sec1:true,
                sec2:false,
                sec3:true,
                sec4:false,
                sec5:false,
                
                secs:[true,false,false,false,false]

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
      tosec1(){
        
        this.secs=[true,false,false,false,false]
        
      },
      tosec2(){
         this.secs=[false,true,false,false,false]
      },
      tosec3(){
        this.secs=[false,false,true,false,false]
      },
      tosec4(){
        this.secs=[false,false,false,true,false]
      },
      tosec5(){
        this.secs=[false,false,false,false,true]
      },

      
  }
}
</script>

<style scoped>

.row img{
	padding:0px;
	outline: none;
    height: 171px;
    width: 150px;
}

.panel{
  background-color:#EECFA1;
}
#user_info{
	position: relative;
}
.user-content{
  padding-bottom: 1.5em ;
  font-family: 'Microsoft YaHei','Lantinghei SC','Open Sans',Arial,'Hiragino Sans GB','STHeiti','WenQuanYi Micro Hei','SimSun',sans-serif;
}
a:hover,a:focus{
  outline: none;
  text-decoration: none;
}
.tab .nav-tabs{
  position: relative;
  border-bottom: 0 none;
}
.tab .nav-tabs li{
  text-align: center;
}
.tab .nav-tabs li a{
  display: block;
  outline: none;
  height: 50px;
  line-height: 65px;
  font-size: 15px;
  font-weight: 600;
  color: #B5B5B5;
  text-transform: uppercase;
  margin-right: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #D3D3D3;
  position: relative;
  padding:0px 20px 60px 20px;
  transition: all 0.3s ease 0s;
}
.tab .nav-tabs li.active a,.tab .nav-tabs li a:hover{
  outline: none;
  color: #6B6B6B;
  background:#FFF;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #6B6B6B;
}
.tab .nav-tabs li a:before{
  border: none;
}
.tab .nav-tabs li:last-child a:before{
  border: none;
}
.tab .tab-content{
  height: 400px;
  font-size: 14px;
  color: #6f6c6c;
  line-height: 26px;
  background: #fff;
  padding: 20px;
}
.tab .tab-content h3{
  font-size: 24px;
  color: #6f6c6c;
  margin-top: 0;
}
.tab .tab-content p{
  margin-bottom: 0;
  text-align: justify;
  text-indent: 2em;
  color: #6f6c6c;
}
@media only screen and (max-width: 480px){
    .tab .nav-tabs li{width: 33%;margin-bottom: 8px;}
    .tab .nav-tabs li:last-child{margin-bottom: 0;}
    .tab .nav-tabs li a:before{border: none;}
    .tab .nav-tabs li a{font-size: 0.8em;}
}
</style>
