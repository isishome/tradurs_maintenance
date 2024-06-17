<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const { t, locale } = useI18n({ useScope: 'global' })

const lang = $q.cookies.has('tradurs.lang') ? $q.cookies.get('tradurs.lang') : $q.cookies.has('d4.lang') ? $q.cookies.get('d4.lang') : $q.lang.getLocale()?.substring(0, 2) || 'ko'
locale.value = lang as string
</script>

<template>
  <div class="absolute-center column items-center q-gutter-y-lg q-pa-md full-width">
    <q-card class="card">
      <q-card-section class="card-top">
        <div class="row justify-center items-end" :class="$q.screen.gt.sm ? 'q-gutter-xl' : 'q-gutter-sm'">
          <div class="row justify-center items-center q-gutter-x-sm">
            <img class="logo" src="/images/tradurs_logo.svg" :width="$q.screen.gt.sm ? 48 : 24" />
            <img class="letter" src="/images/tradurs_text.svg" :height="$q.screen.gt.sm ? 40 : 20" />
          </div>
          <div class="text-center" :style="`line-height:${$q.screen.gt.sm ? '36px' : '20px'}`"
            :class="$q.screen.gt.sm ? 'text-h5' : 'text-subtitle1'">{{
          t('notice.title') }}
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="q-pa-md column q-gutter-y-sm" :class="$q.screen.gt.sm ? 'text-body1' : 'text-body2'">
          <div class="text-area">{{ t('notice.top') }}</div>
          <div class="text-area text-weight-bold">{{ t('notice.contents') }}</div>
          <div class="text-area">{{ t('notice.bottom') }}</div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.card {
  border-radius: 40px;
  box-shadow: rgb(38, 57, 77) 0px 40px 60px -20px;
}

.card-top {
  background: linear-gradient(152.92deg, #eeeeee 0%, rgb(255, 192, 84) 93.95%);
}

.logo {
  animation: opacity 1.4s ease-out forwards;
}

.letter {
  transition: fill .3s ease;
  animation: slidein .3s ease-out .3s forwards;
  opacity: 0;
  font-size: 40px;
  font-weight: bold;
}

@keyframes opacity {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slidein {
  0% {
    transform: translateX(2%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.text-area {
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: keep-all;
}
</style>