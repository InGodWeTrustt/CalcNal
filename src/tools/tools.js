const formatCurrency = (n) => {
    const cur = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 2
    })

    return cur.format(n)
}


export {formatCurrency}