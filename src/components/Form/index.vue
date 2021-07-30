<template>
  <form class="form" @submit.prevent="addHandler">
    <input class="input form-input" v-model="data" />
    <button class="btn" type="submit">新增</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import { ListProps } from '../../App.vue';

export default defineComponent({
  name: 'Form',
  props: {
    data: {
      type: Array as PropType<ListProps[]>,
      required: true,
    },
  },
  setup(props) {
    const data = ref<string>('');
    const addHandler = (): void => {
      if (!data.value.trim()) return;
      props.data.push({
        id: Date.now(),
        title: data.value,
        isDone: false,
      });
      localStorage.setItem('todo', JSON.stringify(props.data));
      data.value = '';
    };
    return { data, addHandler };
  },
});
</script>
