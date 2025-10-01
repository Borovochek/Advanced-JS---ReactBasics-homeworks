import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [rgbValue, setRgbValue] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#9921ff');

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;

    return () => {
      document.body.style.backgroundColor = '#9921ff';
    };
  }, [backgroundColor]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const hexRegex = /^#[0-9A-Fa-f]{6}$/;
    const isValid = hexRegex.test(value);

    if (isValid && value.length === 7) {
      let cleanHex = value.replace(/^#/, '');
      let r = parseInt(cleanHex.substring(0, 2), 16);
      let g = parseInt(cleanHex.substring(2, 4), 16);
      let b = parseInt(cleanHex.substring(4, 6), 16);

      const newRgb = `rgb(${r}, ${g}, ${b})`
      setRgbValue(newRgb);
      setBackgroundColor(value);
    } else if (!isValid && value.length >= 7) {
      setInputValue('ПРИВЕТ');
      setRgbValue('Ошибка!')
      setBackgroundColor('rgba(139, 58, 58, 0.9)');
    }
  }

  return (
    <>
      <label className="container">
        <input type="text" className="input-field" id="colorInput" placeholder="Введите код цвета..." value={inputValue} onChange={handleChange}></input>

        <span className="result" id="result">{rgbValue}</span>
      </label>
    </>
  )
}

export default App
