
export default function () {
    let player = 'unknown';
    if (window.DPlayer) {
        player = 'dplayer';
    } else if (window.jwplayer) {
        player = 'jwplayer';
    } else if (window.videojs) {
        player = 'videojs';
    } else if (window.Clappr) {
        player = 'clappr';
    } else if (window.ckplayer) {
        player = 'ckplayer';
    } else if (window.MediaElementPlayer || window.MediaElement) {
        player = 'mediaelement'
    } else if (window.TcPlayer) {
        player = 'tcplayer';
    } else if (window.flowplayer) {
        player = 'flowplayer';
    } else if (window.Chimee || window.ChimeePlayer) {
        player = 'chimee';
    } else if (window.HlsJsPlayer) {
        player = 'xgplayer'; // 西瓜播放器
    } else if (window.fluidPlayer) {
        player = 'fluidplayer';
    } else if (window.OpenPlayer) {
        player = 'openplayer';
    }
    return player;
}