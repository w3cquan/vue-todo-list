<template>
  <div id="leftbar">
    <div class="logo">
      <span class="iconfont icon-Vue" style="font-size: 40px;  margin-right: 15px"></span>
      <h1 style="font-size: 38px; font-weight: 300">ToDo</h1>
    </div>

    <div class="list">
      <ul>
        <li><a href=""><span class="iconfont icon-todo-fill icon"></span><span>我的待办</span></a></li>
        <li><a href=""><span class="iconfont icon-tongji icon"></span><span>数据统计</span></a></li>
        <li><a href=""><span class="iconfont icon-31shezhi icon"></span><span>设置</span></a></li>
        <li><a href=""><span class="iconfont icon-guanyu icon"></span><span>关于</span></a></li>
      </ul>
    </div>

    <div class="sort">
      <ul>
        <li><a href=""><div class="icon" style="background-color: red"></div><span>重要</span></a></li>
        <li><a href=""><div class="icon" style="background-color: blue"></div><span>其次</span></a></li>
        <li><a href=""><div class="icon" style="background-color: green"></div><span>尽量</span></a></li>
        <li><a href=""><div class="icon" style="background-color: gray"></div><span>最好</span></a></li>
      </ul>
    </div>
  </div>

 
</template>

<script>
export default {
  name: 'LeftBar'
}
</script>

<style scoped>
  #leftbar{
    height: 100%;
    width: 20%;
    background-color: #ccd2cc;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    box-shadow: 2px 3px 3px #414141;
  }  

  /* logo样式 */
  .logo{
    width: 100%;
    height: 20%;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* 列表样式 */
  .list{
    height: 45%;
    width: 100%;
  }

  .list li{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #b0b0b0;
  }

  .list li a{
    display: block;
    height: 60px;
    display: flex;
    align-items: center;
    color: rgb(30, 30, 30);
  }

  .list li a .icon{
    margin: 25px;
    font-size: 20px;
  }

  .list li a:hover{
    background-color: rgb(245, 239, 221);
    transition: 0.3s;
  }

  /* 分类样式 */
  .sort{
    width: 100%;
    height: 35%;
  }

  .sort .icon{
    width: 15px;
    height: 15px;
    border-radius: 100%;
    border: 2px solid gray;
    background-color: blue;
  }

  .sort a{
    color: #b0b0b0;
    display: flex;
    height: 45px;
    align-items: center;
  }

  .sort a:hover{
    background-color: rgb(250, 250, 250);
    opacity: 0.5;
    transition: 0.3s;
  }

  .sort a .icon{
    margin: 25px;
  }

  /* logo渐变效果 */

  .logo span{
    background: linear-gradient(135deg, #34495E, #41B883, #0078D7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ff 2s linear infinite;
  }

  .logo h1{
     background: linear-gradient(135deg, #34495E, #41B883, #0078D7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ff 2s linear infinite;
  }

  @keyframes ff{
    to{filter: hue-rotate(360deg);}
  }
</style>