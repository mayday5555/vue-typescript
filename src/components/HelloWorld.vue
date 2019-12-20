<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <h3 class="title">prop</h3>
      <span>{{ content }}</span>
    </div>
    <div class="container">
      <h3 class="title">mixin</h3>
      <span>{{ common }}</span>
    </div>
    <div class="container">
      <h3 class="title">computed</h3>
      <div class="contant">
        add1: <input type="number" v-model="value1" />
        add2: <input type="number" v-model="value2" />
        <p>输出结果：</p>
        {{ add1 }} + {{ add2 }} = {{ result }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import MyMixins from '../utils/mixin';
import { mixins } from 'vue-class-component';

@Component
export default class HelloWorld extends mixins(MyMixins) {
  @Prop(String) private msg!: string;
  @Prop({ default: 'default value1', type: [String, Number] }) private content?: string | number;

  private value1: string = '0';
  private value2: string = '0';
  private add1: number = 0;
  private add2: number = 0;

  get result() {
    return this.add1 + this.add2;
  }

  @Watch('value1')
  private onChangevalue1(val: number, oldVal: number) {
    this.add1 = Number(val);
  }

  @Watch('value2')
  private onChangevalue2(val: number, oldVal: number) {
    this.add2 = Number(val);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  display: flex;
  align-items: center;
  text-align: justify;
  border-bottom: 1px dotted #9a9a9a;
  padding: 10px;

  .title {
    font-weight: bold;
    flex: 0 0 8em;
    margin-right: 20px;
    text-align: center;
  }
}
</style>
