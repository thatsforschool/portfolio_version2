<template>
  <div class="contact">
    <HeadlineComp class="centre" pageHeadline="Let's get in touch !" />
    <section class="main flex">
      <section class="img">
        <img src="@/assets/images/meContact.png" alt="contct page image" />
      </section>
      <section class="form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdUdc43JJ1a0g3IwnNN3bgeCdQQXIGnuqUg1LWoaomCVug92g/viewform?embedded=true"
          width="640"
          height="800"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >Loading…</iframe
        >
      </section>
    </section>
  </div>
</template>
<script>
// @ is an alias to /src
import HeadlineComp from "@/components/HeadlineComp.vue";

export default {
  name: "ContactViewiframe",
  components: {
    HeadlineComp,
  },
};
</script>

<style scoped>
.centre {
  margin: 20px 100px;
}
.img {
  margin: 0;
  padding: 50px 100px;
}
.form {
  background-image: url(@/assets/SVGs/blobContact.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 50px 100px;
  box-sizing: border-box;
  width: 60vw;
  margin: 0;
}

.flex {
  display: flex;
}

.img > img {
  height: 800px;
}
</style>
