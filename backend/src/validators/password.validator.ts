import { z } from 'zod';

/**
 * Requisitos de senha:
 * - Mínimo 8 caracteres
 * - Pelo menos 1 letra maiúscula
 * - Pelo menos 1 letra minúscula
 * - Pelo menos 1 número
 * - Pelo menos 1 caractere especial
 */

export const passwordRequirements = {
  minLength: 8,
  hasUpperCase: /[A-Z]/,
  hasLowerCase: /[a-z]/,
  hasNumber: /[0-9]/,
  hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
};

export const passwordSchema = z
  .string({ error: issue => 
    issue.input === undefined 
      ? 'A senha é obrigatória.' 
      : 'A senha deve ser um texto.'
  })
  .min(
    passwordRequirements.minLength,
    { message: `A senha deve ter no mínimo ${passwordRequirements.minLength} caracteres.` }
  )
  .refine(
    (val) => passwordRequirements.hasUpperCase.test(val),
    { message: 'A senha deve conter pelo menos 1 letra maiúscula.' }
  )
  .refine(
    (val) => passwordRequirements.hasLowerCase.test(val),
    { message: 'A senha deve conter pelo menos 1 letra minúscula.' }
  )
  .refine(
    (val) => passwordRequirements.hasNumber.test(val),
    { message: 'A senha deve conter pelo menos 1 número.' }
  )
  .refine(
    (val) => passwordRequirements.hasSpecialChar.test(val),
    { message: 'A senha deve conter pelo menos 1 caractere especial (!@#$%^&*()_+-=[]{};\':"|,.<>/?)).' }
  );

/**
 * Função auxiliar para validar senha e retornar feedback detalhado
 * Útil para mostrar no frontend quais requisitos ainda faltam
 */
export interface PasswordValidationFeedback {
  isValid: boolean;
  errors: string[];
  feedback: {
    minLength: boolean;
    hasUpperCase: boolean;
    hasLowerCase: boolean;
    hasNumber: boolean;
    hasSpecialChar: boolean;
  };
}

export const validatePasswordWithFeedback = (
  password: string
): PasswordValidationFeedback => {
  const feedback = {
    minLength: password.length >= passwordRequirements.minLength,
    hasUpperCase: passwordRequirements.hasUpperCase.test(password),
    hasLowerCase: passwordRequirements.hasLowerCase.test(password),
    hasNumber: passwordRequirements.hasNumber.test(password),
    hasSpecialChar: passwordRequirements.hasSpecialChar.test(password),
  };

  const errors: string[] = [];

  if (!feedback.minLength) {
    errors.push(`Mínimo ${passwordRequirements.minLength} caracteres`);
  }
  if (!feedback.hasUpperCase) {
    errors.push('Pelo menos 1 letra maiúscula');
  }
  if (!feedback.hasLowerCase) {
    errors.push('Pelo menos 1 letra minúscula');
  }
  if (!feedback.hasNumber) {
    errors.push('Pelo menos 1 número');
  }
  if (!feedback.hasSpecialChar) {
    errors.push('Pelo menos 1 caractere especial');
  }

  return {
    isValid: errors.length === 0,
    errors,
    feedback,
  };
};
