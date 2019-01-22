var data = 'init data'

// 获取插件信息
function getPluginInfo() {
	return {
	name : 'regionPicker' ,
	version : '1.0.0' ,
	date : '2019-01-09'
	}
}
function getData() {
  return data
}

function setData(value) {
  data = value
}

module.exports = {
  getData: getData,
  setData: setData,
	getPluginInfo: getPluginInfo
}