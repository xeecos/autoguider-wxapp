// index.ts
// 获取应用实例
const app = getApp()
Page({
    data: {
        latitude: 'Hello World',
        direction: 0,
        directionStr:"",
        faceup:0,
        faceupStr:"",
        alpha:0,
        beta:0,
        gamma:0,
        imageSrc:"http://192.168.43.180/capture/get",
        ip:"192.168.43.180"
    },
    onLoad() {

    },
    onShow() {
        
    },
    onHide() {
    },
    onIPChange(evt)
    {
        this.setData({ip:evt.detail.value});
    },
    onIPDone(evt)
    {
        wx.showToast({title:"done"})
        this.setData({imageSrc:`http://${this.data.ip}/capture/get`})
    }
})