<template>
  <div class="home">
    <mainCom msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import mainCom from "@/components/mainCom.vue";

export default {
  name: "HomeView",
  components: {
    mainCom,
  },
};
</script>
