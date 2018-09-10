Vue.component("Input",{
    props:{
      value:String
    },
    watch:{
        input(val,oldval){
           this.$emit("input",val)
        },
        value(val){
         this.input=val
        }
    },
    template:`
    <div class="input">
    <input type="text" v-model="input" />
    </div>
    `,
    data(){
        return{
            input:this.value
        }
    }
})