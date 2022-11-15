<template>
  <div>{{msg}}</div>
  <main class="flex">
    <article class="txt"></article>
    <article class="img">
      <img src="" alt="">
    </article>
  </main>
</template>

<script>

export default {
  name: "mainCom",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
