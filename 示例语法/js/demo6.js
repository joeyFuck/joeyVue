var app = new Vue({
	el:"#app",
	data:{
		count:0
	},
	methods:{
		greet:function(event){
			// `this` 在方法里指当前 Vue 实例
			alert("上面这哥们被点了"+this.count+"次");
			// `event` 是原生 DOM 事件
			alert(event.target.tagName);
		},
		greet2:function(c,event){
			alert(event.target.tagName+":上面这哥们被点了"+c+"次");
			// 现在我们可以访问原生事件对象
    		//if (event) event.preventDefault()
    		//event.stopPropagation();
		},
		toBaidu:function(event){
			if(event){
				event.preventDefault();
			}
		},
		greetClick:function(event){
			if(event){
				event.stopPropagation();//注释掉这个的话，同样注册了click事件的父元素p跟div的单击事件也会执行
			}
			alert("我还是会弹出");
		},
		submit:function(){
			alert('触发submit');
		},
		clean:function(id){
			document.getElementById(id).value = "";
		}
	}
});
//v-on:keyup.f1
Vue.config.keyCodes.f1 = 112
