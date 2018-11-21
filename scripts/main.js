import * as utils from './utils';
import {
    postData,
    getData
} from './http';
import { renderTableTemplate, renderSideBarTemplate, renderCardTemplate, renderHistoryTemplate } from './html';
import Modal from './modal.compontent';

const container = utils.getEle('.container');
const global = window || global;

class Base {
    addFn(e) {
        let name = document.querySelector('input[name=\'addValue\']').value;
        //TODO:   when respone the page should loading~~~~~~~~~
        postData(`/add`, { id: e.data, name: name })
            .then(res => {
                renderTableTemplate(res.data.table);//when the response back render the table row
                renderCardTemplate(res.data.table);//when the response back render the card
                // just test if have time follow up  ie not support fetch
                console.log(`success:${res}`)
            }).catch(error => {
                // just test if have time follow up ie not support fetch
                console.log(`error:${error}`)
            });
    }
    deleteFn(id, index) {
        //TODO:   when respone the page should loading~~~~~~~~~
        getData(`/delete?id=${id}&index=${index}`)
            .then(res => {
                renderTableTemplate(res.data.table);
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
        //TODO:   when respone the page should loading~~~~~~~~~
        getData(`/table`)
            .then(res => {
                renderTableTemplate(res.data.table);//when the response back render the table row
                renderCardTemplate(res.data.table);
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
}
window.onload = () => {
    global.$ctrl = new Base();
    global.$ctrl.initMenu();
    global.$ctrl.initTable();
    let modal = new Modal();
    modal.on('confirm', e => {
        global.$ctrl.addFn(e)
    })
    modal.on('cancel', e => {
        //TODO:
    })
}