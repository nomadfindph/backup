export default class Location {
    public baranggay: string;
    public province: string;
    public country: string;
    public zipCode: number;

    constructor(baranggay: string, province: string, country: string, zipCode: number) {
        this.baranggay = baranggay;
        this.province = province;
        this.country = country;
        this.zipCode = zipCode;
    }
}