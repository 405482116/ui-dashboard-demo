import * as utils from './utils';
import {
    postData,
    getData
} from './http';
import { renderTableTemplate, renderSideBar, renderCard } from './html';
import Modal from './modal.compontent';

const container = utils.getEle('.container');
const tableBody = utils.getEle('.table-body');

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
                tableBody.innerHTML = renderTableTemplate(res.data.table);//when the response back render the table row
                this.initModal();// bind the event to modal compontent
                renderCard(res.data.table);
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
                tableBody.innerHTML = renderTableTemplate(res.data.table);
                this.initModal();
                renderCard(res.data.table);
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
                console.log(`success:${res}`)
                tableBody.innerHTML = renderTableTemplate(res.data.table);//when the response back render the table row
                this.initModal(); // bind the event to modal compontent
                renderCard(res.data.table);
            }).catch(error => {
                console.log(`error:${error}`)
            })
    }
    initMenu() {
        getData(`/menu`)
            .then(res => {
                console.log(`success:${res}`)
                tableBody.innerHTML = renderSideBar(res.data.menu);//when the response back render the table row
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