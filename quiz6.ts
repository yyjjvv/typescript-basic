interface Entity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

interface Monster extends Entity {
    name: string;
    level: number;
    hasGold?: boolean;
    skills: string[];
}

let monster4: Monster = {
    id: "g001",
    name: "고블린",
    level: 22,
    skills: ["태권도", "특공무술"],
    createdAt: new Date(),
    updatedAt: new Date(),
};

console.log(
    `${monster4.name}(${monster4.id})의 레벨은 ${monster4.level}이고,\n` +
        `${
            monster4.hasGold
                ? "해치우면 골드를 얻는"
                : "해치워도 골드를 주지 않는"
        } 몬스터입니다.\n` +
        `${
            monster4.skills.length > 0
                ? `가진 능력은 ${monster4.skills.join(", ")}입니다.`
                : ""
        }`
);
