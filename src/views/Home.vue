<template>
  <div class="home">
    <el-container style="height: 700px; border: 1px solid #eee">
  <el-aside width="400px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>排序列</template>
        
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>我的OrderBy</template>
        <el-menu-item-group>
          <el-menu-item index="2-1" @click="changeOB('id')">发布时间</el-menu-item>
          <el-menu-item index="2-2" @click="changeOB('title')">Title</el-menu-item>
          <el-menu-item index="2-3" @click="changeOB('Author')">Author</el-menu-item>
        </el-menu-item-group>
        
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>ASC还是DESC啊？？</template>
        <el-menu-item-group>
          <el-menu-item index="3-1" @click="changeAD('asc')">ASC</el-menu-item>
          <el-menu-item index="3-2" @click="changeAD('desc')">DESC</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
      <el-pagination
   background
    layout="prev, pager, next"
    :current-page="currentPage"
    :page-size="pageSize"
     @current-change="handleCurrentChange"
    :total="(blogListAll.count/10)">
  </el-pagination>

  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          
        </el-dropdown-menu>
      </el-dropdown>
      <span>列表</span>
    </el-header>
    
    
    <el-collapse v-model="activeNames" >
  <el-collapse-item v-for="(item,index) in blogListAll.value" :key="index" :title="item.title" :name="index">
    <div v-html="item.body"></div>
  </el-collapse-item>
  </el-collapse>
  </el-container>
</el-container>
<div class="block">
  <span class="demonstration"></span>
</div>

  </div>
</template>

<script>
import {getAllPost} from "../network/post";
 
export default {
  name: 'Home',
  data(){
    return{
      blogListAll:{},
      currentPage:1,
      pageSize:1,
      pageIndexNow:1,
      orderBy:"id",
      aOrDe:"asc",
      a1:{b1:['x1','x2'],c1:['y1,y2']},
     activeNames: ['1']
    }
  },
  components: {
   
  },
  created(){
    this.getAllPost();
    
  },
  methods:{
    changeOB(str){
      this.orderBy=str;
     getAllPost(this.pageIndexNow - 1 ,9,this.orderBy+" "+this.aOrDe).then(res=>{
        this.blogListAll=res;
        
        console.log(this.blogListAll);
      }).catch(err=>{

      })
    },
    changeAD(str){
      this.aOrDe=str;  
      getAllPost(this.pageIndexNow - 1 ,9,this.orderBy+" "+this.aOrDe).then(res=>{
        this.blogListAll=res;
        
        console.log(this.blogListAll);
      }).catch(err=>{

      })
    },
    getAllPost(){
      getAllPost(this.pageIndexNow - 1 ,9,this.orderBy).then(res=>{
        this.blogListAll=res;
        console.log(this.blogListAll);
      }).catch(err=>{

      })
    },
    handleRowChange(row, event, column){
      getAllPost(this.pageIndexNow - 1 ,9,this.orderBy+" "+this.aOrDe).then(res=>{
        this.blogListAll=res;
        console.log(this.blogListAll);
      }).catch(err=>{

      })
        console.log(row.id);
    },
    // pushAll(){
    //   const Alllist= this.blogListAll
    //   if(Alllist.links != null){
    //     if(Alllist.length != null){
    //       this.total=parseInt(length);
    //     }

    //   }
    //   if(Alllist.value!=null){

    //   }
    // },
    handleCurrentChange(val){
     
      if(parseInt(val)!=null&&parseInt(val)!=NaN){
       
      this.pageIndexNow = parseInt(val);
      getAllPost(this.pageIndexNow - 1 ,9,this.orderBy+" "+this.aOrDe).then(res=>{
        this.blogListAll=res;
        console.log(this.blogListAll);
      }).catch(err=>{

      })
        //  this.$options.methods.getAllPost();
      }
   
    }
  }
}
</script>

<style scoped>
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>