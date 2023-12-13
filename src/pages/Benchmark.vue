<script setup>
import { ref } from 'vue';
import { baseWsUrl } from '../api';

const results = ref([])
const disableStartButton = ref(false)

const runBekchmark = () => {
    const ws = new WebSocket(baseWsUrl + '/benchmark')
    ws.addEventListener('open', () => {
        console.log('open')
        ws.send('start')
        results.value = []
    })
    ws.addEventListener('message', (event) => {
        console.log(event)
        disableStartButton.value = true
        results.value.push(event.data)
    })
    ws.addEventListener('error', (error) => {
        console.log(error)
        disableStartButton.value = false
    })
    ws.addEventListener('close', (event) => {
        console.log('close')
        disableStartButton.value = false
    })
}

</script>

<template>
    <el-card>
        <h3> {{ $t('benchmark.benchmark') }} ({{ $t('benchmark.description') }}) </h3>
        <p>
            <el-button @click="runBekchmark()" :disabled="disableStartButton">
                {{ $t("benchmark.startBenchmark") }}
            </el-button>
        </p>
        <p v-for="result in results">
            {{ result }}
        </p>
    </el-card>
</template>