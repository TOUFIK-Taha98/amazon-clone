import { ShoppingBasket } from "@mui/icons-material";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon-logo"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="nav__option">
          <span className="nav__optionLineOne">Hello Taha</span>
          <span className="nav__optionLineTwo">Sign In</span>
        </div>
        <div className="nav__option">
          <span className="nav__optionLineOne">Returns</span>
          <span className="nav__optionLineTwo">& Orders</span>
        </div>
        <div className="nav__option">
          <span className="nav__optionLineOne">Your</span>
          <span className="nav__optionLineTwo">Prime</span>
        </div>
        <div className="nav_optionBasket">
          <ShoppingBasket />
          <span className="nav__optionLineTwo nav__basketCount">0</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
