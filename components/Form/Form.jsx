import React, { useContext } from 'react';
import {
  Formik, Form, Field
} from 'formik';
import { FormError } from './component.style';
import { DarkModeContext } from '../../contexts/darkMode.context';
import Button from '../Button';
import styles from './Form.module.scss';
import {validationSchema} from './Form.settings';

const FormGenerator = ({ formSubmit }) => {
  console.log('[Form]: component rendering...');
  const { darkMode } = useContext(DarkModeContext);
  const { Form: FormClass, Dark, Errors } = styles;

  const handleSubmit = ({identifier, password}, setSubmitting) => {
    const requestObject = { identifier, password };
    console.log('[Form]: handleSubmit - identifier, password', identifier, password);
    formSubmit(requestObject);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ identifier: '', password: '' }}
      validate={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form className={FormClass}>
          <Field type="email" name="identifier" className={`${darkMode ? Dark : ''} ${errors.identifier ? Errors : ''}`} placeholder="Ex.: nome@email.com" />
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