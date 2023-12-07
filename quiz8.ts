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

function printEquipment(equipment: Weapon | Armor) {
    console.log(`이름: ${equipment.name}`);
    if ("attack" in equipment) {
        // 무기인 경우 아래 코드를 실행합니다.
        console.log(`이 장비는 공격력을 ${equipment.attack} 증가 시킵니다.`);
    } else if ("defence" in equipment) {
        // 방어구인 경우 아래 코드를 실행합니다.
        console.log(`이 장비는 방어력을 ${equipment.defence} 증가 시킵니다.`);
    }
}

const item1: Weapon = {
    id: "w001",
    name: "전쟁 도끼",
    price: 100,
    attack: 15,
};

const item2: Armor = {
    id: "a001",
    name: "사슬 갑옷",
    price: 200,
    defence: 52,
};

printEquipment(item1);
printEquipment(item2);
