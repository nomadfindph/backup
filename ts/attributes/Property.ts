import Location from "./Location";

export default class Property {
    public buildingName: string;
    public location: Location;
    public price: number;
    public slots: number;
    public availability: boolean;
    public rating: number; 

    constructor(buildingName: string, location: Location, price: number, slots: number, availability: boolean, rating: number) {
        this.buildingName = buildingName;
        this.location = location;
        this.price = price;
        this.slots = slots;
        this.availability = availability;
        this.rating = rating;
    }
}