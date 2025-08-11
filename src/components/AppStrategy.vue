<script setup></script>

<template>
  <section class="app-strategy">
    <div class="container">
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
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.app-strategy {
  .container {
    @media (min-width: toEm(1024)) {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;

      gap: toRem(44);
      margin-bottom: toRem(35);
      padding-right: toRem(35);
    }
    .text-content {
      @media (min-width: toEm(1024)) {
        width: 56%;
        text-align: start;
      }
      h2 {
        font-size: clamp(toRem(35), 4vw, toRem(50));
        line-height: 1.58;
        margin-bottom: toRem(30);

        @media (min-width: toEm(768)) {
          line-height: 1.4;
          margin-bottom: toRem(30);
        }
      }
      p {
        margin-bottom: toRem(25);
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
        width: 41%;
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
}
</style>
