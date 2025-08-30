<script setup>
import AppContainer from './AppContainer.vue'
import DecorCircle from './decors/DecorCircle.vue'
import DecorPlus from './decors/DecorPlus.vue'
</script>

<template>
  <section class="app-strategy">
    <AppContainer class="app-strategy__container app-container--big">
      <div class="app-strategy__content">
        <div class="app-strategy__text-content">
          <h2 class="app-strategy__title">
            <span class="highlight">Who will</span> do it for you?
          </h2>
          <p class="app-strategy__text">
            Our team of skilled developers, designers, and strategists work collaboratively to
            create user-friendly and visually stunning e-commerce platforms that captivate your
            customers and drive conversions. Leveraging the latest technologies and industry best
            practices, we ensure seamless integration, robust security, and optimal performance.
          </p>
        </div>
        <div class="app-strategy__img-content">
          <img
            class="app-strategy__img"
            src="../assets/images/content/strategy.svg"
            alt="Black and white artwork showing a man and woman looking at a computer screen, illustrating a collaborative moment."
          />
          <DecorCircle
            class="app-strategy__decor decor app-strategy__decor--circle visible-on-mobile"
            :stroke-width="5"
            width="26"
            height="26"
            top="6%"
            left="0%"
          />
        </div>
      </div>
      <DecorCircle
        class="app-strategy__decor decor app-strategy__decor--circle visible-on-desktop"
        :stroke-width="10"
        width="51"
        height="51"
        bottom="-4%"
        left="-13%"
      />
      <DecorPlus class="visible-on-desktop" top="-7%" right="-17%" />
      <DecorPlus class="visible-on-desktop" bottom="38%" right="-12%" />
      <DecorPlus class="visible-on-desktop" top="10%" left="54%" />
      <DecorPlus class="visible-on-desktop" bottom="42%" left="-18%" />
      <DecorPlus class="visible-on-desktop" bottom="4%" left="7%" />
      <DecorPlus class="visible-on-desktop" bottom="15%" left="42%" />

      <DecorPlus class="visible-on-mobile" bottom="44%" right="29%" />
      <DecorPlus class="visible-on-mobile" bottom="2%" left="9%" />
    </AppContainer>
  </section>
</template>

<style lang="scss">
.app-strategy {
  border: 1px solid transparent;

  &__content {
    position: relative;
    @media (min-width: 1024px) {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;

      gap: toRem(42);
      margin-bottom: toRem(35);
      padding-right: toRem(43);
    }
  }
  &__text-content {
    @media (min-width: 1024px) {
      width: 56%;
      text-align: start;
    }
    h2 {
      font-size: clamp(toRem(35), 6vw, toRem(50));
      line-height: 1.4285;
      margin-bottom: toRem(20);

      @media (min-width: 768px) {
        margin-bottom: toRem(23);
      }
    }
    p {
      margin-bottom: toRem(25);
      @media (min-width: 768px) {
        font-size: toRem(20);
        line-height: 1.75;
        margin-bottom: toRem(65);
      }
    }
  }
  &__img-content {
    position: relative;
    @media (min-width: 540px) {
      text-align: center;
    }
    @media (min-width: 1024px) {
      width: 41%;
    }

    img {
      margin-bottom: toRem(3);
      @media (min-width: 1024px) {
        width: 100%;
        height: auto;
        object-fit: contain;
        margin-bottom: 0;
      }
    }
    .decorative-icon.circle {
      display: block;
      position: absolute;
      top: 7%;
      left: 0%;

      @media (min-width: 1024px) {
        display: none;
      }
    }
  }
}
</style>
