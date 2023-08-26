class Task {
    
    static id = 0;
    static incrementId() {
        this.id++; 
    }

    constructor(title, initialId) {
        Task.incrementId();
        this.id = initialId || Task.id;
        this.title = title;
    };

    getId() {
        return this.id;
    };

}

module.exports = Task;