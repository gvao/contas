export default class TableController {
    constructor() {
        this.element = document.getElementById('transactions')
        this.body = this.element.querySelector('tbody')
    }
    cleanBody() { this.body.innerHTML = '' }

    /** @param {Transaction} transaction  */
    addTransaction(transaction) {
        const tr = document.createElement('tr')

        const tdDescription = document.createElement('td')
        tdDescription.textContent = transaction.description
        const tdDate = document.createElement('td')
        tdDate.textContent = formateDate(transaction.date)
        const tdValue = document.createElement('td')
        tdValue.textContent = `R$ ${parseFloat(transaction.value).toFixed(2)}`

        tr.append(tdDescription, tdValue, tdDate)
        this.body.append(tr)

    }
}

function formateDate(date = new Date()){
    const intl = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' })
    return intl.format(date)
}