import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/women/52.jpg"
        name="Nina Ward"
        online
      />
    </div>
  );
}

export default App;
