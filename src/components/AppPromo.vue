<script setup>
import IconWavyLine2 from './icons/IconWavyLine2.vue'
</script>

<template>
  <section class="app-promo">
    <div class="promo-container">
      <div class="text-content">
        <h2>
          Unlock the Power of
          <span class="highlight">Optimal</span> <span class="highlight">Solutions</span>
          for Your Business with Us!
        </h2>
        <p>
          We specialize in delivering top-notch e-commerce development solutions tailored to meet
          your unique business needs. With our extensive experience and deep understanding of the
          ever-evolving online marketplace, we are committed to helping you achieve unprecedented
          success.
        </p>
      </div>
      <div class="img-wrap">
        <img
          src="../assests/images/content/promo.svg"
          alt="A man and woman sit in a chair, engaged in a conversation, both smiling and appearing relaxed."
        />
      </div>
    </div>
    <IconWavyLine2 class="decorative-icon" />
  </section>
</template>

<style lang="scss" scoped>
.app-promo {
  border: 1px solid transparent;
  position: relative;
  @media (min-width: toEm(1024)) {
    margin-top: -61px;
  }
  @media (min-width: toEm(1280)) {
    margin-top: toRem(-81);
  }

  .promo-container {
    @media (min-width: toEm(1024)) {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      gap: toRem(20);

      margin-bottom: toRem(35);
    }
    .text-content {
      @media (min-width: toEm(1024)) {
        width: 54%;
        text-align: start;
      }
      h2 {
        font-size: clamp(toRem(35), 4vw, toRem(50));
        line-height: 1.58;
        margin-bottom: toRem(16);

        @media (min-width: toEm(768)) {
          line-height: 1.4;
          margin-bottom: toRem(25);
        }
      }
      p {
        margin-bottom: toRem(33);
        @media (min-width: toEm(768)) {
          font-size: toRem(20);
          line-height: 1.75;
          margin-bottom: toRem(25);
        }
      }
    }
    .img-wrap {
      @media (min-width: toEm(540)) {
        text-align: center;
      }
      @media (min-width: toEm(1024)) {
        width: 44%;
      }

      img {
        margin-bottom: toRem(51);
        @media (min-width: toEm(1024)) {
          width: 100%;
          height: auto;
          object-fit: contain;
          margin-bottom: 0;
        }
      }
    }
  }
  .decorative-icon {
    display: none;
    @media (min-width: toEm(1024)) {
      display: block;
      position: absolute;
      bottom: -43%;
      left: 41%;
    }
  }
}
</style>
