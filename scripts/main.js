import * as utils from './utils';
import {
    postData,
    getData
} from './http';
import { renderTableTemplate, renderSideBarTemplate, renderCardTemplate, renderHistoryTemplate } from './html';
import Modal from './modal.compontent';

const container = utils.getEle('.container');
const global = window || global;

class Base extends Modal {
    constructor(value) {
        super(value);
        this._value = value;
    }
    addFn() {
        let name = document.querySelector('input[name=\'addValue\']').value;
        //todo   when respone the page should loading~~~~~~~~~
        postData(`/add`, { id: this._value, name: name })
            .then(res => {
                renderTableTemplate(res.data.table);//when the response back render the table row
                this.initModal();// bind the event to modal compontent
                renderCardTemplate(res.data.table);//when the response back render the card
                // just test if have time follow up  ie not support fetch
                console.log(`success:${res}`)
            }).catch(error => {
                // just test if have time follow up ie not support fetch
                console.log(`error:${error}`)
            });
    }
    deleteFn(id, index) {
        //todo   when respone the page should loading~~~~~~~~~
        getData(`/delete?id=${id}&index=${index}`)
            .then(res => {
                renderTableTemplate(res.data.table);
                this.initModal();
                renderCardTemplate(res.data.table);
                console.log(`success:${res}`)
            }).catch(error => {
                console.log(`error:${error}`)
            })
    }
    expandSidebar() {
        utils.targetClass(container, 'active');
    }
    initTable() {
        //todo   when respone the page should loading~~~~~~~~~
        getData(`/table`)
            .then(res => {
                renderTableTemplate(res.data.table);//when the response back render the table row
                renderCardTemplate(res.data.table);
                this.initModal(); // bind the event to modal compontent
            }).catch(error => {
                console.log(`error:${error}`)
            })
    }
    initMenu() {
        getData(`/menu`)
            .then(res => {
                renderSideBarTemplate(res.data.menu);//call back render the side bar template
                renderHistoryTemplate(res.data.history);//call back render the history template
            }).catch(error => {
                console.log(`error:${error}`)
            })
    }
    get value() {
        return this._num;
    }

    set value(num) {
        this._num = num;
    }
}
window.onload = () => {
    global.$ctrl = new Base();
    global.$ctrl.initMenu();
    global.$ctrl.initTable();
}