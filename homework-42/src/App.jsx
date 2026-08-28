import { DataFetcher } from './components'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

function App() {

  return (
    <Wrapper>
      <DataFetcher />
    </Wrapper>
  )
}

export default App;
