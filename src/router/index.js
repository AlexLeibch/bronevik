import Vue from "vue";
import VueRouter from "vue-router";
import FlightTable from "../views/FlightTable.vue";
import Departure from "../components/Departure.vue";
import Arrival from "../components/Arrival.vue";
import store from "@/store";
import arrivals from "../mock/arrival.json";
import departures from "../mock/departure.json";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "FlightTable",
      component: FlightTable,
    },
    {
      path: "/flight_table",
      name: "FlightTable",
      component: FlightTable,
      children: [
        {
          path: "arrival",
          name: "Arrival",
          component: Arrival,
          props: true,
          beforeEnter: (to, from, next) => {
            store.dispatch("FETCH_ARRIVALS", { data: arrivals, time: 1000 });
            next();
          },
        },
        {
          path: "departure",
          name: "Departure",
          component: Departure,
          props: true,
          beforeEnter: (to, from, next) => {
            store.dispatch("FETCH_DEPARTURES", { data: departures, time: 500 });
            next();
          },
        },
      ],
    },
  ],
});

export default router;
