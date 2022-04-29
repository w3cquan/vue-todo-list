<template>
  <div id="center">
    <div class="title">
      <h1 style="font-size: 38px; font-weight: 300; margin-left: 50px">我的一天:</h1>
    </div>

    <div class="todo">
      <div class="input">
        <input type="text" v-model="todo" @keydown.enter="push">
        <button @click="push">push</button>
      </div>  

      <div class="list">
        <ul>
          <li v-for="todoObj in $store.state.list" :key="todoObj.id">
            <input type="checkbox" name="" id="" class="checkbox" v-model="todoObj.state">
            <p>{{todoObj.content}}</p>
            <span class="iconfont icon-icon_shoucangxia" style="position: absolute; right: 45px"></span>
            <span class="iconfont icon-shanchu1" @click="delet"></span>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyDay',
  data(){
    return {
      todo: '',
      
      // 这里的todo的数据被已经放在vuex的state里面去了
      id: 4
    }
  },

  methods: {
    push(){
      if(this.todo == ''){
        alert('输入不能为空')
      }else{
        this.$store.state.list.push({
        id: this.id, content: this.todo, state: true})
        this.id ++
        this.todo = ''
      }
    },

    delet(){
     
    },

    po(){
      console.log('ss')
    }
  },
}
</script>

<style scoped>
  #center{
    width: 100%;
    height: 100%;
    background-color: #ccd2cc;
    border-radius: 50px;
    -webkit-box-shadow: 0 2px 0px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }

  .title{
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
  }

  .todo{
    width: 100%;
    height: 80%;
  }

  .input{
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input input{
    width: 650px;
    height: 45px;
    outline:none;   
    font-size: 28px;
    font-weight: 300;
    color: #b0b0b0;
    padding-left: 20px;
    border: none;
    background-color: white;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }

  .input button{
    color: white;
    width: 45px;
    height: 45px;
    background-color: rgb(0, 120, 215);
    border: none;
    opacity: 0.8;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }

  .input button:hover{
    opacity: 1;
  }

  .todo .list{
    width: 100%;
    height: 80%;  
    overflow: auto;
  }


  .list{
    display: flex;
    justify-content: center;
  }

  .list li{
    width: 770px;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #b0b0b0;
    position: relative;
  }

  .list li span{
    position: absolute;
    right: 15px;
  }

  .checkbox{
    position: absolute;
    left: 15px;
    width: 20px;
    height: 20px;
  }

  .list li p{
    position: absolute;
    left: 50px
  }
</style>