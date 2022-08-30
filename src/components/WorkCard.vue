<template>
  <div>
    <header-line :data="work" />
    <div class="container">
      <div class="row portfolio">
        <div
          v-for="(i, index) in allinfo"
          :key="index"
          class="col-xl-4 col-md-6 col-sm-12 px-md-4 pt-md-5 mt-md-0 mt-5"
        >
          <div class="card border-light h-100" style="position: relative">
            <span class="time">{{ i.time }}</span>
            <img :src="i.img" class="card-img-top" :alt="i.name" />
            <hr />
            <div class="card-body">
              <h5 class="card-title">{{ i.name }}</h5>
              <div>
                <span v-for="(tag, k) in i.tag" :key="k">{{ tag }}</span>
              </div>
              <p class="card-text pt-md-2" v-html="i.descript"></p>
            </div>
            <div class="card-footer">
              <a
                v-if="i.website"
                :href="i.website"
                class="btn btn-outline-warning"
              >
                website
              </a>
              <a v-else :href="i.github" class="btn btn-outline-warning">
                github
              </a>
            </div>
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
  name: "WorkCard",
  components: {
    HeaderLine,
  },
  data() {
    return {
      work: "Portfolio",
      allinfo: info.portfolio,
    };
  },
};
</script>
<style lang="scss" scoped>
$orange: rgb(255, 198, 92);
$white: #ffffff;
.portfolio {
  .card {
    border-radius: 20px;
    border: 3px $white solid;
    background: linear-gradient(120deg, #f3f3f3 0%, #ebedee 100%);
    .time {
      font-size: 1.5rem;
      font-weight: 700;
      position: absolute;
      top: -4%;
      left: -9%;
      color: $orange;
      background-color: $white;
      padding: 0 5% 0 10%;
      clip-path: polygon(100% 0%, 90% 50%, 100% 100%, 25% 100%, 8% 50%, 25% 0%);
    }
  }
  p {
    text-align: justify;
  }
  .card-title {
    font-weight: 500;
    font-size: 1.2rem;
    color: rgb(90, 90, 90);
  }
  .card-body {
    div {
      height: 30%;
      overflow: auto;
      span {
        display: inline-block;
        border-radius: 5px;
        margin: 3px 2px;
        padding: 3px 8px;
        background-color: $orange;
        color: $white;
        font-size: 0.6rem;
      }
    }
  }
  .card-footer {
    text-align: right;
    border: none;
    background-color: transparent;
  }
  .card-text {
    font-size: 1rem;
  }
  .btn {
    border-radius: 50px;
    padding: 3px 20px;
    border: 2px $orange solid;
    &:hover {
      color: $white;
    }
  }
}
</style>
