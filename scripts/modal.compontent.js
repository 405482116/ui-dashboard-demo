'use strict'
import * as utils from './utils';

// the default template.
const template = `
    <div class="modal-heard">
    <p class="title">Separate multiple resource name with commas</p>
    <i class="icon-close" onclick="$ctrl.hideModal()"></i>
    </div>
    <div class="modal-content center"><input name="addValue" type="text" value=""></div>
    <div class="modal-foolter">
        <button type="button" class="wright btn btn-blue" onclick="$ctrl.addFn()">Add resource</button>
        <button type="button" class="wright btn btn-light-black" onclick="$ctrl.hideModal()">Cancel</button>
    </div>
    `

/**
 * @type constructor
 * @description
 * compontent for a modal
 * 
 * E.G  <modal data-template="hello world"></modal> => 
 * <div class="modal>hello world</div>
 * 
 * @name Modal
 */
export default class Modal {
    constructor(value) {
        this.modalEle = document.getElementsByTagName('modal');
        this._value = value;

    }
    /**
    * @name Modal#showModal
    * 
    * @type function
    * @description
    * generate the modal element
    * 
    * @param {index} current modal index
    * @param {event} current event
    * 
    */
    showModal(index, event) {
        let modalList = [...this.modalEle];
        this._value = index;
        let modalContainer = utils.generateEle('div');
        modalContainer.className = 'modal';
        modalContainer.addEventListener('click', (e) => {
            e.stopPropagation();
        }, false);
        modalList.forEach((item, i) => {
            let modalEle = item.querySelector('.modal');
            let left = item.offsetLeft;
            let top = item.offsetTop;
            let tmp = item.getAttribute('data-template') || template;// if has data-template attribute will use custom render the modal content
            modalContainer.style.top = `${top + 37}px`;
            modalContainer.style.left = `${left - 15}px`;
            modalContainer.innerHTML = tmp;
            if (modalEle) {
                if (index !== i) {
                    utils.addClass(modalEle, 'hide');
                } else {
                    utils.targetClass(modalEle, 'hide');
                }
            } else if (index === i) {
                item.appendChild(modalContainer);
            }
        })
    }
    initModal() {// bind the event to modal target
        const list = [...this.modalEle]
        list.forEach((item, index) => {
            item.addEventListener('click', this.showModal.bind(this, index), false);
        })
    }
    hideModal() {// hide the modal method
        utils.addClass(this.modalEle[this._value].querySelector('.modal'), 'hide')
    }
} 
