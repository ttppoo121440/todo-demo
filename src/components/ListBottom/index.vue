<template>
  <div class="list-bottom">
    <div class="list-bottom-container" v-if="data.length">
      <ListTotal :data="data"></ListTotal>
      <div class="clearAll">
        <a
          href="#"
          :class="['btn', { active: state === btnText }]"
          v-for="(btnText, index) in btnGroop"
          @click.prevent="doneText(btnText)"
          >{{ btnText }}</a
        >
        <a href="#" class="btn" @click.prevent="clearData">清除所有任務</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue';
import ListTotal from './ListTotal.vue';
import { ListProps } from '../../App.vue';

export default defineComponent({
  name: 'ListBottom',
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
  setup: (props, context) => {
    const btnGroop = reactive(['全部', '未完成', '已完成']);

    const doneText = (btnText: string): void => {
      context.emit('update:state', btnText);
    };
    const clearData = (): void => {
      props.data.length = 0;
      localStorage.removeItem('todo');
      context.emit('update:state', '全部');
    };

    return { doneText, clearData, btnGroop };
  },
  components: {
    ListTotal,
  },
});
</script>
