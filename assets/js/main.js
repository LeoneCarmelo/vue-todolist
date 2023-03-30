const { createApp } = Vue

createApp({
    data() {
        return {
            newToDo: '',
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
        },
        addToDo() {
            const newToDoObj = {
                text: this.newToDo,
                done: false
            }
            this.list.push(newToDoObj)
            this.newToDo = ''
        },
        lineThrough(task) {
            task.done = !task.done
        }
    }

}).mount('#app')