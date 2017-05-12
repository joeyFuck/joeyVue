Vue.component("user-profile",{
	template:'<div><p>{{counter}}</p></div>',
	data:function(){
		return {
			counter:0
		}
	}
});

var parent = new Vue({
	el:"#parent",
	methods:{
		getChildCounter:function(){
			var child = parent.$refs.profile;// 访问子组件
			return child.counter+=1;
		}
	}
});

new Vue({
	el:"#inlineVue"
});
























