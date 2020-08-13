import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Company from './register/Company';
import Resume from './register/Resume';
import FormCompany from '../components/forms/FormCompany';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/cadastro-empresa" component={Company} />
      <Route path="/cadastro-curriculo" component={Resume} />
      <Route path="/teste" component={FormCompany} />
    </BrowserRouter>
  );
}

export default Routes;
