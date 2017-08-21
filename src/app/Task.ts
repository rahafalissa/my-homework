

export class Task {
    public price: number;
    public color : string;

    constructor (public name: string,
        public number : string ,public colour : string ) {
         
    }


    toString () {
        return `your order is : 
        {type of computer: ${this.name} , number of computer you buy it :  ${this.number} , colour of computer  :  ${this.colour}}.`
    }
    
}
