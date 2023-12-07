import Sizes from "./Size";

export default interface Products {
    id: string;
    name: string;
    price: number;
    membersOnly?: boolean;
    sizes?: Sizes[];
}
