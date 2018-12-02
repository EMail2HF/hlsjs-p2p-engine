
import Tracker from './tracker-client';
import Loader from './frag-loader';

let config = {
    prefetchOffset: 3,      // 预下载的ts相对于播放点的偏移量
    prefetchNum: 4,         // 同时预下载的ts最大数量

};

export {
    Tracker,
    Loader as FragLoader,
    config
}