<template>
  <div>
    <p v-for="i in 10">Getter Value: {{ getterValue }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    getterValue() {
      return this.$store.getters["reproStore/getCount"];
    },
  },
};
</script>
