interface Equipment {
    id: string;
    name: string;
    price: number;
}

interface Weapon extends Equipment {
    attack: number;
}

interface Armor extends Equipment {
    defence: number;
}

// interface Weapon2 {
//     attack: number;
// }

// interface Armor2 {
//     defence: number;
// }

// type Equipment2 = Weapon2 &
//     Armor2 & {
//         id: string;
//         name: string;
//         price: number;
//     };

function printEquipment2(equipment: Weapon & Armor) {
    console.log(`이름: ${equipment.name}`);
    console.log(
        `이 장비는 공격력을 ${equipment.attack}, 방어력을 ${equipment.defence} 증가 시킵니다.`
    );
}

const item3: Weapon & Armor = {
    id: "g001",
    name: "서리불꽃 글러브",
    price: 100,
    attack: 5,
    defence: 42,
};

printEquipment2(item3);
