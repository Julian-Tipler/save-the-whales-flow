export const validateWhale = (whale: any) => {
    const errors = []
  const { name, born, died } = whale;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;


  if (!dateRegex.test(born)) {
    errors.push("Invalid 'born' date format. Must be YYYY-MM-DD")
  }

  if (died && !dateRegex.test(died)) {
    errors.push("Invalid 'died' date format. Must be YYYY-MM-DD");
  }

  if(name.length>50) {
    errors.push("Name must be less than 50 characters");
  }

  return errors

};
