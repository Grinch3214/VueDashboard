<template>
  <div class="row">
    <filters-component />
    <job-seekers-table />
  </div>
</template>

<script>
// import {
// BAvatar,
// } from 'bootstrap-vue'
import FiltersComponent from '@/anworks/FiltersComponent.vue'
import JobSeekersTable from '@/anworks/tables/JobSeekersTable.vue'

export default {
  components: {
    FiltersComponent,
    JobSeekersTable,
  },
}
</script>
