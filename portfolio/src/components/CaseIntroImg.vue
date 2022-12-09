<template>
  <img :src="`./assets/cases/${imgSrc}`" :alt="altTXT" :id="idImg" />
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: "CaseImgComp",
  props: {
    imgSrc: String,
    altTXT: String,
    idImg: String,
  },
};
</script>

<style scoped>
img {
  max-width: 400px;
  border-radius: 10px;
}

#case3 {
  max-width: 200px;
  margin: 0 125px;
}
</style>
