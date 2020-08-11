import React from "react";

import PageHeader from "../../../components/PageHeader";

import "./styles.css";

function Company() {
  return (
    <div id="page-company-form" className="container">
      <PageHeader
        title="Cadastro de empresa."
        description="Preencha o formulário:"
      />
      <main>
        <fieldset>
          <legend>Dados da sua empresa</legend>
        </fieldset>
      </main>
    </div>
  );
}

export default Company;
