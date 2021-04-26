<template>
  <b-container fluid="xl">
    <b-card>
      <b-card-text>
        <div v-if="$store.state.isMobile">mobile screen</div>
        <div v-else>desktop screen</div>
      </b-card-text>
    </b-card>
  </b-container>
</template>