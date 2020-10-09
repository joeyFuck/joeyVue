var app = new Vue({
	el:"#app",
	data: {
	    items: [
	      {message: 'Foo' },
	      {message: 'Bar' }
	    ],
	    object:{
	    	name:"joey",
	    	age:"22",
	    	gender:"male"
	    },
	    num:13
	},
	methods:{
		
	},
	filters:{
		
	},
	computed:{
		
	}
});


Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo}}</li>'
})

Vue.component('todo-item2', {
  template: '<li>{{ title }}<button v-on:click="$emit(\'remove\')">X</button></li>',
  props: ['title']
})


var app2 = new Vue({
	el:"#todo-list-example",
	data:{
		newTodoText: '',
	    todos: [
	      'Do the dishes',
	      'Take out the trash',
	      'Mow the lawn'
	    ]
	},
	methods: {
	    addNewTodo: function () {
	      this.todos.push(this.newTodoText)
	      this.newTodoText = ''
	    }
	}
});


var app3 = new Vue({
	el:"#app3",
	data:{
		todos:[
		{
			id:1,
			name:"张三",
			isComplete:true
		},
		{
			id:2,
			name:"李四",
			isComplete:true
		},
		{
			id:3,
			name:"王五",
			isComplete:false		
		}
		],
		numbers:[
			1,2,3,4,5,6,7,8,9,10,11,12
		]
	},
	computed:{
		getTodosLenth:function(){
			return this.todos.length;
		},
		evenNumbers:function(){
			return this.numbers.filter(function(number){
				return number%2===0
			});
		}
	},
	methods:{
		even:function(nums){
			return nums.filter(function(n){
				return n%2 !== 0 ;
			})
		}
	}
});
