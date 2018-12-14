

// rpx 换算
function transformRpx(rpx) {
  const systemInfo = wx.getSystemInfoSync()
  const px = rpx / 750 * systemInfo.windowWidth
  return px
}

// 防抖
function debounce(method, time) {
  let timer = null
  return function () {
    const context = this
    clearTimeout(timer)
    timer = setTimeout(function () {
      method.call(context)
    }, time)
  }
}

function sum(arr) {
  return arr.reduce(function (prev, cur) {
    return prev + cur
  }, 0)
}

module.exports = {
  transformRpx,
  debounce,
  sum
}
