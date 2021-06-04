export const validationSchema = (values) => {
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
