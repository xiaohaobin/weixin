// 原生公共方法
var common = {
	/**
	 * 随机生成n个大写字母 ,返回数组
	 * @param {Number} n 字母个数
	 * @return {Array}
	 * */
	getCapital: function(n) {
		var result = [];
		for(var i = 0; i < n; i++) {
			var ranNum = Math.ceil(Math.random() * 25); //生成一个0到25的数字
			//大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;然后调用String.fromCharCode()传入ASCII值返回相应的字符并push进数组里
			result.push(String.fromCharCode(65 + ranNum));
		}
		return result;

	},
	/**
	 * 随机生成范围数字：min最小数字，max最大数字（打印数字为最小到最大的范围）
	 * @param {Number} min 最小值
	 * @param {Number} max 最大值
	 * @return {Number}
	 * */
	randNum: function(min, max) {
		var num = Math.floor(Math.random() * (max - min) + min);
		return num;
	},
};

//暴露接口
module.exports = common;