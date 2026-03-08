import './Advantages.css'
import ChatIcon from '../../assets/chat-icon.svg'
import ShieldIcon from '../../assets/shield-icon.svg'
import UiIcon from '../../assets/ui-icon.svg'

const Advantages = () => {
  return (
    <section className="advantages">
      <h2 className="advantages__title">Преимущества fastQ</h2>
      <ul className="advantages__list">
        <li className="advantages__item">
          <article className="advantages__card">
            <ChatIcon className="advantages__card-icon" />
            <h3 className="advantages__card-title">Мгновенные ответы</h3>
            <p className="advantages__card-description">Сообщество реагирует быстро.</p>
          </article>
        </li>
        <li className="advantages__item">
          <article className="advantages__card advantages__card--middle">
            <ShieldIcon className="advantages__card-icon" />
            <h3 className="advantages__card-title">Эксперты</h3>
            <p className="advantages__card-description">Ответы от профессионалов.</p>
          </article>
        </li>
        <li className="advantages__item">
          <article className="advantages__card">
            <UiIcon className="advantages__card-icon" />
            <h3 className="advantages__card-title">Современный UI</h3>
            <p className="advantages__card-description">Удобство и стиль.</p>
          </article>
        </li>
      </ul>
    </section>
  );
};

export default Advantages;
