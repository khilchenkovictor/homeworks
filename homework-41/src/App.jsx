import { Suspense } from 'react';
import CentralMessage from './components/CentralMessage';
import MessageComponent from './components/MessageComponents';
import { getUserInfo } from './api/userInfo';
import { ErrorBoundary } from 'react-error-boundary';


function App() {

  const blocksNubmer = 8
  const promises = Array.from({ length: blocksNubmer }, () => getUserInfo());
  const messagePromise = getUserInfo();

  return (
    <ErrorBoundary fallback={<CentralMessage children="Error loading data."/>}>
      <Suspense fallback={<CentralMessage children="Loading..."/>}>
        
        <div className="flex flex-wrap gap-4">
          {promises.map((messagePromise, index) => (
            <MessageComponent key={index} messagePromise={messagePromise} />
          ))}
        </div>

      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
