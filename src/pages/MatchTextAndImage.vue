<script setup>
import { Search, UploadFilled } from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from "element-plus";
import 'element-plus/theme-chalk/src/message.scss';
import { ref } from 'vue';
import { useI18n } from "vue-i18n";
import { api } from '../api';
import { percentageCast } from '../utils';

const i18n = useI18n();
const searchType = ref(4)
const topn = ref(150)
const text = ref('')
const filehash = ref('')

const search = () => {
    if (filehash.value) {
        api.post('/match', {
            top_n: topn.value,
            search_type: searchType.value,
            text: text.value,
            upload_file_hash: filehash.value,
        }).then((resp) => {
            console.log(resp)
            ElMessageBox.alert('Score: ' + percentageCast(resp.data.score) + ' %', 'Score', {
                confirmButtonText: 'OK',
            })
        })
    } else {
        ElMessage.error(i18n.t('search.pleaseUpload'))
    }
}

const uploadImage = (file) => {
    const formData = new FormData()
    formData.append('file', file.file)
    api.post('/upload', formData).then((resp) => {
        filehash.value = resp.data.filehash
        console.log(filehash)
    })
}

</script>

<template>
    <el-card class="items">
        <el-row>
            <el-col :xs="24" :md="24" class="item">
                <el-input size="large" v-model="text" :placeholder="$t('search.positivePromptPlaceholder')">
                    <template #prepend>{{ $t('search.text') }}</template>
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="24" :md="24" class="item">
                <el-upload class="upload item" drag :http-request="uploadImage"  :limit="1">
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
            </el-col>
        </el-row>

        <el-row>
            <el-col :md="18">
                <!-- placeholder -->
            </el-col>
            <el-col :xs="24" :md="6" class="item">
                <el-button size="large" type="success" :icon="Search" round @click="search()">
                    {{ $t('search.calculate') }}
                </el-button>
            </el-col>
        </el-row>
    </el-card>
</template>

<style scoped>
.items {
    text-align: center;
}

.item {
    padding: 1ex;
}
</style>