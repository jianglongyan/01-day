Vue.component("Table",{
    props:{
        column:Array,
        data:Array,
        striped:Boolean,
        hover:Boolean,
        border:Boolean
    },
    template:`
    <table class="table" :class="{
        'table-striped' :striped,
       'table-hover' :hover,
      'table-bordered' :border

    }">
        <thead>
            <tr>
                <th v-for="item in column">{{item}}</th>
        
            </tr>
                    
            </thead>
                <tbody>
                    <tr v-for="item in data">
                        <td v-for="arg in item">{{arg}}</td>
                       
                    </tr>
            </tbady>
    </table>
    `
})