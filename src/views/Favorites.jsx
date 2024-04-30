import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  color: green;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 3rem;
`;

const GalleryItem = ({ photo }) => (
  <div key={photo.id} className="gallery-item">
    <img src={photo.src.tiny} alt={photo.alt} />
    <p className="photo-description">{photo.alt}</p>
  </div>
);

const Favorites = () => {
  const { tasks } = useTaskContext();
  const likedPhotos = tasks.filter(photo => photo.liked);

  return (
    <div>
      <Title>Fotos favoritas</Title>
      <Gallery>
        {likedPhotos.map(photo => (
          <GalleryItem key={photo.id} photo={photo} />
        ))}
      </Gallery>
    </div>
  );
};

export default Favorites;