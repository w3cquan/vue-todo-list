<template>
  <div id="right">
    <div class="title">
      <h1 style="font-weight: 300; font-size: 38px; margin-left: 25px">List:</h1>
    </div>

    <div class="list">
      <ul>
        <li><router-link href="" to="/MyDay"> <span class="iconfont icon-taiyang icon"></span> <span class="font">我的一天</span></router-link></li>
        <li><router-link href="" to="/MyCollect"> <span class="iconfont icon-icon_shoucangxia icon"></span> <span class="font">收藏</span> </router-link></li>
        <li><a href=""> <span class="iconfont icon-todo-fill icon"></span> <span class="font">计划内</span> </a></li>
        <li><a href=""> <span class="iconfont icon-renwu icon"></span> <span class="font">任务</span> </a></li>
        <li><a href=""> <span class="iconfont icon-rili icon"></span> <span class="font">分配给我</span> </a></li>
        <li><router-link href="" to="/MyAshbin"> <span class="iconfont icon-shanchu1 icon"></span> <span class="font">垃圾桶</span> </router-link></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'RightList'
}
</script>

<style scoped>
  #right{
    width: 20%;
    height: 100%;
    background-color: #ccd2cc;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    box-shadow: 2px 3px 3px #414141;
  }

  /* 标题部分 */
  .title{
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
  }

  /* list部分 */
  .list{
    width: 100%;
    height: 50%;
  }

  .list a{
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #b0b0b0;
    color: rgb(41, 41, 41);
  } 

  .list a:hover{
    background-color: white;
  }

  
  .list .icon{
    font-size: 20px;
  }

  .list .icon, .list font{
    margin: 25px;
  }


  
</style>