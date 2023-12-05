import './styles';
import { Container } from './styles';
import Input from '../components/Input';
import logo from '../assets/logo.png';

function App() {
  return (
    <Container>
      <img src={logo} width={72} alt="logo github" />
      <Input />
    </Container>
  );
}

export default App;
