<template>
  <div>
    <b-table hover :items="members.locations" :fields="fields">
      <template #cell(name)="data">
        <div class="primary-text">{{ data.item.alias1 }}</div>
        <div class="secondary-text">
          {{ data.item.alias2 }}
          <span v-if="data.item.alias3 !== null">, </span>
          {{ data.item.alias3 }}
        </div>
      </template>
      <template #cell(location)="data">
        <div class="primary-text">
          {{ data.item.location[0].split(';')[0] }} - {{ data.item.location[0].split(';')[2] }}
        </div>
        <div v-if="data.item.location.length > 1" class="secondary-text">
          {{ data.item.location[1].split(';')[0] }} - {{ data.item.location[1].split(';')[2] }}
        </div>
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
      members: state => state.search.filteredMembers,
    }),
  },
  methods: {
    ...mapActions({
      loadMembers: 'search/filterData'
    }),
  },
  mounted() {
    // this.loadMembers()
  },

}
</script>

<style lang="sass" scoped>
.primary-text
  font-size: 13px

.secondary-text
  font-size: 10px
</style>