<template>
  <div class="wrapper">
    <flight-header></flight-header>
    <search></search>
    <button class="save-button" @click="saveData">Сохранить данные</button>
    <table class="flight-table">
      <header-table :title="title"></header-table>
      <router-view></router-view>
    </table>
    <flight-popup v-if="GET_POPUP_STATUS"></flight-popup>
  </div>
</template>

<script>
import HeaderTable from "../components/TableHeader.vue";
import Search from "../components/Search.vue";
import FlightHeader from "../components/Header.vue";
import { mapGetters, mapMutations } from "vuex";
import FlightPopup from "../components/FlightPopup.vue";
export default {
  components: {
    HeaderTable,
    Search,
    FlightHeader,
    FlightPopup,
  },
  data() {
    return {
      title: "прилета",
    };
  },
  computed: {
    ...mapGetters(["GET_POPUP_STATUS", "GET_ARRIVALS", "GET_DEPARTURES"]),
  },
  methods: {
    ...mapMutations(["SET_ADMIN_ROLE"]),
    searchFlights(searchTerm) {
      this.searchTerm = searchTerm;
      router.push({ name: "arrival", params: { searchTerm } });
    },
    saveData() {
      localStorage.setItem("departures", JSON.stringify(this.GET_DEPARTURES));
      localStorage.setItem("arrivals", JSON.stringify(this.GET_ARRIVALS));
      alert("Данные сохранены(в localStorage)");
    },
  },
  beforeRouteUpdate(to, from, next) {
    if (to.name === "Arrival") {
      this.title = "прилета";
    } else if (to.name === "Departure") {
      this.title = "вылета";
    }
    next();
  },
};
</script>

<style lang="scss">
.wrapper {
  max-width: 100%;
  font-size: 14px;
  display: flex;
  flex-direction: column;

  .flight-table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 1rem;
    overflow: hidden;
    height: 80%;
  }
  .save-button {
    margin: 0.6rem 0 0 auto;
  }
}
</style>
