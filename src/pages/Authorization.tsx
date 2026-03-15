import "./css-pages/Authorization.css"
import "./css-pages/custom-input.css"
import MailIcon from "../assets/mail-icon.svg"
import LockIcon from "../assets/lock-icon.svg"
import EyeIcon from "../assets/eye-password-icon.svg"
import CLoseEyeIcon from "../assets/eye-password-close.svg"
import GitHubIcon from "../assets/github-icon.svg"
import GoogleIcon from "../assets/google-icon.svg"
import { Link } from "react-router-dom"

const Authorization = () => {
    return (
        <div className="authorization-container">
            <section className="authorization">
                <h1 className="authorization__title">Вход в fastQ</h1>
                <p className="authorization__description">Добро пожаловать обратно!</p>
                <form action="#" className="authorization__form">
                    <div className="custom-input">
                        <label htmlFor="email" className="custom-input__label"><MailIcon className="custom-input__icon" />Email</label>
                        <input type="text" className="custom-input__field" placeholder="Введите email" id="email" />
                    </div>
                    <div className="custom-input">
                        <label htmlFor="password" className="custom-input__label"><LockIcon className="custom-input__icon" />Пароль</label>
                        <input type="text" className="custom-input__field" placeholder="Введите пароль" id="password" />
                        <button className="custom-input__button" type="button">
                            <EyeIcon className="custom-input__button-icon custom-input__button-icon--active" />
                            <CLoseEyeIcon className="custom-input__button-icon" />
                        </button>
                    </div>
                    <div className="authorization__form-wrapper">
                        <div className="custom-checkbox">
                            <input type="checkbox" className="custom-checkbox__field" id="remember-user" />
                            <label htmlFor="remember-user" className="custom-checkbox__label">Запомнить меня</label>
                        </div>
                        <Link to={"/forgotPassword"} className="authorization__form-link">Забыли пароль?</Link>
                    </div>
                    <button className="authorization__form-submit" type="submit">Войти</button>
                </form>
                <span className="authorization__or">или</span>
                <div className="authorization__buttons">
                    <button className="authorization__buttons-button" id="google"><GoogleIcon className="authorization__buttons-icon" /> Войти через Google</button>
                    <button className="authorization__buttons-button" id="github"><GitHubIcon className="authorization__buttons-icon" /> Войти через GitHub</button>
                </div>
                <span className="authorization__registration">Нет аккаунта? <Link to={"/registration"} className="authorization__registration-link">Зарегестрироваться</Link></span>
            </section>
        </div>
    )
}

export default Authorization