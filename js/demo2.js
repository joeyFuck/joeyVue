var app1 = new Vue({
	el:"#app1",
	data:{
		message:"<b>joeyJOEY</b>",
		domId:"div1",
		number:1,
		IsTrue:true,
		url:"https://www.baidu.com"
	},
	methods:{
		doSomething:function(){
			alert("u touch me");
		},
		onSubmit:function(){
			alert("提交");
		}
	},
	filters:{
		capitalize:function(value){
			if (!value) return '';
		    value = value.toString();
		    return value.toUpperCase();
		}
	},
	computed:{
		//相当于一个属性的getter方法
		reversedMessage:function(){
			return this.message.split('').reverse().join('');
		}
	}
});
