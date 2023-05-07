export const validateWhale = (whale: any) => {
  const errors = [];
  const { name, born, died } = whale;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (!dateRegex.test(born)) {
    errors.push("Invalid 'Born' date format. Must be YYYY-MM-DD");
  }

  //died should be YYYY-MM-DD or empty

  if (died) {
    if (!dateRegex.test(died)) {
      errors.push("Invalid 'Died' date format. Must be YYYY-MM-DD");
    }
    if (!isValidDate(died)) {
      errors.push("Invalid 'Died' date");
    }
    if (died < born) {
      errors.push("Died date must be after Born date");
    }
  }

  if (name.length > 50) {
    errors.push("Name must be less than 50 characters");
  }

  return errors;
};
  
function isValidDate(dateString: any) {
  const [year, month, day] = dateString.split("-");
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === Number(year) &&
    date.getMonth() === Number(month) - 1 &&
    date.getDate() === Number(day)
  );
}
