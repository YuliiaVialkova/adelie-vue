<template>
  <div class="app-accordion">
    <div class="app-accordion__circle"></div>
    <div class="app-accordion__item step-1">
      <button class="app-accordion__btn">
        <h3>Discovery and Planning</h3>
      </button>
      <div class="app-accordion__content">
        <h4>
          <span class="highlight">Discovery</span>
          and Planning:
        </h4>
        <p>
          We begin by thoroughly understanding your business goals and requirements. Through
          in-depth discussions and analysis, we identify key functionalities, target audience, and
          competitive landscape. This stage sets the foundation for the project, ensuring a clear
          roadmap for success.
        </p>
      </div>
    </div>
    <div class="app-accordion__item step-2">
      <button class="app-accordion__btn"><h3>Design and Wireframing</h3></button>
      <div class="app-accordion__content">
        <h4>
          <span class="highlight">Design</span>
          and Wireframing
        </h4>
        <p>
          We begin by thoroughly understanding your business goals and requirements. Through
          in-depth discussions and analysis, we identify key functionalities, target audience, and
          competitive landscape. This stage sets the foundation for the project, ensuring a clear
          roadmap for success.
        </p>
      </div>
    </div>

    <div class="app-accordion__item step-3">
      <button class="app-accordion__btn">
        <h3>Development and Integration</h3>
      </button>
      <div class="app-accordion__content">
        <h4>
          <span class="highlight"> Development</span>
          and Integration:
        </h4>
        <p>
          We begin by thoroughly understanding your business goals and requirements. Through
          in-depth discussions and analysis, we identify key functionalities, target audience, and
          competitive landscape. This stage sets the foundation for the project, ensuring a clear
          roadmap for success.
        </p>
      </div>
    </div>

    <div class="app-accordion__item step-4">
      <button class="app-accordion__btn">
        <h3>Testing and Quality Assurance</h3>
      </button>
      <div class="app-accordion__content">
        <h4>
          <span class="highlight">Testing</span>
          and Quality Assurance:
        </h4>
        <p>
          We begin by thoroughly understanding your business goals and requirements. Through
          in-depth discussions and analysis, we identify key functionalities, target audience, and
          competitive landscape. This stage sets the foundation for the project, ensuring a clear
          roadmap for success.
        </p>
      </div>
    </div>

    <div class="app-accordion__item step-5">
      <button class="app-accordion__btn"><h3>Deployment and Launch</h3></button>
      <div class="app-accordion__content">
        <h4>
          <span class="highlight">Deployment</span>
          and Launch:
        </h4>
        <p>
          We begin by thoroughly understanding your business goals and requirements. Through
          in-depth discussions and analysis, we identify key functionalities, target audience, and
          competitive landscape. This stage sets the foundation for the project, ensuring a clear
          roadmap for success.
        </p>
      </div>
    </div>

    <div class="app-accordion__item step-6">
      <button class="app-accordion__btn">
        <h3>Post-Launch Support and Maintenance</h3>
      </button>
      <div class="app-accordion__content">
        <h4>
          <span class="highlight">Post-Launch</span>
          Support and Maintenance:
        </h4>
        <p>
          We begin by thoroughly understanding your business goals and requirements. Through
          in-depth discussions and analysis, we identify key functionalities, target audience, and
          competitive landscape. This stage sets the foundation for the project, ensuring a clear
          roadmap for success.
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.app-accordion {
  @media (min-width: 1024px) {
    position: relative;
    width: 466px;
    height: 466px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    margin-left: 9%;
    margin-right: 10%;
  }
  @media (min-width: 1280px) {
    margin-left: 9%;
  }
  @media (min-width: 1366px) {
    margin-left: 9%;
  }
  @media (min-width: 1536px) {
    margin-left: 9%;
  }

  &__circle {
    @media (min-width: 1024px) {
      position: relative;
      width: 321px;
      height: 321px;
      top: 50%;
      left: 50%;
      translate: -50% -50%;

      h3.app-accordion__clone {
        @media (min-width: 1024px) {
          width: 321px;
          height: 321px;
          font-size: toRem(40);
          line-height: 0.875;
          text-align: center;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: var(--design-bg);
          padding: toRem(48);
        }
      }
    }
  }

  &__item {
    border-top: 1px solid var(--accordion-main-border);
    &:last-child {
      border-bottom: 1px solid var(--accordion-main-border);
    }
    @media (min-width: 1024px) {
      position: relative;
      border: 1px solid transparent;
      top: 50%;
      left: 50%;
      transform-origin: center;
      border-top: none;

      &.step-1 > .app-accordion__btn {
        top: -551px;
        left: -353px;
        margin-right: 2px;
        h3 {
          text-align: end;
          margin-bottom: 12px;
          margin-right: 3px;
        }
      }
      &.step-2 > .app-accordion__btn {
        top: -642px;
        left: -178px;
        h3 {
          text-align: end;
          margin-bottom: toRem(7);
          padding-right: 0;
        }
      }
      &.step-3 > .app-accordion__btn {
        top: -564px;
        right: 189px;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        width: 159px;
        h3 {
          margin-left: toRem(14);
          text-align: start;
          padding-right: 0;
        }
      }

      &.step-4 > .app-accordion__btn {
        top: -190px;
        left: 120px;
        flex-direction: row-reverse;
        align-items: center;
        width: 185px;
        h3 {
          margin-top: toRem(6);
          margin: 6px;
          text-align: left;
        }
      }
      &.step-5 > .app-accordion__btn {
        top: -111px;
        left: -91px;
        flex-direction: column-reverse;
        justify-content: flex-end;
        align-items: center;
        width: 173px;
        h3 {
          margin-top: toRem(6);
          margin-right: 0;
          text-align: center;
        }
      }
      &.step-6 > .app-accordion__btn {
        top: -207px;
        left: -344px;
        flex-direction: column-reverse;
        justify-content: flex-start;
        align-items: end;
        width: 161px;
        h3 {
          margin-top: toRem(8);
          text-align: end;
          padding-right: 0;
        }
      }
      &:last-child {
        border-bottom: none;
      }
    }
    @media (min-width: 1280px) {
      &.step-3 > .app-accordion__btn {
        top: -526px;
        right: 85px;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        width: 220px;
        h3 {
          margin-left: toRem(14);
          text-align: start;
          padding-right: 0;
        }
      }
      &.step-4 > .app-accordion__btn {
        top: -290px;
        left: 197px;
        flex-direction: row-reverse;
        align-items: center;
        width: 192px;
        h3 {
          margin-top: toRem(6);
          margin: 6px;
          text-align: left;
        }
      }
      &.step-5 > .app-accordion__btn {
        top: -121px;
        left: -86px;
        flex-direction: column-reverse;
        justify-content: flex-end;
        align-items: end;
        width: 173px;
        h3 {
          margin-top: toRem(6);
          margin-right: 0;
          text-align: right;
        }
      }
      &.step-6 > .app-accordion__btn {
        top: -187px;
        left: -291px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 170px;
        h3 {
          margin-top: toRem(8);
          text-align: end;
          padding-right: 0;
          margin-right: toRem(28);
        }
      }
    }
  }
  &__btn {
    padding: toRem(27) 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: start;
    -webkit-tap-highlight-color: var(--highlight-color-btn);
    @media (min-width: 1024px) {
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      position: absolute;
      z-index: 2;
      width: 181px;
      height: 100px;
      padding: 0;
    }

    &::after {
      content: '+';
      border-radius: 50%;
      background-color: #f1f1f1;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: toRem(22);
      font-weight: 500;
      color: var(--main-color-icon);
      margin-left: auto;
      flex-shrink: 0;
      @media (min-width: 1024px) {
        content: '';
        margin-left: 0;
        cursor: pointer;
      }
    }
    &.active::after {
      content: '-';
      background-color: var(--main-bg-icon);
      color: var(--additional-color-icon);
      @media (min-width: 1024px) {
        content: '';
      }
    }

    h3 {
      font-size: toRem(20);
      line-height: 1.25;
      @media (min-width: 1024px) {
        font-size: 17px;
        line-height: 1.47;
      }
    }
  }
  &__content {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition:
      max-height 0.5s ease-in-out,
      opacity 0.4s ease;
    &.active {
      max-height: 1000px;
      opacity: 1;
    }
    @media (min-width: 1024px) {
      transition: none;
      &.active {
        position: absolute;
        z-index: 2;
        top: -544px;
        left: 33vw;
        width: 33vw;
        height: auto;
        max-height: none;
        font-size: toRem(20);
        line-height: 1.75;
        opacity: 1;
        overflow: visible;
      }
    }
    @media (min-width: 1280px) {
      &.active {
        top: -544px;
        left: 36vw;
        width: 33vw;
      }
    }
    @media (min-width: 1366px) {
      &.active {
        top: -420px;
        left: 30vw;
        width: 33vw;
      }
    }
    @media (min-width: 1536px) {
      &.active {
        top: -420px;
        left: 28vw;
        width: 452px;
      }
    }
    @media (min-width: 1800px) {
      &.active {
        top: -420px;
        left: 24vw;
        width: 452px;
      }
    }
    h4 {
      font-size: toRem(30);
      line-height: 1.16;
      @media (min-width: 1024px) {
        line-height: 1;
        font-size: toRem(40);
      }
    }
    p {
      padding: toRem(24) 0;
      @media (min-width: 1024px) {
        padding: 35px 0 20px;
      }
    }
  }
}
</style>
