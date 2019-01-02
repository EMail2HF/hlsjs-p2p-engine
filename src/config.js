
import { config as btConfig } from './bittorrent';
import URLToolkit from 'url-toolkit';

//时间单位统一为秒
let defaultP2PConfig = {
    wsSignalerAddr: 'wss://signal.cdnbye.com/wss',          // 信令服务器地址
    wsMaxRetries: 3,                            // websocket连接重试次数
    wsReconnectInterval: 5,                     // websocket重连时间间隔

    p2pEnabled: true,                           // 是否开启P2P，默认true

    dcUploadTimeout: 4,                         // datachannel上传二进制数据的超时时间
    dcTolerance: 5,                             // 请求超时或错误多少次淘汰该peer

    packetSize: 64*1024,                        // 每次通过datachannel发送的包的大小(如果要兼容旧浏览器可以设为16*1024)
    maxBufferSize: {                            // p2p缓存的最大数据量（分为PC和移动端）
        pc: 1024*1024*200,                      // PC端缓存大小
        mobile: 1024*1024*100,                   // 移动端缓存大小
    },
    loadTimeoutRate: 0.7,                        // p2p下载的超时时间比率，乘以ts的duration得出超时时间

    logLevel: 'none',                            // log的level，分为debug、info、warn、error、none，设为true等于debug，设为false等于none，默认none

    tag: '',                                     // 用户自定义标签，默认为hlsjs版本号

    webRTCConfig: {},                            // 传入channelConfig用于createDataChannel，config用于RTCPeerConnection

    p2pBlackList: ['aac', 'mp3', 'vtt', 'webvtt'],                // 不参与P2P的文件类型，防止报错

    agent: '',                                   // 代理商标识

    ...btConfig
};

/*
    fun: channelId generator
    streamId: 用于标识流地址的ID
    signalId: 用于标识信令地址的ID，在channelID加上这个可以防止不同信令服务器下的节点混在一起
 */
defaultP2PConfig.channelId = function (url, browserInfo = {}) {
    const streamParsed = URLToolkit.parseURL(url);
    const streamId = streamParsed.netLoc.substr(2) + streamParsed.path.split('.')[0];
    return `${streamId}`;
};

// 获取segment Id的函数
defaultP2PConfig.segmentId = function (level, sn, segmentUrl) {
    return `${level}-${sn}`; // 默认是'[level]-[sn]'
    // return `${streamLevel}-${segmentUrl}`
};

// 对P2P方式下载的ts文件进行校验，返回值是true代表验证通过，否则不通过，默认true
defaultP2PConfig.validateSegment = function (level, sn, buffer) {
    // do nothing
    return true;
};

export default defaultP2PConfig;
