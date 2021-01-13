<template>
  <div>
    <b-form>
      <div class="d-flex">
        <b-form-group
          id="input-group-1"
          label="First Name:"
          label-for="input-1"
          class="mr-3"
        >
          <b-form-input
            id="input-1"
            type="text"
            placeholder="First Name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            type="text"
            placeholder="Last Name"
            required
          ></b-form-input>
        </b-form-group>
      </div>

      <b-form-group id="input-group-3" label="Your Email:" label-for="input-3">
        <b-form-input
          id="input-3"
          placeholder="Enter Email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Your Password:"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          placeholder="Enter Password"
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
