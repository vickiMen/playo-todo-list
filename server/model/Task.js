class Task {

    static id = 0;
    
    static incrementId() {
        this.id++;
    }

    constructor(title) {
        Task.incrementId();
        this.title = title;
        this.id = Task.id;
    };

}

module.exports = Task;