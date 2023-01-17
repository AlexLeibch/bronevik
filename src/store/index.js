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
      ADMIN_RIGHTS: false,
      POPUP_STATUS: false,
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
    SET_ADMIN_ROLE(state, data) {
      state.ADMIN_RIGHTS = data;
    },
    SET_POPUP_STATUS(state, data) {
      state.POPUP_STATUS = data;
    },
    SET_NEW_ARRIVAL_FLIGHT(state, data) {
      state.ARRIVALS = [...state.ARRIVALS, data];
    },
    SET_NEW_DEPARTURE_FLIGHT(state, data) {
      state.DEPARTURES = [...state.DEPARTURES, data];
    },
    DELETE_ARRIVAL_FLIGHT(state, data) {
      state.ARRIVALS = state.ARRIVALS.filter((flight) => flight.id !== data.id);
    },
    DELETE_DEPARTURE_FLIGHT(state, data) {
      state.DEPARTURES = state.DEPARTURES.filter(
        (flight) => flight.id !== data.id
      );
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
    GET_ADMIN_RIGHTS(state) {
      return state.ADMIN_RIGHTS;
    },
    GET_POPUP_STATUS(state) {
      return state.POPUP_STATUS;
    },
  },
});

export default store;
