/** @type {ITransaction} */
export default class Transaction {

    /**
     * @param {ITransactionProps} props
     */
    constructor({ date, description, value }) {
        if(!date || !description || !value) throw new Error("Invalid parameters")
        this.date = date
        this.description = description
        this.value = value
        this.createdAt = new Date()
    }
}

/**
 * @typedef {object} ITransaction
 * @property {string} description
 * @property {number} value
 * @property {Date} date
 * @property {Date} createdAt Data da criação
 */

/**
 * @typedef {object} ITransactionProps
 * @property {string} description
 * @property {number} value
 * @property {Date} date
 */

