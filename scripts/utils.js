'use strict'
/**
 * @description
 * get element function
 * 
 * 
 * @name getEle
 * @type {function}
 * @param {attr} id > name > attribute
 * @return{document.Object}
 */
export const getEle = attr => document.querySelector(attr) || [];

/**
 * @description
 * get element function
 * 
 * 
 * @name targetClass
 * @type {function}
 * @param {ele}  element
 * @param {className} className
 * @return{document.Object}
 */
export const targetClass = (ele, className) => {
    const classList = ele ? ele.classList : [];
    const pos = classList.contains(className);
    return pos ? classList.remove(className) : classList.add(className);
}
