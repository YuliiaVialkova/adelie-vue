<script setup>
import AppContainer from './AppContainer.vue'
import DecorWavyLine2 from './decors/DecorWavyLine2.vue'
import DecorThreeLines from './decors/DecorThreeLines.vue'
import DecorCircle from './decors/DecorCircle.vue'
import DecorPlus from './decors/DecorPlus.vue'
</script>

<template>
  <section class="app-promo">
    <AppContainer class="app-promo__container app-container--big">
      <div class="app-promo__content">
        <div class="app-promo__text-content">
          <h2 class="app-promo__title">
            Unlock the Power of
            <span class="highlight">Optimal</span> <span class="highlight">Solutions</span>
            for Your Business with Us!
          </h2>
          <p class="app-promo__text">
            We specialize in delivering top-notch e-commerce development solutions tailored to meet
            your unique business needs. With our extensive experience and deep understanding of the
            ever-evolving online marketplace, we are committed to helping you achieve unprecedented
            success.
          </p>
        </div>
        <div class="app-promo__img-content">
          <img
            class="app-promo__img"
            src="../assets/images/content/promo.svg"
            alt="A man and woman sit in a chair, engaged in a conversation, both smiling and appearing relaxed."
          />
          <DecorThreeLines
            class="app-promo__decor app-promo__decor--three-lines decor visible-on-mobile"
            top="-4%"
            right="0%"
            width="158"
            height="34"
          />
          <DecorCircle
            class="app-promo__decor app-promo__decor--circle-small decor visible-on-mobile"
            :stroke-width="5"
            width="30"
            height="30"
            bottom="6%"
            left="9%"
          />
        </div>
      </div>
      <DecorWavyLine2
        class="app-promo__decor app-promo__decor--wavy-line2 decor visible-on-desktop"
        bottom="-44%"
        left="41%"
      />
      <DecorPlus class="app-promo__decor visible-on-desktop" top="35%" left="-11%" />
      <DecorPlus class="app-promo__decor visible-on-desktop" bottom="6%" left="-8%" />
      <DecorPlus class="app-promo__decor visible-on-desktop" top="9%" right="-15%" />
      <DecorPlus class="app-promo__decor visible-on-desktop" top="45%" left="22%" />
      <DecorPlus class="app-promo__decor visible-on-desktop" bottom="-8%" right="25%" />
      <DecorPlus class="app-promo__decor visible-on-desktop" bottom="-9%" left="11%" />
      <DecorPlus class="app-promo__decor visible-on-desktop" top="46%" left="47%" />
      <DecorPlus class="app-promo__decor visible-on-desktop" top="46%" left="47%" />
      <DecorPlus class="app-promo__decor visible-on-desktop" bottom="28%" right="0%" />
      <DecorPlus class="app-promo__decor visible-on-desktop" bottom="33%" right="-13%" />
      <DecorPlus class="app-promo__decor visible-on-mobile" bottom="3%" right="10%" />
      <DecorPlus class="app-promo__decor visible-on-mobile" bottom="42%" left="12%" />
    </AppContainer>
  </section>
</template>

<style lang="scss">
.app-promo {
  @media (min-width: 1024px) {
    margin-top: -103px;
  }

  &__container {
    border: 1px solid transparent;
    position: relative;
  }

  &__content {
    display: flex;
    gap: 35px;
    flex-direction: column;
    @media (min-width: 1024px) {
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      gap: 27px;
      margin-bottom: toRem(35);
    }
  }
  &__text-content {
    @media (min-width: 1024px) {
      width: 54%;
      text-align: start;
    }
    h2 {
      font-size: clamp(35px, 4vw, 50px);
      line-height: 1.58;
      margin: 7px 0 18px;

      @media (min-width: 768px) {
        line-height: 1.4;
        margin-top: 46px;
        margin-bottom: 21px;
      }
    }

    p {
      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 1.75;
        margin-bottom: toRem(60);
      }
    }
  }
  &__img-content {
    position: relative;
    @media (min-width: 540px) {
      text-align: center;
    }
    @media (min-width: 1024px) {
      width: 45%;
    }
    img {
      margin-bottom: toRem(51);
      @media (min-width: 1024px) {
        width: 100%;
        height: auto;
        object-fit: contain;
        margin-bottom: 0;
      }
    }
  }

  &__decor--wavy-line2 {
    @media (min-width: 1024px) {
      display: block;
    }
  }
}
</style>
