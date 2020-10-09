Vue.component('button-counter', {
	template: '<button v-on:click="increment">{{ counter }}</button>',
	data: function() {
		return {
			counter: 0
		}
	},
	methods: {
		increment: function() {
			this.counter += 1
			this.$emit('myincrement'); //提交自定义事件myincrement,对应触发的事件为前端v-on绑定的事件。
		}
	},
})
new Vue({
	el: '#counter-event-example',
	data: {
		total: 0
	},
	methods: {
		incrementTotal1: function() {
			this.total += 1
		},
		incrementTotal2: function() {
			this.total += 10
		}
	}
})
//------------------------------------------------------------------自定义事件end

Vue.component("my-component", {
	props: ['counter'],
	template: '<button>{{ counter }}</button>'
});

new Vue({
	el: "#example1",
	data: {
		total: 0
	},
	methods: {
		doTheThing: function() {
			this.total += 1;
		}
	}
});

//------------------------------------------------------------------组件中绑定原生事件end

var currencyData = {
	template: '\
    <span>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)"\
      >\
    </span>\
  ',
	props: ['value'],
	methods: {
		// 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
		updateValue: function(value) {
			var formattedValue = value
				// 删除两侧的空格符
				.trim()
				// 保留 2 小数位
				.slice(0, value.indexOf('.') + 3)
			// 如果值不统一，手动覆盖以保持一致
			if(formattedValue !== value) {
				this.$refs.input.value = formattedValue
			}
			// 通过 input 事件发出数值
			this.$emit('input', Number(formattedValue))
		}
	}
}


new Vue({
	el: '#price-example',
	data: {
		price: null
	},
	methods: {

	},
	components: {
		'currency-simple': currencyData
	}
})
//--------------------------------------------------------------使用自定义事件的表单输入组件end

Vue.component('currency-input', {
	template: '\
    <div>\
      <label v-if="label">{{ label }}</label>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)"\
        v-on:focus="selectAll"\
        v-on:blur="formatValue"\
      >\
    </div>\
  ',
	props: {
		value: {
			type: Number,
			default: 0
		},
		label: {
			type: String,
			default: ''
		}
	},
	mounted: function() {
		this.formatValue()
	},
	methods: {
		updateValue: function(value) {
			var result = currencyValidator.parse(value, this.value)
			if(result.warning) {
				this.$refs.input.value = result.value
			}
			this.$emit('input', result.value)
		},
		formatValue: function() {
			this.$refs.input.value = currencyValidator.format(this.value)
		},
		selectAll: function(event) {
			// Workaround for Safari bug
			// http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
			setTimeout(function() {
				event.target.select()
			}, 0)
		}
	}
})

new Vue({
	el: '#app',
	data: {
		price: 0,
		shipping: 0,
		handling: 0,
		discount: 0
	},
	computed: {
		total: function() {
			return((
				this.price * 100 +
				this.shipping * 100 +
				this.handling * 100 -
				this.discount * 100
			) / 100).toFixed(2)
		}
	}
})
//--------------------------------------------------------------完善的货币过滤器end


Vue.component("child-component",{
	template:"<div v-show='someChildProperty'>v-show Child</div>",
	data:function(){
		return {
			someChildProperty:true
		}
	}
	
})

Vue.component("child-compo",{
	template:'<div><h2>我是子组件的标题</h2><slot>只有在没有要分发的内容时才会显示。 </slot></div>',
	data:function(){
		return {
			
		}
	}
	
})

Vue.component("parent-compo",{
	template:'<div><h1>我是父组件的标题</h1><child-compo><p>这是一些初始内容</p><p>这是更多的初始内容</p></child-compo></div>',
	data:function(){
		return {
			
		}
	}
})//调用子组件时,附加有分发的内容


Vue.component("parent2-compo",{
	template:'<div><h1>我是父组件的标题</h1><child-compo></child-compo></div>',
	data:function(){
		return {
			
		}
	}
})//调用子组件时,没有附加要分发的内容



new Vue({
	el:"#childVue"
})

//--------------------------------------------------------------编译作用域end































