Nova.booting((Vue, router) => {
    Vue.component('index-romanian-date-time', require('./components/Index/DateTimeField'))
    Vue.component('detail-romanian-date-time', require('./components/Detail/DateTimeField'))
    Vue.component('form-romanian-date-time', require('./components/Form/DateTimeField'))
})
