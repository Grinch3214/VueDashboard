<template>
  <div>
    <input
      ref="resetPreview"
      type="file"
      @change="showFilePreview"
    >
    <div id="preview">
      <img
        v-if="image"
        :src="image"
      >
      <button @click="clearPreview">
        close
      </button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      image: null,
    }
  },
  methods: {
    showFilePreview(event) {
      const files = event.target.files || event.dataTransfer.files
      if (!files.length) return
      this.image = URL.createObjectURL(files[0])
    },
    clearPreview() {
      this.image = null
      this.$refs.resetPreview.value = ''
    },
  },
}
</script>

<style lang="scss">
#preview {
    max-width: 350px;
    height: auto;
    img {
        width: 100%;
    }
}
</style>
