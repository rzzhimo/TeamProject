<template>
<div>
     <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a @click="create1" class="btn btn-default btn-lg col-md-4" style="color:white" >
				<!-- <span class="glyphicon glyphicon-search"></span> -->
				发起活动
				</a>
        <router-link :to="{ path: '/launchAct' }"></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">About
                <span class="sr-only">(current)</span>
              </a>
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

    <header class="masthead text-center text-white d-flex">
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h1 class="text-uppercase">
              <strong>Your favorite events, now all organised here</strong>
            </h1>
            <hr>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="text-faded mb-5">Find your favorite event and hopefully favorite buddy here :)</p>
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#help">Find Out More</a>
          </div>
        </div>
      </div>
    </header>

    <section class="bg-primary" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-heading text-white">We've got what you need!</h2>
            <hr class="light my-4">
            <p class="text-faded mb-4">Get started here if you do not have an account yet</p>
            <a class="btn btn-light btn-xl js-scroll-trigger" @click="create1">Get Started!</a>
          </div>
        </div>
      </div>
    </section>

<br><br>

    <!-- Page Content -->
    <div class="container">

      <!-- Page Heading -->
      <h1 class="my-4">Events In One Glance
          
        <!-- <small></small> -->
      </h1>

      <!-- Project One -->
      <div class="row">
        <div class="col-md-7">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src="../assets/home-bg.jpg" alt="">
          </a>
        </div>
        <div class="col-md-5">
          <h3><div style="font-size: 25px">{{ myJson[i].Name }} </div></h3>
          <!-- <div v-for="data in $options.myJson">{{data}}</div> -->
          <div style="font-size: 14px">
          <p><b>Date:</b> {{ myJson[i].Date }}</p>
          <p><b>Time:</b> {{ myJson[i].Time }}</p>
          <p><b>Venue:</b> {{ myJson[i].Venue }}</p>
          <p><b>Info:</b> {{ myJson[i].Information }}</p>
          </div>
          <a class="btn btn-primary" v-on:click="add()">Join!</a>
        </div>
      </div>
      <!-- /.row -->

      <hr>

      <!-- Project Two -->
      <div class="row">
        <div class="col-md-7">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src="../assets/home-bg.jpg" alt="">
          </a>
        </div>
        <div class="col-md-5">
          <h3><div style="font-size: 25px">{{ myJson[i+1].Name }} </div></h3>
          <!-- <div v-for="data in $options.myJson">{{data}}</div> -->
          <div style="font-size: 14px">
          <p><b>Date:</b> {{ myJson[i+1].Date }}</p>
          <p><b>Time:</b> {{ myJson[i+1].Time }}</p>
          <p><b>Venue:</b> {{ myJson[i+1].Venue }}</p>
          <p><b>Info:</b> {{ myJson[i+1].Information }}</p>
          </div>
          <a class="btn btn-primary" v-on:click="add()">Join!</a>
        </div>
      </div>
      <!-- /.row -->

      <hr>

      <!-- Project Three -->
      <div class="row">
        <div class="col-md-7">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src="../assets/home-bg.jpg" alt="">
          </a>
        </div>
        <div class="col-md-5">
          <h3><div style="font-size: 25px">{{ myJson[i+2].Name }} </div></h3>
          <!-- <div v-for="data in $options.myJson">{{data}}</div> -->
          <div style="font-size: 14px">
          <p><b>Date:</b> {{ myJson[i+2].Date }}</p>
          <p><b>Time:</b> {{ myJson[i+2].Time }}</p>
          <p><b>Venue:</b> {{ myJson[i+2].Venue }}</p>
          <p><b>Info:</b> {{ myJson[i+2].Information }}</p>
          </div>
          <a class="btn btn-primary" v-on:click="add()">Join!</a>
        </div>
      </div>
      <!-- /.row -->

      <hr>

      <!-- Project Four -->
      <div class="row">

        <div class="col-md-7">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src="../assets/home-bg.jpg" alt="">
          </a>
        </div>
        <div class="col-md-5">
          <h3><div style="font-size: 25px">{{ myJson[i+3].Name }} </div></h3>
          <!-- <div v-for="data in $options.myJson">{{data}}</div> -->
          <div style="font-size: 14px">
          <p><b>Date:</b> {{ myJson[i+3].Date }}</p>
          <p><b>Time:</b> {{ myJson[i+3].Time }}</p>
          <p><b>Venue:</b> {{ myJson[i+3].Venue }}</p>
          <p><b>Info:</b> {{ myJson[i+3].Information }}</p>
          </div>
          <a class="btn btn-primary" v-on:click="add()">Join!</a>
        </div>
      </div>
      <!-- /.row -->

      <hr>

      <!-- Pagination -->
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" v-on:click="shift1()">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" v-on:click="shift2()">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" v-on:click="shift3()">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>

    </div>
    <!-- /.container -->

    <!-- Footer -->
    <footer class="py-5 bg-dark" style="">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Invitor 2018</p>
      </div>
      <!-- /.container -->
    </footer>

    <!-- Bootstrap core JavaScript -->
    <!-- <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script> -->
    </div>
</template>



<script>

// import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import JQuery from 'jquery'

import activities from '../assets/data.json'

let $ = JQuery

export default {
    // data(){
    // return{
    // myJson: MY_JSON,
          name: 'test',
          data(){
              return{
                  myJson: activities,
                  i: 0
              }
          },
    // }
    // },

    methods: {
      add: function (e) {
        //   activities[0].Name = "test";
          console.log(1);
        //   alert(activities[0].Name);
      },
      create1(){
           this.$router.push({ path: `/launchAct` });
      },
      shift1: function (e) {
          this.i = 0;
        //   alert(activities.length);
        if (this.i > activities.length) {
            // do something here
        }

      },

      shift2: function (e) {
          this.i = 4;
        //   alert(activities.length);
        if (this.i > activities.length) {
            // do somehting here
        }

      },

      shift3: function (e) {
          this.i = 8;
        //   alert(activities.length);
        if (this.i > activities.length) {
            // do something here
        }

      }
    },

  
}



</script>

<style scoped>
body {
  padding-top: 54px;
}

@media (min-width: 992px) {
  body {
    padding-top: 56px;
  }
}

.pagination {
  margin-bottom: 15px;
}

hr {
  max-width: 50px;
  border-width: 3px;
  border-color: #F05F40;
}

hr.light {
  border-color: #fff;
}

a {
  color: rgb(0, 0, 0);
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

a:hover {
  color: #000000;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
}

.bg-primary {
  background-color: #F05F40 !important;
}

.bg-dark {
  background-color: #212529 !important;
}

.text-faded {
  color: rgba(255, 255, 255, 0.7);
}

section {
  padding: 8rem 0;
}

.section-heading {
  margin-top: 0;
}

::-moz-selection {
  color: #fff;
  background: #212529;
  text-shadow: none;
}

::selection {
  color: #fff;
  background: #212529;
  text-shadow: none;
}

img::-moz-selection {
  color: #fff;
  background: transparent;
}

img::selection {
  color: #fff;
  background: transparent;
}

img::-moz-selection {
  color: #fff;
  background: transparent;
}

#mainNav {
  border-bottom: 1px solid rgba(33, 37, 41, 0.1);
  background-color: #fff;
  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

#mainNav .navbar-brand {
  font-weight: 700;
  text-transform: uppercase;
  color: #F05F40;
  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
}

#mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {
  color: #f05f40;
}

#mainNav .navbar-nav > li.nav-item > a.nav-link,
#mainNav .navbar-nav > li.nav-item > a.nav-link:focus {
  font-size: .9rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #212529;
}

#mainNav .navbar-nav > li.nav-item > a.nav-link:hover,
#mainNav .navbar-nav > li.nav-item > a.nav-link:focus:hover {
  color: #F05F40;
}

#mainNav .navbar-nav > li.nav-item > a.nav-link.active,
#mainNav .navbar-nav > li.nav-item > a.nav-link:focus.active {
  color: #F05F40 !important;
  background-color: transparent;
}

#mainNav .navbar-nav > li.nav-item > a.nav-link.active:hover,
#mainNav .navbar-nav > li.nav-item > a.nav-link:focus.active:hover {
  background-color: transparent;
}

@media (min-width: 992px) {
  #mainNav {
    border-color: transparent;
    background-color: transparent;
  }
  #mainNav .navbar-brand {
    color: rgba(255, 255, 255, 0.7);
  }
  #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {
    color: #fff;
  }
  #mainNav .navbar-nav > li.nav-item > a.nav-link {
    padding: 0.5rem 1rem;
  }
  #mainNav .navbar-nav > li.nav-item > a.nav-link,
  #mainNav .navbar-nav > li.nav-item > a.nav-link:focus {
    color: rgba(255, 255, 255, 0.7);
  }
  #mainNav .navbar-nav > li.nav-item > a.nav-link:hover,
  #mainNav .navbar-nav > li.nav-item > a.nav-link:focus:hover {
    color: #fff;
  }
  #mainNav.navbar-shrink {
    border-bottom: 1px solid rgba(33, 37, 41, 0.1);
    background-color: #fff;
  }
  #mainNav.navbar-shrink .navbar-brand {
    color: #F05F40;
  }
  #mainNav.navbar-shrink .navbar-brand:focus, #mainNav.navbar-shrink .navbar-brand:hover {
    color: #f05f40;
  }
  #mainNav.navbar-shrink .navbar-nav > li.nav-item > a.nav-link,
  #mainNav.navbar-shrink .navbar-nav > li.nav-item > a.nav-link:focus {
    color: #212529;
  }
  #mainNav.navbar-shrink .navbar-nav > li.nav-item > a.nav-link:hover,
  #mainNav.navbar-shrink .navbar-nav > li.nav-item > a.nav-link:focus:hover {
    color: #F05F40;
  }
}

header.masthead {
  padding-top: 10rem;
  padding-bottom: calc(10rem - 56px);
  background-image: url("../assets/header.jpg");
  background-position: center center;
  background-size: cover;
}

header.masthead hr {
  margin-top: 30px;
  margin-bottom: 30px;
}

header.masthead h1 {
  font-size: 2rem;
}

header.masthead p {
  font-weight: 300;
}

@media (min-width: 768px) {
  header.masthead p {
    font-size: 1.15rem;
  }
}
img{
  width: 100%;
  height: 400px;
}
@media (min-width: 992px) {
  header.masthead {
    height: 100vh;
    min-height: 650px;
    padding-top: 0;
    padding-bottom: 0;
  }
  header.masthead h1 {
    font-size: 3rem;
  }
}

@media (min-width: 1200px) {
  header.masthead h1 {
    font-size: 4rem;
  }
}
</style>
