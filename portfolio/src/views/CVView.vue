<template>
  <div class="CV">
    <HeadlineComp class="centre" pageHeadline="My CV" />
    <section class="main flex">
      <section class="imgSec"></section>
      <section class="cvSec">
        <p>I'm multimedia design student and an aspiring frontend developer. I'm a motivated person eager
          to learn new things and deepen the knowledge I already have.</p>
        <iframe src="@/assets/CVZuzanna_Zyla.pdf" style="width:500px"></iframe>
      </section>
    </section>
  </div>
</template>

<script>
import HeadlineComp from "@/components/HeadlineComp.vue";

// @ is an alias to /src

export default {
  name: "CVView",
  components: {
    HeadlineComp,
  },
};
</script>
<style scoped>
.flex {
  display: flex;
}

.imgSec,
.cvSec {
  width: 50vw;
  margin: 0;
}

.imgSec {
  background-image: url(@/assets/images/image-me-withfloor.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
