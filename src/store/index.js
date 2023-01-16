import Vuex from "vuex";
import Vue from "vue";
import Api from "../api/api.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state() {
    return {
      ARRIVALS: [],
      DEPARTURES: [],
      SEARCH_QUERY: "",
    };
  },
  mutations: {
    SET_ARRIVALS(state, data) {
      state.ARRIVALS = data;
    },
    SET_DEPARTURES(state, data) {
      state.DEPARTURES = data;
    },
    SET_SEARCH_QUERY(state, data) {
      state.SEARCH_QUERY = data;
    },
  },
  actions: {
    async FETCH_ARRIVALS({ commit }, { data, time = 0 }) {
      let api = new Api(data, time);
      const response = await api.mockData(data, time);
      commit("SET_ARRIVALS", response.arrivals);
      return response;
    },
    async FETCH_DEPARTURES({ commit }, { data, time = 0 }) {
      let api = new Api(data, time);
      const response = await api.mockData(data, time);
      commit("SET_DEPARTURES", response.departures);
      return response;
    },
  },
  getters: {
    GET_ARRIVALS(state) {
      return state.ARRIVALS;
    },
    GET_DEPARTURES(state) {
      return state.DEPARTURES;
    },
    GET_SEARCH_QUERY(state) {
      return state.SEARCH_QUERY;
    },
  },
});

export default store;
