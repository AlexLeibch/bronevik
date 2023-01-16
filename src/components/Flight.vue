<template>
  <tr class="table-info">
    <td class="table-info__adaptive">
      <span>{{ arrival.time }}</span>
    </td>
    <td>{{ arrival.flight_number }}</td>
    <td>{{ arrival.destination }}</td>
  </tr>
</template>

<script>
export default {
  name: "FlightSheldue",
  props: {
    arrival: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
td {
  padding: 0.3em;
  border-bottom: 1px solid #eceeef;
  border-top: 1px solid #eceeef;
  font-size: 1rem;
}

.table-info__mobile {
  display: none;
}

/* @media (max-width: 768px) {
  th {
    width: 100%;
    display: block;
    text-align: center;
  }

  .table-info {
    display: flex;
    flex-wrap: wrap;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }

  .table-info__mobile {
    display: visible;
  } */
/* } */
</style>
