<template>
  <div>
    <b-table hover :items="members.locations" :fields="fields">
      <template #cell(name)="data">
        <div class="">{{ data.item.alias1}}</div>
      </template>
      <template #cell(location)="data">
        <div class="">{{ data.item.location[0].split(';')[0]}}, {{ data.item.location[0].split(';')[2]}}</div>
      </template>
    </b-table>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'name',
          sortable: true
        },
        {
          key: 'location',
          label: 'location',
          sortable: true
        },
        {
          key: 'work field',
          label: 'work field',
          sortable: false
        },
        {
          key: 'genre',
          label: 'genre',
          sortable: false
        },
      ],
    }
  },
  computed: {
    ...mapState({
      members: state => state.search.selectedFilters,
    }),
  },
  methods: {
    ...mapActions({
      loadMembers: 'search/filterData'
    }),
  },
  mounted() {
    this.loadMembers()
  },

}
</script>