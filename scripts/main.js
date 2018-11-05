import * as utils from './utils';
import {
    postData,
    getData
} from './http';

const container = utils.getEle('.container');
const toolTip = utils.getEle('.tooltip');
const input = utils.getEle('input[name=\'addValue\']');
const global = window || global;

class Base {
    constructor(value) {
        this._value = value;
    }
    addFn() {
        postData(`/add`, { id: this._value, name: input.value })
            .then(data => {
                this.cancelFn();
                // just test if have time follow up  ie not support fetch
                console.log(`success:${data}`)
            })
            .catch(error => {
                // just test if have time follow up ie not support fetch
                this.cancelFn();
                console.log(`error:${error}`)
            });
    }
    deleteFn(id, index) {
        getData(`/delete?aid=${id}&index=${index}`)
            .then(data => {
                // just test if have time follow up
                this.cancelFn();
                console.log(`success:${data}`)
            })
            .catch(error => {
                // just test if have time follow up
                this.cancelFn();
                console.log(`error:${error}`)
            })
    }
    cancelFn() {
        input.value = '';
        toolTip.style.display = 'none';
    }
    openToolTip(id, e) {
        this._value = id;
        toolTip.style.top = `${e.clientY + document.documentElement.scrollTop + 35}px`;
        toolTip.style.left = `${e.clientX - 40}px`;
        toolTip.style.display = 'block';
    }
    expandSidebar() {
        utils.targetClass(container, 'active');
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
}