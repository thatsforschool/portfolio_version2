<template>
  <article
    v-for="newCase in casesStore.casesSum"
    :key="newCase.case"
    :class="`${newCase.case} workDis flex`"
  >
    <section class="imgSection1">
    </section>
    <section
      class="textSection"
    >
      <CaseMainImgComp :imgSrc="newCase.SummaryImg" :altTXT="newCase.Title" />
      <HeadlineComp :pageHeadline="newCase.Title" class="centre" />
      <RouterLink :to="`/work/${newCase.url}`" class="btn">See more</RouterLink>
    </section>
    <section class="imgSection2"></section>
  </article>
</template>

<script>
// @ is an alias to /src
import HeadlineComp from "@/components/HeadlineComp.vue";
import { useCaseStore } from "@/stores/caseStore";
import { mapStores } from "pinia";
import CaseMainImgComp from "@/components/CaseMainImgComp.vue";
import { useIntroStore } from "@/stores/introTextStore";
export default {
  name: "WorkView",
  data() {
    return {
    };
  },
  components: {
    HeadlineComp,
    CaseMainImgComp,
  },
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

.centre {
  text-align: center;
}

.case1 {
  margin: 100px;
  height: 25vw;
}
.case2 {
  margin: 100px;
  height: 25vw;
}

.case3 {
  margin: 100px 25vw;
}


.textSection,
.case2 > .imgSection1,
.case1 > .imgSection2 {
  width: 50vw;
}

.case1 > .textSection {
  background-image: url(@/assets/SVGs/workBlob1.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.case1 > .imgSection2 {
  background-image: url(@/assets/SVGs/arrWork1.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.case2 > .textSection {
  background-image: url(@/assets/SVGs/workBlob2.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.case2 > .imgSection1 {
  background-image: url(@/assets/SVGs/arrWork2.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.case3 > .textSection {
  background-image: url(@/assets/SVGs/workBlob3.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
