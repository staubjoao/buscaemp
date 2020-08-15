import React from "react";
import { Field, Form, Formik, FormikProps } from "formik";

import PageHeader from "../../PageHeader";

import "./styles.css";

const MyInput = ({ field, form, ...props }) => {
  return <input {...field} {...props} />;
};

//trocar os valres e começar a trabalhar com esse codigo

const FormCompany = () => (
  <div id="page-company-form" className="container">
    <PageHeader
      title="Cadastro de empresa."
      description="Preencha o formulário:"
    />
    <main>
      <Formik
        initialValues={{
          email: "",
          password: "",
          cpassword: "",
          cep: "",
          state: "",
          city: "",
          street: "",
          addressNumber: "",
          name: "",
          phone: "",
          industry: "",
          cnpj: "",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <fieldset>
              <legend>Dados de login</legend>
              <div className="input-block">
                <label htmlFor="email">Email</label>
                <span> *</span>
                <Field id="email" name="email" type="email" />
              </div>
              <div className="input-block">
                <label htmlFor="password">Senha</label>
                <span> *</span>
                <Field id="password" name="password" type="password" />
              </div>
              <div className="input-block">
                <label htmlFor="confirmed-password">Confirmar senha</label>
                <span> *</span>
                <Field id="cpassword" name="cpassword" type="password" />
              </div>
            </fieldset>
            <fieldset>
              <legend>Endereço da sua empresa</legend>
              <div className="input-block">
                <label htmlFor="cep">CEP</label>
                <span> *</span>
                <Field
                  id="cep"
                  name="cep"
                  type="text"
                  onBlur={(e) => {
                    const { value } = e.target;

                    const cep = value?.replace(/[^0-9]/g, "");

                    if (cep.length != 8) {
                      return;
                    }
                    fetch(`https://viacep.com.br/ws/${cep}/json/`)
                      .then((res) => res.json())
                      .then((data) => {});
                  }}
                />
              </div>
              <div className="input-block">
                <label htmlFor="state">Estado</label>
                <span> *</span>
                <Field id="state" name="state" type="text" />
              </div>
              <div className="input-block">
                <label htmlFor="city">Cidade</label>
                <span> *</span>
                <Field id="city" name="city" type="text" />
              </div>
              <div className="input-block">
                <label htmlFor="street">Rua</label>
                <span> *</span>
                <Field id="street" name="street" type="text" />
              </div>
              <div className="input-block">
                <label htmlFor="addressNumber">Número</label>
                <span> *</span>
                <Field id="addressNumber" name="addressNumber" type="text" />
              </div>
            </fieldset>
            <fieldset>
              <legend>Informaçoes da sua empresa</legend>
              <div className="input-block">
                <label htmlFor="name">Nome da empresa</label>
                <span> *</span>
                <Field id="name" name="name" type="text" />
              </div>
              <div className="input-block">
                <label htmlFor="phone">Número para contato</label>
                <span> *</span>
                <Field id="phone" name="phone" type="text" />
              </div>
              <div className="input-block">
                <label htmlFor="industry">Ramo de atividade</label>
                <span> *</span>
                <Field id="industry" name="industry" type="text" />
              </div>
              <div className="input-block">
                <label htmlFor="cnpj">CNPJ</label>
                <span> *</span>
                <Field id="cnpj" name="cnpj" type="text" />
              </div>
            </fieldset>
          </Form>
        )}
      </Formik>
      <footer>
        <button type="button">Salvar cadastro</button>
      </footer>
    </main>
  </div>
);

export default FormCompany;

/* <Field name="lastName">
  {({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    meta,
  }) => (
    <div>
      <input type="text" placeholder="Email" {...field} />
      {meta.touched && meta.error && (
        <div className="error">{meta.error}</div>
      )}
    </div>
  )}
</Field>
<Field name="lastName" placeholder="Doe" component={MyInput} /> */
