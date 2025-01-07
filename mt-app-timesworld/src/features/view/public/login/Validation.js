export const validateForm = (formData) => {
  let isValid = true;
  let newErrors = { email: "", password: "" };

  // Email validation
  if (!formData.email) {
    newErrors.email = "Email is required.";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Please enter a valid email address.";
    isValid = false;
  }

  // Password validation
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!formData.password) {
    newErrors.password = "Password is required.";
    isValid = false;
  } else if (!passwordRegex.test(formData.password)) {
    newErrors.password =
      "Password must be minimum 8 characters long, include at least 1 uppercase letter, 1 number, and 1 symbol.";
    isValid = false;
  }

  return { isValid, newErrors };
};
