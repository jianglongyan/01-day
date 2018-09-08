/**
 * 如果想在双组件标签中放内容的话 必须在组件的模板中添加slot 插槽标签
 * 
 * props 选项 除了可以写成数组的方式 还可以写成对象的方式
 * 
 * required 参数必须
 * default 给prop添加默认值 使用时不传参数的时候的默认值
 * validator 方法 自定义验证的方法
 * 
 * prop:null 不验证类型
 * 
 * props:{
 *  color: String || [String,Number] || null
 * }
 * 
 * 
 * props:{
 *  color: {
 *      type: String || null || [String,Number],
 *      required: true, // 此参数为必须参数
 *      default: '' // 当参数未传递时 设置一个默认值
 *      validator(value){ // 这是一个自定义验证的函数 函数的参数就是你要验证的prop
 *          返回true表示验证成功
 *          返回false表示验证失败 控制台会报错
 *      }
 *  }
 * }
 * 
 */

Vue.component('Button',{
    props:{
        color: {
            type: String,
            // required: true, //参数是必须的 如果不传就会报错
            default:'default' // 默认值
        },
        size: {
            type: String,
            // validator(value){ // 多加了一层 自定义验证函数
            //     console.error()
            //     if(!(value === 'lg' || value === 'sm' || value === 'xs')) {
            //         console.error('prop size not lg or sm or xs')
            //         return false
            //     }
            //     return true
            // }
        },
        value: [Number, String, Array, Date, Object, Function, Symbol]
    },
    template: `
        <button class="btn" :class="['btn-' + color, {
            'btn-lg': size === 'lg',
            'btn-sm': size === 'sm',
            'btn-xs': size === 'xs'
        }]">
        {{value}}
            <slot></slot>
        </button>
    `
})
