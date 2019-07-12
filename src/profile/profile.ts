export class Profile {
    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
	}

   public hello() {
        return `Hello, ${this.name}(${this.email})`;
    }
}