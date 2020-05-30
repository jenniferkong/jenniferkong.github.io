function Otter(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Otter";
    this.image ="otter.svg";
}

function Shiba(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Shiba";
    this.image ="shiba.svg";
}

function Pigeon(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Pigeon";
    this.image ="pigeon.svg";
}

var animal = [ new Otter(), new Shiba(), new Pigeon()];
var names = ["osaka", "koikoi", "rhea", "oscar", "will", "hime"];

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * 3);
}

function generateRandomAnimal() {
    var randomIndex = generateRandomIndex(animal.length);
    var randomAnimal = animal[randomIndex];

    if (randomAnimal instanceof Otter) {
        return new Otter(generateRandomName(), generateRandomAge());
    }

    else if (randomAnimal instanceof Shiba) {
        return new Shiba(generateRandomName(), generateRandomAge());
    }

    else if (randomAnimal instanceof Pigeon) {
        return new Pigeon(generateRandomName(), generateRandomAge());
    }

}


function generateRandomName(maxIndex) {
    var randomIndex =  generateRandomIndex(animal.length);
    var randomAnimal = animal[randomIndex];
    return randomAnimal;
}

function generateRandomAge() {
    return generateRandomIndex(5);
}