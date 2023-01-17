<template>
  <tbody>
    <flight
      v-for="arrival in filteredFlights"
      :key="arrival.id"
      :arrival="arrival"
    ></flight>
    <tr v-if="isResultExist && !GET_LOADER_STATUS">
      <td class="search-empty-result" colspan="3">Ничего не найдено</td>
    </tr>
  </tbody>
</template>

<script>
import Flight from "../../../components/Table/Flight.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Flight,
  },
  data() {
    return {
      filteredArrivals: [],
    };
  },
  props: {
    title: {
      type: String,
    },
  },
  computed: {
    ...mapGetters(["GET_ARRIVALS", "GET_SEARCH_QUERY", "GET_LOADER_STATUS"]),
    filteredFlights() {
      if (this.GET_SEARCH_QUERY === "") {
        return this.GET_ARRIVALS;
      }
      return this.GET_ARRIVALS.filter((flight) => {
        const search = this.GET_SEARCH_QUERY.toLowerCase();
        return (
          flight.flight_number.toLowerCase().includes(search) ||
          flight.destination.toLowerCase().includes(search)
        );
      });
    },
    isResultExist() {
      return this.filteredFlights.length ? false : true;
    },
  },
};
</script>

<style lang="scss" scoped>
.search-empty-result {
  text-align: center;
  padding-top: 2rem;
  font-size: 4rem;
  color: black;
  font-weight: bold;
}
</style>
