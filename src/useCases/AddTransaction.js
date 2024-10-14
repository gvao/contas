import Transaction from '../domain/Transaction.js'
import TransactionRepository from '../infra/TransactionRepository.js'


/** @type {IAddTransaction} */
export default class AddTransaction {

    /**
     * @param {TransactionRepository} repository
     */
    constructor(repository) {
        this.repository = repository
    }
    execute({ date, description, value }){
        const transaction = new Transaction({ date, description, value })
        this.repository.addRecord(transaction)
    }
}

/**
 * @interface 
 * @typedef {object} IAddTransaction
 * @property {({ test: string }) => void} execute
 */

