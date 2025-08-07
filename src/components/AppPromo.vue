<script setup></script>

<template>
  <section class="app-promo">
    <div class="text-content">
      <h2>Unlock the Power of Optimal Solutions for Your Business with Us!</h2>
      <p>
        We specialize in delivering top-notch e-commerce development solutions tailored to meet your
        unique business needs. With our extensive experience and deep understanding of the
        ever-evolving online marketplace, we are committed to helping you achieve unprecedented
        success.
      </p>
    </div>
    <img
      src="../assests/images/content/promo.svg"
      alt="A man and woman sit in a chair, engaged in a conversation, both smiling and appearing relaxed."
    />
  </section>
</template>

<style lang="scss" scoped>
.app-promo {
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.11);
  @media (min-width: toEm(1024)) {
    display: flex;
    gap: toRem(20);
    border-bottom: none;
  }
  .text-content {
    @media (min-width: toEm(1024)) {
      width: 55.5%;
      margin-right: -34px;
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
      margin-bottom: clamp(toRem(33), 4vw, toRem(80));
      @media (min-width: toEm(768)) {
        font-size: toRem(20);
        line-height: 1.75;
      }
    }
  }
  img {
    margin-bottom: toRem(51);
    @media (min-width: toEm(1024)) {
      width: 40%;
      height: auto;
      object-fit: contain;
      position: relative;
      top: toRem(-60);
      right: toRem(-34);
      margin-bottom: 0;
    }
  }
}
</style>
