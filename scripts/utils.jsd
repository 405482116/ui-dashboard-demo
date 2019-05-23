'use strict'
/**
 * @description
 * add class in target element
 * 
 * 
 * @name generateEle
 * @type {function}
 * @param {str} tag string
 * @return{document.<Object>}
 */

export const generateEle = str => document.createElement(str);

/**
 * @description
 * get building and idle count 
 * 
 * 
 * @name getCounts
 * @type {function}
 * @param {data} table list Object
 * @return{Count<Object>}
 */
export const getCounts = data => {
    return {
        buildingsCount: data ? data.filter(item => item.type === 'building').length : 0,
        idleCount: data ? data.filter(item => item.type === 'idle').length : 0
    }
}
/**
 * @description
 * add class in target element
 * 
 * 
 * @name addClass
 * @type {function}
 * @param {ele} element
 * @param {cls} className
 * @return{Void}
 */
export const addClass = (ele, cls) => ele && !hasClass(ele, cls) ? ele.classList.add(cls) : '';


/**
 * @description
 * judge class in target element
 * 
 * 
 * @name hasClass
 * @type {function}
 * @param {ele} element
 * @param {cls} className
 * @return{Boolean}
 */
export const hasClass = (ele, cls) => ele ? ele.classList.contains(cls) : false;

/**
 * @description
 * get element function
 * 
 * 
 * @name getEle
 * @type {function}
 * @param {attr} id > name > attribute
 * @return{document.<Object>}
 */
export const getEle = attr => document.querySelector(attr) || [];

/**
 * @description
 * if has target class will remove target class 
 * if no target class will add target class
 * 
 * @name targetClass
 * @type {function}
 * @param {ele}  element
 * @param {className} className
 * @return{Void}
 */
export const targetClass = (ele, className) => {
    const classList = ele ? ele.classList : [];
    const pos = classList.contains(className);
    return pos ? classList.remove(className) : classList.add(className);
}
