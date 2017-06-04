import {Gender} from "../population/gender";

export class Man {
    
    private gender: Gender = Gender.Male;
    
    constructor(public name: string) {}
    
    public greeting(): void {
        console.log(`My name is ${this.name}.`);
    }
}