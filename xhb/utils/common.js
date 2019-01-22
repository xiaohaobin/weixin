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
	/**
	 * 秒数转化为时分秒时间格式
	 * @param {Number} ts 秒数
	 * @return {String}
	 * */
	secondToStr:function(ts){
		/**
		 * zeroize值和长度（默认值是2）。
		 * @param {Object} v
		 * @param {Number} l
		 * @return {String} 
		 */
		function ultZeroize(v, l) {
			var z = "";
			l = l || 2;
			v = String(v);
			for(var i = 0; i < l - v.length; i++) {
				z += "0";
			}
			return z + v;
		};
		
		
		if(isNaN(ts)) {
			return "--:--:--";
		}
		var h = parseInt(ts / 3600);
		var m = parseInt((ts % 3600) / 60);
		var s = parseInt(ts % 60);
		return (ultZeroize(h) + ":" + ultZeroize(m) + ":" + ultZeroize(s));
	},
	  /**
		 * 将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求
		 * @param {String} url 开发者服务器 url
		 * @param {String} filePath 要上传文件资源的路径
		 * @param {String} name 
		 * @param {Object} formData HTTP 请求中其他额外的 form data
		 * @param {Function} callback 上传成功回调函数
		 */
	uploadFile:function(url, filePath, name, formData,callback) {
	  wx.uploadFile({
	  	url: url, //仅为示例，非真实的接口地址
	  	filePath:filePath,
	  	name: name,
	  	header: {
	  		"Content-Type": "multipart/form-data"
	  	},
	  	formData:formData,
	  	success: function(res) {
	  		var data = res.data
	  		console.log("上传成功",data)
			callback(res);
	  		//do something
	  	},
		fail:function(res){
			console.log("上传失败",res)
		}
	  })
	}
};

//暴露接口
module.exports = common;