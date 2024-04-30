import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import IconHeart from './IconHeart';

const GalleryItem = ({ photo, onToggleLike }) => (
  <div key={photo.id} className="gallery-item">
    <img src={photo.src.tiny} alt={photo.alt} />
    <p className="photo-description">{photo.alt}</p>
    <div onClick={onToggleLike} className="heart-icon">
      <IconHeart filled={photo.liked} />
    </div>
  </div>
);

const Gallery = () => {
  const { tasks, toggleTask } = useTaskContext();

  return (
    <div className="gallery grid grid-columns-5 p-3">
      {tasks.map((photo) => (
        <GalleryItem
          key={photo.id}
          photo={photo}
          onToggleLike={() => toggleTask(photo.id)}
        />
      ))}
    </div>
  );
};

export default Gallery;
