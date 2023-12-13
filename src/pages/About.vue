<script setup>

</script>

<template>
  <el-card>
    <template #header>
      <span> {{$t('about.about')}} </span>
    </template>
    <p>
      <h3>
        MaterialSearch WebUI
      </h3>
    </p>
    <p>
      {{ $t('about.project') }}:
      <el-link type="primary" href="https://github.com/cccxp/MaterialSearchWebUI" target="_blank">
        Github: cccxp/MaterialSearchWebUI
      </el-link>
    </p>
    <p>
      {{$t('about.backendProject')}}:
      <el-link type="primary" href="https://github.com/cccxp/MaterialSearch/tree/dev" target="_blank">
        Github: cccxp/MaterialSearch (dev)
      </el-link>
    </p>
    <p>
      {{$t('about.originalProject')}}:
      <el-link type="primary" href="https://github.com/chn-lee-yumi/MaterialSearch" target="_blank">
        Github: chn-lee-yumi/MaterialSearch
      </el-link>
    </p>
    <p>
      {{$t('about.license')}}:
      <el-link type="primary" href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank">
        {{ $t('about.gplv3') }}
      </el-link>
    </p>
  </el-card>
</template>