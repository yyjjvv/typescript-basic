const current2: [number, number] = [0, 0];
const target2: [number, number] = [4, 5];
const dx: number = target2[0] - current2[0];
const dy: number = target2[1] - current2[1];
console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);

const items: string[] = [];
items.push('갑옷');
items.push('빨간 물약');
console.log(`${items.join(', ')}을/를 획득했다!`);