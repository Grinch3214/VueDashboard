<template>
  <div>
    <div
      v-for="(item, index) in items"
      :id="item.id"
      :key="index"
      class="bg-second p-50 mb-1"
    >
      <div class="d-flex align-items-center">
        <p
          class="mb-0 mr-1 custom-bloom small text-center flex-shrink-0"
          :class="item.color"
        >
          {{ item.diffcultBloom }}
        </p>
        <p
          class="mb-0"
        >{{ item.topic }}</p>
        <div>
          <b-dropdown
            v-ripple.400="'rgba(40, 199, 111, 0.15)'"
            variant="flat-secondary"
            class="dropdown-icon-wrapper"
          >
            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle"
              />
            </template>
            <b-dropdown-item @click="deleteItem(index)">
              Удалить
            </b-dropdown-item>
            <b-dropdown-item>
              Option 2
            </b-dropdown-item>
            <b-dropdown-item>
              Option 3
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { BDropdown, BDropdownItem } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BDropdown,
    BDropdownItem,
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
          color: 'blue-3',
        },
        {
          id: 2,
          title: 'Markup',
          topic: 'С помощью какого тега в HTML создаются ссылки?',
          diffcultBloom: 2,
          color: 'blue-2',
        },
        {
          id: 3,
          title: 'Markup',
          topic: 'С помощью какого тега в HTML создаются ссылки?',
          diffcultBloom: 6,
          color: 'blue-6',
        },
        {
          id: 4,
          title: 'JavaScript',
          topic: 'С помощью какого тега в HTML создаются ссылки?',
          diffcultBloom: 1,
          color: 'blue-1',
        },
      ],
    }
  },
  methods: {
    deleteItem(index) {
      this.items.splice(index, 1)
    },
  },
}
</script>

<style lang="scss">
  .bg-second {
      background: #F8F8F8;
      border-radius: 5px;
  }
  .custom-bloom {
    width: 16px;
    height: 16px;
    color: #fff;
    border-radius: 4px;
    line-height: 17px;
  }
  .blue-1 {
    background: #D1CCFF;
  }
  .blue-2 {
    background: #A89FFF;
  }
  .blue-3 {
    background: #786AFF;
  }
  .blue-4 {
    background: #5C4BFF;
  }
  .blue-5 {
    background: #402FDD;
  }
  .blue-6 {
    background: #24188D;
  }
</style>
