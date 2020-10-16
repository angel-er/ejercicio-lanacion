import React from 'react';

// import '../../sass/boxArticle.scss';

const BoxArticles = ({children, boxes}) => {
  return <div className={`box-articles-${boxes}`}>{children}</div>;
};

export default BoxArticles;
