<template>
    <h2>{{pageHeadline}}</h2>
</template>
<script>
export default {
  name: "HeadlineComp",
  props: {
    pageHeadline: String,
  },
};
</script>

<style scoped>
h2{
    font-family:  "Playfair Display", serif;
    font-weight: 600;
    font-size: 3rem;
    text-align: left;

}
</style>
