import { messages } from './i18n';

export const authErrors = (lang) => {

  let errors;

  const errors_pt = {
    email_invalid: messages.pt.email_invalid,
    email_required: messages.pt.email_required,
    email_unique: messages.pt.email_unique,
    username_invalid: messages.pt.username_invalid,
    username_required: messages.pt.username_required,
    username_short: messages.pt.username_short,
    username_unique: messages.pt.username_unique,
    username_long: messages.pt.username_long,
    password_length: messages.pt.password_length,
    password_required: messages.pt.password_required,
    name_invalid: messages.pt.name_invalid,
    name_long: messages.pt.name_long,
    error_csrf: messages.pt.error_csrf,
    error_ops: messages.pt.errorOps,
    error_network: messages.pt.error_network,
    error_validation: messages.pt.error_validation,
    wrong_credentials: messages.pt.wrongCredentials,
    user_error: messages.pt.userRequired,
    email_not_found: messages.pt.email_not_found,
    success_email: messages.pt.success_email,
    passwords_must_match: messages.pt.passwords_must_match,
    password_reset_success: messages.pt.password_reset_success,
    error_title_required: messages.pt.error_title_required,
    error_title_max: messages.pt.error_title_max
  };

  const errors_en = {
    email_invalid: messages.en.email_invalid,
    email_required: messages.en.email_required,
    email_unique: messages.en.email_unique,
    username_invalid: messages.en.username_invalid,
    username_required: messages.en.username_required,
    username_short: messages.en.username_short,
    username_unique: messages.en.username_unique,
    username_long: messages.en.username_long,
    name_invalid: messages.en.name_invalid,
    name_long: messages.en.name_long,
    password_length: messages.en.password_length,
    password_required: messages.en.password_required,
    error_csrf: messages.en.error_csrf,
    error_ops: messages.en.errorOps,
    error_network: messages.en.error_network,
    error_validation: messages.en.error_validation,
    wrong_credentials: messages.en.wrongCredentials,
    user_error: messages.en.userRequired,
    email_not_found: messages.en.email_not_found,
    success_email: messages.en.success_email,
    passwords_must_match: messages.en.passwords_must_match,
    password_reset_success: messages.en.password_reset_success,
    error_title_required: messages.en.error_title_required,
    error_title_max: messages.en.error_title_max
  };

  if (lang === "pt") errors = errors_pt;
  else errors = errors_en;

  return errors;

};
