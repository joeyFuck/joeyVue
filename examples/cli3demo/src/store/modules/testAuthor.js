const state={ 
     author: 'joey',
     age:18
};

const getters = {    
    getAuthor(state) {  
       return state.author
    },
    getAge(state){
        return state.age
    }
};

const mutations = {
    setAuthor(state,name) { 
        state.author = name;
    }
};

 const actions = {
    setAuthorAction(context,name) {  
        context.commit('setAuthor',name);
    }
};

const store =  {
       namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
       state,
       getters,
       mutations,
       actions
};
 
export default store;