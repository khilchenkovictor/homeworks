import { DataFetcher } from './components'
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {

  return (
    <Wrapper>
      <DataFetcher />
    </Wrapper>
  )
}

export default App;
