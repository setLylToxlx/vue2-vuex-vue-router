<template>
  <div class="count">
    <button class="count_btn" @click="clickNum">点击计数</button>
    <p>{{this.$store.state.count}}</p>
    <a href="#/second">第二个组件路径</a>
  </div> 
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'count',
  data(){
    return {
      count: this.$store.state.count
    }
  },
  methods: {
    ...mapActions([
      'addCountAction'
    ]
    ),
    clickNum(){
      this.addCountAction()
    }
  },
  created(){
  }
}
</script>

<style lang="less" scoped>
    .count_btn{
        display: inline-block;
        width: 72px;
        height: 24px;
        line-height: 22px;
        text-align: center;
        border: 1px solid #3ca376;
        border-radius: 2px;
    }
</style>

