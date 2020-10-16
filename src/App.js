import React from 'react';
import Section from './components/Section/Section';
import BoxArticles from './components/Article/Box';
import Article from './components/Article/Article';

import dolar from './images/dolar.jpg';
import carlo_acutis from './images/carlo_acutis.png';
import trump from './images/trump.jpg';
import sanitaria from './images/sanitaria.jpg';
import peso from './images/peso.jpg';
import mike from './images/mike.jpg';

const articles = [
  {
    image: dolar,
    volanta: 'Análisis',
    title: 'La amenaza verde',
    author: 'Por Fernando Laborda',
  },
  {
    image: carlo_acutis,
    volanta: 'Inspirador',
    title:
      'La historia de Carlo Acutis, el adolescente italiano que será beato',
    author: 'Por Elisabetta Piqué',
  },
  {
    image: trump,
    volanta: 'Dejó el hospital',
    title: 'Desafiante, Trump llegó a la casa Blanca y se sacó el barbijo',
    author: 'Por Rafael Mathus Ruiz',
  },
  {
    image: sanitaria,
    volanta: 'Coronavirus',
    title:
      'La autoridad sanitaria de EE.UU. confirma que se transmite por aire',
    author: 'Por The Washington Post',
  },
  {
    image: peso,
    volanta: 'Matar al peso',
    title: 'El radical consejo de un economista norteamericano a la Argentina',
    author: '',
  },
  {
    image: mike,
    volanta: 'Mike Rockefeller',
    title: 'El heredero rebelde que se esfumó entre canibales y cocodrilos',
    author: 'Por Germán Wille',
  },
  {
    image: dolar,
    volanta: 'Análisis',
    title: 'La amenaza verde',
    author: 'Por Fernando Laborda',
  },
  {
    image: carlo_acutis,
    volanta: 'Inspirador',
    title:
      'La historia de Carlo Acutis, el adolescente italiano que será beato',
    author: 'Por Elisabetta Piqué',
  },
  {
    image: trump,
    volanta: 'Dejó el hospital',
    title: 'Desafiante, Trump llegó a la casa Blanca y se sacó el barbijo',
    author: 'Por Rafael Mathus Ruiz',
  },
  {
    image: sanitaria,
    volanta: 'Coronavirus',
    title:
      'La autoridad sanitaria de EE.UU. confirma que se transmite por aire',
    author: 'Por The Washington Post',
  },
  {
    image: peso,
    volanta: 'Matar al peso',
    title: 'El radical consejo de un economista norteamericano a la Argentina',
    author: '',
  },
  {
    image: mike,
    volanta: 'Mike Rockefeller',
    title: 'El heredero rebelde que se esfumó entre canibales y cocodrilos',
    author: 'Por Germán Wille',
  },
];

function App() {
  return (
    <div className='App'>
      <Section title='Actualidad'>
        <BoxArticles boxes={6}>
          {articles.map((article, idx) => (
            <Article
              key={idx}
              article={idx}
              title={article.title}
              urlImage={article.image}
              volanta={article.volanta}
              author={article.author}
            />
          ))}
        </BoxArticles>
      </Section>
    </div>
  );
}

export default App;
