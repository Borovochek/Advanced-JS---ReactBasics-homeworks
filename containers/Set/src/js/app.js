
class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (!this.members.has(character)) {
            this.members.add(character);
            return this;
        } else {
            throw new Error("Персонаж уже в команде");
        }
    };

    addAll(...characters) {
        characters.forEach((character) => {
            this.members.add(character);
        });
        return this;
    }

    toArray() {
        return Array.from(this.members);
    }
}

module.exports = Team;