<template>
  <b-card
      no-body
      class="card-styling px-3 py-2 h-100">
    <div class="card-title">
      <slot name="title"></slot>
    </div>
    <slot></slot>
  </b-card>
</template>

<style lang="sass" scoped>
.card-styling
  border-radius: 0
  border: 2px solid #1fdbb7
  //height: 200px

.card-title
  color: #1fdbb7
</style>

