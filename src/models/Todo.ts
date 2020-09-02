class Todo {
    private readonly _id: string;

    constructor(private _text: string) {
        this._id = Date.now().toString(16) + this._text;
    }

    get id() {
        return this._id;
    }

    get text() {
        return this._text;
    }

    set text(text: string) {
        this._text = text;
    }
}

export default Todo;