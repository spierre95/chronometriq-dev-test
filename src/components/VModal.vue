<template>
  <div>
    <b-modal :id="id" :title="title" :hideFooter="showFooter">
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
    showFooter: {
        type: Boolean,
        default: true
    }
  },
};
</script>
