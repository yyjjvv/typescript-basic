/**
 * type A = '바나나' | '바닐라';
 * type B = '바나나' | '딸기';
 * type C = A & B;
 * type C = '바나나'를 의미
 */

/**
 * type A = { id: number };
 * type B = { name: string };
 * type C = A & B;
 * type C = { id: number; name: string }을 의미
 */

interface Id {
    id: string;
}

interface Timestamp {
    createdAt: Date;
    updatedAt: Date;
}

interface TimestampId extends Id {
    createdAt: Date;
    updatedAt: Date;
}

type Product1 = Id & {
    name: string;
    price: number;
    membersOnly?: boolean;
};
// interface Product1 extends Id {
//     name: string;
//     price: number;
//     membersOnly?: boolean;
// };

type User = Id &
    Timestamp & {
        username: string;
        email: string;
    };
// interface User extends TimestampId {
//     username: string;
//     email: string;
// }

type Review = Id &
    Timestamp & {
        productId: string;
        userId: string;
        content: string;
    };
// interface Review extends TimestampId {
//     productId: string;
//     userId: string;
//     content: string;
// }

const product5: Product1 = {
    id: "c001",
    name: "코드잇 블랙 후드티",
    price: 129000,
};

const user: User = {
    id: "user0001",
    username: "codeit",
    email: "typescript@codeit.kr",
    createdAt: new Date(),
    updatedAt: new Date(),
};

const review: Review = {
    id: "review001",
    userId: user.id,
    productId: product.id,
    content: "아주 좋음",
    createdAt: new Date(),
    updatedAt: new Date(),
};

interface A {
    a: string;
}

interface B {
    b: number;
}

function printAIntersectionB(arg: A & B) {
    console.log(arg.a);
    console.log(arg.b);
}

const a = { a: "codeit" };
const b = { b: 42 };
const c = { a: "codeit", b: 42 };
const d = { a: "codeit", b: 42, c: true };

// printAIntersectionB(a); // 타입 오류
// printAIntersectionB(b); // 타입 오류
printAIntersectionB(c);
printAIntersectionB(d);