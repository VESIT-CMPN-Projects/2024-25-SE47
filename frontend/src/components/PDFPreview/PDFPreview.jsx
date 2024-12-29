import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Share, Square, Search } from 'lucide-react';

const styles = {
  container: {
    width: '100%',
    margin:"30px"
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '50px',
    padding: '20px',
  },
  documentCard: {
    width: "60%",
    margin: "auto",
    cursor: 'pointer',
    transition: 'opacity 0.2s ease',
    position: 'relative',
    aspectRatio: '3/4',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  
  documentCardHover: {
    opacity: 0.8,
  },
  documentImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  documentTitle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '8px',
    margin: 0,
    color: 'white',
    textAlign: 'center',
    fontSize: '14px',
  },
  fullscreenOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'black',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#111827',
  },
  navbarTitle: {
    color: 'white',
    fontSize: '18px',
  },
  navbarActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  iconButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '4px',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  navigationButton: {
    position: 'absolute',
    padding: '8px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    border: 'none',
    borderRadius: '50%',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prevButton: {
    left: '16px',
  },
  nextButton: {
    right: '16px',
  },
  fullscreenImage: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
  },
};

const DocumentViewer = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(null);

  const documents = [
    { id: 1, title: 'APEDA', image: '/api/placeholder/300/400' },
    { id: 2, title: 'FIEO', image: '/api/placeholder/300/400' },
    { id: 3, title: 'Certificate of Incorporation', image: '/api/placeholder/300/400' }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? documents.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === documents.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={styles.container}>
      {/* Thumbnail Grid View */}
      {!isFullscreen && (
        <div style={styles.grid}>
          {documents.map((doc, index) => (
            <div
              key={doc.id}
              style={{
                ...styles.documentCard,
                ...(isHovered === index ? styles.documentCardHover : {})
              }}
              onClick={() => {
                setCurrentIndex(index);
                setIsFullscreen(true);
              }}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <img
                src={doc.image}
                alt={doc.title}
                style={styles.documentImage}
              />
              <p style={styles.documentTitle}>{doc.title}</p>
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen View */}
      {isFullscreen && (
        <div style={styles.fullscreenOverlay}>
          <div style={styles.navbar}>
            <div style={styles.navbarTitle}>
              {documents[currentIndex].title}
            </div>
            <div style={styles.navbarActions}>
              <button style={styles.iconButton}>
                <Share size={24} />
              </button>
              <button style={styles.iconButton}>
                <Square size={24} />
              </button>
              <button style={styles.iconButton}>
                <Search size={24} />
              </button>
              <button 
                style={styles.iconButton}
                onClick={() => setIsFullscreen(false)}
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div style={styles.mainContent}>
            <button
              onClick={handlePrevious}
              style={{...styles.navigationButton, ...styles.prevButton}}
            >
              <ChevronLeft size={24} />
            </button>

            <img
              src={documents[currentIndex].image}
              alt={documents[currentIndex].title}
              style={styles.fullscreenImage}
            />

            <button
              onClick={handleNext}
              style={{...styles.navigationButton, ...styles.nextButton}}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentViewer;
