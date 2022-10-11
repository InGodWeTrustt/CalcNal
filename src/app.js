import './style/normalize.css'
import './style/style.css'

const util = {
    navLinkCB(event) {
        event.preventDefault()
        for (let j = 0; j < calcElems.length; j++) {
            if (this.dataset.tax === calcElems[j].dataset.tax) {
                calcElems[j].classList.add('calc_active')
                this.classList.add('navigation__link_active')
            } else {
                calcElems[j].classList.remove('calc_active')
                this.classList.remove('navigation__link_active')
            }
        }
    },
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
    }
}

const { navLinkCB: fn1, formAusnCB: fn2, hidden } = util

const navigationLinks = document.querySelectorAll('.navigation__link')
const calcElems = document.querySelectorAll('.calc')

for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', fn1)
}

const ausn = document.querySelector('.ausn')
const formAusn = ausn.querySelector('.calc__form')
const resultTaxTotal = ausn.querySelector('.result__tax_total')
const calcLabelExpenses = ausn.querySelector('.calc__label_expenses')

// Скрываем блок с расходами
hidden(calcLabelExpenses)

formAusn.addEventListener('input', fn2)

