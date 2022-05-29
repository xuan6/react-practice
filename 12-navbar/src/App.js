import Navbar from './Navbar.js';
import './index.css';
import {links, social } from './data.js';

function App() {
  return (
    <div className="section">
      <Navbar social={social} links={links}/>
    </div>
  );
}

export default App;
