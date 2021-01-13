<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="mr-3">Submit </b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
