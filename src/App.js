import './TaskSection.css';
import './NavBar.css'
import Logo from './taskstack-logo.png';
import NavBar from './components/Navbar';
import TaskSection from './components/TaskSection';


function App() {
  return (
    <div>
      <NavBar logo = {Logo} />
      <TaskSection />
    </div>
  );
}

export default App;
