console.log('You have some work to do!');

const {createApp} = Vue 

createApp({
    data(){
     return {
        tasks:[{
            text:'Fare colazione',
            done:false,
        },
        {
            text:'Prepararsi',
            check:true,
        },
        {
            text:'Seguire le lezioni',
            check:false,
        },
    ]
     }
    },
    methods: {

        doneToggle(i){
            this.tasks[i].done = !this.tasks[i].done
        },

        deleteTask(index){
            this.tasks.splice(index, 1)
        },
    }

}).mount('#app')