/**
 * 리터럴 타입: 특정한 숫자나 문자열 같이 변수의 값을 타입으로 하는 타입. (각 리터럴 타입들은 string이나 number 같은 더 큰 타입에 포함)
 * const name = 'codeit'; // 'codeit' 이라는 리터럴 타입
 * const rank = 1; // 1 이라는 리터럴 타입
 */

/**
 * 타입 별칭: 복잡한 타입에 이름을 붙이고 재사용하고 싶을 때 사용
 * type Point = [number, number];
 * type SearchQuery = string | string[];
 * type Result = SuccessResult | FailedResult;
 * type Coupon = PromotionCoupon | EmployeeCoupon | WelcomCoupon | RewardCoupon;  
 */

/**
 * Union: A이거나 또는 B인 경우를 타입으로 만들고 싶을 때
 */

/**
 * Intersection: A와 B의 성질을 모두 갖는 타입을 만들고 싶을 때
 */

/**
 * keyof 연산자: 객체 타입에서 프로퍼티 이름들을 모아서 Union한 타입으로 만들고 싶을 때 사용
 */

/**
 * typeof 연산자: 자바스크립트 코드에서 사용하면 결괏값이 문자열이지만, 타입스크립트 코드에서 쓸 때는 결과 값은 타입스크립트의 타입
 */

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
