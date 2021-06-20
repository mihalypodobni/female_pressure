<template>
  <div>
    <b-table hover :items="members" :fields="fields">
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
      <template #cell(genre)="data">
        <div class="genre-section">
          <span v-for="(genre, idx) in data.item.genres"
             :key="genre + idx"
             class="primary-text genre mr-1"
             >
            {{genre}}
          </span>
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

.genre
  background-color: #36fbf6
  padding-left: 2px
  padding-right: 2px

.genre-section
  max-width: 150px

</style>