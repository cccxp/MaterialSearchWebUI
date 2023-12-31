const zh_CN = {
    index: {
        searchByText: '使用自然语言搜索',
        searchByImage: '使用图片搜索',
        searchByPath: '使用路径搜索',
        matchTextAndImage: '匹配图文相似度',
        scan: '扫描',
        configuration: '配置',
        benchmark: '性能测试',
        about: '关于',
        language: '语言',
    },
    search: {
        searchByText: '使用自然语言搜索',
        searchByImage: '使用图片搜索',
        searchByPath: '使用路径搜索',
        matchTextAndImage: '匹配图文相似度',
        positivePrompt: '正向提示词',
        negativePrompt: '负向提示词',
        positivePromptPlaceholder: '一只敏捷的棕色狐狸',
        negativePromptPlaceholder: '一只懒惰的狗',
        search: '搜索',
        threshold: '阈值',
        filterPath: '路径过滤',
        searchType: '搜索类型',
        image: '图片',
        video: '视频',
        searchResult: '搜索结果',
        searchResultCount: '无结果。 | 共 {n} 条结果。 | 共 {n} 条结果。',
        dragToUpload: '拖拽文件到此处或点击上传',
        pleaseUpload: '请先上传图片',
        path: '路径',
        similarity: '相似度',
        calculate: '计算',
        text: '文本',
    },
    scan: {
        scan: '扫描',
        totalImage: '数据库总图象数',
        totalVideo: '数据库总视频数',
        totalFrame: '数据库总视频帧数',
        totalScanning: '本次扫描文件总数',
        totalScanned: '本次扫描完成数量',
        remainTime: '剩余时间',
        startScanning: '开始扫描',
    },
    config: {
        scan: '扫描',
        configuration: '配置',
        assetsPaths: '素材目录',
        skipPaths: '跳过目录',
        ignoreStrings: '忽略字符串',
        imageExtensions: '图片后缀名',
        videoExtensions: '视频后缀名',
        model: '模型',
        clipModel: 'CLIP 模型',
        modelLanguage: '模型语言',
        textModel: '文字模型',
        device: '推理设备',
        cuda: 'CUDA (英伟达显卡)',
        mps: 'MPS (Apple M1 后续芯片)',
        textDevice: '文本编码设备',
        chineseModel: '中文模型',
    },
    benchmark: {
        benchmark: '性能测试',
        description: '用于选择运行设备',
        startBenchmark: '开始测试',
    },
    about: {
        about: '关于',
        project: '项目地址',
        backendProject: '后端项目',
        originalProject: '源项目',
        license: '开源协议',
        gplv3: 'GNU 通用公共许可证 第三版',
    },
}


const en = {
    index: {
        searchByText: 'Search By Natural Language',
        searchByImage: 'Search By Image',
        searchByPath: 'Search By Path',
        matchTextAndImage: 'Match Similarity of Text and Image',
        scan: 'Scan',
        configuration: 'Configuration',
        benchmark: 'Benchmark',
        about: 'About',
        language: 'Language',
    },
    search: {
        searchByText: 'Search By Natural Language',
        searchByImage: 'Search By Image',
        searchByPath: 'Search By Path',
        matchTextAndImage: 'Match Similarity of Text and Image',
        positivePrompt: 'Positive Prompt',
        negativePrompt: 'Negative Prompt',
        positivePromptPlaceholder: 'The quick brown fox jumps',
        negativePromptPlaceholder: 'a lazy dog',
        search: 'Search',
        threshold: 'Threshold',
        filterPath: 'Filter Path',
        searchType: 'Search Type',
        image: 'Image',
        video: 'Video',
        searchResult: 'Search Result',
        searchResultCount: 'No results. | One result. | {n} results.',
        dragToUpload: 'Drag the files to this area or click to upload',
        pleaseUpload: 'Please upload image first',
        path: 'Path',
        similarity: 'Similarity',
        calculate: 'Calculate',
        text: 'Text',
    },
    scan: {
        scan: 'Scan',
        totalImage: 'Images in DB',
        totalVideo: 'Videos in DB',
        totalFrame: 'Video Frams in DB',
        totalScanning: 'Total Files Scanning This Time',
        totalScanned: 'Files Tcanned This Time',
        remainTime: 'Remain Time',
        startScanning: 'Start Scanning',
    },
    config: {
        scan: 'Scan',
        configuration: 'Configuration',
        assetsPaths: 'Assets Paths',
        skipPaths: 'Skip Paths',
        ignoreStrings: 'Ignore Keywords',
        imageExtensions: 'Image Extensions',
        videoExtensions: 'Video Extensions',
        model: 'Model',
        clipModel: 'CLIP Model',
        textModel: 'Text Model',
        device: 'Device',
        modelLanguage: 'Text Model Language',
        textDevice: 'Text Encoder Device',
        chineseModel: 'Chinese Encoder Model',
        cuda: 'CUDA (Nvidia GPU)',
        mps: 'MPS (Apple Silicon)'
    },
    benchmark: {
        benchmark: 'Benchmark',
        description: 'for selecting running devices',
        startBenchmark: 'Run Benchmark',
    },
    about: {
        about: 'About',
        project: 'Project',
        backendProject: 'Backend Project',
        originalProject: 'Original Project',
        license: 'License',
        gplv3: 'GNU GENERAL PUBLIC LICENSE Version 3',

    },
}

const messages = {
    'zh-CN': zh_CN,
    'en': en
}

const i18nConfig = {
    messages,
    locale: navigator.language,
    fallbackLocale: 'en',
    legacy: false,  // set `false` to use Composition API
}

export default i18nConfig;
