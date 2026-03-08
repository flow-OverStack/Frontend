import './Discussions.css'

const Discussions = () => {
  return (
    <section className="discussions">
      <h2 className="discussions__title">Сейчас обсуждают</h2>
      <ul className="discussions__list">
        <li className="discussions__item">
          <article className="discussions__card">
            <div className="discussions__card-content">
              <p className="discussions__card-description">&#128293; Лучшие инструменты для веб-разработки?</p>
              <ul className="discussions__card-tags">
                <li className="discussions__card-tag">
                  <span>javascript</span>
                </li>
                <li className="discussions__card-tag">
                  <span>TypeScript</span>
                </li>
                <li className="discussions__card-tag">
                  <span># SCSS</span>
                </li>
              </ul>
            </div>
            <span className="discussions__card-responses">12 ответов</span>
          </article>
        </li>
        <li className="discussions__item">
          <article className="discussions__card">
            <div className="discussions__card-content">
              <p className="discussions__card-description">&#128221; Как лучше составить резюме фронтенду?</p>
              <ul className="discussions__card-tags">
                <li className="discussions__card-tag">
                  <span>HR</span>
                </li>
                <li className="discussions__card-tag">
                  <span>Frontend</span>
                </li>
              </ul>
            </div>
            <span className="discussions__card-responses">5 ответов</span>
          </article>
        </li>
        <li className="discussions__item">
          <article className="discussions__card">
            <div className="discussions__card-content">
              <p className="discussions__card-description">&#128269; Какой самый большой плюс ASP.NET?</p>
              <ul className="discussions__card-tags">
                <li className="discussions__card-tag">
                  <span>Backend</span>
                </li>
                <li className="discussions__card-tag">
                  <span>C#</span>
                </li>
              </ul>
            </div>
            <span className="discussions__card-responses">10 ответов</span>
          </article>
        </li>
      </ul>
    </section>
  );

}

export default Discussions;
