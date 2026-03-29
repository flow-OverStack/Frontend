import "./css-pages/Authorization.css"
import "./css-pages/custom-input.css"
import MailIcon from "../assets/mail-icon.svg"
import LockIcon from "../assets/lock-icon.svg"
import EyeIcon from "../assets/eye-password-icon.svg"
import CLoseEyeIcon from "../assets/eye-password-close.svg"
import GitHubIcon from "../assets/github-icon.svg"
import GoogleIcon from "../assets/google-icon.svg"
import { Link, Router, useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useMutation } from "@tanstack/react-query"
import { loginUser } from "../api/post"
import { queryClient } from "../queryClient"
import ErrorSpan from "../components/error/Error"
import { useDispatch } from "react-redux"

const Authorization = () => {

    const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const buttonRef = useRef<HTMLButtonElement>(null)
    const showPasswordHandle = (): void => {

        const buttonEl = buttonRef.current
        if (buttonEl != null) {
            const iconOpen = buttonEl.firstChild as HTMLElement
            iconOpen.classList.toggle('custom-input__button-icon--active')
            const iconClose = buttonEl.lastChild as HTMLElement
            iconClose.classList.toggle('custom-input__button-icon--active')
            iconOpen.classList.contains('custom-input__button-icon--active') ? setPasswordType('text') : setPasswordType('password')
        }

    }

    const loginSchema = z.object({
        email: z.email('Неккоректный формат email'),
        password: z.string().min(8, 'Пароль должен содержать миннимум 8 символов')
    })

    const { handleSubmit, formState: { errors }, register } = useForm({
        resolver: zodResolver(loginSchema)
    })

    const loginMutate = useMutation({
        mutationFn: loginUser,
        onSuccess: () => {
            // navigate('/')
        }
    },
        queryClient
    )

    return (
        <div className="authorization-container">
            <section className="authorization">
                <h1 className="authorization__title">Вход в fastQ</h1>
                <p className="authorization__description">Добро пожаловать обратно!</p>
                <form action="#" className="authorization__form" onSubmit={handleSubmit(({ email, password }) => {
                    loginMutate.mutate({ email: email, password: password, dispatch: dispatch })
                })}>
                    <div className="custom-input">
                        <label htmlFor="email" className="custom-input__label"><MailIcon className="custom-input__icon" />Email</label>
                        <input type="text" className="custom-input__field" placeholder="Введите email" id="email" {...register('email')} />
                        <ErrorSpan errorMessage={errors.email?.message} />
                    </div>
                    <div className="custom-input">
                        <label htmlFor="password" className="custom-input__label"><LockIcon className="custom-input__icon" />Пароль</label>
                        <input type={passwordType} className="custom-input__field" placeholder="Введите пароль" id="password" {...register('password')} />
                        <button className="custom-input__button" type="button" onClick={showPasswordHandle} ref={buttonRef}>
                            <span className="custom-input__button-icon custom-input__button-icon--active"><EyeIcon /></span>
                            <span className="custom-input__button-icon"><CLoseEyeIcon /></span>
                        </button>
                        <ErrorSpan errorMessage={errors.password?.message} />
                    </div>
                    <div className="authorization__form-wrapper">
                        <div className="custom-checkbox">
                            <input type="checkbox" className="custom-checkbox__field" id="remember-user" />
                            <label htmlFor="remember-user" className="custom-checkbox__label">Запомнить меня</label>
                        </div>
                        <Link to={"/forgot-password"} className="authorization__form-link">Забыли пароль?</Link>
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
        </div >
    )
}

export default Authorization