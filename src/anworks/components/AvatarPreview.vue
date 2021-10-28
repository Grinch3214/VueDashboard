<template>
  <div class="d-flex">
    <div id="avatar-preview">
      <b-avatar
        size="90px"
        rounded
        :src="url"
      />
    </div>
    <div class="ml-1">
      <h4>{{ 'fullName' }}</h4>
      <input
        id="input_avatar"
        type="file"
        @change="onFileChange"
      >
      <label
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        class="changeAvatar mb-0"
        for="input_avatar"
      >
        <span class="d-none d-sm-inline">Изменить</span>
        <feather-icon
          icon="EditIcon"
          class="d-inline d-sm-none"
        />
      </label>
      <b-button
        variant="outline-secondary"
        class="ml-1"
        @click="clearPreview"
      >
        <span class="d-none d-sm-inline">Удалить</span>
        <feather-icon
          icon="TrashIcon"
          class="d-inline d-sm-none"
        />
      </b-button>
    </div>
  </div>
</template>

<script>
import {
  BButton, BAvatar,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BAvatar,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      url: null,
    }
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0]
      this.url = URL.createObjectURL(file)
    },
    clearPreview() {
      this.url = null
    },
  },
}
</script>

<style lang="scss">
    #avatar-preview {
      width: 90px;
      height: 90px;
      overflow: hidden;
    }
    #input_avatar {
      opacity: 0;
      visibility: hidden;
      position: absolute;
    }
    .changeAvatar {
        border-color: #528BE6;
        background-color: #528BE6;
        cursor: pointer;
        color: #fff;
        padding: 0.66rem 1.5rem;
        border-radius: 0.358rem;
        font-size: 14px;
        font-weight: 500;
    }
</style>
