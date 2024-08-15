class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.heroAttack = this.setAttack();
    }


    setAttack() {
        if (this.type === "mago") {
            return "magia";
        } else if (this.type === "guerreiro") {
            return "espada";
        } else if (this.type === "monge") {
            return "artes marciais";
        } else if (this.type === "ninja") {
            return "shuriken";
        } else {
            return "ataque desconhecido";
        }
    }

    attack() {
        console.log(`O ${this.type} ${this.name} atacou usando ${this.heroAttack}`);
    }
}

let marlon = new Hero("marlon", 22, "guerreiro");

marlon.attack();