<template>
  <div class="model">
    <input type="text" @input="changeInput" :value="defaultInput" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Prop, Model, Component, Emit } from 'vue-property-decorator';

@Component
export default class ModelTest extends Vue {
  @Model('input', { type: String }) private defaultInput?: string;

  @Emit('input')
  private changeInput(e: any): string {
    return e.target.value;
  }
}
</script>