import { Link } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">Задавай. Отвечай. Развивайся.</h1>
      <p className="hero__description">Современный форум для быстрых и качественных ответов.</p>
      <Link to="/question" className="hero__button">Задать вопрос</Link>
    </section>
  );
};

export default Hero;
