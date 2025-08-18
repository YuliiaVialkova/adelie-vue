<script setup>
import AppInnerHomePage from '../components/AppInnerHomePage.vue'
import IconWavyLine2 from './icons/IconWavyLine2.vue'
import IconThreeLines from './icons/IconThreeLines.vue'
import IconCircle from './icons/IconCircle.vue'
import PlusIcon from './icons/PlusIcon.vue'
</script>

<template>
  <section class="app-promo">
    <AppInnerHomePage class="container">
      <div class="promo-wrap">
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
          <IconThreeLines class="decorative-icon three-lines" />
          <IconCircle class="decorative-icon circle" :stroke-width="5" :size="30" />
        </div>
      </div>
      <IconWavyLine2 class="decorative-icon" />
      <PlusIcon class="visible-on-desktop" top="35%" left="-11%" />
      <PlusIcon class="visible-on-desktop" bottom="6%" left="-8%" />
      <PlusIcon class="visible-on-desktop" top="9%" right="-15%" />
      <PlusIcon class="visible-on-desktop" top="45%" left="22%" />
      <PlusIcon class="visible-on-desktop" bottom="-8%" right="25%" />
      <PlusIcon class="visible-on-desktop" bottom="-9%" left="11%" />
      <PlusIcon class="visible-on-desktop" top="46%" left="47%" />
      <PlusIcon class="visible-on-desktop" bottom="28%" right="0%" />
      <PlusIcon class="visible-on-desktop" bottom="33%" right="-13%" />

      <PlusIcon class="visible-on-mobile" bottom="0%" left="0%" />
    </AppInnerHomePage>
  </section>
</template>

<style lang="scss" scoped>
.app-promo {
  .container {
    border: 1px solid transparent;
    position: relative;
    @media (min-width: toEm(1024)) {
      margin-top: -61px;
    }
    @media (min-width: toEm(1280)) {
      margin-top: toRem(-92);
    }

    .promo-wrap {
      @media (min-width: toEm(1024)) {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 30px;

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
          margin: toRem(15) 0;

          @media (min-width: toEm(768)) {
            line-height: 1.4;
            margin-top: toRem(39);
            margin-bottom: 25px;
          }
        }

        p {
          margin-bottom: toRem(33);
          @media (min-width: toEm(768)) {
            font-size: toRem(20);
            line-height: 1.75;
            margin-bottom: 60px;
          }
        }
      }
      .img-wrap {
        position: relative;
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
        .decorative-icon.three-lines {
          display: block;
          position: absolute;
          width: 158px;
          height: 34px;
          top: -3%;
          right: 0%;

          @media (min-width: toEm(1024)) {
            display: none;
          }
        }
        .decorative-icon.circle {
          display: block;
          position: absolute;
          bottom: 7%;
          left: 11%;
          @media (min-width: toEm(1024)) {
            display: none;
          }
        }
      }
    }
    .decorative-icon {
      display: none;
      @media (min-width: toEm(1024)) {
        display: block;
        position: absolute;
        bottom: -45%;
        left: 41%;
      }
    }
  }
}
</style>
