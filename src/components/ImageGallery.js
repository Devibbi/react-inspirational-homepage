import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../redux/reducers';
import styled from 'styled-components';

const ImageGallery = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.app.images);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.data.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.data.length - 1 : prevIndex - 1
    );
  };

  if (images.status === 'loading') {
    return <div>Loading images...</div>;
  }

  if (images.status === 'failed') {
    return <div>Error fetching images</div>;
  }

  return (
    <Container>
    <div>
      {images.data.length > 0 && (
        <div>
          <img
            src={images.data[currentImageIndex].urls.regular}
            alt="Inspirational"
            style={{ width: '75%', height: '600px', }}
          />
          <br></br>
          <button onClick={prevImage}>Prev</button>
          <button onClick={nextImage}>Next</button>
        </div>
      )}
    </div>
    </Container>
  );
};

export default ImageGallery;
const Container= styled.div`
img{
border-radius:10px;}
button{
 background-color: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: plum;
  }}


`;
