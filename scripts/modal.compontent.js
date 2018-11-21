'use strict'
import * as utils from './utils';

/**
 * @type constructor
 * @description
 * compontent for a modal
 * 
 * E.G  <modal data-options="{
 *           titleText: 'titleText',
 *           confirmBtnText: 'ok',
 *           cancelBtnText: 'cancel',
 *           contentText: 'test',
 *           modalStyle: 'modalStyle',
 *           titleStyle: 'titleStyle',
 *           iconCloseStyle: 'iconCloseStyle',
 *           contentStyle: 'contentStyle',
 * *         footerStyle: 'footerStyle',
 * *         confirmBtnStyle: 'confirmBtnStyle',
 *           cancelBtnStyle: 'cancelBtnStyle'
 *       }"></modal> => 
 * 
 *     <div class="modal modalStyle" style="top: 50px; left: -15px;">
 *            <div class="modal-heard">
 *                <p class="title titleStyle">titleText</p>
 *                <i class="icon-close iconCloseStyle"></i>
 *            </div>
 *            <div class="modal-content center contentStyle "><input name="addValue" type="text" value=""></div>
 *            <div class="modal-foolter footerStyle">
 *                <button type="button" class="wright btn btn-blue btn-confirm confirmBtnStyle">ok</button>
 *                <button type="button" class="wright btn btn-light-black btn-cancel cancelBtnStyle">cancel</button>
 *            </div>
 *        </div>
 * 
 * @name Modal
 */
export default class Modal {
    constructor() {
        this._defaultOption = {
            titleText: 'Separate multiple resource name with commas',
            confirmBtnText: 'Add resource',
            cancelBtnText: 'cancel',
            contentText: '<input name="addValue" type="text" value="">',
            modalStyle: '',
            titleStyle: '',
            iconCloseStyle: '',
            contentStyle: '',
            footerStyle: '',
            confirmBtnStyle: '',
            cancelBtnStyle: ''
        }
        this._listeners = [];
        this._handles = {};
        this.initModal();
    }
    _renderDom(data) {
        let div = document.createElement('div');
        let str = `
         <div class="modal ${data.modalStyle}">
             <div class="modal-heard">
                 <p class="title ${data.titleStyle}">${data.titleText}</p>
                 <i class="icon-close ${data.iconCloseStyle}"></i>
             </div>
             <div class="modal-content center ${data.contentStyle}">${data.contentText}</div>
             <div class="modal-foolter ${data.footerStyle}">
                 <button type="button" class="wright btn btn-blue btn-confirm ${data.confirmBtnStyle}">${data.confirmBtnText}</button>
                 <button type="button" class="wright btn btn-light-black btn-cancel ${data.cancelBtnStyle}">${data.cancelBtnText}</button>
             </div>
         </div>
     `
        div.innerHTML = str;
        return div.children;
    }
    _showModal(modal) {
        let option = modal.getAttribute('data-options') || {};
        let obj = eval(`(${option})`);
        let _option = { ...this._defaultOption, ...obj };
        let _modal = this._renderDom(_option)[0];
        _modal.style.top = '50px';
        _modal.style.left = '-15px';
        modal.appendChild(_modal);
    }
    _hideModal(modal, target, name, data) {
        if (modal) {
            if (this._listeners.includes(name)) {
                this.emit({ name: name, target: target, data: data })
            }
            this._currentModal.removeChild(modal);
        }
    }
    initModal() {
        document.onclick = event => {
            let _modalNotes = document.getElementsByTagName('modal');
            let _modalList = [..._modalNotes];
            let target = event.target;
            let _modal = target.nodeName.toLowerCase() === 'modal' ? target :
                (target.parentNode.nodeName.toLowerCase() === 'modal' && !utils.hasClass(target, 'modal') ? target.parentNode : '');
            let closeIcon = this._currentModal ? this._currentModal.querySelector('.icon-close') : '';
            let confirmBtn = this._currentModal ? this._currentModal.querySelector('.btn-confirm') : '';
            let cancelBtn = this._currentModal ? this._currentModal.querySelector('.btn-cancel') : '';
            let modalNote = this._currentModal ? this._currentModal.querySelector('.modal') : '';
            if (_modal) {
                this._currentModal = _modal;
                this._index = [].indexOf.call(_modalList, _modal);
                _modalList.forEach(item => {
                    let modal = item.querySelector('.modal');
                    if (_modal === item && !modal) {
                        this._showModal(item);
                        this.emit({ name: 'show', target: target });
                    } else if (modal) {
                        item.removeChild(modal);
                    }
                })
            }
            if (target === closeIcon) {
                this._hideModal(modalNote, target, 'close');
            }
            if (target === confirmBtn) {
                this._hideModal(modalNote, target, 'confirm', this._index);
            }
            if (target === cancelBtn) {
                this._hideModal(modalNote, target, 'cancel');
            }
        }
    }
    on(name, handle) {
        if (!this._handles[name]) {
            this._handles[name] = [];
        }
        this._listeners.push(name);
        this._handles[name].push(handle);
    }
    emit(e) {
        if (this._handles[e.name] instanceof Array) {
            let handles = this._handles[e.name];
            for (let i in handles) {
                handles[i](e);
            }
        }
    }
}
