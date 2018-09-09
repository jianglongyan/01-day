Vue.component("Button",{
    props:{
        color:{
            type:String,
            // required:true //参数是必须的 如果不传就会报错
            default:"default" //默认值
        },
        size:{
           type:String,
           validator(value){
              if(!( value==="lg"||value==="sm"||value==="xs")){
                  console.error("prop size nit lg or sm or xs")
                  return false
              }
             return true
            }
        }
    },
    template:`
    
    <button class="btn" :class="['btn-'+color,'btn-'+size]">
     <slot></slot>
    </button>
    `
})
