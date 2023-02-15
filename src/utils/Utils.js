// Format currency to Number

const formatCurrency = (amount) =>
    (amount.replaceAll('.', '').replaceAll(',', '.'))

// Format Number to currency

const formatNumber = (number) => {
    if (number[number.length - 1] === ",") {
        return number
    }
    return new Intl.NumberFormat('es-ES').format(formatCurrency(number))
}

// Only number values

const onlyNumber = (value) => {
    return !isNaN(value.replaceAll(",", "").replaceAll(".", ""))
}


export default {
    formatNumber, onlyNumber, formatCurrency
}