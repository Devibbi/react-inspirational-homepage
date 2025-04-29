import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UNSPLASH_ACCESS_KEY = 'XFp6L-zULuz0OEIfbsFh9-cowcaMekDMx6VrS-lufSQ';

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [current, setCurrent] = useState(0);
  const [quote, setQuote] = useState({ data: null, loading: false, error: '' });
  
  useEffect(() => {
    fetchImages();
    fetchQuoteData();
  }, []);

  async function fetchImages() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}&count=7&orientation=landscape&query=nature,landscape,inspiration`);
      if (!res.ok) throw new Error('Failed to fetch images');
      const data = await res.json();
      setImages(data);
    } catch (err) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  }
  
  async function fetchQuoteData() {
    setQuote(prev => ({ ...prev, loading: true, error: '' }));
    try {
      const apiKey = 'yLG8M5Ui3UstBbie2WACFA==zwtG0KDkCgvbHXJl';
      const response = await axios.get(
        'https://api.api-ninjas.com/v1/quotes?category=inspirational', 
        { headers: { 'X-Api-Key': apiKey } }
      );
      
      if (response.data && response.data.length > 0) {
        setQuote({
          data: response.data[0],
          loading: false,
          error: ''
        });
      }
    } catch (err) {
      setQuote(prev => ({ 
        ...prev, 
        loading: false, 
        error: err.message || 'Failed to fetch quote' 
      }));
    }
  }

  const nextImage = () => {
    if (images.length > 0) setCurrent((c) => (c + 1) % images.length);
  };
  
  const prevImage = () => {
    if (images.length > 0) setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };

  if (loading) return (
    <div className="text-center py-12">
      <div className="animate-pulse-slow">
        <div className="h-64 bg-purple-200 rounded-xl mb-6"></div>
        <div className="h-4 bg-purple-200 rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-4 bg-purple-200 rounded w-1/2 mx-auto mb-4"></div>
        <div className="h-4 bg-purple-100 rounded w-1/4 mx-auto"></div>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="text-center py-8 glass-card">
      <svg className="w-16 h-16 mx-auto text-red-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <p className="text-red-500 mb-6">Error: {error}</p>
      <button onClick={fetchImages} className="btn-primary">
        Try Again
      </button>
    </div>
  );
  
  if (!images.length) return (
    <div className="text-center py-8 glass-card">
      <svg className="w-16 h-16 mx-auto text-purple-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="text-gray-600 mb-6">No images found.</p>
      <button onClick={fetchImages} className="btn-primary">
        Refresh
      </button>
    </div>
  );

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600 mb-6 text-center">Inspirational Gallery</h2>
      
      <div className="image-container group">
        {/* Background Image */}
        <img
          src={images[current].urls.regular}
          alt={images[current].alt_description || 'Inspirational'}
          className="transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay for better readability */}
        <div className="overlay"></div>
        
        {/* Quote Display */}
        <div className="quote-container">
          <div className="max-w-2xl mx-auto backdrop-blur-sm bg-black/10 p-6 rounded-xl transition-all duration-300 group-hover:bg-black/20">
            {quote.loading && (
              <div className="animate-pulse-slow">
                <div className="h-4 bg-white/30 rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-4 bg-white/30 rounded w-1/2 mx-auto mb-4"></div>
                <div className="h-4 bg-white/30 rounded w-2/3 mx-auto"></div>
              </div>
            )}
            
            {quote.error && (
              <p className="text-white/80 bg-red-500/20 p-2 rounded">Failed to load quote</p>
            )}
            
            {quote.data && (
              <div>
                <p className="quote-text">
                  "{quote.data.quote}"
                </p>
                <p className="quote-author">
                  — {quote.data.author}
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Navigation Controls */}
        <button 
          onClick={prevImage} 
          className="nav-button nav-button-left opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextImage} 
          className="nav-button nav-button-right opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Image Indicators */}
      <div className="flex justify-center gap-2 mt-4 mb-4">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? 'bg-gradient-to-r from-purple-600 to-indigo-600 scale-125 shadow-md' : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button 
          onClick={fetchQuoteData} 
          className="btn-primary"
          disabled={quote.loading}
        >
          {quote.loading ? 'Loading...' : 'New Quote'}
        </button>
        <button 
          onClick={nextImage} 
          className="btn-secondary"
        >
          Next Image
        </button>
        <button 
          onClick={fetchImages} 
          className="btn-primary"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'New Images'}
        </button>
      </div>
    </div>
  );
}
