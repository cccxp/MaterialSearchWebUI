<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue';
import {  api } from '../api'

const path = ref('')
const searchType = ref(7) 
const results = ref([])
const topn = ref(150)

const search = () => {
    api.post('/match', {
        top_n: topn.value,
        search_type: searchType.value,
        path: path.value,
    }).then((resp) => {
        console.log(resp)
        results.value = resp.data
    })
}

</script>

<template>
    <el-card class="items">
        <el-row>
            <el-col :xs="24" :md="18" class="item">
                <el-input size="large" v-model="path" placeholder="">
                    <template #prepend> {{ $t('search.filterPath') }} </template>
                </el-input>
            </el-col>
        </el-row>

        <el-row>
            <el-col :xs="24" :md="6" class="item">
                <span> {{ $t('search.searchType') }}: </span>
                <el-radio-group v-model="searchType">
                    <el-radio :label="7" size="large"> {{ $t('search.image') }} </el-radio>
                    <el-radio :label="8" size="large"> {{ $t('search.video') }} </el-radio>
                </el-radio-group>
            </el-col>
            <el-col :md="12">
                <!-- placeholder -->
            </el-col>
            <el-col :xs="24" :md="6" class="item">
                <el-button size="large" type="success" :icon="Search" round @click="search()">
                    {{ $t('search.search') }}
                </el-button>
            </el-col>
        </el-row>
    </el-card>
    <SearchResult :results="results"/>
</template>

<style scoped>
.items {
    text-align: center;
}

.item {
    padding: 1ex;
}

</style>