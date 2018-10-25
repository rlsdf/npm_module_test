class ExampleModule {
    constructor(text) {
        this.text = text;
    }

    getText() {
        return `Hello, ${this.text}`;
    }
}

export default ExampleModule;
