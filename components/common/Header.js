// const Header = ({ merchant }) => (
const Header = () => (
  <header className='header'>
    <title>Home | Ciment Pot</title>
    <nav role='navigation'>
      <div id='menuToggle'>
        <input type='checkbox' />
        <span></span>
        <span></span>
        <span></span>
        <ul id='menu'>
          <a href='/'>
            <li>Home</li>
          </a>
          <a href='#about'>
            <li>About</li>
          </a>
          <a href='#products'>
            <li>Store</li>
          </a>
          <a href='#contact'>
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
    {/* <h1 className='header__text-logo'>{merchant.business_name}</h1> */}
    <a href='#products' className='header__shop'>
      Concrete Pot
    </a>
  </header>
);

export default Header;