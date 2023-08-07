import { Whale } from "../../../../db/Types/Entities";

export const validateWhale = (whale: Whale) => {
  const errors = [];
  const { name, born, died, identification } = whale;
  const dateRegex = /^\d{4}$/;

  if (identification && identification.length > 30) {
    errors.push("Identification must be less than 30 characters");
  }

  if (!name) {
    errors.push("Name is required");
  }

  if (name && name.length > 30) {
    errors.push("Name must be less than 30 characters");
  }

  if (born) {
    if (!dateRegex.test(born)) {
      errors.push("Invalid 'Born' date format. Must be YYYY");
    }
    if (!isValidDate(born)) {
      errors.push("Invalid 'Born' date");
    }
  }

  if (died) {
    if (!dateRegex.test(died)) {
      errors.push("Invalid 'Died' date format. Must be YYYY");
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

function isValidDate(year: string) {
  // Check if the year is a string
  if (typeof year !== "string") {
    return false;
  }

  // Use a regular expression to validate the year format (four digits)
  const yearRegex = /^\d{4}$/;

  return yearRegex.test(year);
}
