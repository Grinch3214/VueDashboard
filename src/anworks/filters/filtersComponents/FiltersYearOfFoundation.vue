<template>

  <div class="pb-1 mb-1 mt-2 border-bottom">
    <p class="h6 mb-1">
      Год основания
    </p>
    <b-form-select
      v-model="selected"
      :options="options"
      size="md"
      class="mt-1 col-4"
    />

  </div>

</template>

<script>
import { BFormSelect } from 'bootstrap-vue'

export default {
  components: {
    BFormSelect,
  },

  data() {
    return {
      selected: null,
      options: [
        { text: 2000 },
        { text: 2001 },
        { text: 2002 },
        { text: 2003 },
        { text: 2004 },
        { text: 2005 },
        { text: 2006 },
        { text: 2007 },
        { text: 2008 },
        { text: 2009 },
        { text: 2010 },
        { text: 2011 },
        { text: 2012 },
        { text: 2013 },
        { text: 2014 },
        { text: 2015 },
        { text: 2016 },
        { text: 2017 },
        { text: 2018 },
        { text: 2019 },
        { text: 2020 },
        { text: 2021 },
      ],
    }
  },
}
</script>
