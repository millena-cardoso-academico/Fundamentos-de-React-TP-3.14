import ProfileCard from './components/ProfileCard';
import './styles/App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Perfil de Usuários</h1>
      <ProfileCard name="João" age={30} />
      <ProfileCard name="Maria" />
    </div>
  );
};

export default App;