<template>
  <div class="search">
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Поиск по рейсу или городу"
      class="search__input"
      @keyup.enter="setSearchQuery"
    />
    <div class="search__button">
      <img
        @click="setSearchQuery"
        src="../assets/loop.svg"
        class="search_button"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "SearchFlight",
  data() {
    return {
      searchTerm: "",
    };
  },
  watch: {
    searchTerm(newValue) {
      if (newValue === "") {
        this.SET_SEARCH_QUERY("");
      }
    },
  },
  methods: {
    ...mapMutations(["SET_SEARCH_QUERY"]),
    setSearchQuery() {
      this.SET_SEARCH_QUERY(this.searchTerm);
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  margin-top: 1em;
  position: relative;
  width: 100%;

  .search__input {
    max-width: 100%;
    height: 2.4rem;
    width: 100%;
    font-size: 1.2rem;
    padding: 0.3rem;
    background: transparent;
    color: #7e8185;
    border: 0;
    border-bottom: 2px solid #d8d8d8;
    transition-property: color;
    transition-duration: 0.2s;
  }

  .search__button {
    position: absolute;
    top: 9px;
    bottom: 0;
    width: 2rem;
    right: -5px;
  }
}
</style>
