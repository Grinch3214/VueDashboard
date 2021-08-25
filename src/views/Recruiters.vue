<template>
  <div class="row">
    <filters-component-for-recruiters />
    <table-recruiters />
  </div>
</template>

<script>
import FiltersComponentForRecruiters from '@/anworks/FiltersComponentForRecruiters.vue'
import TableRecruiters from '@/anworks/tables/TableRecruiters.vue'

export default {
  components: {
    FiltersComponentForRecruiters,
    TableRecruiters,
  },
}
</script>
