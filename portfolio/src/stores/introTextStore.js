import { defineStore } from "pinia";

export const useIntroStore = defineStore("intro", {
  state() {
    return {
      wordsArr: [
        { id: 1, word: "I'm" },
        { id: 2, word: "a" },
        { id: 3, word: "multimedia" },
        { id: 4, word: "design" },
        { id: 5, word: "student" },
        { id: 6, word: "with" },
        { id: 7, word: "great" },
        { id: 8, word: "passion" },
        { id: 9, word: "for" },
        { id: 10, word: "frontend" },
        { id: 11, word: "and" },
        { id: 12, word: "I" },
        { id: 13, word: "strive" },
        { id: 14, word: "every" },
        { id: 15, word: "day" },
        { id: 16, word: "to" },
        { id: 17, word: "become" },
        { id: 18, word: "better" },
        { id: 19, word: "at" },
        { id: 20, word: "what" },
        { id: 21, word: "love" },
        { id: 22, word: "to" },
        { id: 23, word: "do" },
      ],
    };
  },
  actions: {
  },
  getters: {},
});
