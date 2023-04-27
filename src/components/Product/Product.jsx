import { ProductContainer } from "./ProductStyles";
import hamburguer from "../../assets/hamburguer.png";
const Product = ({ product }) => {
  return (
    <ProductContainer>
      <img src={hamburguer} alt="" />
      <div>
        <p>{product.nm_product}</p>
        <p>{product.description}</p>
        <div>
          <span>R${product.vl_discount}</span>
          <span>R${product.vl_price}</span>
        </div>
      </div>
    </ProductContainer>
  );
};

export default Product;
