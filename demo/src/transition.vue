<template>
<div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <!-- 自定义指令 -->
  <input v-focus>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
</template>

<script>
export default {
    name:'demo',
    data(){
        return{
            show:true,
        }
    },
    directives: {
        focus: {
            // 指令的定义
            inserted: function (el) {
            el.focus()
            }
        }
    }


}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
</style>
