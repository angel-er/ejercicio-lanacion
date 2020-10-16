import React from 'react';

// import '../../sass/section.scss';

const Section = ({children, title}) => {
  return (
    <section className='section'>
    {title ? <div className='section-header'>
         <h2 className='section-title'>{title}</h2> 
      </div> : null}
      {children}
    </section>
  );
};

export default Section;
