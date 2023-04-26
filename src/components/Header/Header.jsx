import { HeaderContainer } from "./HeaderStyles";
import logo from "../../assets/deliverizeLogo.png";
import person from "../../assets/account_circle.png";
import cart from "../../assets/shopping_cart.png";
import Select from "../Select/Select";

const Header = () => {
  const options = [
    { value: "R. Antonio Braune, 222", label: "R. Antonio Braune, 222" },
  ];
  return (
    <HeaderContainer>
      <div>
        <img src={logo}></img>
        <div>
          <Select title="Entrega:" options={options} />
          <input
            type="text"
            placeholder="Busque por estabelecimento ou produtos"
          />
          <section>
            <div>
              <img src={person} alt="" />
              <span className="margin-r">Entrar</span>
            </div>
            <div>
              <img src={cart} alt="" />
              <span>Carrinho</span>
            </div>
          </section>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
