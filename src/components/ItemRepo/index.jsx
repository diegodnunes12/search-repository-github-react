import ItemContainer from './styles';

const ItemRepo = ({repo, handleRemove}) => {
  const handleRemoveRepo = () => {
    handleRemove(repo.id);
  }

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">See repository</a>
      <a href="#" className='remove' onClick={handleRemoveRepo}>Remove</a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
