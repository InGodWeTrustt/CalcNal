import './style/normalize.css'
import './style/style.css'
import { formatCurrency } from './tools/tools'

const debounceCallTimer = (fn, delay = 500) => {
    let lastCall = 0
    let lastCallTimer;

    return (...param) => {
        const prev = lastCall
        lastCall = Date.now()
        if (prev && ((lastCall - prev) <= delay)) {
            clearTimeout(lastCallTimer)
        }

        lastCallTimer = setTimeout(() => {
            fn(...param)
        }, delay)
    }
}


const util = {
    formAusnCB() {
        if (formAusn.type.value === 'income') {
            resultTaxTotal.textContent = formatCurrency(formAusn.income.value * 0.08)
            formAusn.expenses.value = 0
        }

        if (formAusn.type.value === 'expenses') {
            calcLabelExpenses.style.display = 'block'
            resultTaxTotal.textContent = formatCurrency((formAusn.income.value - formAusn.expenses.value) * 0.2)
        }
    },

    hidden(elem) {
        elem.style.display = 'none'
    },

    show(elem) {
        elem.style.display = 'block'
    },

    formSelfEmp() {
        const percents = {
            'individual': 0.04,
            'legal': 0.06
        }

        const setDisplay = formSelfEmp.addCompensation.checked ? 'block' : 'none'
        calcComp.style.display = setDisplay

        resBlockComp.forEach(elem => elem.style.display = setDisplay)

        let result = Object.entries(percents).map(([k, v]) => {
            let res = 0
            if (formSelfEmp[k] === 'individual') {
                res = formSelfEmp[k].value * percents[k] || 0
            } else {
                res = formSelfEmp[k].value * percents[k] || 0
            }
            return [k, res]
        })

        formSelfEmp.compensation.value = formSelfEmp.compensation.value > 10000 ? 10000 : formSelfEmp.compensation.value

        const map = new Map(result)
        const tax = map.get('individual') + map.get('legal')
        const benefit = formSelfEmp.compensation.value
        const resBenefit = formSelfEmp.individual.value * 0.01 + formSelfEmp.legal.value * 0.02
        const finalBenefit = benefit - resBenefit > 0 ? benefit - resBenefit : 0
        const finalTax = tax - (benefit - finalBenefit)

        resTaxSelfEmp.textContent = formatCurrency(tax)
        resultTaxCompensation.textContent = formatCurrency(benefit - finalBenefit)
        resultTaxRestCompensation.textContent = formatCurrency(finalBenefit)
        resultTaxResult.textContent = formatCurrency(finalTax)

    }
}

const { formAusnCB: fn2, hidden, show, formSelfEmp: fn3 } = util

const navigationLinks = document.querySelectorAll('.navigation__link')
const calcElems = document.querySelectorAll('.calc')

for (let i = 0; i < navigationLinks.length; i++) {

    navigationLinks[i].addEventListener('click', () => {
        for (let j = 0; j < calcElems.length; j++) {
            if (navigationLinks[i].dataset.tax === calcElems[j].dataset.tax) {
                calcElems[j].classList.add('calc_active')
                navigationLinks[j].classList.add('navigation__link_active')
            } else {
                calcElems[j].classList.remove('calc_active')
                navigationLinks[j].classList.remove('navigation__link_active')
            }
        }
    })
}

// ????????
{
    const ausn = document.querySelector('.ausn'),
        formAusn = ausn.querySelector('.calc__form'),
        resultTaxTotal = ausn.querySelector('.result__tax_total'),
        calcLabelExpenses = ausn.querySelector('.calc__label_expenses')

    // ???????????????? ???????? ?? ??????????????????
    hidden(calcLabelExpenses)

    formAusn.addEventListener('input', fn2)

    // ??????????????????????
    const selfEmp = document.querySelector('.self-employment'),
        formSelfEmp = selfEmp.querySelector('.calc__form'),
        resTaxSelfEmp = selfEmp.querySelector('.result__tax_total'),
        calcComp = selfEmp.querySelector('.calc__label_compensation'),
        resBlockComp = selfEmp.querySelectorAll('.result__block_compensation'),
        resultTaxCompensation = selfEmp.querySelector('.result__tax_compensation'),
        resultTaxRestCompensation = selfEmp.querySelector('.result__tax_rest-compensation'),
        resultTaxResult = selfEmp.querySelector('.result__tax_result')

    hidden(calcComp) // ????????????????

    formSelfEmp.addEventListener('input', debounceCallTimer(fn3))
}

// ????????
const osno = document.querySelector('.osno'),
    formOsno = osno.querySelector('.calc__form'),
    radio = osno.querySelectorAll('.calc__radio'),
    ieBlock = osno.querySelectorAll('.result__block_ie'),
    oooBlock = osno.querySelector('.result__block_ooo'),
    resulTaxNds = osno.querySelector('.result__tax_nds'),
    resultTaxProperty = osno.querySelector('.result__tax_tax_property'),
    resultTaxNdflExpenses = osno.querySelector('.result__tax_ndfl-expenses'),
    resultTaxNdflIncome = osno.querySelector('.result__tax_ndfl-income'),
    resultTaxProfit = osno.querySelector('.result__tax_profit')


const showElements = (...arr) => {
    arr.forEach(elem => elem instanceof NodeList ? elem.forEach(e => show(e)) : show(elem))
}

radio.forEach(rad => {
    rad.addEventListener('change', () => {
        showElements(ieBlock, oooBlock)
        rad.nextElementSibling.textContent === '????' ? hidden(oooBlock) : ieBlock.forEach(ie => hidden(ie))
    })
})


formOsno.addEventListener('input', debounceCallTimer(() => {
    const income = formOsno.income.value,
        expenses = formOsno.expenses.value,
        property = formOsno.property.value

    const nds = income * 0.2,
        taxProperty = property * 0.02,
        profit = income - expenses,
        ndfExpensesTotal = profit * 0.13,
        ndflIncomeTotal = (income - nds) * 0.13,
        taxProfit = profit * 0.2

    resulTaxNds.textContent = formatCurrency(nds)
    resultTaxProperty.textContent = formatCurrency(taxProperty)
    resultTaxNdflExpenses.textContent = formatCurrency(ndfExpensesTotal)
    resultTaxNdflIncome.textContent = formatCurrency(ndflIncomeTotal)
    resultTaxProfit.textContent = formatCurrency(taxProfit)

}))

// ??????
{
    const LIMIT = 300_000
    const usn = document.querySelector('.usn')
    const formUsn = usn.querySelector('.calc__form')

    const calcLabelExpenses = usn.querySelector('.calc__label_expenses')
    const calcLabelProperty = usn.querySelector('.calc__label_property')
    const resultBlockProperty = usn.querySelector('.result__block_property')

    const resultTaxTotal = usn.querySelector('.result__tax_total')
    const resultTaxProperty = usn.querySelector('.result__tax_property')

    const typeTax = {
        'income': () => {
            calcLabelExpenses.style.display = 'none'
            calcLabelProperty.style.display = 'none'
            resultBlockProperty.style.display = 'none'

            formUsn.expenses.value = ''
            formUsn.property.value = ''
        },
        'ie-expenses': () => {
            calcLabelExpenses.style.display = ''
            calcLabelProperty.style.display = 'none'
            resultBlockProperty.style.display = 'none'

            formUsn.property.value = ''
        },
        'ooo-expenses': () => {
            calcLabelExpenses.style.display = ''
            calcLabelProperty.style.display = ''
            resultBlockProperty.style.display = ''
        }
    }

    typeTax[formUsn.typeTax.value]()

    const percent = {
        'income': 0.06,
        "ie-expenses": 0.15,
        "ooo-expenses": 0.15
    }

    formUsn.addEventListener('input', debounceCallTimer(() => {
        typeTax[formUsn.typeTax.value]()
        const income = formUsn.income.value
        const expenses = formUsn.expenses.value
        const contributions = formUsn.contributions.value
        const property = formUsn.property.value

        let profit = income - contributions

        if (formUsn.typeTax.value !== 'income') {
            profit -= expenses
        }

        const taxBigIncome = income > LIMIT ? (profit - LIMIT) * 0.01 : 0
        const summ = profit - (taxBigIncome < 0 ? 0 : taxBigIncome)
        const tax = summ * percent[formUsn.typeTax.value]
        const taxProp = property * 0.02

        resultTaxTotal.textContent = formatCurrency(tax < 0 ? 0 : tax)
        resultTaxProperty.textContent = formatCurrency(taxProp)
    }))
}


// ?????????????????? ?????????? 13%

{
    const taxReturn = document.querySelector('.tax-return')
    const formTaxReturn = taxReturn.querySelector('.calc__form')

    const resultNdflPaid = taxReturn.querySelector('.result__ndfl_paid')
    const resultTaxDesired = taxReturn.querySelector('.result__tax_desired')
    const resultTaxReturn = taxReturn.querySelector('.result__tax_return')


    let timer
    formTaxReturn.addEventListener('input', () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            const income = +formTaxReturn.income.value
            const expenses = +formTaxReturn.expenses.value
            const sumExp = +formTaxReturn.sumExpenses.value

            const ndflPaid = income * 0.13
            const taxDesired = sumExp < 120_000 ? sumExp * 0.13 : 120_000 * 0.13
            const taxReturn = taxDesired < ndflPaid ? taxDesired : ndflPaid

            resultNdflPaid.textContent = formatCurrency(ndflPaid)
            resultTaxDesired.textContent = formatCurrency(taxDesired)
            resultTaxReturn.textContent = formatCurrency(taxReturn)
        }, 1000);
    })
}