<template>
  <nav-bar @scroll="scrollTo" />
  <self-introduction id="SelfIntroduction" @scroll="scrollTo" />
  <about-me id="about" />
  <about-skills id="skills" />
  <work-card id="portfolio" />
  <v-contact id="contact" />
  <v-footer />
</template>
<script>
import NavBar from "./components/NavBar.vue";
import AboutMe from "./components/AboutMe";
import AboutSkills from "./components/AboutSkills";
import SelfIntroduction from "./components/SelfIntroduction";
import WorkCard from "./components/WorkCard";
import VContact from "./components/VContact";
import VFooter from "./components/VFooter";

export default {
  name: "App",
  components: {
    NavBar,
    SelfIntroduction,
    AboutMe,
    AboutSkills,
    WorkCard,
    VContact,
    VFooter,
  },
  methods: {
    scrollTo(ele) {
      if (ele == "SelfIntroduction") {
        this.$router.push(`/v_portfolio/`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        var elementPosition = document.getElementById(ele).offsetTop;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
        this.$router.push(`/v_portfolio/${ele}`);
      }
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f3f3f3;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
