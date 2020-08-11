import React from "react";

import PageHeader from "../../../components/PageHeader";

import "./styles.css";
import Input from "../../../components/Input";

function Company() {
  return (
    <div id="page-company-form" className="container">
      <PageHeader
        title="Cadastro de empresa."
        description="Preencha o formulário:"
      />
      <main>
        <fieldset>
          <legend>Dados de login</legend>
        </fieldset>
        <Input label="Email" name="email" shouldHide={false}/>
        {/* <Input label="Senha" name="password" type="password" />
        <Input
          label="Confirmar senha"
          name="confirmed-password"
          type="password"
        />

        <fieldset>
          <legend>Endereço da sua empresa</legend>
        </fieldset>
        <Input label="CEP" name="cep" />
        <Input label="Estado" name="state" />
        <Input label="Cidade" name="city" />
        <Input label="Rua" name="street" />
        <Input
          label="Numero"
          name="address-number"
        />

        <fieldset>  
          <legend>Informaçoes da sua empresa</legend>
        </fieldset>
        <Input label="Nome da Empresa" name="name" />
        <Input label="Número" name="number" />
        <Input label="Ramo de atividade" name="industry" />
        <Input label="CNPJ" name="cnpj" /> */}
      </main>
    </div>
  );
}

export default Company;
