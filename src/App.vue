<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p v-if="eventShow">{{ eventText }}</p>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :content="content" @get-text="handleEvent" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  private hello: string = 'hello world';
  private content: string =
    'Ut explicabo nesciunt et officia iste et qui tempore repudiandae. Quos repellendus omnis qui et commodi consequatur iste perferendis accusamus. Et ipsum non adipisci exercitationem provident alias aperiam culpa voluptates. Et sequi error omnis ex. Nostrum non id rem et.';
  private eventShow: boolean = false;
  private eventText: string = '';

  private handleEvent({ show, text }: any) {
    this.eventShow = show;
    this.eventText = text;
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
