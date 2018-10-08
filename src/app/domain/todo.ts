export class Todo {
    id: string;
    task: string;
    tag: string;

    constructor(id: string, task: string, tag: string) {
        this.id = id;
        this.task = task;
        this.tag = tag;
    }
}
