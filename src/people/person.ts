import {Gender} from "../population/gender";

export abstract class Person {

    protected gender: Gender;
    
    constructor(
        protected name: string
    ) {}
    
    public greeting(): string {
        let genderInfo = this.getGenderInfo();
        let generalInfo = `My name is ${this.name}.`;
        return generalInfo.concat(' ', genderInfo);
    }

    private getGenderInfo(): string {
        let result = "I am";
        switch (this.gender) {
            case Gender.Male:
                return `${result} a man.`;
            case Gender.Female:
                return `${result} a woman.`;
        }
    }
    
}