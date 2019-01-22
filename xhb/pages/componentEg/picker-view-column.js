const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({
  data: {
    years,
    year: date.getFullYear(),
    months,
    month: 2,
    days,
    day: 2,
    value: [99, 1, 1],
  },
  bindChange(e) {
    const val = e.detail.value;
		console.log(e,e.detail.value)
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },
	bindpickstartFn(e){
		const val = e.detail.value;
		console.log("开始滚动",e,e.detail.value)
	},
	bindpickendFn(e){
		const val = e.detail.value;
		console.log("结束滚动",e,e.detail.value)
	},
})