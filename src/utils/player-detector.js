
const players = {
    'DPlayer': 'dplayer',
    'jwplayer': 'jwplayer',
    'videojs': 'videojs',
    'Clappr': 'clappr',
    'ckplayer': 'ckplayer',
    'MediaElementPlayer': 'mediaelement',
    'MediaElement': 'mediaelement',
    'TcPlayer': 'tcplayer',
    'flowplayer': 'flowplayer',
    'Chimee': 'chimee',
    'ChimeePlayer': 'chimee',
    'HlsJsPlayer': 'xgplayer',
    'fluidPlayer': 'fluidplayer',
    'OpenPlayer': 'openplayer',
    'Plyr': 'plyr',
};

export default function () {
    let ret = 'unknown';
    for (let player in players) {
        if (window[player]) {
            ret = players[player];
            break;
        }
    }
    return ret;
}