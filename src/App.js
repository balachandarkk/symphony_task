import React from 'react';
import Home from './common/Home';
import FileUpload from './fileupload/FileUpload';
import FileUploadHooks from './fileupload/FileUploadHooks';
import NotFound from './common/NotFound';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/file_with_class' component={FileUpload}/>
        <Route path='/file_with_hooks' component={FileUploadHooks}/>
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}
export default App;