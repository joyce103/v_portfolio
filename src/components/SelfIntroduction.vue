<template>
  <div class="container outer">
    <span class="banner_text">LIANG.</span>
    <div class="banner_img">
      <img :src="bannerimg" class="img-fluid" />
    </div>
    <div class="square"></div>
    <div class="row content">
      <div class="col-md-6 d-flex align-items-end">
        <p>{{ about }}</p>
      </div>
      <div class="col-md-6 pt-md-0 pt-3">
        <a href="/about" @click.prevent="$emit('scroll', 'about')">scroll.</a>
        <v-link class="mt-md-5" />
      </div>
    </div>
  </div>
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
};
</script>

<style scoped lang="scss">
@mixin pad {
  @media (max-width: 912px) {
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
  padding: 10% 0 0 0;
  height: 100vh;
  @include pad {
    height: 80vh;
  }
  @include phone {
    height: 100vh;
  }
  .banner_text {
    color: #9e9f9f;
    font-size: 7rem;
    font-weight: 100;
    writing-mode: vertical-lr;
    text-orientation: mixed;
    letter-spacing: 1rem;
    position: absolute;
    top: 20%;
    left: -5%;
    z-index: 3;
    @include phone {
      font-size: 5rem;
    }
  }
  .banner_img {
    padding: 5% 0 5% 5%;
    text-align: right;
    position: absolute;
    top: 10%;
    right: 0;
    z-index: 2;
    img {
      width: 45%;
      @include pad {
        width: 100%;
        padding: 0;
      }
    }
  }
  .square {
    position: absolute;
    width: 10%;
    height: 19%;
    z-index: 1;
    top: 60%;
    left: 50%;
    background-color: #dbdcdc;
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
  .content {
    color: #888888;
    line-height: 2rem;
    padding: 0 0 0 5%;
    position: absolute;
    bottom: 0;
    left: 5%;
    z-index: 3;
    @include pad {
      padding: 0%;
    }
    @include phone {
      top: 50%;
      padding: 10% 5% 5% 5%;
      left: 0;
      margin: 0;
    }
    p {
      text-align: justify;
    }
    a {
      writing-mode: vertical-lr;
      text-orientation: mixed;
      letter-spacing: 0.5rem;
      font-size: 1.2rem;
      right: 0;
      position: absolute;
      border-left: 2px #ffffff solid;
      color: #b4b4b5;
      text-decoration: none;
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
</style>
