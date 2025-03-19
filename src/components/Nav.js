import style from '../styles/Nav.module.css';
import logo from '../assets/images/logo-bg.jpeg'

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
      <div className={style.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <a href="signup.html">Signup</a>
        {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
      </div>
    </nav>
  );
}
