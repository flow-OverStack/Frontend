import { Link } from "react-router-dom"
import "./Aside.css"

const Aside = () => {
    return (
        <aside className='aside'>
            <Link to="/question" className="aside__button">+ Задать вопрос</Link>
            <div className="aside__themes">
                <h3 className="aside__themes-name">Все темы</h3>
                <ul className="aside__themes-list">
                    <li className="aside__themes-item">
                        <button className="aside__themes-button">Вёрстка и CSS</button>
                    </li>
                    <li className="aside__themes-item">
                        <button className="aside__themes-button">JavaScript</button>
                    </li>
                    <li className="aside__themes-item">
                        <button className="aside__themes-button">Backend</button>
                    </li>
                    <li className="aside__themes-item">
                        <button className="aside__themes-button">React / Vue</button>
                    </li>
                    <li className="aside__themes-item">
                        <button className="aside__themes-button">UI/UX</button>
                    </li>
                    <li className="aside__themes-item">
                        <button className="aside__themes-button">DevOps</button>
                    </li>

                </ul>
            </div>
            <div className="aside__sort">
                <h3 className="aside__sort-name">Сортировка</h3>
                <ul className="aside__sort-list">
                    <li className="aside__sort-item">
                        <button className="aside__sort-button">Популярные</button>
                    </li>
                    <li className="aside__sort-item">
                        <button className="aside__sort-button">Новые</button>
                    </li>
                    <li className="aside__sort-item">
                        <button className="aside__sort-button">Без ответов</button>
                    </li>
                    <li className="aside__sort-item">
                        <button className="aside__sort-button">По алфавиту</button>
                    </li>

                </ul>
            </div>
            <div className="aside__tags">
                <h3 className="aside__tags-name">Популярные теги</h3>
                <ul className="aside__tags-list">
                    <li className="aside__tags-item">
                        <button className="aside__tags-button">HTML</button>
                    </li>
                    <li className="aside__tags-item">
                        <button className="aside__tags-button">CSS</button>
                    </li>
                    <li className="aside__tags-item">
                        <button className="aside__tags-button">Flexbox</button>
                    </li>
                    <li className="aside__tags-item">
                        <button className="aside__tags-button">Grid</button>
                    </li>
                    <li className="aside__tags-item">
                        <button className="aside__tags-button">Adaptive</button>
                    </li>
                    <li className="aside__tags-item">
                        <button className="aside__tags-button">HTML</button>
                    </li>
                    <li className="aside__tags-item">
                        <button className="aside__tags-button">CSS</button>
                    </li>
                    <li className="aside__tags-item">
                        <button className="aside__tags-button">Flexbox</button>
                    </li>
                    <li className="aside__tags-item">
                        <button className="aside__tags-button">Grid</button>
                    </li>
                    <li className="aside__tags-item">
                        <button className="aside__tags-button">Adaptive</button>
                    </li>
                </ul>
            </div>
            <div className="aside__mobale">
                <ul className="aside__mobale-list">
                    <li className="aside__mobale-item">
                        <button className="aside__mobale-button">Популярные</button>
                    </li>
                    <li className="aside__mobale-item">
                        <button className="aside__mobale-button">Новые</button>
                    </li>
                    <li className="aside__mobale-item">
                        <button className="aside__mobale-button">Без ответов</button>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside