Vue.component("Input2",{
    props:{
       value1:String,
       value2:String
    },
    watch:{
        value1(val){
            this.input1=this.value1
        },
        value2(val){
            this.input2=this.value2
        },
        input1(val){
            this.$emit("update:value1",val)
        },
        input2(val){
            this.$emit("update:value2",val)
        },
    },
    data(){
        return{
            input1:this.value1,
            input2:this.value2
        }
    },
    template:`
    <div class="input">
      <input type="text" v-model="input1" />
      <input type="text" v-model="input2" />

    </div>
    `
})