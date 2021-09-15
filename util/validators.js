module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Username yozilmagan...!';
  }
  if (email.trim() === '') {
    errors.email = 'Email yozilmagan...!';
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = 'Email example@gmail.com nusxada bolishi kerak';
    }
  }
  if (password === '') {
    errors.password = 'Password must not empty';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Password yozilmagan';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Username yozilmagan...!';
  }
  if (password.trim() === '') {
    errors.password = 'Password  yozilmagan...!';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};
