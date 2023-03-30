const { createApp } = Vue

createApp({
    data() {
        return {
            check:'X',
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
        remove(index) {
            this.list.splice(index, 1)
        }
    }

}).mount('#app')