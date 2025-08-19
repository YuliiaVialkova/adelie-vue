<script setup>
import AppContainer from './AppContainer.vue'
import IconCircle from './icons/IconCircle.vue'
import PlusIcon from './icons/PlusIcon.vue'
</script>

<template>
  <section class="app-strategy">
    <AppContainer class="wrap container--big">
      <div class="text-content">
        <h2><span class="highlight">Who will</span> do it for you?</h2>
        <p>
          Our team of skilled developers, designers, and strategists work collaboratively to create
          user-friendly and visually stunning e-commerce platforms that captivate your customers and
          drive conversions. Leveraging the latest technologies and industry best practices, we
          ensure seamless integration, robust security, and optimal performance.
        </p>
      </div>
      <div class="img-wrap">
        <img
          src="../assests/images/content/strategy.svg"
          alt="Black and white artwork showing a man and woman looking at a computer screen, illustrating a collaborative moment."
        />
        <IconCircle class="decorative-icon circle" :stroke-width="5" :size="26" />
      </div>
      <IconCircle class="decorative-icon circle" :stroke-width="10" :size="51" />
      <PlusIcon class="visible-on-desktop" top="-7%" right="-17%" />
      <PlusIcon class="visible-on-desktop" bottom="38%" right="-12%" />
      <PlusIcon class="visible-on-desktop" top="10%" left="54%" />
      <PlusIcon class="visible-on-desktop" bottom="42%" left="-18%" />
      <PlusIcon class="visible-on-desktop" bottom="4%" left="7%" />
      <PlusIcon class="visible-on-desktop" bottom="15%" left="42%" />

      <PlusIcon class="visible-on-mobile" bottom="44%" right="29%" />
      <PlusIcon class="visible-on-mobile" bottom="2%" left="9%" />
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.app-strategy {
  border: 1px solid transparent;
  .wrap {
    position: relative;
    @media (min-width: toEm(1024)) {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;

      gap: toRem(42);
      margin-bottom: toRem(35);
      padding-right: toRem(43);
    }
    .text-content {
      @media (min-width: toEm(1024)) {
        width: 56%;
        text-align: start;
      }
      h2 {
        font-size: clamp(toRem(35), 6vw, toRem(50));
        line-height: 1.4285;
        margin-bottom: toRem(20);

        @media (min-width: toEm(768)) {
          margin-bottom: toRem(23);
        }
      }
      p {
        margin-bottom: toRem(25);
        @media (min-width: toEm(768)) {
          font-size: toRem(20);
          line-height: 1.75;
          margin-bottom: toRem(65);
        }
      }
    }
    .img-wrap {
      position: relative;
      @media (min-width: toEm(540)) {
        text-align: center;
      }
      @media (min-width: toEm(1024)) {
        width: 41%;
      }

      img {
        margin-bottom: toRem(3);
        @media (min-width: toEm(1024)) {
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

        @media (min-width: toEm(1024)) {
          display: none;
        }
      }
    }
    .decorative-icon.circle {
      display: none;
      @media (min-width: toEm(1024)) {
        display: block;
        position: absolute;
        bottom: -4%;
        left: -13%;
        visibility: visible;
      }
    }
  }
}
</style>
