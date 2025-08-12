<template>
  <section class="app-structure">
    <div class="accordion">
      <div class="circle"></div>
      <div class="accordion-item step-1">
        <button class="accordion-btn active">
          <h3>Discovery and Planning</h3>
        </button>
        <div class="accordion-content">
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
      <div class="accordion-item step-2">
        <button class="accordion-btn"><h3>Design and Wireframing</h3></button>
        <div class="accordion-content">
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

      <div class="accordion-item step-3">
        <button class="accordion-btn">
          <h3>Development and Integration</h3>
        </button>
        <div class="accordion-content">
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

      <div class="accordion-item step-4">
        <button class="accordion-btn"><h3>Testing and Quality Assurance</h3></button>
        <div class="accordion-content">
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

      <div class="accordion-item step-5">
        <button class="accordion-btn"><h3>Deployment and Launch</h3></button>
        <div class="accordion-content">
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

      <div class="accordion-item step-6">
        <button class="accordion-btn"><h3>Post-Launch Support and Maintenance</h3></button>
        <div class="accordion-content">
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
  </section>
</template>

<style lang="scss" scoped>
.app-structure {
  border: 1px solid transparent;
  .accordion {
    @media (min-width: toEm(1024)) {
      position: relative;
      margin: 130px 0 205px;
      border: 1px solid transparent;
    }
    .circle {
      @media (min-width: toEm(1024)) {
        position: relative;
        z-index: 0;
        pointer-events: none;
        width: 466px;
        height: 466px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        margin-left: 112px;

        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        h3.accordion-clone {
          @media (min-width: toEm(1024)) {
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
            padding: 48px;
          }
        }
      }
    }

    .accordion-item {
      border-top: 1px solid black;
      &:last-child {
        border-bottom: 1px solid black;
      }
      @media (min-width: toEm(1024)) {
        position: absolute;
        border: 1px solid transparent;
        top: 0;
        right: 0;
        border-top: none;

        &.step-1 > .accordion-btn {
          top: 7px;
          left: -5px;
          h3 {
            text-align: end;
            margin-bottom: 12px;
          }
        }
        &.step-2 > .accordion-btn {
          top: -84px;
          left: 172px;
          h3 {
            text-align: end;
            margin-bottom: 7px;
            padding-right: 0;
          }
        }
        &.step-3 > .accordion-btn {
          top: 34px;
          left: 504px;
          flex-direction: row-reverse;
          justify-content: flex-end;
          align-items: center;
          width: 220px;
          h3 {
            margin-left: 14px;
            text-align: start;
            padding-right: 0;
          }
        }
        &.step-4 > .accordion-btn {
          top: 267px;
          left: 542px;
          flex-direction: row-reverse;
          justify-content: flex-end;
          align-items: center;
          width: 193px;
          h3 {
            margin-left: 8px;
            text-align: start;
            padding-right: 0;
          }
        }
        &.step-5 > .accordion-btn {
          top: 437px;
          left: 301px;
          flex-direction: column-reverse;
          width: 136px;
          h3 {
            margin-top: 6px;
            text-align: right;
          }
        }
        &.step-6 > .accordion-btn {
          top: 371px;
          left: 56px;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          width: 170px;
          h3 {
            margin-top: 8px;
            text-align: end;
            padding-right: 0;
            margin-right: 28px;
          }
        }
        &:last-child {
          border-bottom: none;
        }
      }

      .accordion-btn {
        padding: 30px 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        -webkit-tap-highlight-color: var(--highlight-color-btn);
        @media (min-width: toEm(1024)) {
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
          @media (min-width: toEm(1024)) {
            content: '';
            margin-left: 0;
            cursor: pointer;
          }
        }
        &.active::after {
          content: '-';
          background-color: var(--main-bg-icon);
          color: var(--additional-color-icon);
          @media (min-width: toEm(1024)) {
            content: '';
          }
        }

        h3 {
          font-size: toRem(20);
          line-height: 1.25;
          padding-right: 5px;
          text-align: start;
          @media (min-width: toEm(1024)) {
            font-size: toRem(17);
            line-height: 1.47;
          }
        }
      }

      .accordion-content {
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
        @media (min-width: toEm(1024)) {
          transition: none;
          &.active {
            position: relative;
            top: 0;
            left: 62%;

            width: 36%;
            font-size: toRem(20);
            line-height: 1.75;
          }
        }
        h4 {
          font-size: toRem(30);
          line-height: 1.16;
          @media (min-width: toEm(1024)) {
            line-height: 1;
            font-size: toRem(40);
            padding-top: 137px;
          }
        }
        p {
          padding: toRem(24) 0;
          @media (min-width: toEm(1024)) {
            padding: 35px 0;
          }
        }
      }
    }
  }
}
</style>
