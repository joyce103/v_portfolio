<template>
  <nav class="navbar navbar-expand-lg bg-light py-md-3">
    <div class="container">
      <a
        class="navbar-brand"
        href="/"
        @click.prevent="$emit('scroll', 'SelfIntroduction')"
      >
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <ul class="navbar-nav">
          <li class="nav-item mx-3">
            <a
              class="nav-link"
              href="/about"
              @click.prevent="$emit('scroll', 'about')"
            >
              about
            </a>
          </li>
          <li class="nav-item mx-3">
            <a
              class="nav-link"
              href="/skills"
              @click.prevent="$emit('scroll', 'skills')"
            >
              skills
            </a>
          </li>
          <li class="nav-item mx-3">
            <a
              class="nav-link"
              href="/portfolio"
              @click.prevent="$emit('scroll', 'portfolio')"
            >
              portfolio
            </a>
          </li>
          <li class="nav-item mx-3">
            <a
              class="nav-link"
              href="/contact"
              @click.prevent="$emit('scroll', 'contact')"
            >
              contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.navbar {
  border-bottom: 1.5px rgb(218, 218, 218) solid;
  position: fixed;
  width: 100%;
  z-index: 400;
}
li {
  font-weight: 500;
  letter-spacing: 1px;
}
</style>
