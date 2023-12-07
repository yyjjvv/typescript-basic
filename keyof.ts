interface Product3 {
    id: string;
    name: string;
    price: number;
    salePrice: number;
    membersOnly?: boolean;
}
// keyof는 객체의 키값을 가져올 때 사용
// type ProductProperty = keyof Product3;
// const productTableKeys: ProductProperty[] = ["name", "price", "membersOnly", "salePrice"];

const productTableKeys: (keyof Product3)[] = ["name", "price", "membersOnly", "salePrice"];

const product6: Product3 = {
    id: "c001",
    name: "코드잇 블랙 후드 집업",
    price: 129000,
    salePrice: 98000,
    membersOnly: true,
};

let product7: typeof product6; //product6의 타입을 추론해서 적용. 즉, Product3

for (let key of productTableKeys) {
    console.log(`${key} | ${product6[key]}`);
}

console.log(typeof product6)