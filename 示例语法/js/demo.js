var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
	el:'#app-2',
	data:{
//		message:'you loaded this page on'+new Date()
		seen:false,//这个要放最前！？
		message:'you loaded this page on'
		
	}
});

var app4 = new Vue({
	el:'#app-4',
	data:{
		message:false
		
	}
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false
  }
})


var app5 = new Vue({
	el:'#app-5',
	data:{
		todos:[
			{text:'Learn JavaScript'},
			{text:'Learn Vue'},
			{text:'Learn something awesome'}
		]
	}
});

var app6 = new Vue({
	el:'#app-6',
	data:{
		message:'you are awesome'		
	},
	methods:{
		reverseMessage:function(){
//		     this.message = this.message.split('').reverse().join('')
			this.message = this.message.split(' ').reverse().join(' ')
		}
	}
});


Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

Vue.component('todo-item2', {
  props: ['joey'],
  template: '<li>{{ joey.text }}</li>'
})


var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: '蔬菜' },
      { text: '奶酪' },
      { text: '随便其他什么人吃的东西' }
    ]
  }
})













