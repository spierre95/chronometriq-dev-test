<template v-if="tableList.length > 0">
  <div >
    <b-table striped hover :items="tableList"></b-table>
  </div>
</template>

<script>
export default {
  name: "VTable",
  props: {
    tableList: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
};
</script>
