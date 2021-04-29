<template>
  <div class="mb-5 nav-fill w-100 full-navbar">
    <b-navbar type="light" class="justify-content-center" v-if="!$store.state.admin">
      <b-navbar-nav justified class="nav-items ">
        <b-nav-item
            v-if="dashboard === true"
            href="#"
            @click="$emit('navigate','dashboard')"
            :class="{ active: activeApp === 'dashboard' }">
          Dashboard
        </b-nav-item>
        <b-nav-item
            v-if="orders === true"
            href="#"
            @click="$emit('navigate','orders')"
            :class="{ active: activeApp === 'orders' }">
          Orders
        </b-nav-item>
        <b-nav-item
            v-if="classification === true"
            href="#"
            @click="$emit('navigate','classification')"
            :class="{active: activeApp === 'classification'}">
          Cosmetic Classification
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
