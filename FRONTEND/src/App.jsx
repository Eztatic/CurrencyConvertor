import { useState } from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Main from './components/main.jsx';
import '@tailwindplus/elements';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Main />

      <Footer />
    </div>
  )
}

export default App
