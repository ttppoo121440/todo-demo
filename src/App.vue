<template>
  <section class="container">
    <h1>Todo List</h1>
    <div class="todo">
      <Form :data="listData"></Form>
      <ul class="list">
        <ListItem :data="listData" :state="state"></ListItem>
      </ul>
      <ListBottom :data="listData" v-model:state="state"></ListBottom>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import Form from './components/Form/index.vue';
import ListItem from './components/ListItem/index.vue';
import ListBottom from './components/ListBottom/index.vue';
import myLocalStorage from './utils/MyLocalStorage';

export interface ListProps {
  id: number;
  title: string;
  isDone: boolean;
}

export enum State {
  ALL = '全部',
  NOT_YET = '未完成',
  COMPLETED = '已完成',
}

export default defineComponent({
  name: 'App',
  components: {
    Form,
    ListItem,
    ListBottom,
  },
  setup() {
    const listData = reactive<ListProps[]>(myLocalStorage.getItem('todo'));
    const state = ref<State>(State.ALL);

    return {
      state,
      listData,
    };
  },
});
</script>

<style src="./assets/style.css"></style>
