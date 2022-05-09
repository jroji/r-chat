import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact/Contact';

function App() {
  const users = [
    { name: 'John', tel: '677777771', image: 'https://placekitten.com/200/300' },
    { name: 'Carlos', tel: '677777771', image: 'https://placekitten.com/100/100' },
    { name: 'María', tel: '677777771', image: 'https://placekitten.com/200/200' },
    { name: 'Marta', tel: '677777771', image: 'https://placekitten.com/400/400' },
  ];

  return (
    <>
      <header className="header">React chat</header>
      <main>
        { users.map((contact) => <Contact
          image={contact.image}
          name={contact.name}
          tel={contact.tel}></Contact>)
        }
      </main>
      <footer></footer>
    </>
  );
}

export default App;
