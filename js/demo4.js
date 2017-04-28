var app = new Vue({
	el:"#app",
	data:{
		 isShow:true,
		 type:'B',
		 loginType:'username'
	},
	methods:{
		changeLoginType:function(){
			if(this.loginType === "username"){
				this.loginType = "email";
			}else{
				this.loginType = "username";
			}
		}
	}
});

var app = new Vue({
	el:"#app2",
	data:{
		 loginType:'username'
	},
	methods:{
		changeLoginType:function(){
			if(this.loginType === "username"){
				this.loginType = "email";
			}else{
				this.loginType = "username";
			}
		}
	}
});
