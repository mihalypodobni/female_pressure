<template>
  <div>
    <Header />
    <b-container class="mt-5 body-container">
      <!-- RELAUNCH TSHIRT -->
      <div class="relaunch-tshirt mb-5">
        <h2>female:pressure relaunch t-shirt</h2>

        <h5>To celebrate our new website, here is a new t-shirt</h5>
        <div class="d-flex mw-100">
          <img
              class="flex-img mr-3"
              src="../../assets/merch/fp_t-anthrazite.png"
              alt="relaunch tshirts grey"
          />
        </div>
      </div>
      <!-- CANT DECIDE -->
      <div class="cant-decide my-5">
        <h2>female:pressure cant decide</h2>
        <div class="d-flex mw-100">
          <img
              class="flex-img mr-3"
              src="../../assets/merch/fp_t-embroded-1.jpg"
              alt=" woman wearing female pressure tshirt 210"
          />
          <img
              class="flex-img mr-3"
              src="../../assets/merch/fp_t-embroded-2.jpg"
              alt=" woman wearing female pressure tshirt 210"
          />
          <img
              class="flex-img mr-3"
              src="../../assets/merch/fp_t-embroded-3.jpg"
              alt=" woman wearing female pressure tshirt 210"
          />
        </div>
        <figcaption class="figure-caption mb-3">
          Photos above (credit: Aiko Okamoto) shows Tori (VANI-T), a DJ, producer
          and organizer of the wueer party Climax. Tori expects form
          female:pressure to keep providing an integral platform and pushing each
          other
        </figcaption>
        <h5>
          Fresh mint x white t-shirt for female:pressure members & supporters!
          female:pressire is a transnational network and dtabase of artists and
          culturual workers who operate in electronic music and visual arts
        </h5>
        <button class="button">more info</button>
      </div>
      <!-- ARCHIVE -->
      <div class="archive-tab p-0 m-0">
        <h3 class="archive-title m-0">archive</h3>
      </div>

      <!-- 21Years     -->
      <div class="21y mt-4">
        <h4>Here are a few of the T-shirts we did in the past</h4>
        <div class="d-flex mw-100 mt-4">
          <img
              class="flex-img mr-3"
              src="../../assets/merch/FP21_TShirt_3.jpg"
              alt=" woman wearing female pressure tshirt 210"
          />
          <img
              class="flex-img"
              src="../../assets/merch/FP21_TShirt_1.jpg"
              alt=" woman wearing female pressure tshirt 210"
          />
        </div>
        <figcaption class="figure-caption">
          Photos above show C-Refund(aka Sarah) taking it easy in her studio,
          enjoying our new female:pressure T-shirt in Caribbean blue
          <b-link href="http://co-re-studio.com/" target="_blank"
          >@ core studio</b-link
          >
        </figcaption>
      </div>
      <div class="20y mt-5">
        <div class="d-flex mw-100 mt-5">
          <div class="out-stock">
            <img
                class="flex-img"
                src="../../assets/merch/fp_t-anthrazite.png"
                alt=" woman wearing female pressure tshirt 210"
            />
            <figcaption class="figure-caption">
              female:pressure 21y t-shirt
            </figcaption>
          </div>
          <div class="out-stock">
            <img
                class="flex-img mr-3"
                src="../../assets/merch/t-shirt-20-1.png"
                alt=" woman wearing female pressure tshirt 210"
            />
            <figcaption class="figure-caption">
              female:pressure 20y t-shirt
            </figcaption>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/header/Header"
import {mapMutations} from "vuex";

export default {
  components: {
    Header
  },
  methods: {
    ...mapMutations(["SET_PAGE"]),
  },
  mounted() {
    this.SET_PAGE('merch')
  }
}
</script>

<style lang="sass" scoped>
.flex-img
  max-width: 800px
  max-height: 300px

.out-stock
  color: black
  position: relative
  &:after
    position: absolute
    content: "OUT OF STOCK"
    top: 70%
    left: 10%
    font-size: 20px
    width: 80%
    background-color: #00FB9C
    padding: 5px
    text-align: center

.figure-caption
  color: black
  text-align: center

.button
  @include button

.archive-tab
  border-bottom: 2px solid #00FB9C

.archive-title
  background-color: #00FB9C
  width: 150px
  text-align: center
  padding: 1px 20px
</style>
