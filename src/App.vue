<template>
  <div id="app">
    <el-container>
  <el-header color="#fff"> 
   <!-- Form -->

<button @click="aaa">asdasdad</button>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <div><el-tag v-if="$store.state.Id == 0">未登录</el-tag></div>
   
     <div>
      <el-avatar v-if="$store.state.Id != 0"> {{vuexName}} </el-avatar>
    </div>

     <div v-if="$store.state.Id == 0">
       <el-button round @click="dialogFormVisible = true">登录 Dialog</el-button>
       <el-dialog title="登录" :visible.sync="dialogFormVisible">
   <el-dialog
      width="30%"
      title="账号或密码错误"
      :visible.sync="innerVisible"
      append-to-body>
    </el-dialog>
  <el-form :model="form">
    <el-form-item label="Id" :label-width="formLabelWidth">
      <el-input v-model="form.Id" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth">
       <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="btnlogin">确 定</el-button>
  </div>
</el-dialog>
     </div>
        <el-button @click="ToHome">我是主页！</el-button>
        
          <el-button @click="ToInsert">我是新增！</el-button>
    </el-aside>
    <el-main>
    <router-view/></el-main>
  </el-container>
</el-container>
  </div>
  
</template>
<script>
import {postLogin}from './network/login'
export default {
  name:"app",
  data(){
    return{
      dialogTableVisible: false,
        dialogFormVisible: false,
        innerVisible:false,
        form: {
          name: 'a',
          Id: '1'
        },
        formLabelWidth: '120px'
    }
  },
  components:{
    
  },
  methods:{
    aaa(){
        this.$message('asdasdas')
    },
  async btnlogin(){
     await postLogin(this.form.Id,this.form.name).then(res=>{
       if(res.status=='ok'){
           this.$store.commit('login',res.result);
            this. dialogFormVisible = false;
       }
       else{
           this.innerVisible=true;
       }
       console.log(res)
     }).catch(err=>{
       console.log(err);
     })
    },
    ToHome(){
      this.$router.push('/home')
    },
    ToInsert(){
      if(this.$store.state.Islogin==true){
        this.$router.push('/insert')
      }else{
        this.$message('请先登录把')
      }
      
    }
  },
  computed:{
    vuexName(){
      return this.$store.state.Name;
    }
  }
}
</script>
<style>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
