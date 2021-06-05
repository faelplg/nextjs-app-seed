export const loginInitialValues = {identifier: '', password: ''};

export const loginValidationSchema = (values) => {
  const errors = {};
  if (!values.identifier) {
    errors.identifier = 'Campo obrigatório.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.identifier)) {
    errors.identifier = 'E-mail inválido.';
  }
  if (!values.password) {
    errors.password = 'Campo obrigatório.';
  }
  return errors;
};

export const registrationInitialValues = {username: '', email: '', password: ''};

export const registrationValidationSchema = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Campo obrigatório.'
  }
  if (!values.email) {
    errors.email = 'Campo obrigatório.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'E-mail inválido.';
  }
  if (!values.password) {
    errors.password = 'Campo obrigatório.';
  }
  return errors;
};
