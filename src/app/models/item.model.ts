
export class Item {
    public name: string;
    public catagory: string;
    public description: string;
    public imagePath: string;
    public price: number;
   

    constructor (name: string, cata: string, price: number, desc: string, imagePath: string,  ){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.price = price;
        this.catagory = cata;

    }


}