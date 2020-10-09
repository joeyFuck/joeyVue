<template>
    <div>
        <button @click="btnClick('joeychange')">更改author name</button>
        <p>
            {{author}}
        </p>
    </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入 
import {setAuthorAction} from '../store/action/author'
export default {
  components:{ 
  },
  data(){
    return {
    }
  },
  computed:{ 
    ...mapState({   
         author:state=>state.testAuthor.author  
      }),  
  },
  methods:{ 
       ...mapActions('testAuthor',[ 
          setAuthorAction  
      ]),
      btnClick:function(name){
          this.setAuthorAction(name);
      } 
  },
}
</script>