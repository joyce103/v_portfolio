<template>
  <div>
    <header-line :data="about" />
    <div class="liner">
      <svg x="0px" y="0px" width="70%" height="20%" viewBox="0 0 1550 200">
        <path
          fill="none"
          stroke="#FFFFFF"
          stroke-width="6"
          stroke-miterlimit="10"
          d="M-254,96.503c0,0,326-166,578-50c252,116,431.409,206,580.705,98c149.295-108,475.295,114,645.295-92"
        />
      </svg>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <TimeLine :data="education" />
        </div>
        <div class="col-md-6">
          <TimeLine :data="experience" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import info from "../../store.js";
import TimeLine from "./child/TimeLine";
import HeaderLine from "./child/HeaderLine";
export default {
  name: "AboutMe",
  components: {
    TimeLine,
    HeaderLine,
  },
  data() {
    return {
      about: "About Me",
      education: info.education,
      experience: info.experience,
    };
  },
};
</script>
<style lang="scss" scoped>
@mixin phone {
  @media (max-width: 820px) {
    @content;
  }
}
.liner {
  padding: 0 0 10% 0;
  @include phone {
    padding: 0 0 25% 0;
  }
}
svg {
  position: absolute;
  left: 0;
  animation: liner_ani forwards 8s infinite;
  -webkit-animation: liner_ani forwards 8s infinite;
  stroke-dasharray: 70;
  stroke-dashoffset: 2100;
}
@keyframes liner_ani {
  from {
    stroke-dashoffset: 2100;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@-webkit-keyframes liner_ani {
  from {
    stroke-dashoffset: 2100;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
