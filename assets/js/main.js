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
    methode(){

    }

}).mount('#app')