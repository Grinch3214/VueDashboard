<template>
  <div class="row">
    <filters-component />
    <job-seekers-table />
  </div>
</template>

<script>
import FiltersComponent from '@/anworks/filters/FiltersComponent.vue'
import JobSeekersTable from '@/anworks/tables/JobSeekersTable.vue'

export default {
  components: {
    FiltersComponent,
    JobSeekersTable,
  },
}
</script>
