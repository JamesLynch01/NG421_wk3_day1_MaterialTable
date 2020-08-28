import{ICharactersList} from "../interfaces/icharacters-list";

const DND_CHARACTERS_LIST: ICharactersList[] = [
    {
        name:'Barny',
        age: 24,
        race: 'Lizardfolk',
        alignment: 'lawful',
        class: 'monk',
        subclass: 'way of the open hand',
        level: 3,
        havePlayed: true,
        role: 'striker and cooker',
        rolePlayQuirk: 'loves to cook and eat people',
        skills: ['perception', 'cooking', 'stealth', 'insight']

    },
    {
        name: 'Creed',
        age: 700,
        race: 'Drow',
        alignment: 'Chaotic Good',
        class: 'warlock',
        subclass: 'pact of the blade',
        level: 3,
        havePlayed: true,
        role: 'Leader, Cha-caster',
        rolePlayQuirk: 'Ladies man',
        skills: ['stealth', 'deception', 'diplomancy', 'arcana']

    },
    {
        name: 'Colson Copperfield',
        age: 150,
        race: 'Mountain Dwarf',
        alignment: 'Lawful Good',
        class: 'fighter',
        subclass: 'eldritch knight',
        level: 5,
        havePlayed: true,
        role: 'blaster-tank',
        rolePlayQuirk: 'adventuring with twin brother',
        skills: ['arcana','athletics', 'insight', 'religion']
    },
    {
        name: 'N/A',
        age: 200,
        race: 'gnome',
        alignment: 'Chaotic',
        class: 'monk',
        subclass: 'way of shadows',
        level: 8,
        havePlayed: false,
        role: 'sneaky scout',
        rolePlayQuirk: 'coward',
        skills: ['stealth +10', 'sleight of hand', 'nature']
    },
    {
        name: 'cant rember',
        age: 0,
        race: 'dragonborn',
        alignment: 'lawful good',
        class: 'wizard',
        subclass: 'time wizard',
        level: 8,
        havePlayed: true,
        role: 'wizard',
        rolePlayQuirk: 'basically a time lord or wizard from a fallen time line',
        skills: ['arcana', 'history', 'nature','religion', 'persuasion']
    }
];

export {DND_CHARACTERS_LIST};