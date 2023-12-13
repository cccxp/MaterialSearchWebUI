<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <div class="placeholder">
    <el-card>
      <h3>
      页面未完成
    </h3>
      <el-button @click="count++">
      计数 {{ count }}
    </el-button>
    <p>
      位于
      <code>components/HelloWorld.vue</code>
      的占位符页面
    </p>
    </el-card>
  </div>
</template>

<style scoped>

.placeholder {
  text-align: center;
}

</style>
