export default class Observer {
    observers = []
    /** @param {() => void} observer  */
    cadaster = (observer) => { this.observers.push(observer) }
    notify = () => { for (const observer of this.observers) observer() }
}