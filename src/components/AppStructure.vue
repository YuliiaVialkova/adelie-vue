<script setup>
import AppContainer from './AppContainer.vue'
import AppAccordion from './AppAccordion.vue'
import DecorWavyLine3 from './decors/DecorWavyLine3.vue'
import DecorCircle from './decors/DecorCircle.vue'
import DecorThreeLines from './decors/DecorThreeLines.vue'
import DecorPlus from './decors/DecorPlus.vue'
</script>

<template>
  <section class="app-structure">
    <AppContainer class="app-structure__container app-container--big">
      <div class="app-structure__content">
        <AppAccordion class="app-structure__accordion" />

        <DecorWavyLine3 class="app-structure__decor app-structure__decor--wavy-line3" />

        <DecorCircle
          class="app-structure__decor app-structure__decor--circle visible-on-desktop"
          :stroke-width="5"
          width="30"
          height="30"
          bottom="11%"
          right="24%"
        />
        <DecorThreeLines
          class="app-structure__decor app-structure__decor--three-lines decor visible-on-desktop"
          top="8%"
          right="-6%"
        />
        <DecorPlus class="visible-on-desktop" top="36%" left="-20%" />
        <DecorPlus class="visible-on-desktop" bottom="19%" left="-3%" />
        <DecorPlus class="visible-on-desktop" bottom="22%" left="47%" />
        <DecorPlus class="visible-on-desktop" bottom="12%" right="7%" />
        <DecorPlus class="visible-on-desktop" bottom="50%" right="-13%" />

        <DecorPlus class="visible-on-mobile" top="12%" left="14%" />
        <DecorPlus class="visible-on-mobile" bottom="40%" right="29%" />
        <DecorPlus class="visible-on-mobile" bottom="5%" left="5%" />
        <DecorPlus class="visible-on-mobile" bottom="2%" right="7%" />
        <DecorPlus class="visible-on-mobile" bottom="17%" right="43%" />
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.app-structure {
  &__container {
    position: relative;
    border: 1px solid transparent;
  }
  &__content {
    @media (min-width: 1024px) {
      padding: 137px 10px 138px 57px;
    }
    @media (min-width: 1536px) {
      padding: 137px 10px 138px 112px;
    }
  }
  &__decor--wavy-line3 {
    margin-top: toRem(20);
    width: 92%;
    height: auto;
    @media (min-width: 600px) {
      width: 70%;
      display: block;
      margin: toRem(20) auto 0;
    }
    @media (min-width: 768px) {
      width: 60%;
    }
    @media (min-width: 1024px) {
      position: absolute;
      bottom: -88px;
      width: 44%;
      left: -213px;
    }
    @media (min-width: 1280px) {
      bottom: -163px;
      left: -276px;
    }
  }
}
// .app-accordion {
//   @media (min-width: 1024px) {
//     position: relative;
//     //margin: toRem(136) 0 toRem(205);
//     border: 1px solid transparent;
//   }

//   &__circle {
//     @media (min-width: 1024px) {
//       position: absolute;
//       top: 0;
//       left: 0;
//       //transform: translateX(21%);
//       z-index: 0;
//       pointer-events: none;
//       width: 466px;
//       height: 466px;
//       border: 1px solid rgba(0, 0, 0, 0.2);

//       border-radius: 50%;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }
//     h3.app-accordion__clone {
//       @media (min-width: 1024px) {
//         width: 321px;
//         height: 321px;
//         font-size: 40px;
//         line-height: 0.875;
//         text-align: center;
//         pointer-events: none;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         border-radius: 50%;
//         background-color: var(--design-bg);
//         padding: toRem(48);
//       }
//     }
//   }

//   &__item {
//     border-top: 1px solid var(--accordion-main-border);
//     &:last-child {
//       border-bottom: 1px solid var(--accordion-main-border);
//     }
//     @media (min-width: 1024px) {
//       position: absolute;
//       border: 1px solid transparent;
//       top: 0;
//       right: 0;
//       border-top: none;

//       &.step-1 > .app-accordion__btn {
//         top: 7px;
//         left: -116px;
//         h3 {
//           text-align: end;
//           margin-bottom: toRem(12);
//         }
//       }
//       &.step-2 > .app-accordion__btn {
//         top: -84px;
//         left: 172px;
//         h3 {
//           text-align: end;
//           margin-bottom: toRem(7);
//           padding-right: 0;
//         }
//       }
//       &.step-3 > .app-accordion__btn {
//         top: -6px;
//         left: 463px;
//         flex-direction: row-reverse;
//         justify-content: flex-end;
//         align-items: center;
//         width: 220px;
//         h3 {
//           margin-left: toRem(14);
//           text-align: start;
//           padding-right: 0;
//         }
//       }

//       &.step-4 > .app-accordion__btn {
//         top: 437px;
//         left: 301px;
//         flex-direction: column-reverse;
//         width: 136px;
//         h3 {
//           margin-top: toRem(6);
//           text-align: right;
//         }
//       }
//       &.step-5 > .app-accordion__btn {
//         top: 371px;
//         left: 56px;
//         flex-direction: row;
//         justify-content: flex-start;
//         align-items: center;
//         width: 170px;
//         h3 {
//           margin-top: 8px;
//           text-align: end;
//           padding-right: 0;
//           margin-right: toRem(28);
//         }
//       }
//       &.step-6 > .app-accordion__btn {
//         top: 192px;
//         left: 45px;
//         flex-direction: column;
//         justify-content: flex-end;
//         align-items: center;
//         width: 131px;
//         h3 {
//           margin-left: toRem(8);
//           text-align: start;
//           padding-right: 0;
//         }
//       }
//       &:last-child {
//         border-bottom: none;
//       }
//     }
//     @media (min-width: 1280px) {
//       &.step-3 > .app-accordion__btn {
//         top: 34px;
//         left: 504px;
//       }
//       &.step-4 > .app-accordion__btn {
//         top: 262px;
//         left: 544px;
//         flex-direction: row-reverse;
//         justify-content: flex-end;
//         align-items: center;
//         width: 190px;
//         h3 {
//           margin-left: toRem(14);
//           text-align: left;
//         }
//       }
//       &.step-5 > .app-accordion__btn {
//         top: 434px;
//         left: 263px;
//         flex-direction: column-reverse;
//         justify-content: flex-end;
//         align-items: end;
//         width: 173px;
//         h3 {
//           margin-right: 0;
//           text-align: right;
//         }
//       }
//       &.step-6 > .app-accordion__btn {
//         top: 371px;
//         left: 56px;
//         flex-direction: row;
//         justify-content: flex-start;
//         align-items: center;
//         width: 170px;
//         h3 {
//           margin-top: toRem(8);
//           text-align: end;
//           padding-right: 0;
//           margin-right: toRem(28);
//         }
//       }
//     }
//   }
//   &__btn {
//     padding: toRem(27) 0;
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     text-align: start;
//     -webkit-tap-highlight-color: var(--highlight-color-btn);
//     @media (min-width: 1024px) {
//       flex-direction: column;
//       justify-content: flex-end;
//       align-items: flex-end;
//       position: absolute;
//       z-index: 2;
//       width: 181px;
//       height: 100px;
//       padding: 0;
//     }

//     &::after {
//       content: '+';
//       border-radius: 50%;
//       background-color: #f1f1f1;
//       width: 35px;
//       height: 35px;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       font-size: 22px;
//       font-weight: 500;
//       color: var(--main-color-icon);
//       margin-left: auto;
//       flex-shrink: 0;
//       @media (min-width: 1024px) {
//         content: '';
//         margin-left: 0;
//         cursor: pointer;
//       }
//     }
//     &.active::after {
//       content: '-';
//       background-color: var(--main-bg-icon);
//       color: var(--additional-color-icon);
//       @media (min-width: 1024px) {
//         content: '';
//       }
//     }

//     h3 {
//       font-size: 20px;
//       line-height: 1.25;
//       @media (min-width: 1024px) {
//         font-size: 17px;
//         line-height: 1.47;
//       }
//     }
//   }
//   &__content {
//     max-height: 0;
//     overflow: hidden;
//     opacity: 0;
//     transition:
//       max-height 0.5s ease-in-out,
//       opacity 0.4s ease;
//     &.active {
//       max-height: 1000px;
//       opacity: 1;
//     }
//     @media (min-width: 1024px) {
//       transition: none;
//       &.active {
//         position: relative;
//         top: 0;
//         left: 62%;
//         width: 36%;
//         font-size: 20px;
//         line-height: 1.75;
//       }
//     }
//     @media (min-width: 1280px) {
//       &.active {
//         left: 65%;
//       }
//     }
//     @media (min-width: 1536px) {
//       &.active {
//         left: 62%;
//       }
//     }
//     h4 {
//       font-size: 30px;
//       line-height: 1.16;
//       @media (min-width: 1024px) {
//         line-height: 1;
//         font-size: 40px;
//         padding-top: toRem(137);
//       }
//     }
//     p {
//       padding: toRem(24) 0;
//       @media (min-width: 1024px) {
//         padding: toRem(35) 0;
//       }
//     }
//   }
// }
</style>
