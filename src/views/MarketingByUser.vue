<template>
  <div class="row">
    <div class="col-xl-4">
      <flex-filter />
    </div>
    <div class="col-xl-8">
      <communication-channel />
    </div>
    <!-- <job-seekers-table /> -->
  </div>
</template>

<script>
import FlexFilter from '@/anworks/filters/FlexFilter.vue'
import CommunicationChannel from '@/anworks/tables/СommunicationСhannel.vue'

export default {
  components: {
    FlexFilter,
    CommunicationChannel,
  },
}
</script>
