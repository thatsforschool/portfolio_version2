import { defineStore } from "pinia";
import impCaseSum from "@/assets/data/casesSummary";
import impCase from "@/assets/data/cases";

export const useCaseStore = defineStore("cases", {
  state() {
    return {
      casesSum: [],
      casesTXT: [],
    };
  },
  actions: {
    getData() {
      this.casesSum = impCaseSum;
      console.log();
      this.casesTXT = impCase;
    },
    getCaseByUrl(paramUrl) {
      return this.casesSum.find((getCase) => getCase.url === paramUrl);
    },
    getCaseByID(caseID){
      return this.casesTXT.find((txtCase) => txtCase.id === caseID);
    }
  },
  getters: {},
});
