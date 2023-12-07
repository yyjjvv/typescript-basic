/**
 * type A = '바나나' | '바닐라';
 * type B = '바나나' | '딸기';
 * type C = A | B;
 * type C = '바나나' | '바닐라' | '딸기'를 의미
 */

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

interface A {
    a: string;
}

interface B {
    b: number;
}

function printAUnionB(arg: A | B) {
    // 여기서는 타입 A | B

    if ("a" in arg) {
        // 여기 안에서는 타입 A
        console.log(arg.a);
    }

    if ("b" in arg) {
        // 여기 안에서는 타입 B
        console.log(arg.b); // VS Code에서 arg에 마우스를 호버해 보세요.
    }
}

const x = { a: "codeit" };
const y = { b: 42 };
const z = { a: "codeit", b: 42 };
const w = { a: "codeit", b: 42, c: true };

printAUnionB(x);
printAUnionB(y);
printAUnionB(z);
printAUnionB(w);