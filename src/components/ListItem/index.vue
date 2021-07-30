<template>
  <li class="list-item" v-for="(item, index) in filterData" :key="item.id">
    <input
      v-if="cacheId === item.id"
      v-model="cacheTitle"
      @keyup.enter="editData(item)"
      @keyup.esc="editCancel"
      class="form-control"
      type="text"
    />
    <template v-else>
      <input
        type="checkbox"
        v-model="item.isDone"
        @click="isDoneHandler(item)"
        :id="item.id"
      />
      <label
        @dblclick="setEditData(item.id, item.title)"
        :for="item.id"
        class="list-text"
      >
        {{ item.title }}</label
      >
    </template>
    <button class="btn" @click="delateData(item.id)">刪除</button>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue';
import { ListProps } from '../../App.vue';

export default defineComponent({
  name: 'ListItem',
  props: {
    data: {
      type: Array as PropType<ListProps[]>,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const cacheTitle = ref<string>('');
    const cacheId = ref<number>(0);

    const isDoneHandler = (item: ListProps): void => {
      item.isDone = !item.isDone;
      localStorage.setItem('todo', JSON.stringify(props.data));
    };

    const delateData = (id: number): void => {
      const index: number = props.data.findIndex((item) => item.id === id);
      props.data.splice(index, 1);
      localStorage.setItem('todo', JSON.stringify(props.data));
    };

    const editData = (): void => {
      if (!cacheTitle.value) return;

      const index: number = props.data.findIndex(
        (item) => item.id === cacheId.value
      );

      props.data[index].title = cacheTitle.value;
      localStorage.setItem('todo', JSON.stringify(props.data));
      editCancel();
    };

    const setEditData = (id: number, title: string): void => {
      cacheTitle.value = title;
      cacheId.value = id;
    };

    const editCancel = (): void => {
      cacheTitle.value = '';
      cacheId.value = 0;
    };

    const filterData = computed(() => {
      return props.data.filter((item: ListProps) =>
        props.state === '未完成'
          ? !item.isDone
          : props.state === '已完成'
          ? item.isDone
          : item
      );
    });

    return {
      isDoneHandler,
      cacheTitle,
      cacheId,
      delateData,
      setEditData,
      editCancel,
      editData,
      filterData,
    };
  },
});
</script>
