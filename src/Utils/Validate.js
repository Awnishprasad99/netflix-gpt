export const checkValidData = (Email, Password, userName) => {
    // Email validation
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const isEmailValid = emailRegex.test(Email);
  
    if (!isEmailValid) {
      if (!Email.includes('@')) {
        return "Email must contain '@'";
      }
      if (!/\.[a-zA-Z]{2,}$/.test(Email)) {
        return "Email must contain a domain like '.com'";
      }
      return "Email is not valid";
    }
  
    // Password validation
    const hasUpperCase = /[A-Z]/.test(Password);
    const hasLowerCase = /[a-z]/.test(Password);
    const hasNumber = /[0-9]/.test(Password);
    const hasSpecialChar = /[#?!@$%^&*-]/.test(Password);
    const hasMinLength = Password.length >= 8;
  
    if (!hasUpperCase) {
      return "Password must contain at least one uppercase letter";
    }
    if (!hasLowerCase) {
      return "Password must contain at least one lowercase letter";
    }
    if (!hasNumber) {
      return "Password must contain at least one number";
    }
    if (!hasSpecialChar) {
      return "Password must contain at least one special character (#?!@$%^&*-)";
    }
    if (!hasMinLength) {
      return "Password must be at least 8 characters long";
    }
  
    // Username validation
    const isUserNameValid = /^[a-zA-Z0-9_\s]+$/.test(userName);
    if (!isUserNameValid) {
      return "Enter a valid name (alphanumeric, underscores, and spaces allowed)";
    }
  
    return null;
  };
  