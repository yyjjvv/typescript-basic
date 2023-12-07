/**
 * querySelector() 함수: 기본적으로 어떤 DOM 노드가 리턴될지 모르기 때문에 HTMLElement라는 일반적인 타입으로 정의.
 * 하지만 타입을 확신할 수 있는 경우에는 아래 코드처럼 직접 제네릭 타입을 정의
 * ex) const elem = document.querySelector<HTMLInputElement>('input.username');
 */

/**
 * Map: 키와 밸류를 갖는 자료구조. 타입 파라미터로 키와 밸류의 타입을 정의하고 사용.
 * ex) const productMap = new Map<string, Product>();
 */

/**
 * Set: 배열과 비슷하지만 중복된 요소를 추가할 수 없는, 수학에서 집합에 해당하는 자료구조. 타입 파라미터로 요소의 타입을 정의하고 사용.
 * ex) const productSet = new Set<Product>();
 */

/**
 * 키와 밸류 정하기: Record
 * 객체에 키와 밸류 타입을 정해놓고 싶을 때 사용. Map과 비슷하지만 차이점은 순수한 객체에 타입만 추가한다는 점.
 * const productMap: Record<string, Product> = {}
 * productMap['c001'] = product1;
 * productMap['c002'] = product2;
 */

/**
 * 객체 프로퍼티 고르기: Pick
 * interface Product {
 *   id: string;
 *   name: string;
 *   price: number;
 *   membersOnly?: boolean;
 * }
 * type ProductInfo = Pick<Product, 'name' | 'price'>;
 * Pick으로 만든 타입은 아래와 같다. name 프로퍼티와 price 프로퍼티만 골라서 타입을 만들었다.
 * type ProductInfo = {
 *     name: string;
 *     price: number;
 * } 
 */

/**
 * 객체의 프로퍼티 생략하기: Omit
 * interface Product {
 *   id: string;
 *   name: string;
 *   price: number;
 *   membersOnly?: boolean;
 * }
 * type ProductInfo = Omit<Product, 'name' | 'price'>;
 * Omit으로 만든 타입은 아래와 같다. id와 membersOnly를 제외하고 타입을 만들었다.
 * type ProductInfo = {
 *     name: string;
 *     price: number;
 * } 
 */

/**
 * Union 제거하기: Exclude
 * type Coupon = PromotionCoupon | EmployeeCoupon | WelcomCoupon | RewardCoupon;
 * 
 * type InternalCoupon = EmployeeCoupon;
 * type PublicCoupon = Exclude<Coupon, InternalCoupon>;
 * Exclude로 만든 타입은 아래와 같다.
 * type PublicCoupon = PromotionCoupon | WelcomCoupon | RewardCoupon
 */

/**
 * 함수 파라미터 타입 가져오기: Parameters
 * 함수 파라미터들의 타입을 함수의 타입을 통해 정의할 수 있다. 만약 함수의 타입이 아니라, 선언된 함수라면 typeof 연산자로 함수의 타입으로 만들어서 사용한다.
 * function addToCart(id: string, quantity: number = 1): boolean {
 *   // ...
 *   return true;
 * }
 * 
 * type AddToCartParameters = Parameters<typeof addToCart>;
 * 결과는 아래와 같다.
 * type AddToCartParameters = [id: string, quantity: number | undefined]
 */

/**
 * 함수 리턴 타입 가져오기: ReturnType
 * 함수의 리턴 타입을 가져온다.
 * function addToCart(id: string, quantity: number = 1): boolean {
 *   // ...
 *   return true;
 * }
 * 
 * type AddToCartResult = ReturnType<typeof addToCart>;
 * 결과는 아래와 같다.
 * type AddToCartResult = boolean
 */
const shoeSizes: number[] = [230, 250, 280];
shoeSizes.map((num) => {});

const clothingSizes: string[] = ["M", "L", "XL"];
clothingSizes.map((names) => {});

function printArray<T>(items: T[]) {
    for (const item of items) {
        console.log(item);
    }
}

printArray(shoeSizes);
printArray(clothingSizes);

// interface와 적용할 경우
interface Product {
    id: string;
    name: string;
    price: number;
    membersOnly?: boolean;
}
interface SizeProducts<T> extends Product {
    sizes: T[];
}
enum ClothingSizes {
    S = "S",
    M = "M",
    L = "L",
    XL = "XL",
}
type ClothingProducts = SizeProducts<ClothingSizes>;

// 타입 별칭과 적용할 경우
type Pair<T> = [T, T];
const point: Pair<number> = [1, 2];
const fullname: Pair<string> = ["kim", "coding"];

// 여러개 사용할 경우 쉼표로 구분
type Multipe<T, U, V> = [T, U, V];
const map = new Map<string, Product>();