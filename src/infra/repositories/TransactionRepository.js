import Observer from "../domain/Observer.js";

export default class TransactionRepository {
    /** @private */
    observer = new Observer()
    transactions = []
    addRecord(record) {
        this.transactions.push(record);
        this.observer.notify()
    }
    cadaster = this.observer.cadaster
    notify = this.observer.notify
}