// 배열의 배열 표기
const cart: string[][] = [["c001", "c002"], ["c003"]];

// 튜플: 갯수와 타입 모두 만족
let mySize: [number, string] = [1, "2"];
// mySize = [1, 2];// 오류

let product: {
    id: string;
    name: string;
    price: number;
    membersOnly?: boolean;
    sizes: string[];
} = {
    id: "c001",
    name: "코드잇 블랙 후디",
    price: 129000,
    membersOnly: true,
    sizes: ["M", "L", "XL"],
};

if (product.membersOnly) {
    console.log("회원 전용 상품");
} else {
    console.log("일반 상품");
}

let field = "fieald name";
let obj = {
    [field]: "field value",
};

let stock: {
    [productId: string]: number;
} = {
    c001: 3,
    c002: 2,
    c003: 0,
};
