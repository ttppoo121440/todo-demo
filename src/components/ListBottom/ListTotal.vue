<template>
  <div class="list-total">
    還有 {{ total }} 筆任務，已完成 {{ doneTotal }} 筆資料
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { ListProps } from '../../App.vue';

export default defineComponent({
  name: 'ListTotal',
  props: {
    data: {
      type: Array as PropType<ListProps[]>,
      required: true,
    },
  },
  setup(props) {
    const total = computed((): number => props.data.length);
    const doneTotal = computed((): number => {
      return props.data.filter((item) => item.isDone).length;
    });
    return {
      total,
      doneTotal,
    };
  },
});
</script>
