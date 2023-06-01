import { Whale } from "../../../../../db/Types/Entities";

export const validateWhale = (whale: Whale) => {
  console.log(whale)
  const errors = [];
  const { name, born, died, identification } = whale;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (identification && identification.length > 30) {
    errors.push("Identification must be less than 30 characters");
  }

  if (name && name.length > 30) {
    errors.push("Name must be less than 30 characters");
  }

  if (born) {
    if (!dateRegex.test(born)) {
      errors.push("Invalid 'Born' date format. Must be YYYY-MM-DD");
    }
    if (!isValidDate(born)) {
      errors.push("Invalid 'Born' date");
    }
  }

  if (died) {
    if (!dateRegex.test(died)) {
      errors.push("Invalid 'Died' date format. Must be YYYY-MM-DD");
    }
    if (!isValidDate(died)) {
      errors.push("Invalid 'Died' date");
    }
  }

  if (died && born && died < born) {
    errors.push("Died date must be after Born date");
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
