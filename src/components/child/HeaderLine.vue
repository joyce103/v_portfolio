<template>
  <div class="container">
    <div>
      <h2>{{ data }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderLine",
  props: {
    data: String,
  },
};
</script>
<style lang="scss" scoped>
$deep: #898989;
@mixin pad {
  @media (max-width: 820px) {
    @content;
  }
}
.container {
  padding: 100px 0 50px 0;
  @include pad {
    padding: 100px 0 20px 0;
  }
  div {
    padding: 0 40%;
    @include pad {
      padding: 0 20%;
    }
  }
  h2 {
    color: $deep;
    padding-bottom: 5px;
    border-bottom: 2px #ffffff solid;
  }
}
</style>
