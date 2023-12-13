<script setup>
import { ref } from 'vue'
import { api } from '../api'
import { percentageCast } from '../utils';


const status = ref({
    status: false,
    total_images: 0,
    total_videos: 0,
    total_video_frames: 0,
    scanning_files: 0,
    remain_files: 0,
    progress: 0,
    remain_time: 0,
    enable_login: false,
    video_progress: 0,
    current_file: '',
})

const getStatus = () => {
    api.get('/status').then((resp) => {
        // console.log(resp.data)
        status.value = resp.data
        setTimeout(getStatus, 5000)
    }).catch((error) => {
        setTimeout(getStatus, 10000)
    })
}

getStatus()

const scan = () => {
    api.get('/scan').then((resp) => {
        console.log(resp)
    })
}

</script>

<template>
    <el-card>
        <h2> {{ $t('scan.scan') }} </h2>
        <div>
            <el-row class="statistics">
                <el-col :span="8">
                    <el-statistic :title="$t('scan.totalImage')" :value="status.total_images">
                    </el-statistic>
                </el-col>
                <el-col :span="8">
                    <el-statistic :title="$t('scan.totalVideo')" :value="status.total_videos">
                    </el-statistic>
                </el-col>
                <el-col :span="8">
                    <el-statistic :title="$t('scan.totalFrame')" :value="status.total_video_frames">
                    </el-statistic>
                </el-col>
            </el-row>
            <el-row class="statistics">
                <el-col :span="8">
                    <el-statistic :title="$t('scan.totalScanning')" :value="status.scanning_files">
                    </el-statistic>
                </el-col>
                <el-col :span="8">
                    <el-statistic :title="$t('scan.totalScanned')" :value="status.remain_files">
                    </el-statistic>
                </el-col>
                <el-col :span="8">
                    <el-statistic :title="$t('scan.remainTime')" :value="status.remain_time">
                    </el-statistic>
                </el-col>
            </el-row>

        </div>
        <el-row class="center">
            <el-col :span="24" class="item" v-if="status.current_file">
                <span>
                    当前处理： {{ status.current_file }}
                </span>
            </el-col>
            <el-col :xs="24" :md="20" class="item">
                <el-progress :percentage="percentageCast(status.progress)" :stroke-width="20" status="" striped striped-flow
                    :duration="25" />
            </el-col>
            <el-col :xs="24" :md="4" class="item">
                <el-button @click="scan">
                    {{ $t('scan.startScanning') }}
                </el-button>
            </el-col>
        </el-row>
        <el-row class="center" v-if="status.video_progress">
            <el-col :xs="24" :md="20" class="item">
                <el-progress :percentage="percentageCast(status.video_progress)" :stroke-width="20" status="" striped
                    striped-flow :duration="25" />
            </el-col>
            <el-col :xs="24" :md="4" class="item">
                <!--placeholder-->
            </el-col>
        </el-row>
    </el-card>
</template>

<style scoped>
.statistics {
    text-align: center;
    margin-top: 2em;
    margin-bottom: 2em;
}

.center {
    text-align: center;
}

.item {
    padding: 2ex;
}
</style>