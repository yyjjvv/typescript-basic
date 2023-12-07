// 배열의 배열 표기
const cart: string[][] = [["c001", "c002"], ["c003"]];

// 튜플: 갯수와 타입 모두 만족
let mySize: [number, string] = [1, "2"];
// mySize = [1, 2];// 오류

///////////?를 사용하는 경우////////////
let product: {
    id: string;
    name: string;
    price: number;
    membersOnly?: boolean; // 있을 수도 없을 수도
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

////////////객체의 프로퍼티의 개수를 정하지 않고, 프로퍼티 값의 타입을 정할 경우/////////////
let stock: {
    [productId: string]: number;
} = {
    c001: 3,
    c002: 2,
    c003: 0,
};

//////////////타입 지정 as 방법/////////////
let parsedProduct = JSON.parse(
    '{"name": "코드잇 블랙 후디", "price": 129000}'
) as {
    name: string;
    price: number;
};

//////////////함수 타입 지정/////////////
const stock2: { [id: string]: number } = {
    c001: 3,
    c002: 1,
};
const cart2: string[] = [];

function addToCart(id: string, quantity: number = 1): boolean {
    if (stock2[id] < quantity) {
        return false;
    }

    stock2[id] -= quantity;
    for (let i = 0; i < quantity; i++) {
        cart2.push(id);
    }

    return true;
}
// 값을 리턴하지 않는 함수는 void를 반환
// Rest 파라미터는 배열 타입
// (...ids: string[]) => void;

///////////// interface 함수 적용 ////////////////
interface Product {
    id: string;
    name: string;
    price: number;
    membersOnly?: boolean; // 있을 수도 없을 수도
}

let product4 = {
    id: "c001",
    name: "코드잇 블랙 후디",
    price: 129000,
    membersOnly: true,
};

interface PrintProductFC {
    (product: Product): void;
}

const printproduct: PrintProductFC = (product) => {
    console.log(`${product.name}의 가격은 ${product.price}원입니다.`);
};

///////////// Union & in //////////////
// enum ClothingSize {
//     S = "S",
//     M = "M",
//     L = "L",
//     XL = "XL",
// }
type ClothingSize = "S" | "M" | "L" | "XL"; // enum, type 둘 다 가능
interface ClothingProduct extends Product {
    sizes: ClothingSize[];
    color: string;
}

type ShoeSize = 220 | 225 | 230 | 235 | 240 | 245 | 250;
interface ShoeProduct extends Product {
    sizes: ShoeSize[];
    handmade: boolean;
}

function printSizes(product: ClothingProduct | ShoeProduct) {
    const availableSizes = product.sizes.join(", ");
    console.log(`구매 가능한 사이즈는 다음과 같습니다: ${availableSizes}`);

    if ("color" in product) {
        console.log(`색상: ${product.color}`);
    }

    if ("handmade" in product) {
        console.log(
            product.handmade
                ? "이 상품은 장인이 만들었습니다."
                : "이 상품은 공장에서 만들어졌습니다."
        );
    }
}
