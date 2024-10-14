import Observer from "../../domain/Observer.js"

export default class FormController {
    /** @private */
    observer = new Observer()
    /** @private */
    data = {}

    constructor() {
        this.formElement = document.getElementById('transactions-form')
        this.descriptionElement = document.querySelector("form > #description")
        this.valueElement = document.querySelector("form > #value")
        //<input type="date" name="date" id="date">
        const dateInput = document.createElement("input")
        dateInput.type = "date"
        dateInput.name = "date"
        dateInput.id = "date"
        dateInput.classList.add("transactions-form__input")
        const now = new Date()
        dateInput.value = FormController.getStringDateToDateElement()
        this.dateElement = dateInput

        {/* <button type="submit">Salvar</button> */ }
        const buttonElement = document.createElement("button")
        buttonElement.type = "submit"
        buttonElement.textContent = "Salvar"

        this.formElement.append(dateInput, buttonElement)

        this.formElement.addEventListener("submit", event => {
            event.preventDefault()

            const description = this.descriptionElement.value
            const value = this.valueElement.value
            const date = new Date(this.dateElement.value)

            this.setData({ description, value, date, })
            this.observer.notify()
            this.dateElement.value = FormController.getStringDateToDateElement()
            this.descriptionElement.value = ""
            this.valueElement.value = 0
        })
    }

    setData({ description, value, date, }) {
        this.data = { description, value, date, }
    }

    static getStringDateToDateElement = (now = new Date()) => `${now.getFullYear()}-${String(now.getMonth()).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`

    submit = (listener) => {
        this.observer.cadaster(() => {
            listener(this.data)
        })
    }
}