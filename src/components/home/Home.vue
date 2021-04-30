<template>
    <b-container fluid="xl">
      <b-card class="mt-5">
        <b-card-text>
          <div v-if="$store.state.isMobile">mobile screen</div>
          <div v-else>desktop screen</div>
        </b-card-text>
      </b-card>
    </b-container>
</template>
