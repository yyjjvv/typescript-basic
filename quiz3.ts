// 여기에 코드를 작성하세요
const monster:{
    name: string;
    level: number;
    hasGold?: boolean;
    skills: string[];
} = {
    name: '코드잇 고블린',
    level: 22,
    skills:['태권도', '특공무술']
}

console.log(
    `${monster.name}의 레벨은 ${monster.level}이고,\n` +
      `${monster.hasGold ? '해치우면 골드를 얻는' : '해치워도 골드를 주지 않는'} 몬스터입니다.\n` +
      `${monster.skills.length > 0 ? `가진 능력은 ${monster.skills.join (', ')}입니다.` : ''}`
  );