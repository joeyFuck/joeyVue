//全局注册 注册需在Vue对象声明之前
Vue.component("my-component",{
	template:"<div>A custom component</div>"
});

Vue.component("my-component2",{
	template:'<tr><td>td-template</td></tr>'
});

Vue.component('my-component3', {
				  template: '<span>{{ message }}</span>',
				  data: {
				    message: 'hello'
				  }
				})

var child = {
	template:'<div>A child custom component</div>'
}
var trTemplate={
	//template:'<div>A child custom component</div>'
	template:'<tr><td>td-template</td></tr>'
}

new Vue({
	el:"#app1",
	data:{},
	methods:{},
	components:{
		'my-childcomponent':child,//局部注册，只在#app1的Vue对象中起作用
		'my-row':trTemplate
	}
});

var data={
			counter :0
		}

var simpleCounter = {
	template:'<button v-on:click="counter +=  1">{{counter}}</button>',
	data:function(){
		return data
	}
}


Vue.component("simple-counter2",{
	template:'<button v-on:click="counter +=  1">{{counter}}</button>',
	data:function(){
		return {
			counter :0
		}
	}
});

Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 就像 data 一样，prop 可以用在模板内
  // 同样也可以在 vm 实例中像 “this.message” 这样使用
  template: '<span>{{ message }}</span>'
})

new Vue({
	el:"#example-1",
	components:{
		'simple-counter':simpleCounter
	}
});







