const c = (x) => { return 2*3.14*(x) }

const circum = new Vue({
  el: '#circum',
  data: {
    first: 6,
    
  },
  computed: {
    cir: function () {
      const i = parseInt(this.first)
      
      return `The radius is ${c(i)}.`
    }
  }
})