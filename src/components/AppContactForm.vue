<script setup>
import AppContainer from './AppContainer.vue'
import PlusIcon from './icons/PlusIcon.vue'

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
    <AppContainer class="container--big">
      <div class="content">
        <h2>Contact form</h2>
        <form @submit.prevent="validateForm" novalidate>
          <label class="label-name"
            >Name
            <input
              type="text"
              v-model="formData.name"
              name="user-name"
              :class="{ invalid: errors.name }"
            />
            <span class="error" v-if="errors.name">{{ errors.name }}</span>
          </label>
          <label class="label-phone"
            >Phone
            <input
              type="phone"
              v-model="formData.phone"
              name="user-phone"
              :class="{ invalid: errors.phone }"
            /><span class="error" v-if="errors.phone">{{ errors.phone }}</span>
          </label>
          <label class="label-email"
            >E-mail
            <input
              type="email"
              v-model="formData.email"
              name="user-email"
              :class="{ invalid: errors.email }"
            /><span class="error">{{ errors.email }}</span>
          </label>
          <label class="label-message">
            Text
            <textarea
              name="user-message"
              v-model="formData.message"
              :class="{ invalid: errors.message }"
            ></textarea
            ><span class="error">{{ errors.message }}</span>
          </label>
          <button type="submit">Send</button>
        </form>
        <PlusIcon class="visible-on-desktop" top="-9%" left="33%" />
        <PlusIcon class="visible-on-desktop" top="-7%" right="36%" />
        <PlusIcon class="visible-on-desktop" bottom="46%" left="-16%" />
        <PlusIcon class="visible-on-desktop" bottom="-9%" left="35%" />

        <PlusIcon class="visible-on-mobile" top="4%" right="7%" />
        <PlusIcon class="visible-on-mobile" bottom="5%" right="52%" />
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.app-contact-form {
  border: 1px solid transparent;
  .content {
    position: relative;
    margin-bottom: toRem(183);
    @media (min-width: toEm(1024)) {
      margin: toRem(80) 0 0 0;
    }
    @media (min-width: toEm(1280)) {
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
        @media (min-width: toEm(768)) {
          width: 125px;
          height: 125px;
          top: -29px;
          left: -49px;
        }
      }
      @media (min-width: toEm(1024)) {
        line-height: 1.4;
      }
      @media (min-width: toEm(1280)) {
        margin: 0 0 0 0;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      @media (min-width: toEm(768)) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-end;
        gap: 20px;
      }
      @media (min-width: toEm(1024)) {
        width: 100%;
      }
      @media (min-width: toEm(1280)) {
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
        @media (min-width: toEm(1024)) {
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
      .label-name {
        flex-grow: 1;
      }
      .label-phone {
        flex-grow: 1;
      }
      .label-email {
        @media (min-width: toEm(768)) {
          flex-basis: 100%;
        }
        @media (min-width: toEm(1024)) {
          flex-basis: auto;
          flex-grow: 1;
        }
      }
      .label-message {
        @media (min-width: toEm(768)) {
          flex-basis: 100%;
        }
        @media (min-width: toEm(1280)) {
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
        @media (min-width: toEm(768)) {
          flex-grow: 0;
        }
        @media (min-width: toEm(1024)) {
          margin-top: toRem(40);
        }
        @media (min-width: toEm(1280)) {
          margin-top: toRem(47);
        }
      }
    }
  }
}
</style>
