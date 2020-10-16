import React from 'react';

// import '../../sass/article.scss';

const Article = ({urlImage, volanta, title, author}) => {
  return (
    <article className='article'>
      <div className='article-image'>
        <img src={urlImage} alt={title} title={title} />
      </div>
      <div className='article-description'>
        <h2 className='article-description-title'>
          <em className='article-description-volanta'>{volanta}.</em> {title}
        </h2>
        <strong className='article-description-author'>
          <a href='#' title={author}>
            {author}
          </a>
        </strong>
      </div>
    </article>
  );
};

Article.defaultProps = {
  urlImage: 'There is not image',
  volanta: 'There is not volanta',
  title: 'There is not title',
  author: '',
};

export default Article;
