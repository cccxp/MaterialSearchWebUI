<script setup>
import { UploadFilled, Search } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { api } from '../api'
import { ElMessage } from "element-plus"
import { useI18n } from "vue-i18n";

const i18n = useI18n();

const searchType = ref(1)
const filehash = ref('')
const imageThreshold = ref(80)
const results = ref([])
const topn = ref(150)

const uploadImage = (file) => {
    const formData = new FormData()
    formData.append('file', file.file)
    api.post('/upload', formData).then((resp) => {
        filehash.value = resp.data.filehash
        console.log(filehash)
    })
}

const search = () => {
    if (filehash.value) {
        api.post('/match', {
            top_n: topn.value,
            search_type: searchType.value,
            image_threshold: imageThreshold.value,
            upload_file_hash: filehash.value,
        }).then((resp) => {
            results.value = resp.data
        })
    } else {
        ElMessage.error(i18n.t('search.pleaseUpload'))
    }
}

</script>

<template>
    <el-card>
        <h2> {{ $t('search.searchByImage') }} </h2>
        <el-upload class="upload item" drag :http-request="uploadImage" :limit="1">
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
                {{ $t('search.dragToUpload') }}
            </div>
            <template #tip>
                <div class="el-upload__tip">
                    <!-- 上传 -->
                </div>
            </template>
        </el-upload>
        <el-row>
            <el-col :xs="24" :md="6">
                <span> 搜索类型： </span>
                <el-radio-group v-model="searchType">
                    <el-radio :label="1" size="large"> {{ $t('search.image') }} </el-radio>
                    <el-radio :label="3" size="large"> {{ $t('search.video') }} </el-radio>
                </el-radio-group>
            </el-col>
            <el-col :xs="24" :md="14">
                <!--placeholder-->
            </el-col>
            <el-col :xs="24" :md="4">
                <el-button size="large" type="success" :icon="Search" round @click="search()">
                    {{ $t('search.search') }}
                </el-button>
            </el-col>
        </el-row>
    </el-card>
    <SearchResult :results="results" />
</template>