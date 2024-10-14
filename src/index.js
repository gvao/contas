import TransactionRepository from "./infra/TransactionRepository.js"
import AddTransaction from "./useCases/AddTransaction.js"

import Controller from "./infra/controller/Controller.js"

const transactionRepository = new TransactionRepository()
const addTransaction = new AddTransaction(transactionRepository)

const controller = new Controller
const tableController = controller.table
const formController = controller.form


transactionRepository.cadaster(() => {
    tableController.cleanBody()
    const transactions = transactionRepository.transactions
    for (const transaction of transactions) tableController.addTransaction(transaction)
})

formController.submit(({ date, description, value }) => {
    addTransaction.execute({ date, description, value })
})

transactionRepository.notify()