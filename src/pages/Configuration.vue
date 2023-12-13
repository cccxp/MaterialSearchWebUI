<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { api } from '../api';

const { t } = useI18n({ useScope: 'global' })

const config = ref({
    scan: {
        "assetsPaths": [],
        "skipPaths": [],
        "ignoreStrings": [],
        "imageExtensions": [
            ".jpg",
            ".jpeg",
            ".png",
            ".gif"
        ],
        "videoExtensions": [
            ".mp4",
            ".flv",
            ".mov",
            ".mkv",
            ".avi"
        ],
        "frameInterval": 2,
        "imageMinWidth": 64,
        "imageMinHeight": 64,
        "imageMaxPixels": 100000000,
        "autoScan": false,
        "autoScanStartTime": "22:30",
        "autoScanEndTime": "8:00",
        "autoScanInterval": 100,
        "scanProcessBatchSize": 32
    },
    search: {
        "cacheSize": 64,
        "maxResultNum": 150,
    },
    model: {
        "language": "English",
        "name": "openai/clip-vit-base-patch32",
        "textModelName": "IDEA-CCNL/Taiyi-CLIP-Roberta-102M-Chinese",
        "device": "cuda",
        "textDevice": "cuda",
    }
})

const getConfig = () => {
    api.get('/get_config').then((resp) => {
        config.value = resp.data
        console.log(config.value)
    })
}


const languageOptions = [{
    label: '简体中文',
    value: 'Chinese',
}, {
    label: 'English',
    value: 'English',
}]

const modelOptions = [{
    label: 'openai/clip-vit-base-patch32',
    value: 'openai/clip-vit-base-patch32',
}]

const languageModelOptions = [{
    label: 'IDEA-CCNL/Taiyi-CLIP-Roberta-102M-Chinese',
    value: 'IDEA-CCNL/Taiyi-CLIP-Roberta-102M-Chinese',
}
]

const deviceOptions = [{
    label: 'CPU',
    value: 'cpu',
}, {
    label: t('config.cuda'),
    value: 'cuda',
}, {
    label: t('config.mps'),
    value: 'mps',
}]

const onModelConfigChange = (value) => {
    // 模型配置修改，更新
    console.log(config.value.model)
    api.post('/set_config', {
        type: 'model', 
        value: config.value.model
    }).then((resp) => {
        console.log(resp.data.message)
    })
}

const configPathDrawer = ref(false)

const cancelClick = () => {

}

const confirmClick = () => {

}
getConfig()

</script>

<template>
    <el-card>
        <h3> {{ $t('config.scan') }} </h3>
        <p>
            <el-row>
                <el-col :xs="12" :md="4">
                    {{ $t('config.assetsPaths') }}
                </el-col>
                <el-col :xs="12" :md="10">
                    <el-button @click="configPathDrawer = true">
                        配置
                    </el-button>
                </el-col>
            </el-row>
        </p>
        <p>
            <el-row>
                <el-col :xs="12" :md="4">
                    {{ $t('config.skipPaths') }}
                </el-col>
                <el-col :xs="12" :md="10">
                    <el-button>
                        配置
                    </el-button>
                </el-col>
            </el-row>
        </p>
        <p>
            <el-row>
                <el-col :xs="12" :md="4">
                    {{ $t('config.ignoreStrings') }}
                </el-col>
                <el-col :xs="12" :md="10">
                    <el-button>
                        配置
                    </el-button>
                </el-col>
            </el-row>
        </p>
        <p>
            <el-row>
                <el-col :xs="12" :md="4">
                    {{ $t('config.imageExtensions') }}
                </el-col>
                <el-col :xs="12" :md="10">
                    <el-button>
                        配置
                    </el-button>
                </el-col>
            </el-row>
        </p>
        <p>
            <el-row>
                <el-col :xs="12" :md="4">
                    {{ $t('config.videoExtensions') }}
                </el-col>
                <el-col :xs="12" :md="10">
                    <el-button>
                        配置
                    </el-button>
                </el-col>
            </el-row>
        </p>
        <div class="model">
            <h3> {{ $t('config.model') }} </h3>
            <p>
                <el-row>
                    <el-col :xs="24" :md="4">
                        <label for="language"> {{ $t('config.modelLanguage') }}: </label>
                    </el-col>
                    <el-col :xs="24" :md="10">
                        <el-select v-model="config.model.language" class="select" placeholder="Select" size="large" @change="onModelConfigChange">
                            <el-option v-for="item in languageOptions" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-col>
                </el-row>
            </p>
            <p>
                <el-row>
                    <el-col :xs="24" :md="4">
                        <label for="model"> {{ $t('config.clipModel') }}: </label>
                    </el-col>
                    <el-col :xs="24" :md="10">
                        <el-select v-model="config.model.name" class="select" placeholder="Select" size="large" @change="onModelConfigChange">
                            <el-option v-for="item in modelOptions" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-col>
                </el-row>
            </p>
            <p>
                <el-row>
                    <el-col :xs="24" :md="4">
                        <label for="device">
                            {{ $t('config.device') }}:
                        </label>
                    </el-col>
                    <el-col :xs="24" :md="10">
                        <el-select v-model="config.model.device" class="select" placeholder="Select" size="large" @change="onModelConfigChange">
                            <el-option v-for="item in deviceOptions" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-col>
                </el-row>
            </p>
            <p v-if="config.model.language === 'Chinese'">
                <el-row>
                    <el-col :xs="24" :md="4">
                        <label for="text-model">
                            {{ $t('config.chineseModel') }}:
                        </label>
                    </el-col>
                    <el-col :xs="24" :md="10">
                        <el-select v-model="config.model.textModelName" class="select" placeholder="Select" size="large" @change="onModelConfigChange">
                            <el-option v-for="item in languageModelOptions" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-col>
                </el-row>
            </p>
            <p v-if="config.model.language !== 'English'">
                <el-row>
                    <el-col :xs="24" :md="4">
                        <label for="text-device">
                            {{ $t('config.textDevice') }}:
                        </label>
                    </el-col>
                    <el-col :xs="24" :md="10">
                        <el-select v-model="config.model.textDevice" class="select" placeholder="Select" size="large" @change="onModelConfigChange">
                            <el-option v-for="item in deviceOptions" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-col>
                </el-row>
            </p>
        </div>
    </el-card>

    <el-drawer v-model="configPathDrawer" direction="ttb" :size="'70%'">
        <template #header>
            <h4> Assets Path config </h4>
        </template>
        <template #default>
            <el-row>
                <el-col :xs="24" :md="6">
                </el-col>
                <el-col :xs="24" :md="12">
                    <p v-for="path in config.scan.assetsPaths">
                        <el-tag size="large" effect="plain" closable>
                            {{ path }}
                        </el-tag>
                    </p>
                    <el-input>

                    </el-input>
                    <el-button>
                        添加
                    </el-button>
                </el-col>
            </el-row>

        </template>
        <template #footer>
            <div style="flex: auto">
                <el-button @click="cancelClick">cancel</el-button>
                <el-button type="primary" @click="confirmClick">confirm</el-button>
            </div>
        </template>
    </el-drawer>
</template>

<style scoped>
.model {
    display: block;
}

label {
    text-align: right;
}

.select {
    width: 90%;
}
</style>