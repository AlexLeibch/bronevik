<template>
  <tbody>
    <template v-if="filteredFlights.length">
      <flight
        v-for="arrival in filteredFlights"
        :key="arrival.id"
        :arrival="arrival"
      ></flight>
    </template>
    <template v-else>
      <tr>
        <td colspan="4" class="search_result">Рейсов не найено</td>
      </tr>
      <tr></tr>
    </template>
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
    ...mapGetters(["GET_ARRIVALS", "GET_SEARCH_QUERY"]),
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
  },
};
</script>

<style lang="scss" scoped>
.search_result {
  text-align: center;
  padding-top: 2rem;
  font-size: 4rem;
  color: black;
  font-weight: bold;
}
</style>
