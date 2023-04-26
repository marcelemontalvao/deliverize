import { ProductContainer } from "./ProductStyles";
import hamburguer from "../../assets/hamburguer.png";
const Product = ({ product }) => {
  return (
    <ProductContainer>
      <img src={hamburguer} alt="" />
      {/* <div>
        <p>{product.nm_product}</p>
        <p>{product.description}</p>
        <div>
          <span>
            {product.vl_discount.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <span>
            {product.vl_price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div> */}
    </ProductContainer>
  );
};

export default Product;
