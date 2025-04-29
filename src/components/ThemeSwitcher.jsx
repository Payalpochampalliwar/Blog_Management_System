import { useTheme } from '../context/ThemeContext';
import '../App.css';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      style={{
        padding: '8px 16px',
        backgroundColor: theme === 'light' ? '#222' : '#ddd',
        color: theme === 'light' ? '#fff' : '#000',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

export default ThemeSwitcher;
