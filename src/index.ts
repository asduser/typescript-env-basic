import {Man} from "./people/man";
import {Woman} from "./people/woman";

declare let jQuery: any;

let man1 = new Man('Bob');
let woman1 = new Woman('Elisa');
console.log( man1.greeting() );
console.log( woman1.greeting() );

jQuery('body')
    .append(man1.greeting())
    .append('<br/>')
    .append(woman1.greeting());