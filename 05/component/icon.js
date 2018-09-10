Vue.component("Icon",{
    props:{
        name:String,
        size:{
            type:Number,
            default:16

        },
        color:String
    },
    watch:{//观察当前实例中的变量
           //相观察哪个属性就添加和那个属性同名的函数
           color(newVal,oldval){
           //如果color发生变化，函数执行
        //    console.log("color发生变化了",newVal,oldval);
           this. iColor=newVal
           },
           iColor(){
            console.log("iColor发生变化了");
           }

    },
    data(){
        return{
            iColor:this.color
        }
    },
    template:`
    <i 
    @click="click"
    class="glyphicon" 
    :style="{
        fontSize: size + 'px',
        color:iColor
    }" 
    :class="iconName">
</i>
`,
    computed:{
        iconName(){
            if(this.name){
                return "glyphicon-"+this.name
            }
           
        }
    },
    methods:{
        click(){
           
            this.iColor="black"
            this.$emit('click',this.iColor)
        
        }
    }
})