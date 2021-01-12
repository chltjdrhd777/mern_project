<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Admin Dashboard</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
        <b-icon-box-arrow-in-right
          class="header_signin"
        ></b-icon-box-arrow-in-right>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-button
              size="sm"
              class="my-2 my-sm-0 header_signin"
              type="submit"
              variant="dark"
              >Signin</b-button
            >
          </b-nav-form>
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
