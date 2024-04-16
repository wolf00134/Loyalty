import React from 'react';
import { Provider } from 'react-redux';
import SignIn from './components/SignIn';
import Loyalty from './components/Loyalty';
import store from './components/store/main';
import { JssProvider, SheetsRegistry, createGenerateId } from 'react-jss';

function App() {
  const sheets = new SheetsRegistry();
  const generatedId = createGenerateId();

  return (
    <Provider store={store}>
      <JssProvider registry={sheets} generateId={generatedId}>
        <div>
          {/* <SignIn /> */}
          <Loyalty />
        </div>
      </JssProvider>
    </Provider>
  )
}

export default App;
