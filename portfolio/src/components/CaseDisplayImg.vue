<template>
  <article class="case">
    <section id="mainImg">
      <img :src="`./assets/cases/${imgSrc}`" :alt="altTXT"  />
    </section>
  </article>
</template>
<script>
export default {
  name: "CaseDisplayComp",
  props: {
    imgSrc: String,
    altTXT: String,
  },
};
</script>

<style scoped>
img {
  max-width: calc(50vw - 200px);
  max-height: 600px;
}
</style>
