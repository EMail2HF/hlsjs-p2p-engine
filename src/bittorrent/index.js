
import Tracker from './bt-tracker';
import Loader from './bt-loader';

let config = {
    urgentOffset: 5,                                                 // 播放点的后多少个buffer为urgent

};

export {
    Tracker,
    Loader as FragLoader,
    config
}