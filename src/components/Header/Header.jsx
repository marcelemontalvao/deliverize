import { HeaderContainer } from "./HeaderStyles";
import logo from "../../assets/deliverizeLogo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={logo}></img>
        <div>
          <div>
            <p>Entrega:</p>
            <select name="" id="">
              <option value="R. Antonio Braune, 222"></option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Busque por estabelecimento ou produtos"
          />
          <section>
            <div>
              <span>Entrar</span>
            </div>
            <div>
              <span>Carrinho</span>
            </div>
          </section>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
