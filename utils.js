/**
 * 获取格式化时间
 * 
 * @param {any} dateObj 
 * @returns 
 */
function getCurrentTime(dateObj) {
    if (dateObj) {
        var date = new Date(dateObj);

    } else {
        var date = new Date();

    }
    // 年
    var year = date.getFullYear();
    // 月
    var month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    // 日
    var day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    // 星期
    var week = date.getDay();
    var weekText;
    // debugger
    switch (week) {
        case 0:
            weekText = '星期日'
            break;
        case 1:
            weekText = '星期一'
            break;
        case 2:
            weekText = '星期二'
            break;
        case 3:
            weekText = '星期三'
            break;
        case 4:
            weekText = '星期四'
            break;
        case 5:
            weekText = '星期五'
            break;
        case 6:
            weekText = '星期六'
            break;
        default:
            break;
    }
    //小时
    var hours = date.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }
    // 分钟
    var minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    // 秒
    var seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    //毫秒
    var millSeconds = date.getMilliseconds();
    if (millSeconds < 10) {
        millSeconds = '0' + millSeconds;
    }

    return year + '年' + month + '月' + day + '日' + ' ' + weekText + ' ' + hours + ':' + minutes + ':' + seconds;
}

