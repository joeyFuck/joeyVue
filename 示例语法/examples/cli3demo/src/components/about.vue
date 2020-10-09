 
<template>
  <div>
    <button @click="isShowClick">update state.testStatus.showFooter</button>  
    <div v-if="isShow" >
        isShow
    </div>
  </div>
</template>
 
<script>
import {mapState,mapGetters,mapActions} from 'vuex';  
export default { 
  components:{ 
  },
  data(){
    return {
    }
  },
  computed:{
    //  injection state or injection getter, same way
    // ...mapState({ 
    //      isShow:state=>state.testStatus.showFooter //????????????state.footerStatus,
    //                                                   //?????showFooter??footerStatus.js?state?showFooter
    //   }),
    // 1 injection  Getters  
    ...mapGetters('testStatus',{
         isShow:'isShow' 
      })
  },
  methods:{
      //2 injection action
       ...mapActions('testStatus',[ //testStatus??modules?????collection.js
          'showFooter' ,'hideFooter' //testStatus.js????actions?????????@click????????
      ]),
      isShowClick:function(){
          if (this.isShow) { 
              this.hideFooter(); 
          }else{
              this.showFooter();
          }
      }
    // use this.$store.dispatch or the way above
    //   isShowClick:function(){
    //       if (this.isShow) {
    //           this.$store.dispatch('testStatus/hideFooter') 
    //       }else{
    //           this.$store.dispatch('testStatus/showFooter')
    //       }
    //   }
  },
//   watch:{
//       $route(to,from){
//         if(to.name=='book'||to.name=='my'){
//            this.$store.dispatch('testStatus/showFooter') //'footerStatus/showFooter',
//                                                            //footerStatus.js actions showFooter
//         }else{
//            this.$store.dispatch('testStatus/hideFooter')  
//         }
//       }
//   }
}
</script>