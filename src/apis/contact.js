/**
 * @author: zhangzhulei(zhangzhulei@baidu.com)
 * @file: xxxxxx
 */
const BASE_URL = 'process.env.GRIDSOME_API_URL';

export const addContact = data => {
    return fetch({
        method: 'post',
        url: BASE_URL + '/contacts',
        body: data
    });
};