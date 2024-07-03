import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import domtoimage from 'dom-to-image';
import SidePanel from './components/side-panel';
import Card from './components/card';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    designation: '',
    department: '',
    whatsapp: '',
    linkedin: '',
    instagram: '',
    photo: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({
          ...formData,
          photo: event.target.result
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="App">
      <Header />
      <SidePanel 
        formData={formData}
        onInputChange={handleInputChange}
        onPhotoChange={handlePhotoChange}
      />
      <main id="main-content">
        <h2>Welcome!!</h2>
      </main>
      <Card formData={formData} />
      <button id="copy-button" onClick={copySignature}>Copy Signature</button>
    </div>
  );
}

function copySignature() {
  const cardElement = document.getElementById('probably');
  domtoimage.toSvg(cardElement)
    .then(dataUrl => {
      const img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const padding = 30;

        canvas.width = img.width + 2 * padding;
        canvas.height = img.height + 2 * padding;

        context.fillStyle = '#FAFBFA';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.drawImage(img, padding, padding);

        canvas.toBlob(blob => {
          const item = new ClipboardItem({ 'image/png': blob });
          navigator.clipboard.write([item]).then(() => {
            alert('Signature image copied to clipboard!');
          }).catch(err => {
            console.error('Could not copy image: ', err);
          });
        });
      };
    })
    .catch(err => {
      console.error('Error capturing element: ', err);
    });
}

export default App;
