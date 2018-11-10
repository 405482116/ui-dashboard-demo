'use strict';

/**
 * @description
 * post request call    !!ref fetch MDN
 * 
 * 
 * @name postData
 * @type {function}
 * @param {url} request url
 * @return{Promise.<Object>}
 */
export const postData = (url = ``, data = {}) => {
    // ref fetch MDN
    // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
        .then(response => response.json()); // parses response to JSON
}

/**
 * @description
 * get request call     !!ref fetch MDN
 * 
 * 
 * @name getData
 * @type {function}
 * @param {url} request url
 * @return{Promise.<Object>}
 */
export const getData = (url = ``) => {
    // ref fetch MDN
    // Default options are marked with *
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (myJson) {
            console.log(myJson);
        });
}