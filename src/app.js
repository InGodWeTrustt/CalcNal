import './style/normalize.css'
import './style/style.css'

const util = {
    formAusnCB() {
        if (formAusn.type.value === 'income') {
            resultTaxTotal.textContent = formAusn.income.value * 0.08
            formAusn.expenses.value = 0
        }

        if (formAusn.type.value === 'expenses') {
            calcLabelExpenses.style.display = 'block'
            resultTaxTotal.textContent = (formAusn.income.value - formAusn.expenses.value) * 0.2
        }
    },
    hidden(elem) {
        elem.style.display = 'none'
    },
    formSelfEmp() {
        const percents = {
            'individual': 0.04,
            'legal': 0.06
        }

        let result = Object.entries(percents).map(([k, v]) => {
            let res = 0
            if (formSelfEmp[k] === 'individual') {
                res = formSelfEmp[k].value * percents[k] || 0
            } else {
                res = formSelfEmp[k].value * percents[k] || 0
            }
            return res
        })

        resTaxTotal.textContent = result.reduce((a, b) => +a + +b)
    }
}

const { formAusnCB: fn2, hidden, formSelfEmp: fn3 } = util

const navigationLinks = document.querySelectorAll('.navigation__link')
const calcElems = document.querySelectorAll('.calc')

for (let i = 0; i < navigationLinks.length; i++) {
    
    navigationLinks[i].addEventListener('click', () => {
        for (let j = 0; j < calcElems.length; j++) {
            if(navigationLinks[i].dataset.tax === calcElems[j].dataset.tax){
                calcElems[j].classList.add('calc_active')
                navigationLinks[j].classList.add('navigation__link_active')
            } else {
                calcElems[j].classList.remove('calc_active')
                navigationLinks[j].classList.remove('navigation__link_active')
            }
        }
    })
}

// АУСН
const ausn = document.querySelector('.ausn'),
    formAusn = ausn.querySelector('.calc__form'),
    resultTaxTotal = ausn.querySelector('.result__tax_total'),
    calcLabelExpenses = ausn.querySelector('.calc__label_expenses')

// Скрываем блок с расходами
hidden(calcLabelExpenses)

formAusn.addEventListener('input', fn2)

// Самозанятые
const selfEmp = document.querySelector('.self-employment'),
    formSelfEmp = selfEmp.querySelector('.calc__form'),
    resTaxTotal = selfEmp.querySelector('.result__tax_total')


formSelfEmp.addEventListener('input', fn3)