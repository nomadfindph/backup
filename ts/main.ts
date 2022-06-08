import Property from "./attributes/Property";
import { Tenant, Landlord } from "./classes/Account";
import Location from "./attributes/Location";
import Image from "./attributes/Image";

class NomadfindPH {
    
    //tenant properties and methods
    public tenants: Tenant[] = [];

    // landlord properties and methods
    public landlords: Landlord[] = [];

    public newTenant(name: string, username: string, email: string, password: string) {
        let tenant = new Tenant(name, username, email, password);
        this.tenants.push(tenant);
    }

    public newLandlord(name: string, username: string, email: string, password: string, proof: Image) {
        let landlord = new Landlord(name, username, email, password, proof);
        this.landlords.push(landlord);
    }

    public tenantNames() {
        for (let i = 0; i < this.tenants.length; i++) {
            console.log(this.tenants[i].name); 
        }
    }

    public landlordNames() {
        for (let i = 0; i < this.landlords.length; i++) {
            console.log(this.landlords[i].name); 
        }
    }

    public filterBy(preference: string) {

        let filtered: any[] = []

        if (preference === "price") {
            for (let i = 0; i < this.landlords.length; i++) {

                let currentLandlord = this.landlords[i]
                
                for (let j = 0; j < currentLandlord.properties.length; j++) {
                    let pairs = {
                        name: "",
                        place: "",
                        key: 0,
                    }
                    pairs.name = currentLandlord.name;
                    pairs.place = currentLandlord.properties[j].buildingName;
                    pairs.key = currentLandlord.properties[j].price;
                    filtered.push(pairs);
                }
            }
        } else if (preference === "slots") {
            for (let i = 0; i < this.landlords.length; i++) {

                let currentLandlord = this.landlords[i]
                
                for (let j = 0; j < currentLandlord.properties.length; j++) {
                    let pairs = {
                        name: "",
                        place: "",
                        key: 0,
                    }
                    if (currentLandlord.properties[j].slots !== 0) {
                        pairs.name = currentLandlord.name;
                        pairs.place = currentLandlord.properties[j].buildingName;
                        pairs.key = currentLandlord.properties[j].slots;
                        filtered.push(pairs);
                    }
                }
            }
        } else if (preference === "rating") {
            for (let i = 0; i < this.landlords.length; i++) {

                let currentLandlord = this.landlords[i]
                
                for (let j = 0; j < currentLandlord.properties.length; j++) {
                    let pairs = {
                        name: "",
                        place: "",
                        key: 0,
                    }
                    pairs.name = currentLandlord.name;
                    pairs.place = currentLandlord.properties[j].buildingName;
                    pairs.key = currentLandlord.properties[j].rating;
                    filtered.push(pairs);
                }
            }
        } else {
            for (let i = 0; i < this.landlords.length; i++) {

                let currentLandlord = this.landlords[i]
                
                for (let j = 0; j < currentLandlord.properties.length; j++) {
                    if (currentLandlord.name.includes(preference)) {
                        let pairs = {
                            name: "",
                            place: "",
                            key: "",
                        }
                        pairs.name = currentLandlord.name;
                        pairs.place = currentLandlord.properties[j].buildingName;
                        pairs.key = preference;
                        filtered.push(pairs);
                    }

                    if (currentLandlord.properties[j].buildingName.includes(preference)) {
                        let pairs = {
                            name: "",
                            place: "",
                            key: "",
                        }
                        pairs.name = currentLandlord.name;
                        pairs.place = currentLandlord.properties[j].buildingName;
                        pairs.key = preference;
                        filtered.push(pairs);
                    }
                }
            }
        }
        console.log(filtered);
    }
}

const app = new NomadfindPH();

// CREATING NEW TENANTS
app.newTenant(
    "Sean Patrick Namo",
    "seannamo.01",
    "sean@rocketmail.com.ph",
    "alliznotwell123"
);
app.newTenant(
    "Steven Ballaret",
    "steve.b",
    "ballaret.s@yahoo.com.ph",
    "ilovephilippines.03"
);
app.newTenant(
    "Joshua Grecia",
    "j.grecia",
    "josh.grecia@gmail.com",
    "itsjozh_123"
);
app.newTenant(
    "Gabriel Tupas",
    "gab_23",
    "tupas_g@studentmail.com",
    "coffemakesmemove.45"
);
// CREATING NEW LANDLORDS
app.newLandlord(
    "Lord Of D. Land",
    "realestate_isLife",
    "earthisMINE@kanyemail.com",
    "igotchuhomie45",
    new Image(new URL("https://www.my-proof.com"))
);
app.newLandlord(
    "Hala O. Emji",
    "omg.imfree",
    "emji@gmail.com",
    "omggmo123",
    new Image(new URL("https://www.oh-my-proof.com"))
);
app.newLandlord(
    "Zup P. Dup",
    "ilove.ceramics",
    "ceramicsGirl@cnd.com",
    "todayismyday89",
    new Image(new URL("https://www.a-proof.com"))
);

// ADDING PROPERTIES OF LANDLORDS
app.landlords[0].addProperty(
    new Property(
    "Funeral Homes",
    new Location(
        "Corps",
        "Iloilo",
        "Philippines",
        5000
    ),
    0,
    9999999,
    true,
    .5
)
);
app.landlords[1].addProperty(
    new Property(
        "Asta la Vista Dorms",
        new Location(
            "Mandurriao",
            "Iloilo",
            "Philippines",
            5000
        ),
        1500,
        5,
        true,
        .8
    )
);
app.landlords[2].addProperty(
    new Property(
        "Balay Lang Namon",
        new Location(
            "Mandurriao",
            "Iloilo",
            "Philippines",
            5000
        ),
        1500,
        0,
        true,
        .8
    )
);
app.landlords[2].addProperty(
    new Property(
        "Rose Tours Inn",
        new Location(
            "San Jose",
            "Iloilo",
            "Philippines",
            5300
        ),
        1000,
        12,
        true,
        .9
    )
);

// ADDING FAVORITES OF TENANTS
app.tenants[0].addToFavorites(app.landlords[0].properties[0]);
app.tenants[1].addToFavorites(app.landlords[1].properties[0]);
app.tenants[2].addToFavorites(app.landlords[2].properties[0]);
app.tenants[3].addToFavorites(app.landlords[2].properties[1]);

// TESTING FILTERING
console.log("Filtered by Price:")
app.filterBy("price");
console.log("Filtered by Availability:")
app.filterBy("slots");
console.log("Filtered by Rating:")
app.filterBy("rating");
console.log("Filtered by Word (Name&BldgName):")
app.filterBy("Asta");
