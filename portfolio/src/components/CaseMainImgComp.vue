<template>
  <article class="case">
    <section id="mainImg">
      <img :src="`./assets/cases/${imgSrc}`" :alt="altTXT"  />
    </section>
  </article>
</template>
<script>
export default {
  name: "CaseMainImgComp",
  props: {
    imgSrc: String,
    altTXT: String,
  },
};
</script>

<style scoped>
img {
  width: 20vw;
}
</style>
