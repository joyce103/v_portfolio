<template>
  <ul class="line" v-for="(i, index) in data" :key="index">
    <li class="title">
      <div>
        {{ i.title }}
      </div>
    </li>
    <li class="time">{{ i.time }}</li>
    <div class="descript" v-html="i.descript"></div>
  </ul>
</template>
<script>
export default {
  name: "TimeLine",
  props: {
    data: Array,
  },
};
</script>
<style lang="scss" scoped>
.line {
  position: relative;
  text-align: left;
  list-style-type: none;
  padding: 0 100px;
  line-height: 30px;
  ::before {
    content: "";
    background: #fcd39f;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 80%;
    z-index: 300;
  }
  .title {
    color: #898989;
    font-weight: 700;
    font-size: 1.1rem;
    ::before {
      content: "";
      background: #f7d3a4;
      display: inline-block;
      position: absolute;
      border-radius: 50%;
      left: 18px;
      width: 25px;
      height: 25px;
      z-index: 300;
    }
  }
  .time {
    color: #b2b2b2;
  }
  .descript {
    color: #9b9b9b;
  }
}
</style>
