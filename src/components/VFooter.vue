<template>
  <div class="container-fluid">
    <v-link />
    <div>Copyright © 2022 Liang-Ting Huang.</div>
  </div>
</template>
<script>
import VLink from "./child/VLink";
export default {
  name: "VFooter",
  components: {
    VLink,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
$gray: #888888;
.container-fluid {
  margin-top: 50px;
  color: $gray;
  background-color: #dbdcdc;
  padding: 2.5% 0;
  font-weight: 500;
}
</style>
