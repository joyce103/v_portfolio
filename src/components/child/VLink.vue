<template>
  <div class="pb-md-3">
    <a :href="link.github" class="icon">
      <i class="fa-brands fa-github"></i>
    </a>
    <a :href="link.resume" class="icon">
      <i class="fa-regular fa-file-lines"></i>
    </a>
    <a :href="link.issuu" class="icon">
      <i class="fa-solid fa-book-bookmark"></i>
    </a>
  </div>
</template>
<script>
import info from "../../../store";
export default {
  name: "VLink",
  data() {
    return {
      link: info.links,
    };
  },
};
</script>
<style lang="scss" scoped>
$gray: #888888;
.icon {
  width: 45px;
  height: 45px;
  border-radius: 999rem;
  border: 1.5px $gray solid;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: $gray;
  margin: 0 3px;
  &:hover {
    background-color: #ffffff;
  }
}
</style>
