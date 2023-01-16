<template>
  <div class="wrapper">
    <div class="control">
      <div class="control__button arrival" @click="changeTable('Arrival')">
        <img src="../assets/airplane_arrival.svg" />
        <span>Прилет</span>
      </div>
      <div class="control__button departure" @click="changeTable('Departure')">
        <img src="../assets/airplane_departure.svg" />
        <span>Вылет</span>
      </div>
      <search></search>
    </div>
    <table class="flight-table">
      <header-table :title="title"></header-table>
      <router-view></router-view>
    </table>
  </div>
</template>

<script>
import HeaderTable from "../components/Header.vue";
import Search from "../components/Search.vue";
export default {
  components: {
    HeaderTable,
    Search,
  },
  data() {
    return {
      title: "прилета",
    };
  },
  methods: {
    searchFlights(searchTerm) {
      this.searchTerm = searchTerm;
      router.push({ name: "arrival", params: { searchTerm } });
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
  methods: {
    changeTable(table) {
      if (this.$route.name === table) {
        return;
      }
      this.$router.push({ name: table });
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  max-width: 100%;
  font-size: 14px;
}

.control {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 1rem 0;
  justify-content: space-between;

  .control__button {
    display: flex;
    align-items: center;
    flex: 0 0 calc(50% - 0.7rem);
    position: relative;
    text-align: left;
    padding: 0 1.9rem 0 1.8rem;
    background: #ffffff;
    border: 1px solid #034694;
    box-sizing: border-box;
    border-radius: 5px;
    height: 3rem;
    font-weight: 600;
    font-size: 1.2em;
    line-height: 3rem;

    &:hover {
      background-color: blue;
      color: #fff;
    }
  }
}

.flight-table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .control {
    .control__button {
      flex: 0 0 100%;
      margin-bottom: 1em;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
