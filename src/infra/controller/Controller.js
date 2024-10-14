import FormController from "./FormController.js";
import TableController from "./TableController.js";

export default class Controller {
    constructor(){
        this.form = new FormController()
        this.table = new TableController()
    }
}