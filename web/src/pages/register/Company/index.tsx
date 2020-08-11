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
        <Input label="Email" name="email" shouldHide={false} />
        <Input
          label="Senha"
          name="password"
          type="password"
          shouldHide={false}
        />
        <Input
          label="Confirmar senha"
          name="confirmed-password"
          type="password"
          shouldHide={false}
        />

        <fieldset>
          <legend>Endereço da sua empresa</legend>
        </fieldset>
        <Input label="CEP" name="cep" shouldHide={false} />
        <Input label="Estado" name="state" shouldHide={false} />
        <Input label="Cidade" name="city" shouldHide={false} />
        <Input label="Rua" name="street" shouldHide={false} />
        <Input label="Numero" name="address-number" shouldHide={false} />

        <fieldset>
          <legend>Informaçoes da sua empresa</legend>
        </fieldset>
        <Input label="Nome da Empresa" name="name" shouldHide={false} />
        <Input label="Número" name="number" shouldHide={false} />
        <Input label="Ramo de atividade" name="industry" shouldHide={false} />
        <Input label="CNPJ" name="cnpj" shouldHide={false} />
      </main>
    </div>
  );
}

export default Company;
