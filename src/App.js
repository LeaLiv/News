import './App.css';
import { Header } from './components/header';
import { SideBar } from './components/sideBar';
import { MainContent } from './components/mainContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  const navItems = [
    { id: 1, label: "Headlines", path: "/" },
    { id: 2, label: "Politics", path: "/politics" },
    { id: 3, label: "Economy", path: "/economy" },
    { id: 4, label: "Sports", path: "/sports" },
    { id: 5, label: "Culture", path: "/culture" },
  ];


  return (
    <BrowserRouter>
        <Header title="News website" />
        <div id="container">
          <SideBar items={navItems} />
          <main>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/politics" element={<h2>Politics Page</h2>} />
              <Route path="/economy" element={<h2>Economy Page</h2>} />
              <Route path="/sports" element={<h2>Sports Page</h2>} />
              <Route path="/culture" element={<h2>Culture Page</h2>} />
            </Routes>
          </main>
        </div>
    </BrowserRouter>
  );
}

export default App;
