<template>
  <div class="row">
    <filters-component-finance />
    <osv-table-finance />

  </div>
</template>

<script>
import FiltersComponentFinance from '@/anworks/filters/FiltersComponentFinance.vue'
import OsvTableFinance from '@/anworks/finance/OsvTableFinance.vue'

export default {
  components: {
    FiltersComponentFinance,
    OsvTableFinance,
  },
}
</script>
