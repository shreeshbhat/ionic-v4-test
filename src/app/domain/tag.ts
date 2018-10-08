import { Todo } from './todo';

export class Tag {
    label: string;
    color: string;
    todos: Todo[];

    constructor(label: string, color: string, todos: Todo[]) {
        this.label = label;
        this.color = color;
        this.todos = todos;
    }
}
