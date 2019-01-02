import URLToolkit from 'url-toolkit';


export function noop() {
    return true;
}

export function getQueryParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null && r[2] !== '') return r[2].toString();
    return '';
}

export function isBlockType(url, blackList) {
    const urlObj = URLToolkit.parseURL(url);
    const mediaType = urlObj.path.split('.')[1];
    if (blackList.indexOf(mediaType) !== -1) {
        return true;
    }
    return false;
}
