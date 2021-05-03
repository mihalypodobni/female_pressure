<template>
  <b-dropdown variant="link" class="p-0 w-100" right text="Right align" toggle-class="text-decoration-none" no-caret>
    <template #button-content>
            <span class="link">
              User Settings
            </span>
    </template>
    <b-dropdown-item>First Action</b-dropdown-item>
    <b-dropdown-item>Second Action</b-dropdown-item>
    <b-dropdown-item>Third Action</b-dropdown-item>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
  </b-dropdown>
<!--  <form class="dropdown-menu p-4">-->
<!--    <div class="form-group">-->
<!--      <label for="exampleDropdownFormEmail2">Email address</label>-->
<!--      <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">-->
<!--    </div>-->
<!--    <div class="form-group">-->
<!--      <label for="exampleDropdownFormPassword2">Password</label>-->
<!--      <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">-->
<!--    </div>-->
<!--    <div class="form-check">-->
<!--      <input type="checkbox" class="form-check-input" id="dropdownCheck2">-->
<!--      <label class="form-check-label" for="dropdownCheck2">-->
<!--        Remember me-->
<!--      </label>-->
<!--    </div>-->
<!--    <button type="submit" class="btn btn-primary">Sign in</button>-->
<!--  </form>-->
</template>

<style lang="sass">
.login_nav
  > .dropdown
    > .btn
      padding: 0
    > .dropdown-menu
      top: 15px!important
      right: 15px!important

</style>

<style lang="sass" scoped>
.link
  cursor: pointer
  color: black!important
  text-decoration: none!important
  &:hover
    text-decoration: none!important
</style>