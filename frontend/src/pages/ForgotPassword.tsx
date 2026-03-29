import "./css-pages/custom-input.css"
import "./css-pages/forgot-password.css"

const ForgotPassword = () => {
    return (
        <div className="authorization-container">
            <section className="forgot-password">
                <h1 className="forgot-password__title">Забыли пароль?</h1>
                <p className="forgot-password__description">Отправтье нам свою почту и мы вышлем вам дальнейшую инструкцию</p>
                <article className="forgot-password__card">
                    <form action="#" className="forgot-password__form">
                        <div className="custom-input">
                            <label htmlFor="forgot-email" className="custom-input__label"></label>
                            <input type="text" className="custom-input__field" placeholder="Введите свой email" id="forgot-email" />
                        </div>
                        <button className="forgot-password__form-button">Отправить</button>
                    </form>
                </article>
            </section>
        </div>
    )
}

export default ForgotPassword