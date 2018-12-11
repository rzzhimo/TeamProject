<template>
    <div>
        <h1></h1>
        <p>{{msg}}</p>
        <ul>
        <li>活动名<input v-model="actname"  type="text" text-align: left/></li> 

        <li>活动发起人<input v-model="actperson"  type="text" text-align: left/></li>
        
        <li>活动地点<input v-model="actplace"  type="text" text-align: left/></li>
        
        活动描述 <input v-model="descri" type="text" text-align: left/>
        <button @click="create" class="btn btn-primary" v-if="!ok">发起活动</button>
        <router-link to="/HelloWorld" class="btn btn-primary" v-if="ok" >可以发起活动</router-link>

        </ul>
        <!-- 通过路由会跳转到活动界面 -->
        
    </div>

</template>
<script>
    //import global_ from '/components/Global'
    export default{
        name: 'launchAct',
        data(){
            return{
                ok:false,
                msg: '我是发起活动组件',
                actperson:'',
                actname:'',
                actplace:'',
                descri:''
            }
        },
        methods:{
            create() {
                if(this.actname!=''&&this.actperson!=''&&this.actplace!=''){
                    this.ok=true  
                }
                else{
                    alert("发起人不能为空")
                }
            },

        }
    }
</script>