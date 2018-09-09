Vue.component("Icon",{
    props:{
        name:String,
        size:{
            type:Number,
            default:16

        },
        color:String
    },
    template:`
    <i 
    class="glyphicon" 
    :style="{
        fontSize: size + 'px',
        color
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
    }
})