document.addEventListener('alpine:init', () => {
    Alpine.data('todolistform', () => ({
        tasks: [],
        newTask: '',

        submit() {
            if (this.newTask.trim() !== '') {
                this.tasks.push(this.newTask.trim());
                this.newTask = '';
            } else {
                alert('Enter Task Name');
            }
        },
    }));
});