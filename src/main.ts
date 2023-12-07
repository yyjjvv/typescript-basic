import Products from "./types/Product";
import Sizes from "./types/Size";

const product8: Products = {
    id: 'c001',
    name: '코드잇 블랙 후드 집업',
    price: 129000,
    membersOnly: true,
    sizes: [Sizes.S, Sizes.M],
  };
  
  const product9: Products = {
    id: 'd001',
    name: '코드잇 텀블러',
    price: 25000,
  };
  
  console.log(product8);
  console.log(product9);