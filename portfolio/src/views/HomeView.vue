<template>
  <div class="home">
    <section id="INTRO" class="flex">
      <section id="introTXT">
        <HeadlineComp class="centre pulsate" pageHeadline="Hello there!" />
        <div class="flex wrap pDiv">
          <p
            class="word pulsate"
            v-for="{ word, i } in introStore.wordsArr"
            :key="i"
          >
            {{ word }}
          </p>
        </div>
      </section>
      <section id="introIMG">
        <img
          class="introIMGimg svgMask"
          src="../assets/images/background.png"
          alt="background"
        />
      </section>
    </section>
    <section id="WORKINTROOUT">
      <div class="content" id="WORKINTRO">
        <HeadlineComp class="centre" pageHeadline="My Work" />
        <div id="casesDiv" class="flex">
          <article
            class="case"
            v-for="newCase in casesStore.casesSum"
            :key="newCase.case"
            :style="newCase.positon"
            :id="newCase.case"
          >
            <CaseImgComp
              :imgSrc="newCase.SummaryImg"
              :altTXT="newCase.Title"
              :id="newCase.case"
              class="imgIntroWork"
            />

            <RouterLink :to="`/work/${newCase.url}`" class="titleCase">{{
              newCase.Title
            }}</RouterLink>
          </article>
        </div>
        <RouterLink to="/work" class="intBtn btn"
          >Check out the projects</RouterLink
        >
      </div>
    </section>
    <section id="CONINTRO" class="flex">
      <article id="textCon">
        <HeadlineComp class="centre" pageHeadline="Let's get in touch" />
        <p>If you are intrested in my work, I'd love to hear from you.</p>
        <RouterLink to="/contact" class="intBtn btn" id="conBtn"
          >Let's get in touch</RouterLink
        >
      </article>
      <article id="imgCon"></article>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadlineComp from "@/components/HeadlineComp.vue";
import { useCaseStore } from "@/stores/caseStore";
import { mapStores } from "pinia";
import CaseImgComp from "@/components/CaseIntroImg.vue";
import { useIntroStore } from "@/stores/introTextStore";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {
    HeadlineComp,
    CaseImgComp,
  },
  methods: {},
  computed: {
    ...mapStores(useCaseStore),
    ...mapStores(useIntroStore),
  },
  created() {
    this.casesStore.getData();
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: row;
}

@keyframes pulsateColor {
  0% {
    color: #f7d7d7;
  }
  25% {
    color: #faf6df;
  }
  50% {
    color: #e1fcf2;
  }
  75% {
    color: #e6e6fc;
  }
  100% {
    color: #fcd9f4;
  }
}

.pulsate {
  animation: pulsateColor 6000ms ease-in-out infinite;
}
.word {
  margin: 0.3rem;
}

@keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.wrap {
  flex-wrap: wrap;
}
.introIMGimg,
#introIMG,
#introTXT,
#textCon,
#imgCon {
  width: 50vw;
  height: auto;
}
#introTXT {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
  font-size: 2rem;
  color: #ffffff;
}

#INTRO {
  background-image: url(@/assets/SVGs/introBack.svg);
  background-size: cover;
  background-repeat: no-repeat;
}

.svgMask {
  -webkit-mask-image: url(@/assets/SVGs/blob.svg);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: fit;

  mask-image: url(@/assets/SVGs/blob.svg);
  mask-repeat: no-repeat;
  mask-size: fit;
}

#WORKINTROOUT {
  background-image: url(@/assets/SVGs/arrowBack.svg);
  background-size: contain;
  background-repeat: no-repeat;
  height: 100vh;
  /*padding: 200px 0;*/
  padding: 130px 0;
  /*margin: 100px 0 0 0;*/
  margin: 100px 0;
}

#WORKINTRO {
  padding: 50px;
  background-image: url(@/assets/SVGs/blobWork.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 70vh;
}

.titleCase {
  text-decoration: none;
  color: inherit;
  font-family: "Playfair Display", "serif";
  font-weight: 600;
  font-size: 1.5rem;
}

#casesDiv {
  justify-content: space-around;
  margin: 50px 0 150px 0;
}

.centre {
  text-align: center;
}

.case {
  background-color: #95c9fd;
  width: 450px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  transition: 0.2s all;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}


#case1:hover {
  z-index: 5;
  background-color: #64b2ff;
  transform: rotate(-10deg) translate(250px, 150px) !important;
}
#case2:hover {
  z-index: 5;
  background-color: #64b2ff;
  transform: translate(0px, -50px) !important;
}
#case3:hover {
  z-index: 5;
  background-color: #64b2ff;
  transform: rotate(10deg) translate(-250px, 150px) !important;
}

.imgIntroWork {
  margin: 10px 25px;
}

#CONINTRO {
  margin: 0 0 100px 0;
}

#textCon {
  background-image: url(@/assets/SVGs/blobContact.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
  height: 65vh;
}

#imgCon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(@/assets/images/image-me-withfloor.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 50vw;
  height: 65vh;
}
.intBtn {
  margin: 50px 0;
}

#conBtn {
  margin: 50px calc(25vw - 110px);
}
</style>
