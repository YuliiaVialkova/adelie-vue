<template>
  <section class="app-structure">
    <div class="accordion">
      <div class="circle"></div>
      <div class="accordion-item">
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
      <div class="accordion-item">
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

      <div class="accordion-item">
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
      <!-- 
        <div class="accordion-item">
          <button class="accordion-btn"><h3>Testing and Quality Assurance</h3></button>
          <div class="accordion-content">
            <h4>
              <span class="highlight">Testing</span>
              and Quality Assurance:
            </h4>
            <p>
              We begin by thoroughly understanding your business goals and requirements. Through
              in-depth discussions and analysis, we identify key functionalities, target audience,
              and competitive landscape. This stage sets the foundation for the project, ensuring a
              clear roadmap for success.
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-btn"><h3>Deployment and Launch</h3></button>
          <div class="accordion-content">
            <h4>
              <span class="highlight">Deployment</span>
              and Launch:
            </h4>
            <p>
              We begin by thoroughly understanding your business goals and requirements. Through
              in-depth discussions and analysis, we identify key functionalities, target audience,
              and competitive landscape. This stage sets the foundation for the project, ensuring a
              clear roadmap for success.
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-btn"><h3>Post-Launch Support and Maintenance</h3></button>
          <div class="accordion-content">
            <h4>
              <span class="highlight">Post-Launch</span>
              Support and Maintenance:
            </h4>
            <p>
              We begin by thoroughly understanding your business goals and requirements. Through
              in-depth discussions and analysis, we identify key functionalities, target audience,
              and competitive landscape. This stage sets the foundation for the project, ensuring a
              clear roadmap for success.
            </p>
          </div>
        </div> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.app-structure {
  .accordion {
    @media (min-width: toEm(1024)) {
      // margin-right: 35px;
    }
    .circle {
      @media (min-width: toEm(1024)) {
        // width: 466px;
        // height: 466px;
        // border: 1px solid rgba(0, 0, 0, 0.2);
        // margin-left: 115px;
        // border-radius: 50%;
        // position: relative;
      }
    }

    .accordion-item {
      border-top: 1px solid black;
      &:last-child {
        border-bottom: 1px solid black;
      }
      @media (min-width: toEm(1024)) {
        // position: absolute;
        // width: 100%;
        // height: 100%;
        // top: 50%;
        // left: 50%;
        // translate: -50% -50%;
        border-top: none;
        // display: inline-block;
        // &:nth-child(1) > .accordion-btn {
        //   top: 3%;
        //   left: -19%;
        // }
        // &:nth-child(2) > .accordion-btn {
        //   top: -17%;
        //   left: 20%;
        // }
        // &:nth-child(3) > .accordion-btn {
        //   top: 7%;
        //   right: -32%;
        //   flex-direction: row;
        //   justify-content: flex-start;
        //   align-items: center;
        //   width: 220px;
        //   h3 {
        //     margin-left: 47px;
        //     margin-bottom: 0;
        //     text-align: start;
        //     align-self: center;
        //   }
        // }
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
          justify-content: start;
          // width: 196px;
          // height: 100px;
          // position: absolute;
          // padding: 5px;
          // flex-wrap: nowrap;
          // justify-content: flex-end;
          // align-items: flex-end;
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
          @media (min-width: toEm(1024)) {
            content: '';
            margin-left: 0;
            // position: absolute;
            // display: block;
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

          text-align: start;
          @media (min-width: toEm(1024)) {
            // font-size: toRem(17);
            // line-height: 1.47;
            // text-align: end;
            // margin-bottom: 47px;
            // padding-right: 5px;
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
          &.active {
            position: relative;
            left: 50%;
          }
        }
        h4 {
          font-size: toRem(30);
          line-height: 1.16;
          @media (min-width: toEm(1024)) {
            //   line-height: 1;
            //   font-size: toRem(40);
            //   margin-bottom: toRem(38);
            // }
          }
          p {
            padding: toRem(24) 0;
            @media (min-width: toEm(1024)) {
              // padding: 0;
              // margin-bottom: toRem(40);
              // font-size: toRem(20);
              // line-height: 1.75;
            }
          }
        }
      }
    }
  }
}
</style>
