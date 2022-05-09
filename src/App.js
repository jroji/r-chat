import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './pages/Chat/Chat';
import List from './pages/List/List';

function App() {
  return (
    <>
      <header className="header">React chat</header>
      <main>
        <Routes>
          <Route path="/" element={<List/>}></Route>
          <Route path="/chat/:id" element={<Chat/>}></Route>
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
