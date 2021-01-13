<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="px-10">
      <b-navbar-brand href="/">Admin Dashboard</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
        <b-icon-box-arrow-in-right
          class="header_signin"
        ></b-icon-box-arrow-in-right>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav class="mr-3">
            <b-nav-item href="/signin" class="mr-3">signin</b-nav-item>
            <b-nav-item href="/signup">signup</b-nav-item>
          </b-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header_signin {
  color: lightcyan;
}
</style>
