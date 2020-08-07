<template>
  <div>
    <b-modal :id="id" :title="title">
      <slot></slot>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "VModal",
  props: {
    id: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
