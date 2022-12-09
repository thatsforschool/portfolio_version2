<template>
  <section>
    <header>
      <nav id="navigationMain" >
        <router-link to="/" class="logo"></router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/work">Work</router-link>
        <!-- <router-link to="/CV">CV</router-link> -->
        <a href="./assets/CVZuzanna_Zyla.pdf" download>CV</a>
      </nav>
      <router-view />
    </header>
    <div class="catTop">
      <a href="https://www.linkedin.com/in/zuzanna-zyla-209305253/">
        <img
          src="../src/assets/images/catLi.png"
          alt="catImg"
          class="catImg navTop"
      /></a>

      <!-- <img src="../public/cases/case1Sum.png" alt=""> -->
    </div>
    <footer>
      <p>&copy; Zuzanna Zyla 2022</p>
      <section id="footerNav">
        <router-link to="/contact" class="aFnav">Contact</router-link>
        <router-link to="/work" class="aFnav">Work</router-link>
        <router-link to="/CV" class="aFnav">CV</router-link>
      </section>
    </footer>
  </section>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  methods: {
    goToTop() {
      const nav = document.getElementById("navigationMain");
      nav.scrollIntoView();
    },
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #022f40;
  font-size: 20px;
}

body {
  background-color: #ffffff;
  margin: 0;
  font-size: 16px;
}



nav {
  top: 0;
  position: sticky;
  display: flex;
  background-color: #ffffff;
  z-index: 10;
}

nav a {
  font-family: "Playfair Display", serif;
  font-weight: 600;
  font-size: 2rem;
  text-decoration: none;
  color: #022f40;
  padding: 20px;
}

nav a.router-link-exact-active {
  color: #d81e5b;
}
nav a:hover {
  color: #eba303;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

.logo {
  background-image: url("./assets/logo.svg");
  background-repeat: no-repeat;
  background-position: 0 27px;
  background-size: 70px;
  width: 70px;
  padding: 0;
  margin: 0 20px 0 100px;
}

.catTop {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 10;
}

.catImg {
  width: 200px;
  position: fixed;
  right: 20px;
  bottom: 10px;
  transition: 0.3s ease-in-out;
}

.catImg:hover {
  transform: scale(110%);
}

.btn {
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 10px;
  width: 200px;
  background-color: #d81e5b;
  color: #ffffff;
  font-family: "Playfair Display", "serif";
  font-weight: 600;
  transition: 0.5s ease-in-out;
}

.btn:hover {
  background-color: #eba303;
  color: #022f40;
}

footer {
  display: flex;
  justify-content: space-between;
  background-color: #022f40;
  color: #ffffff;
  padding: 10px;
}

footer > p {
  margin: 20px;
}

#footerNav {
  display: flex;
  margin: 0 200px;
}

.aFnav {
  margin: 20px;
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  transition: 0.3s ease-in-out;
}

.aFnav:hover {
  color: #eba303;
}


</style>
