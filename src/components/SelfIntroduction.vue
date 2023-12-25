<template>
  <div class="container outer">
    <div class="banner_text">LIANG.</div>
    <div class="col">
      <div class="banner_img">
        <img :src="bannerimg" class="img-fluid" />
      </div>
      <div class="row content">
        <div class="col-xl-6 col-md-8 d-flex align-items-end">
          <p>{{ about }}</p>
        </div>
        <div class="col-xl-6 col-md-4 pt-md-0 pt-3">
          <a
            class="scroll"
            href="/about"
            @click.prevent="$emit('scroll', 'about')"
          >
            SCROLL.
          </a>
          <v-link class="mt-md-5" />
        </div>
      </div>
    </div>
  </div>
  <div class="square"></div>
</template>

<script>
import info from "../../store";
import VLink from "./child/VLink";
export default {
  name: "SelfIntroduction",
  components: {
    VLink,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      bannerimg: info.bannerimg,
      about: info.about,
    };
  },
  created() {
    window.addEventListener("scroll", () => {
      const square = document.querySelector(".square");
      let top = window.pageYOffset;
      let sum = top + 130;
      square.style.background =
        "rgba(" + sum + "," + sum + "," + sum + ", 0.5)";
    });
  },
};
</script>

<style scoped lang="scss">
@mixin pad {
  @media (max-width: 1099px) {
    @content;
  }
}
@mixin phone {
  @media (max-width: 767px) {
    @content;
  }
}
.outer {
  position: relative;
  padding: 5% 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  z-index: 1;
  @include pad {
    height: 85vh;
  }
  @include phone {
    height: 80vh;
  }
  .banner_text {
    color: #9e9f9f;
    font-size: 7.5vw;
    font-weight: 100;
    writing-mode: vertical-lr;
    text-orientation: mixed;
    letter-spacing: 1rem;
    // animation: crowd alternate 1s infinite;
    // -webkit-animation: crowd alternate 1s infinite;
    @include phone {
      display: none;
    }
    @include pad() {
      display: none;
    }
  }
  .banner_img {
    margin-top: 5%;
    text-align: right;
    img {
      width: 45%;
      @include pad {
        width: 100%;
        padding: 0;
      }
    }
  }
  .content {
    color: #888888;
    line-height: 2rem;
    margin-top: 5%;
    z-index: 3;
    @include pad {
      padding: 0%;
    }
    @include phone {
      top: 50%;
      padding: 0% 5% 5% 5%;
      left: 0;
      margin: 0;
    }
    p {
      padding: 0 3vw;
      text-align: justify;
      @include phone() {
        padding: 10vw 0;
      }
      @include pad() {
        padding: 3vw 0;
      }
    }
    a {
      writing-mode: vertical-lr;
      text-orientation: mixed;
      letter-spacing: 0.4rem;
      font-size: 1.2rem;
      right: 0;
      position: absolute;
      color: #b4b4b5;
      text-decoration: none;
      transition: 0.5s;
      &:hover {
        letter-spacing: 0.3rem;
      }
      @include phone {
        writing-mode: horizontal-tb;
        border-left: none;
        border-bottom: 2px #ffffff solid;
      }
    }
  }
}
.square {
  position: absolute;
  width: 9vw;
  height: 9vw;
  z-index: 0;
  top: 45%;
  left: 53%;
  background-color: rgba(130, 130, 130, 0.5);
  @include phone {
    top: 65%;
    left: 65%;
  }
  @include pad {
    top: 10%;
    left: 10%;
    width: 100px;
    height: 100px;
  }
}
.scroll {
  @include phone() {
    display: none;
  }
  @include pad() {
    display: none;
  }
}
@keyframes crowd {
  0% {
    letter-spacing: 1rem;
  }
  100% {
    letter-spacing: 0.8rem;
  }
}
@-webkit-keyframes crowd {
  0% {
    letter-spacing: 1rem;
  }
  100% {
    letter-spacing: 0.8rem;
  }
}
</style>
