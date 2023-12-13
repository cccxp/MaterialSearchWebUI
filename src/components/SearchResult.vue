<script setup>

defineProps({
    'results': Array
})

</script>

<template>
    <el-card class="results" v-show="results">
        <h3>
            {{ $t('search.searchResult') }} :
        </h3>
        <p>
            {{ $t('search.searchResultCount', results.length) }}
        </p>
        <el-row :gutter="5">
            <el-col :xs="24" :md="12" :lg="8" v-for="item in results">
                <SearchResultItem :resultItem="item" />
            </el-col>
        </el-row>
    </el-card>
</template>

<style scoped>
.results {
    margin-top: 2em;
}
</style>