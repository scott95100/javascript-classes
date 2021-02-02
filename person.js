class Person {
    constructor(name, softwareEngineer, strLocation){
        this.arms = 2;
        this.legs = 2;
        this.name = name;
        this.softwareEngineer = softwareEngineer;
        this.artists = [];
        this.location = ``
    }
    //this is a method on the class(a function that can run on the class)
    great() {
        console.log("hello SEI-111")
    }
    walk() {
        console.log('waling along the beach.')
    }
    //method with a parameter
    eat(food) {
        console.log(`Today I am eating ${food}`)
    }
    //method working with arrays
    addArtist(artist) {
        console.log(`I like ${artist}`)
        this.artists.push(artist)
    }
    addLocation(strLocation) {
        console.log(`I am currently located ${        this.location += strLocation
        }`)
        this.location += strLocation
    }
}
//this is an instance of a class, known as an object
//IMPORTANT add the new keyword 
const princeLeo = new Person("Leo Brooks", true)

//print attributes
console.log(princeLeo.name)
console.log(princeLeo.softwareEngineer)

//calling/invoking the methods
princeLeo.walk()
princeLeo.eat('Dinosaur Chicken Nuggets')
princeLeo.jump = ()=> {
    console.log(`Weeee`)
}

princeLeo.jump()
princeLeo.addArtist('Rico Nasty')
princeLeo.addArtist(`Yeye`)
//view an attribute
console.log(princeLeo.artists)


//creat a couple of classmates
const travelingTom = new Person("Tom Erickson", true, 'Texas')

console.log(travelingTom.name)
travelingTom.addLocation('Texas')


