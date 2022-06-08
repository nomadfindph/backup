import User from "./User";
import Property from "../attributes/Property";
import Image from "../attributes/Image";
import Location from "../attributes/Location";

class Client implements User {
    public name: string;
    public username: string;
    public email: string;
    public password: string;

    constructor(name: string, username: string, email: string, password: string) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

class Landlord implements User {
    public name: string;
    public username: string;
    public email: string;
    public password: string;
    public proofOfProperty: Image;
    public gallery: Image[] = []
    public properties: Property[] = []

    constructor(name: string, username: string, email: string, password: string, proof: Image) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.proofOfProperty = proof;
    }

    public addPhoto(image: Image) {
        this.gallery.push(image);
    }

    public addProperty(property: Property) {
        this.properties.push(property)
    }
}

class Tenant extends Client {
    public favorites: Property[] = [];
    public places: Location[] = [];

    public addToFavorites(property: Property) {
        this.favorites.push(property);
    }
}

export {Client, Landlord, Tenant}