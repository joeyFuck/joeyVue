<template> 
    <div>
        <h1>home</h1>
        <p>store.testStatus.isShow:{{isShow}}</p>
        <button @click="btnClick">v-on:click缩写@click</button>
        <p>{{msg}}</p>
        <p v-once>这个将不会改变: {{ msg }}</p>
        <a :href="url">v-bind:href缩写:href</a>
        <p>
            computed ：{{reversedMessage}}
        </p> 
        <div class="static"
            v-bind:class="classObject">
             <p>class与style绑定=> class="static active"</p>
             <p>你可以在对象中传入更多属性来动态切换多个 class。此外，v-bind:class 指令可以与普通的 class 属性共存</p>
        </div>
        <p>
            条件渲染
        </p>
        <div v-if="type === 'A'">
            A
        </div>
        <div v-else-if="type === 'B'">
            B
        </div>
        <div v-else-if="type === 'C'">
            C
        </div>
        <div v-else>
            Not A/B/C
        </div>
        <p>
            v-for可循环数组，也可循环对象
        </p>
        <ul id="example-1">
            <li v-for="(item, index) in items" :key="item.key">
                {{ item.message }},{{index}}
            </li>
        </ul>
        <p>
            数组:
            vm.items[1] = 'x' // 不是响应性的
            vm.items.length = 2 // 不是响应性的
            针对1
        </p>
        <p>
            针对第1个问题
        </p>
        <p>
            // Vue.set
            Vue.set(vm.items, indexOfItem, newValue)
        </p>
        <p>
            // Array.prototype.splice
            vm.items.splice(indexOfItem, 1, newValue) 
        </p>  
         <p>
            该方法是全局方法 Vue.set 的一个别名：
            vm.$set(vm.items, indexOfItem, newValue)
        </p> 
        <p>
            针对第2个问题
        </p>
        <p>
            vm.items.splice(newLength)
        </p>
        <p>
            还是由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除：
        </p>
        <p>
            var vm = new Vue({
                data: {
                    a: 1
                }
            })
            // `vm.a` 现在是响应式的
            vm.b = 2
            // `vm.b` 不是响应式的
            可以使用 Vue.set(object, key, value) 方法向嵌套对象添加响应式属性。
            Vue.set(vm.data, 'age', 27)
        </p>
        <p>
            有时你可能需要为已有对象赋予多个新属性，你应该这样做：
        </p>
        <p>
            vm.userProfile = Object.assign({}, vm.userProfile, {
                age: 27,
                favoriteColor: 'Vue Green'
            })
        </p>
        <p>
            事件，参数实例
        </p>
        <button v-on:click="warn('传参数同时传递event.', $event)">
        Submit
        </button>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'; //先要引入  
    export default {
        data () {
            return {
                msg: "我是home 组件",
                url:"https://www.baidu.com",
                classObject: {
                    active: true,
                    'text-danger': false
                },
                type:"B",
                items:[
                    { key:"1", message: 'Foo' },
                    { key:"2", message: 'Bar' }
                ]
            }
        },
        methods:{
            btnClick:function () {
                this.msg = "修改后的msg";
            },
            warn: function (message, event) {
                // 现在我们可以访问原生事件对象
                if (event) event.preventDefault()
                alert(message)
            }
        },
         computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.msg.split('').reverse().join('')
            },
            ...mapGetters('testStatus',{
                isShow:'isShow' 
            })
        }
    }
</script>
<style lang="less">
    .active{
        color: blue;
    }    
</style>