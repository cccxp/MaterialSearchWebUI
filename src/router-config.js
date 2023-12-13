import { createWebHashHistory } from 'vue-router'
import About from './pages/About.vue'
import Benchmark from './pages/Benchmark.vue'
import Configuration from './pages/Configuration.vue'
import MatchTextAndImage from './pages/MatchTextAndImage.vue'
import Scan from './pages/Scan.vue'
import SearchByImage from './pages/SearchByImage.vue'
import SearchByPath from './pages/SearchByPath.vue'
import SearchByText from './pages/SearchByText.vue'

const routes = [
    { path: '/', component: SearchByText },
    { path: '/SearchByText', component: SearchByText },
    { path: '/SearchByImage', component: SearchByImage },
    { path: '/SearchByPath', component: SearchByPath },
    { path: '/MatchTextAndImage', component: MatchTextAndImage },
    { path: '/Scan', component: Scan },
    { path: '/Configuration', component: Configuration },
    { path: '/Benchmark', component: Benchmark },
    { path: '/About', component: About },
]

const routerConfig = {
    history: createWebHashHistory(),
    routes
}

export default routerConfig
