'use strict';

import * as utils from './utils';

// use 
export const renderTableTemplate = data => {
    return `
    ${data.map(item =>
            `<div class="${item.type}">
                <div class="table-row">
                    <i class="icon-${item.class}"></i>
                    <div class="flex-expand">
                        <div class="flex-row top flex-row-middle">
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="title">
                                    <i class="icon-desktop font-16"></i><span>${item.title}</span><span class="badges">${item.type}</span>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="info">
                                    <i class="icon-info font-16"></i><span>${item.info}</span>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="folder">
                                    <i class="icon-folder font-16"></i><span>${item.folder}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex-row bottom flex-row-middle">
                            <div class="col-lg-9 col-md-9 col-sm-12">
                                <div class="flex-row flex-row-middle">
                                    <modal class="add-tool" data-id="${item.id}" ><i class="icon-plus font-18"></i></modal>
                                    ${item.browserList.map((subItem, index) => `<div class="delete-tool">
                                        <button type="button" class="btn btn-light-gray" onclick="$ctrl.deleteFn(${item.id}, ${index})">
                                            <span>${subItem.name}</span><i class="icon-trash font-16"></i>
                                        </button>
                                     </div> `).join('')}
                                </div>
                            </div>
                           <div class="col-lg-3 col-md-3 col-sm-12 row-right ${item.isDeny ? `hide` : ``}">
                            <div class="deny-tool"><button type="button" class="btn btn-deny"><i class="icon-deny"></i><span>Deny</span></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        ).join('')}
    `
}
export const renderSideBar = data => {
    const sidebar = utils.getEle('.sidebar');
    const ul = utils.generateEle('ul');
    ul.innerHTML = generateLi(data);
    sidebar.appendChild(ul);
}

export const renderCard = data => {
    const buildingsEle = utils.getEle('.building .count');
    const idleEle = utils.getEle('.idle .count');

    let buildingsCount = utils.getCounts(data).buildingsCount;
    let indleCount = utils.getCounts(data).idleCount;

    buildingsEle.innerHTML = buildingsCount;
    idleEle.innerHTML = indleCount;
}

const generateLi = data => {
    return data.map(item => `
    <li>
        <a href="#" class="height-45 ${item.id === 1 ? `active` : ''}"><i class="${item.icon} font-20"></i>${item.label}</a>
    </li>
    `)
}