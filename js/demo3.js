var app = new Vue({
	el:"#app",
	data:{
		isActive:true,
		hasError:false,
		classObject:{
			'color': 'chartreuse',
			'font-size': '25px'
		},
		activeClass: 'style1',
  		errorClass: 'style3'
	},
	methods:{
		changeActive:function(b){
			if(b){
				this.isActive = true;
			}else{
				this.isActive = false;
			}
		}
	}
});


var app2 = new Vue({
	el:"#app2",
	data:{
  		activeColor:'cornflowerblue',
  		fontSize:30,
  		styleObject:{
  			color:'blueviolet'
  		}
	}
})
