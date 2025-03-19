import style from '../styles/Nav.module.css';
import logo from '../assets/images/logo-bg.jpeg'
import Account from './Account';

export default function Nav() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <a href="index.html" className={style.brand}>
            <img src={logo} alt="Let,s Travel The World" />
            <h3>Test Your Skill</h3>
          </a>
        </li>
      </ul>
      <Account/>
    </nav>
  );
}
