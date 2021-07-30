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

export interface ListProps {
  id: number;
  title: string;
  isDone: boolean;
}

export default defineComponent({
  name: 'App',
  components: {
    Form,
    ListItem,
    ListBottom,
  },
  setup() {
    const listData = reactive<ListProps[]>(
      JSON.parse(localStorage.getItem('todo') || '[]')
    );
    const state = ref<string>('全部');
    return {
      state,
      listData,
    };
  },
});
</script>

<style src="./assets/style.css"></style>
