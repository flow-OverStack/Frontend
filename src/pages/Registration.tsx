import "./css-pages/Registration.css"
import "./css-pages/custom-input.css"
import MailIcon from "../assets/mail-icon.svg"
import LockIcon from "../assets/lock-icon.svg"
import EyeIcon from "../assets/eye-password-icon.svg"
import CLoseEyeIcon from "../assets/eye-password-close.svg"
import UserIcon from "../assets/user-icon.svg"
import SurnameIcon from "../assets/surname-icon.svg"

const Registration = () => {
    return (

        <div className="authorization-container">
            <section className="registration">
                <h1 className="registration__title">Регистрация в fastQ</h1>
                <p className="registration__description">Добро пожаловать!</p>
                <form action="#" className="registration__form">
                    <div className="registration__form-bio">
                        <div className="custom-input">
                            <label htmlFor="name" className="custom-input__label"><UserIcon className="custom-input__icon" /> Имя</label>
                            <input type="text" className="custom-input__field" placeholder="Введите имя" id="name" />
                        </div>
                        <div className="custom-input">
                            <label htmlFor="last-name" className="custom-input__label"><SurnameIcon className="custom-input__icon" /> Фамилия</label>
                            <input type="text" className="custom-input__field" placeholder="Введите фамилию" id="last-name" />
                        </div>
                    </div>
                    <div className="custom-input">
                        <label htmlFor="nickname" className="custom-input__label"><span id="nickname-icon">@</span>Никнейм</label>
                        <input type="text" className="custom-input__field" placeholder="Введите никнейм" id="nickname" />
                    </div>
                    <div className="custom-input">
                        <label htmlFor="email" className="custom-input__label"><MailIcon className="custom-input__icon" />Email</label>
                        <input type="text" className="custom-input__field" placeholder="Введите email" id="email" />
                    </div>
                    <div className="custom-input">
                        <label htmlFor="password" className="custom-input__label"><LockIcon className="custom-input__icon" />Пароль</label>
                        <input type="text" className="custom-input__field" placeholder="Введите пароль" id="password" />
                        <button className="custom-input__button" type="button" aria-label="Показать или скрыть пароль">
                            <EyeIcon className="custom-input__button-icon custom-input__button-icon--active" />
                            <CLoseEyeIcon className="custom-input__button-icon" />
                        </button>
                    </div>
                    <div className="registration__form-wrapper">
                        <div className="custom-checkbox">
                            <input type="checkbox" className="custom-checkbox__field" id="remember-user" />
                            <label htmlFor="remember-user" className="custom-checkbox__label">Согласен с политикой конфиденциальности</label>
                        </div>
                    </div>
                    <button className="registration__form-submit" type="submit">Зарегестрироваться</button>
                </form>
            </section>
        </div>
    )
}

export default Registration