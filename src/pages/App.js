import './styles';
import { Container } from './styles';
import Input from '../components/Input';
import logo from '../assets/logo.png';
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';
import Button from '../components/Button';
import api from '../services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`).catch(() => {
      alert("Repository not found");
    });

    if(data?.id) {
      const isExist = repos.find(repos => repos.id === data.id);

      if(!isExist) {
        setRepos(prev => [data, ...prev]);
        setCurrentRepo("");
        return;
      }
    }
  }

  const handleRemove = (id) => {
    setRepos(repos.filter(repos => repos.id !== id));
  }

  return (
    <Container>
      <img src={logo} width={72} alt="logo github" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo repo={repo} handleRemove={handleRemove} />)}
    </Container>
  );
}

export default App;
