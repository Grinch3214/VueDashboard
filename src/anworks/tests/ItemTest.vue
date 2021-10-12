<template>
  <div>
    <div
      v-for="item in items"
      :key="item.id"
      class="bg-second p-1 mb-1"
    >
      <div class="d-flex justify-content-between align-items-center">
        <p class="small m-0">
          Тема:</p>
        <div>
          <b-button
            v-ripple.400="'rgba(40, 199, 111, 0.15)'"
            variant="flat-secondary"
            class="btn-icon rounded-circle"
          >
            <feather-icon icon="TrashIcon" />
          </b-button>
        </div>
      </div>
      <h5 class="font-weight-bold text-dark">
        {{ item.title }} </h5>
      <p class="small m-0">
        Вопрос:</p>
      <p class="h5 font-weight-bold text-dark">
        {{ item.topic }}
      </p>
      <div class="d-flex">
        <p class="small m-0">
          Сложность по Блуму:</p>
        <p class="h5 font-weight-bold text-dark ml-2">
          {{ item.diffcultBloom }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'JavaScript',
          topic: 'Какой-то вопрос, который касается разработки',
          diffcultBloom: 3,
        },
        {
          id: 2,
          title: 'Markup',
          topic: 'С помощью какого тега в HTML создаются ссылки?',
          diffcultBloom: 2,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
  .bg-second {
      background: #F8F8F8;
      border-radius: 5px;
  }
</style>
