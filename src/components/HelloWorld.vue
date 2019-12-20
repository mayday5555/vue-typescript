<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ content }}</p>
    <p>{{common}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MyMixins from '../utils/mixin';
import { mixins } from 'vue-class-component';

@Component
export default class HelloWorld extends mixins(MyMixins) {
  @Prop(String) private msg!: string;
  @Prop({ default: 'default value1', type: [String, Number] }) private content?: string | number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
