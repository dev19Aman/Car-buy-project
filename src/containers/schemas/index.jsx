import * as Yup from 'yup'

// CODE FOR LoginForm VALIDATION
export const LoginWrapperSchema = Yup.object({
	email: Yup.string().required('Please enter email or phone number'),
    // email: email ===email()? Yup.string().email().required('Please enter email or phone number'):Yup.string().required('Please enter email or phone number'),
        password: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Please enter password'),
});

// CODE FOR Change VALIDATION
export const ChangePasswordSchema = Yup.object({
    newPassword: Yup.string()
    .required('New Password is required')
    .min(6, 'New Password must be at least 6 characters')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/,
      'New Password must contain at least one uppercase letter, one lowercase letter, and one number',
    ),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});
