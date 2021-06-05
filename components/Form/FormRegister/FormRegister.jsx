import React, { useContext } from 'react';
import {
  Formik, Form, Field
} from 'formik';
import { FormError } from '../component.style';
import { DarkModeContext } from '../../../contexts/darkMode.context';
import Button from '../../Button';
import styles from '../Form.module.scss';
import {registrationInitialValues, registrationValidationSchema} from '../Form.settings';

const FormGenerator = ({ formSubmit }) => {
  console.log('[Form]: component rendering...');
  const { darkMode } = useContext(DarkModeContext);
  const { Form: FormClass, Dark, Errors } = styles;

  const handleSubmit = ({username, email, password}, setSubmitting) => {
    const requestObject = { username, email, password };
    console.log('[FormRegister]: handleSubmit - username, email, password', username, email, password);
    formSubmit(requestObject);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={registrationInitialValues}
      validate={registrationValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form className={FormClass}>
          <Field type="text" name="username" className={`${darkMode ? Dark : ''} ${errors.username ? Errors : ''}`} placeholder="Ex.: Jovem" />
          <Field type="email" name="email" className={`${darkMode ? Dark : ''} ${errors.email ? Errors : ''}`} placeholder="Ex.: nome@email.com" />
          <Field type="password" name="password" className={`${darkMode ? Dark : ''} ${errors.password ? Errors : ''}`} placeholder="Entre com sua senha..." />
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
          <FormError>
            { (errors.identifier || errors.password)
              && (
                <span name="password" className="text--caption" component="span">
                  Informações inválidas.
                </span>
              )}
          </FormError>
        </Form>
      )}
    </Formik>
  );
};

export default FormGenerator;