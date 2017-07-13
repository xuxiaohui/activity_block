/**
 * Created by xuxiaohui on 2017/6/19.
 */
const Config = require('hhmk-const').ParamConfig;
const UrlPath = require('hhmk-const').UrlPath;
const ACTIVITYARRAY = require('./UrlShare');

module.exports = {
    /** 根据链接查找分享对象 **/
    getShareUrl:function(path){

    },
    getBlockUrl:function(target){
        let shartTarget = this.getShareItem(target.activityBlock);
        return this.format(activityItem.shareUrl, target.activityId);
    },
    getShareItem: function (blockIndex) {
        let activityItem = {};
        ACTIVITYARRAY.forEach((item) => {
            if (item.value == blockIndex) {
                activityItem = item;
            }
        });
        return activityItem;
    },
    //根据模块获取下单描述
    getAppointmentDesc(activityBlock){
        activityBlock = parseInt(activityBlock);
        switch (activityBlock) {
            case 13||9:
                return '预约';
            case 3:
                return '抢购';
            default:
                return '预约';    
        }
    },
    format() {
        if (0 == arguments.length) {
            return null;
        }
        let str = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            let re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
            str = str.replace(re, arguments[i]);
        }
        return str;
    }
};