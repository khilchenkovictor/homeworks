import { useState } from 'react';
import UncontrolledForm from '@components/UncontrolledForm';
import ControlledForm from '@components/ControlledForm';
import CombinedForm from '@components/CombinedForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import DataField from './components/DataField';

function App() {


  return (
    <>
      <div className="containers m-4 gap-4">
        <UncontrolledForm />
        <ControlledForm />
        <CombinedForm />
      </div>
      <DataField />
    </>
  )
}

export default App
