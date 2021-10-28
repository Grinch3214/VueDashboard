<template>
  <div class="row">
    <filters-component-for-employer />
    <table-employers />
  </div>
</template>

<script>
// import {
// BAvatar,
// } from 'bootstrap-vue'
import FiltersComponentForEmployer from '@/anworks/filters/FiltersComponentForEmployer.vue'
import TableEmployers from '@/anworks/tables/TableEmployers.vue'

export default {
  components: {
    FiltersComponentForEmployer,
    TableEmployers,
  },
}
</script>
