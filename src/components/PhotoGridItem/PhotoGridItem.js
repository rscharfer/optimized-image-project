import React from 'react';
import styled from 'styled-components/macro';



function makeSourceSet(src, extensionOverride){
  let [name, extension] = src.split('.');
  extension = extensionOverride ? extensionOverride: extension
  return `${name}.${extension} 1x, ${name}@2x.${extension} 2x, ${name}@3x.${extension} 3x`
}



const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
        <source type='image/avif' srcSet={makeSourceSet(src, 'avif')}>

        </source>
        <source type='image/jpg' srcSet={makeSourceSet(src)}>

        </source>
          <Image src={src}/>
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};



const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
