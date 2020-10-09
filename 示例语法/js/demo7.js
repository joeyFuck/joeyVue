new Vue({
	el:"#app1",
	data:{
		message:'初始值',
		checked:false,
		checkedNames:[],
		picked:'',
		selected:"A",//null
		selectedList:[],
		Countries:null,
		options:[
			{
				text:'中国',value:'china'
			},{
				text:'美国',value:'America'
			},{
				text:'俄罗斯',value:'Russian'
			}
		],
		message1:'1111',
		message2:'2222',
		selectedBind:{},
		age:18
	},
	methods:{
		
	}
});
