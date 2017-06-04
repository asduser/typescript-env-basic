import {Gender} from "../population/gender";
import {Person} from "./person";

export class Woman extends Person {
    
    constructor(name: string) {
        super(name);
        this.gender = Gender.Female;
    }

}