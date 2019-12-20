import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class MyMixins extends Vue {
  public common: string = 'this is mixined';
}
