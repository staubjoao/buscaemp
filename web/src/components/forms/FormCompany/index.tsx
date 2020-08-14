import React from "react";
import { useFormik } from "formik";

import PageHeader from "../../PageHeader";

import "./styles.css";

const FormCompany = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      cpassword: "",
      cep: "",
      state: "",
      city: "",
      street: "",
      addressNumber: "",
      name: "",
      number: "",
      industry: "",
      cnpj: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div id="page-company-form" className="container">
      <PageHeader
        title="Cadastro de empresa."
        description="Preencha o formulário:"
      />
      <main>
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <legend>Dados de login</legend>
            <div className="input-block">
              <label htmlFor="email">Email</label>
              <span> *</span>
              <input
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="input-block">
              <label htmlFor="password">Senha</label>
              <span> *</span>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            <div className="input-block">
              <label htmlFor="confirmed-password">Confirmar senha</label>
              <span> *</span>
              <input
                id="cpassword"
                name="cpassword"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.cpassword}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Endereço da sua empresa</legend>
            <div className="input-block">
              <label htmlFor="cep">CEP</label>
              <span> *</span>
              <input
                id="cep"
                name="cep"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.cep}
              />
            </div>
            <div className="input-block">
              <label htmlFor="state">Estado</label>
              <span> *</span>
              <input
                id="state"
                name="state"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.state}
              />
            </div>
            <div className="input-block">
              <label htmlFor="city">Cidade</label>
              <span> *</span>
              <input
                id="city"
                name="city"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.city}
              />
            </div>
            <div className="input-block">
              <label htmlFor="street">Rua</label>
              <span> *</span>
              <input
                id="street"
                name="street"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.street}
              />
            </div>
            <div className="input-block">
              <label htmlFor="addressNumber">Número</label>
              <span> *</span>
              <input
                id="addressNumber"
                name="addressNumber"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.addressNumber}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Informaçoes da sua empresa</legend>
            <div className="input-block">
              <label htmlFor="name">Nome da empresa</label>
              <span> *</span>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className="input-block">
              <label htmlFor="number">Número para contato</label>
              <span> *</span>
              <input
                id="number"
                name="number"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.number}
              />
            </div>
            <div className="input-block">
              <label htmlFor="industry">Ramo de atividade</label>
              <span> *</span>
              <input
                id="industry"
                name="industry"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.industry}
              />
            </div>
            <div className="input-block">
              <label htmlFor="cnpj">CNPJ</label>
              <span> *</span>
              <input
                id="cnpj"
                name="cnpj"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.cnpj}
              />
            </div>
          </fieldset>
          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </div>
  );
};

export default FormCompany;
