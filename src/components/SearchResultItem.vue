<script setup>
import { Picture as IconPicture } from '@element-plus/icons-vue'
import { percentageCast } from '../utils';
import { baseURL } from '../api';

defineProps({
    'resultItem': Object,
})

</script>

<template>
    <el-card class="item">
        <p v-if="resultItem.type == 'image'">
            <el-image class="container" :src="baseURL.replace('/api', '') + resultItem.url" fit="contain">
                <template #error>
                    <div class="image-slot">
                        <el-icon><icon-picture /></el-icon>
                    </div>
                </template>
            </el-image>
        </p>
        <p v-else-if="resultItem.type == 'video'">
            <video class="container" :src="baseURL.replace('/api', '') + resultItem.url" controls>
            </video>
        </p>
        <p v-if="resultItem.score">
            <el-tag effect="plain"> {{ $t('search.similarity') }} {{percentageCast(resultItem.score)}} % </el-tag>
        </p>
        <p>
            <el-tag effect="plain">{{ $t('search.path') }}: {{resultItem.path}} </el-tag>
        </p>
        <p v-if="resultItem.type == 'video'">
            <el-tag>
                {{ resultItem.start_time }} ~ {{ resultItem.end_time }}
            </el-tag>
        </p>
    </el-card>
</template>

<style scoped>
.item {
    margin: 2ex;
    text-align: center;
}

.container {
    width: 100%;
    height: 180px;
}

.image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 30px;
}
</style>