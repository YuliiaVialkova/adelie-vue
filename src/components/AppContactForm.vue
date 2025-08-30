<script setup>
import AppContainer from './AppContainer.vue'
import DecorPlus from './decors/DecorPlus.vue'

import { reactive } from 'vue'

const formData = reactive({
  name: '',
  phone: '',
  email: '',
  message: '',
})

const errors = reactive({
  name: '',
  phone: '',
  email: '',
  message: '',
})

function validateForm() {
  errors.name = ''
  errors.phone = ''
  errors.email = ''
  errors.message = ''

  if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long.'
  }

  if (!/^\+?[0-9]{10,15}$/.test(formData.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (formData.message.trim().length < 5) {
    errors.message = 'Message must be at least 5 characters'
  }

  if (!errors.name && !errors.phone && !errors.email && !errors.message) {
    console.log('Form submitted:', formData)
    alert('Form successfully submitted!')
  }
}
</script>

<template>
  <section class="app-contact-form">
    <AppContainer class="app-contact-form__container app-container--big">
      <div class="app-contact-form__content">
        <h2 class="app-contact-form__title">Contact form</h2>
        <form @submit.prevent="validateForm" novalidate class="app-contact-form__form">
          <label class="app-contact-form__label app-contact-form__label--name"
            >Name
            <input
              class="app-contact-form__input app-contact-form__input--user-name"
              type="text"
              v-model="formData.name"
              name="user-name"
              :class="{ invalid: errors.name }"
            />
            <span class="error" v-if="errors.name">{{ errors.name }}</span>
          </label>
          <label class="app-contact-form__label app-contact-form__label--phone"
            >Phone
            <input
              class="app-contact-form__input app-contact-form__input--user-phone"
              type="phone"
              v-model="formData.phone"
              name="user-phone"
              :class="{ invalid: errors.phone }"
            /><span class="error" v-if="errors.phone">{{ errors.phone }}</span>
          </label>
          <label class="app-contact-form__label app-contact-form__label--email"
            >E-mail
            <input
              class="app-contact-form__input app-contact-form__input--user-email"
              type="email"
              v-model="formData.email"
              name="user-email"
              :class="{ invalid: errors.email }"
            /><span class="error">{{ errors.email }}</span>
          </label>
          <label class="app-contact-form__label app-contact-form__label--message">
            Text
            <textarea
              class="app-contact-form__textarea app-contact-form__textarea--user-message"
              name="user-message"
              v-model="formData.message"
              :class="{ invalid: errors.message }"
            ></textarea
            ><span class="error">{{ errors.message }}</span>
          </label>
          <button class="app-contact-form__button" type="submit">Send</button>
        </form>
        <DecorPlus class="app-contact-form__decor visible-on-desktop" top="-9%" left="33%" />
        <DecorPlus class="app-contact-form__decor visible-on-desktop" top="-7%" right="36%" />
        <DecorPlus class="app-contact-form__decor visible-on-desktop" bottom="46%" left="-16%" />
        <DecorPlus class="app-contact-form__decor visible-on-desktop" bottom="-9%" left="35%" />

        <DecorPlus class="app-contact-form__decor visible-on-mobile" top="4%" right="7%" />
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.app-contact-form {
  border: 1px solid transparent;
  &__content {
    position: relative;
    margin-bottom: toRem(183);
    @media (min-width: 1024px) {
      margin: toRem(80) 0 0 0;
    }
    @media (min-width: 1280px) {
      margin: toRem(100) 0 0 0;
    }
    h2 {
      font-size: clamp(toRem(35), 5vw, toRem(50));
      line-height: 1.77;
      margin: 0 0 0 toRem(24);
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -28px;
        width: 79px;
        height: 79px;
        background-color: var(--highlight-color-btn);
        border-radius: 50%;
        @media (min-width: 768px) {
          width: 125px;
          height: 125px;
          top: -29px;
          left: -49px;
        }
      }
      @media (min-width: 1024px) {
        line-height: 1.4;
      }
      @media (min-width: 1280px) {
        margin: 0 0 0 0;
      }
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-end;
      gap: 20px;
    }
    @media (min-width: 1024px) {
      width: 100%;
    }
    @media (min-width: 1280px) {
      width: 74%;
      row-gap: 12px;
    }

    label {
      font-size: toRem(20);
      line-height: 1.75;
      border-bottom: 2px solid var(--main-color-text);
      white-space: nowrap;

      display: flex;
      align-items: flex-end;
      padding: toRem(28) 0 toRem(27) 0;

      position: relative;
      @media (min-width: 1024px) {
        padding: toRem(53) 0 toRem(27) 0;
      }
      input,
      textarea {
        padding-left: toRem(15);
        outline: none;
        border-bottom: 1px solid transparent;
        transition: border 0.3s;
      }

      textarea:focus,
      input:focus {
        border-bottom-color: var(--design-color);
      }
      .error {
        color: red;
        font-size: 1rem;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      .invalid {
        border-color: red;
      }
    }
  }
  &__label--name {
    flex-grow: 1;
  }
  &__label--phone {
    flex-grow: 1;
  }
  &__label--email {
    @media (min-width: 768px) {
      flex-basis: 100%;
    }
    @media (min-width: 1024px) {
      flex-basis: auto;
      flex-grow: 1;
    }
  }
  &__label--message {
    @media (min-width: 768px) {
      flex-basis: 100%;
    }
    @media (min-width: 1280px) {
      padding: 0 0 toRem(27) 0;
    }
  }
  button {
    background-color: var(--design-color-icon);
    border-radius: 50%;
    width: toRem(110);
    height: toRem(110);
    font-size: toRem(20);
    font-weight: 500;
    padding: toRem(30);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: toRem(43);
    &::after {
      content: '';
      position: absolute;
      background-image: url(../assets/images/design/arrow.svg);
      top: 50%;
      translate: 0 -50%;
      right: -20px;
      width: 41px;
      height: 16px;
    }
    @media (min-width: 768px) {
      flex-grow: 0;
    }
    @media (min-width: 1024px) {
      margin-top: toRem(40);
    }
    @media (min-width: 1280px) {
      margin-top: toRem(47);
    }
  }
}
</style>
