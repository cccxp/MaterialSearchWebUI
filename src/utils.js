const percentageCast = (percentage) => {
    // 转为 2位 小数
    return Number((percentage * 100).toFixed(2))
}

export { percentageCast };
