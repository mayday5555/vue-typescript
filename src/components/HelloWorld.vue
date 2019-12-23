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
        add1: <input type="number" v-model="value1" /> add2: <input type="number" v-model="value2" />
        <p>输出结果：</p>
        {{ add1 }} + {{ add2 }} = {{ result }}
      </div>
    </div>
    <div class="container">
      <h3 class="title">event</h3>
      <input type="text" v-model="emitText" @keyup.enter="handleEvent" />
      <button @click="handleEvent">tigger</button>
      <p v-if="hasTigger">you have tigger 'get-text' event</p>
    </div>
    <div class="container">
      <h3 class="title">model</h3>
      <ModelTest v-model="modelValue"></ModelTest>
      <p>{{ modelValue }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';
import MyMixins from '../utils/mixin';
import { mixins } from 'vue-class-component';

import ModelTest from './ModelTest.vue';

@Component({ components: { ModelTest } })
export default class HelloWorld extends mixins(MyMixins) {
  @Prop(String) private msg!: string;
  @Prop({ default: 'default value', type: [String, Number] }) private content?: string | number;

  private value1: string = '0';
  private value2: string = '0';
  private add1: number = 0;
  private add2: number = 0;
  private emitText: string = '';
  private hasTigger: boolean = false;
  private modelValue: string = 'default';

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

  private handleEvent() {
    this.emitEvent(true);
    this.hasTigger = true;
    setTimeout(() => {
      this.emitEvent(false);
    }, 3000);
  }

  @Emit('get-text')
  private emitEvent(n: any) {
    this.hasTigger = n;
    return {
      show: n,
      text: this.emitText,
    };
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
