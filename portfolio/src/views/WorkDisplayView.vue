<template>
  <section class="work flex">
    <section class="img">
      <RouterLink to="/work" class="goBack">&#10554; Go Back</RouterLink>
      <HeadlineComp :pageHeadline="getCase.Title" />
      <CaseDisplayComp
        class="mainImg"
        :imgSrc="getCase.SummaryImg"
        :altTXT="getCase.Title"
      />
    </section>
    <section class="txt">
      <article class="flex">
        <button
          class="tabsDisplay"
          v-for="(casePar, i) in getCase.paragraphs"
          :key="i"
          :id="casePar.paragraphId"
          @click.prevent="getParagraphTXT(casePar.paragraphId)"
        >
          {{ casePar.paragraphHeadline }}
        </button>
      </article>
      <div id="break"></div>
      <section v-if="parObj" class="parSection">
        <h3 class="parTitle">{{ parObj.sectTitle }}</h3>
        <section class="intro">{{ parObj.Intro }}</section>
        <section class="subs" v-for="(section, i) in parObj.Sections" :key="i">
          <h4>
            {{ section.headline }}
          </h4>
          <p>{{ section.text }}</p>
        </section>
      </section>
      <button @click="parObj = null" v-if="parObj" class="goToOverview">
        &#10554; Back to Overview
      </button>
      <!-- <section v-else class="parSection">
        <h3 class="parTitle">{{ getFirstPar.sectTitle }}</h3>
        <section class="intro">{{ getFirstPar.Intro }}</section>
        <section
          class="subs"
          v-for="(section, i) in getFirstPar.Sections"
          :key="i"
        >
          <h4>
            {{ section.headline }}
          </h4>
          <p>{{ section.text }}</p>
        </section>
      </section> -->
      <section v-else class="parSection">
        <h3 class="parTitle">{{ getCase.Title }}</h3>
        <h4>Summary:</h4>
        <p class="intro">{{ getCase.Summary }}</p>
        <h4>Solution:</h4>
        <p>{{ getCase.Solution }}</p>
      </section>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
import HeadlineComp from "@/components/HeadlineComp.vue";
import { useCaseStore } from "@/stores/caseStore";
import { mapStores } from "pinia";
import CaseDisplayComp from "@/components/CaseDisplayImg.vue";
export default {
  name: "WorkView",
  data() {
    return {
      parTXT: [],
      parObj: null,
      isASum: true,
    };
  },
  components: {
    HeadlineComp,
    CaseDisplayComp,
  },
  computed: {
    ...mapStores(useCaseStore),
    getUrlSnippet() {
      return this.$route.params.id;
    },
    getCase() {
      return this.casesStore.getCaseByUrl(this.getUrlSnippet);
    },
    getCaseTXT() {
      return this.casesStore.getCaseByID(this.getCase.case);
    },

    getFirstPar() {
      const allCase = this.getCaseTXT;
      const first = Object.entries(allCase.content.TXT)[0][1];
      return first;
    },
  },
  methods: {
    getParagraphTXT(parID) {
      const txtArr = this.getCaseTXT.content.TXT;
      const thisParArr = Object.entries(txtArr);
      const parKeys = Object.keys(txtArr);

      if (parID === "takeaway") {
        const takeAway = this.getCaseTXT.content.takeaway;
        this.parObj = {
          sectTitle: "Take away",
          Intro: takeAway.TXT,
          Sections: {},
        };
      } else {
        parKeys.forEach((key) => {
          if (key === parID) {
            const matchedPar = thisParArr.find((match) => match[0] === key);
            this.parObj = matchedPar[1];
          } else {
            console.log("not a match");
          }
        });
      }
    },
  },
  created() {
    this.casesStore.getData();
  },
};
</script>
<style scoped>
.flex {
  display: flex;
}

.img,
.txt {
  width: 50vw;
  margin: 0;
  padding: 50px 100px;
  height: 80vh;
}
.img {
  background-image: url(@/assets/SVGs/workDisplayBlob.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.txt {
  text-align: left;
}

.tabsDisplay {
  border: none;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  font-size: 1.3rem;
  color: #022f40;
  background-color: #ffffff;
  transition: 0.3s ease-in-out;
  margin: 0 20px;
}

.tabsDisplay:hover,
.goBack:hover,
.goToOverview:hover,
.tabsDisplay:active,
.goBack:active,
.goToOverview:active {
  color: #d81e5b;
  cursor: pointer;
}

#break {
  background-image: url(@/assets/SVGs/breakPink.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 50px;
}

.parTitle {
  color: #d81e5b;
  margin: 50px 0;
  font-family: "Playfair Display", serif;
  font-weight: 600;
}

.parSection {
  overflow: auto;
  height: 65vh;
  padding: 20px;
}

::-webkit-scrollbar {
  width: 40px;
  display: block;
}

::-webkit-scrollbar-track {
  background-color: #eba303;
  width: 10px;
  border: solid 15px #ffffff;
  border-radius: 100px;
}

::-webkit-scrollbar-thumb {
  background-image: url(@/assets/SVGs/scroll.svg);
  background-size: contain;
  background-position: 0 40px;
  background-repeat: no-repeat;
  border-radius: 5px;
}

.work {
  margin: 10px 0 50px 0;
}

.goBack {
  width: 150px;
  text-decoration: none;
  color: #022f40;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  transition: 0.3s ease-in-out;
}

.goToOverview {
  border: none;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  font-size: 1.3rem;
  color: #022f40;
  background-color: #ffffff;
  transition: 0.3s ease-in-out;
  margin: 20px 0;
}
</style>
