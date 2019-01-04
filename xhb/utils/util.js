const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//时间转换
var timeToAny = {
	/**
	 * yyyy-mm-dd hh:mm:ss转换为时间戳
	 * @param {String} s yyyy-mm-dd hh:mm:ss时间格式
	 * @return {Number}
	 * */
	backDateNum: function(s) {
		if(s) {
			var date = new Date(s.replace(/-/g, '/'));
			return Date.parse(date) / 1000;
		}

	},
	/**
	 * 标准时间返回 y-m-d h:m:s格式
	 * @param {Object} date 当前时间对象
	 * @return {String}
	 * */
	formatDateTime: function(date) {
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		m = m < 10 ? ('0' + m) : m;
		var d = date.getDate();
		d = d < 10 ? ('0' + d) : d;
		var h = date.getHours();
		h = h < 10 ? ('0' + h) : h;
		var minute = date.getMinutes();
		minute = minute < 10 ? ('0' + minute) : minute;
		var second = date.getSeconds();
		second = second < 10 ? ('0' + second) : second;
		return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
	},
	//获取当前时间的时间戳
	getTimeNum:function(){
		var _this = this;
		var sTime = _this.formatDateTime(new Date());
		return _this.backDateNum(sTime);
	}
}

//模块暴露接口
module.exports = {
  formatTime: formatTime,
	backDateNum:timeToAny.backDateNum,// yyyy-mm-dd hh:mm:ss转换为时间戳
	formatDateTime:timeToAny.formatDateTime,//标准时间返回 y-m-d h:m:s格式
	getTimeNum:timeToAny.getTimeNum//获取当前时间的时间戳
}
