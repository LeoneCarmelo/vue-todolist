const { createApp } = Vue

createApp({
    data() {
        return {
            list:[
                {
                    text: 'Learn a new language',
                    done: true
                },
                {
                    text: 'Practice that language',
                    done: false
                },
                {
                    text: 'Create a new project',
                    done: false
                },
                {
                    text: 'Share it!',
                    done: false
                },
            ]
        }
    },
    methods: {
        
    }

}).mount('#app')