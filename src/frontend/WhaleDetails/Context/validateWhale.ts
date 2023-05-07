export const validateWhale = (whale: any) => {
  const errors = [];
  const { name, born, died } = whale;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (!dateRegex.test(born)) {
    errors.push("Invalid 'Born' date format. Must be YYYY-MM-DD");
  }

  //died should be YYYY-MM-DD or empty
  if ((died && !dateRegex.test(died))) {
    console.log(dateRegex.test(died))
    errors.push("Invalid 'Died' date format. Must be YYYY-MM-DD");
  }

  if (name.length > 50) {
    errors.push("Name must be less than 50 characters");
  }

  return errors;
};
