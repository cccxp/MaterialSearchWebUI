<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { useI18n } from "vue-i18n";

const i18n = useI18n();

const isDark = useDark()
const toggleDark = useToggle(isDark)

const initLocale = () => {
  let locale = localStorage.getItem('locale')
  if (locale) {
    i18n.locale.value = locale
  } else {
    i18n.locale.value = 'zh-CN'
  }
}
const changeLocale = (locale) => {
  localStorage.setItem('locale', locale)
  i18n.locale.value = locale
}

initLocale()

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu default-active="/" mode="horizontal" :router="true" :ellipsis="false">
          <el-sub-menu index="/SearchByText">
            <template #title> {{ $t('search.search') }} </template>
            <el-menu-item index="/SearchByText"> {{ $t('index.searchByText') }} </el-menu-item>
            <el-menu-item index="/SearchByImage"> {{ $t('index.searchByImage') }} </el-menu-item>
            <el-menu-item index="/SearchByPath"> {{ $t('index.searchByPath') }} </el-menu-item>
            <el-menu-item index="/MatchTextAndImage"> {{ $t('index.matchTextAndImage') }} </el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/Scan"> {{ $t('index.scan') }} </el-menu-item>
          <el-menu-item index="/Configuration"> {{ $t('index.configuration') }} </el-menu-item>
          <el-menu-item index="/Benchmark"> {{ $t('index.benchmark') }} </el-menu-item>
          <div class="flex-grow" />
          <el-menu-item index="/About"> {{ $t('about.about') }} </el-menu-item>
          <el-sub-menu>
            <template #title> {{ $t('index.language') }} </template>
            <el-menu-item @click="changeLocale('zh-CN')"> 简体中文 </el-menu-item>
            <el-menu-item @click="changeLocale('en')"> English </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.main {
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
}

.flex-grow {
  flex-grow: 1;
}
</style>
