import React from 'react';

export default function InfoSection({ sectionName, title, content }) {
  return (
    <section className={sectionName}>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  );
}