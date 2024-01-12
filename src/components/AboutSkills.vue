<template>
  <div>
    <header-line :data="skills" />
    <div class="skill">
      <div class="skillimg" data-speed="1"></div>
      <div class="container-fluid skillheader pt-md-5">
        <div class="row" v-for="(i, index) in info" :key="index">
          <div class="col-md-6">
            <h3>{{ i.title }}</h3>
          </div>
          <div class="col-md-6">
            <ul v-for="(descript, j) in i.descript" :key="j">
              <li>{{ descript }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import info from "../../store";
import HeaderLine from "./child/HeaderLine";
export default {
  name: "AboutSkills",
  components: {
    HeaderLine,
  },
  data() {
    return {
      skills: "Skills",
      info: info.skills,
      skillsimg: info.skillsimg,
    };
  },
  created() {
    window.addEventListener("scroll", () => {
      const skillheader = document.querySelector(".skillheader");
      const skillimg = document.querySelector(".skillimg");
      //滑動的高度
      const scrollwindow = window.pageYOffset;
      // 照片在瀏覽器中的高度
      const scrollPositionY = skillimg.offsetHeight;
      // console.log(scrollwindow / 2 - scrol;lPositionY);
      // 宣告一個函式放兩個物件
      const parallaxScrollingElements = [skillheader, skillimg];
      parallaxScrollingElements.forEach((element) => {
        const elementMoveSpeed = Number(element.dataset.speed);
        element.style.transform = `translateY(${
          (scrollwindow / 2 - scrollPositionY) * elementMoveSpeed
        }px)`;
      });
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
$light: #b2b2b2;
$deep: #898989;
@mixin phone {
  @media (max-width: 768px) {
    @content;
  }
}
.skill {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 600px;
  @include phone {
    height: 85vh;
  }
  .skillimg {
    background-image: url("../assets/img/bg01.png");
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    position: absolute;
    left: 0;
    top: -10vw;
    z-index: 1;
    width: 100%;
    height: 100%;
    min-height: 45vw;
    @include phone {
      top: -10px;
      height: 100%;
    }
  }
  .skillheader {
    color: $deep;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 3;
    width: 100%;
    .row {
      display: flex;
      align-items: center;
      padding: 50px 0 0 0;
      height: 300px;
      @include phone {
        height: 50%;
      }
      h3 {
        text-align: center;
        color: $deep;
        @include phone {
          margin-bottom: 5%;
          padding: 5%;
          border: 2px #ffffff solid;
        }
      }
      ul {
        padding-left: 150px;
        text-align: left;
        list-style: none;
        line-height: 1rem;
        font-size: 1.2rem;
        @include phone() {
          padding-left: 0;
          text-align: center;
        }
      }
    }
  }
}
</style>
