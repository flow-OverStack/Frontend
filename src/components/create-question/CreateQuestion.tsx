import './CreateQuestion.css'

const CreateQuestion = () => {
  return (
    <section className="question">
      <div className="question__container">
        <div className="question__wrap">
          <h1 className="question__title">Создать вопрос</h1>
          <p className="question__description">Поделитесь своим вопросом и получите быстрый ответ от сообщества</p>
          <form action="#" className="question__form">
            <div className="question__form-wrapper">
              <label htmlFor="title" className="question__form-label">Заголовок вопроса</label>
              <input type="text" className="question__form-input" placeholder='Например: Как центрировать div в CSS?' id="title" name="title" />
            </div>
            <div className="question__form-wrapper">
              <label htmlFor="category" className="question__form-label">Категория</label>
              <input type="text" className="question__form-input" placeholder='Выберите категорию' id="category" name="category" />
            </div>
            <div className="question__form-wrapper">
              <label htmlFor="description" className="question__form-label">Описание</label>
              <textarea className='question__form-textarea' placeholder='Опишите вашу проблему подробнее...' id="description" name="description"></textarea>
            </div>
            <div className="question__form-wrapper">
              <label htmlFor="tags" className="question__form-label">Теги</label>
              <input type="text" className="question__form-input" placeholder='css, html, flexbox' id="tags" name="tags" />
            </div>
            <div className="question__form-buttons">
              <button className="question__form-cancel" type="button">Отмена</button>
              <button className="question__form-submit" type="submit">Опубликовать вопрос</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateQuestion;
