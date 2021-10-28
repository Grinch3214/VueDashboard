<template>
  <div class="row">
    <filters-component-complaint />
    <table-complaint />
  </div>
</template>

<script>
import FiltersComponentComplaint from '@/anworks/filters/FiltersComponentComplaint.vue'
import TableComplaint from '@/anworks/tables/TableComplaint.vue'
// import { BCard, BCardText, BLink } from 'bootstrap-vue'

export default {
  components: {
    FiltersComponentComplaint,
    TableComplaint,
    // BCard,
    // BCardText,
    // BLink,
  },
}
</script>
