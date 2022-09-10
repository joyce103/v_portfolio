<template>
  <div>
    <header-line :data="contact" />
    <a :href="email" class="text">{{ email }}</a>
  </div>
</template>

<script>
import info from "../../store";
import HeaderLine from "./child/HeaderLine";
export default {
  name: "VContact",
  components: {
    HeaderLine,
  },
  data() {
    return {
      contact: "Contact",
      email: info.email,
    };
  },
};
</script>

<style scoped lang="scss">
.text {
  color: #888888;
}
</style>
