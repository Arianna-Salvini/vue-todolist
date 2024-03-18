console.log('You have some work to do!');

const {createApp} = Vue 

createApp({
    data(){
     return {
        newTask:'',
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

        addTask(){
            if(this.newTask.length > 2){
                this.tasks.push({text:this.newTask, done:false})
                this.newTask = ''
            }
        }
    }

}).mount('#app')