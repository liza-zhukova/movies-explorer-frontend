import './AboutProject.css';

function AboutProject() {
    return (
      <section className='about-project'>
      <h1 className='about-project__title'>
          О проекте
      </h1>
      <div className='about-project__container'>
      <div className='about-project__item-container'>
      <h2 className='about-project__opinion'>
      Дипломный проект включал 5 этапов
      </h2>
      <h3 className='about-project__paragraph'>
      Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
      </h3>
      </div>
      <div className='about-project__item-container'>
      <h2 className='about-project__opinion'>
      На выполнение диплома ушло 5 недель
      </h2>
      <h3 className='about-project__paragraph'>
      У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
      </h3>
      </div>
      </div>
      <div className='about-project__during'>
        <div className='about-project__during-container'>
          <div className='about-project__during_backend'>1 неделя</div>
          <div className='about-project__during_frontend'>4 недели</div>
          </div>
          <div className='about-project__during-container'>
          <h4 className='about-project__during-title'>Back-end</h4>
          <h4 className='about-project__during-title_frontend'>Front-end</h4>
          </div>
      </div>
      </section>
    );
  }
  
  export default AboutProject;