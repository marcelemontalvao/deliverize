import { ProductContainer } from "./ProductStyles";
import hamburguer from "../../assets/hamburguer.png";
const Product = ({ product }) => {
  const formatterPrices = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <ProductContainer>
      <img src={hamburguer} alt="" />
      <div>
        <p>{product.nm_product}</p>
        <p>{product.description}</p>
        <div>
          <span>{formatterPrices.format(product.vl_discount)}</span>
          <span>{formatterPrices.format(product.vl_price)}</span>
        </div>
      </div>
    </ProductContainer>
  );
};

export default Product;
