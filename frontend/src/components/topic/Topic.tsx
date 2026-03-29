import './Topic.css'
import Aside from "../aside/Aside"

const Topic = () => {
  return (
    <>
      <Aside />
      <section className="topic">
        <div className="topic__container">
          <h1 className="topic__title">Темы</h1>
          <p className="topic__description">Все темы, вопросы и ответы: JS, CSS, React, C#, DevOps, Backend</p>
          <span className="topic__information">245 вопросов • 1.2k ответов • 3.5k участников • Обновлено 2 минуты назад</span>
          <ul className="topic__list">
            <li className="topic__item">
              <div className="topic__card">
                <div className="topic__card-left">
                  <div className="topic__card-data">
                    <span className='topic__card-number'>12</span>
                    <span className='topic__card-description'>Голосов</span>
                  </div>
                  <div className="topic__card-data">
                    <span className='topic__card-number topic__card-number--answer'>4</span>
                    <span className='topic__card-description'>Ответов</span>
                  </div>
                  <div className="topic__card-data">
                    <span className='topic__card-number topic__card-number--view'>120</span>
                    <span className='topic__card-description'>Просмотров</span>
                  </div>
                </div>
                <div className="topic__card-right">
                  <h2 className="topic__card-theme">Как правильно центрировать блок через Flexbox?</h2>
                  <p className="topic__card-problem">Не получается выровнять элемент по вертикали и горизонтали внутри контейнера...</p>
                  <div className="topic__tags">
                    <span className="topic__tags-tag">CSS</span>
                    <span className="topic__tags-tag">Flexbox</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="topic__item">
              <div className="topic__card">
                <div className="topic__card-left">
                  <div className="topic__card-data">
                    <span className='topic__card-number'>12</span>
                    <span className='topic__card-description'>Голосов</span>
                  </div>
                  <div className="topic__card-data">
                    <span className='topic__card-number topic__card-number--answer'>4</span>
                    <span className='topic__card-description'>Ответов</span>
                  </div>
                  <div className="topic__card-data">
                    <span className='topic__card-number topic__card-number--view'>120</span>
                    <span className='topic__card-description'>Просмотров</span>
                  </div>
                </div>
                <div className="topic__card-right">
                  <h2 className="topic__card-theme">Как правильно центрировать блок через Flexbox?</h2>
                  <p className="topic__card-problem">Не получается выровнять элемент по вертикали и горизонтали внутри контейнера...</p>
                  <div className="topic__tags">
                    <span className="topic__tags-tag">CSS</span>
                    <span className="topic__tags-tag">Flexbox</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="topic__item">
              <div className="topic__card">
                <div className="topic__card-left">
                  <div className="topic__card-data">
                    <span className='topic__card-number'>12</span>
                    <span className='topic__card-description'>Голосов</span>
                  </div>
                  <div className="topic__card-data">
                    <span className='topic__card-number topic__card-number--answer'>4</span>
                    <span className='topic__card-description'>Ответов</span>
                  </div>
                  <div className="topic__card-data">
                    <span className='topic__card-number topic__card-number--view'>120</span>
                    <span className='topic__card-description'>Просмотров</span>
                  </div>
                </div>
                <div className="topic__card-right">
                  <h2 className="topic__card-theme">Как правильно центрировать блок через Flexbox?</h2>
                  <p className="topic__card-problem">Не получается выровнять элемент по вертикали и горизонтали внутри контейнера...</p>
                  <div className="topic__tags">
                    <span className="topic__tags-tag">CSS</span>
                    <span className="topic__tags-tag">Flexbox</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Topic;
