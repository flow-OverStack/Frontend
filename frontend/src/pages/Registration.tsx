import "./css-pages/Registration.css"
import "./css-pages/custom-input.css"
import MailIcon from "../assets/mail-icon.svg"
import LockIcon from "../assets/lock-icon.svg"
import EyeIcon from "../assets/eye-password-icon.svg"
import CLoseEyeIcon from "../assets/eye-password-close.svg"
import UserIcon from "../assets/user-icon.svg"
import SurnameIcon from "../assets/surname-icon.svg"
import { registerUser } from "../api/post"
import React, { useRef, useState } from "react"
import { FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import ErrorSpan from "../components/error/Error"
import { useMutation } from "@tanstack/react-query"
import { queryClient } from "../queryClient"
import * as z from "zod"
import Succsses from "../components/succsses/Succsses"
import Overlay from "../components/overlay/Overlay"
import { useDispatch } from "react-redux"

const Registration = () => {
    const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');
    const [statusSuccsses, setstatusSuccsses] = useState<boolean>(false);
    const dispatch = useDispatch()

    const registerSchema = z.object({
        username: z.string().min(1, 'Ваше имя должно быть заполнено'),
        email: z.email('Неверный формат почты').min(1, 'Ваш email должен быть заполнен'),
        password: z.string().min(8, 'Ваш пароль должен содержать миннимум 8 символов')
    })

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

    type SchemaForReact = z.infer<typeof registerSchema>

    const { handleSubmit, formState: { errors }, register } = useForm<SchemaForReact>({
        resolver: zodResolver(registerSchema)
    })

    const formRef = useRef<null | HTMLFormElement>(null);


    const mutateFunc = useMutation({
        mutationFn: registerUser
    },
        queryClient
    )
    return (
        <div className="authorization-container">
            <section className="registration">
                <h1 className="registration__title">Регистрация в fastQ</h1>
                <p className="registration__description">Добро пожаловать!</p>
                <form action="#" className="registration__form" ref={formRef} onSubmit={handleSubmit(({ username, email, password }) => {
                    mutateFunc.mutate({ username: username, email: email, password: password, dispatch: dispatch })
                })}>
                    <div className="registration__form-bio">
                        <div className="custom-input">
                            <label htmlFor="name" className="custom-input__label"><UserIcon className="custom-input__icon" /> Имя*</label>
                            <input type="text" className="custom-input__field" placeholder="Введите имя" id="name" {...register('username')} />
                            <ErrorSpan errorMessage={errors.username?.message} />
                        </div>
                        <div className="custom-input">
                            <label htmlFor="last-name" className="custom-input__label"><SurnameIcon className="custom-input__icon" /> Фамилия</label>
                            <input type="text" className="custom-input__field" placeholder="Введите фамилию" id="last-name" name="lastnmae" />
                        </div>
                    </div>
                    <div className="custom-input">
                        <label htmlFor="nickname" className="custom-input__label"><span id="nickname-icon">@</span>Никнейм</label>
                        <input type="text" className="custom-input__field" placeholder="Введите никнейм" id="nickname" name="nickname" />
                    </div>
                    <div className="custom-input">
                        <label htmlFor="email" className="custom-input__label"><MailIcon className="custom-input__icon" />Email*</label>
                        <input type="text" className="custom-input__field" placeholder="Введите email" id="email" {...register('email')} />
                        <ErrorSpan errorMessage={errors.email?.message} />
                    </div>
                    <div className="custom-input">
                        <label htmlFor="password" className="custom-input__label"><LockIcon className="custom-input__icon" />Пароль*</label>
                        <input type={passwordType} className="custom-input__field" placeholder="Введите пароль" id="password" {...register('password')} />
                        <ErrorSpan errorMessage={errors.password?.message} />
                        <button className="custom-input__button" type="button" onClick={showPasswordHandle} ref={buttonRef}>
                            <span className="custom-input__button-icon custom-input__button-icon--active"><EyeIcon /></span>
                            <span className="custom-input__button-icon"><CLoseEyeIcon /></span>
                        </button>
                    </div>
                    <div className="registration__form-wrapper">
                        <div className="custom-checkbox">
                            <input type="checkbox" className="custom-checkbox__field" id="remember-user" />
                            <label htmlFor="remember-user" className="custom-checkbox__label">Согласен с политикой конфиденциальности</label>
                        </div>
                    </div>
                    <button className="registration__form-submit" type="submit" disabled={mutateFunc.isPending}>Зарегестрироваться</button>
                </form>
                {statusSuccsses && <><Overlay />
                    <Succsses /></>}
            </section>
        </div>
    )
}

export default Registration