import { describe, it, expect } from 'vitest';
import { 
  passwordSchema, 
  validatePasswordWithFeedback,
  passwordRequirements 
} from './password.validator';

describe('Password Validator', () => {
  describe('passwordSchema validation', () => {
    it('should accept a valid password with all requirements', () => {
      const validPassword = 'SecurePass123!';
      const result = passwordSchema.safeParse(validPassword);
      expect(result.success).toBe(true);
    });

    it('should accept password with special characters', () => {
      const validPasswords = [
        'Aa1!bcdefgh',
        'Bb2@cdefghi',
        'Cc3#defghij',
        'Dd4$efghijk',
        'Ee5%fghijkl',
        'Ff6^ghijklm',
        'Gg7&hijklmn',
        'Hh8*ijklmno',
        'Ii9(jklmnop',
        'Jj0)klmnopq',
      ];
      
      validPasswords.forEach(pwd => {
        const result = passwordSchema.safeParse(pwd);
        expect(result.success).toBe(true);
      });
    });

    it('should reject password with less than 8 characters', () => {
      const shortPassword = 'Abc1!@d';
      const result = passwordSchema.safeParse(shortPassword);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('mínimo');
      }
    });

    it('should reject password without uppercase letter', () => {
      const noUpperCase = 'abcdefg1!@#';
      const result = passwordSchema.safeParse(noUpperCase);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('maiúscula');
      }
    });

    it('should reject password without lowercase letter', () => {
      const noLowerCase = 'ABCDEFG1!@#';
      const result = passwordSchema.safeParse(noLowerCase);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('minúscula');
      }
    });

    it('should reject password without number', () => {
      const noNumber = 'AbcdefgHij!@#';
      const result = passwordSchema.safeParse(noNumber);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('número');
      }
    });

    it('should reject password without special character', () => {
      const noSpecialChar = 'AbcdefghIj1234';
      const result = passwordSchema.safeParse(noSpecialChar);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('especial');
      }
    });

    it('should reject empty password', () => {
      const result = passwordSchema.safeParse('');
      expect(result.success).toBe(false);
    });

    it('should reject undefined password', () => {
      const result = passwordSchema.safeParse(undefined);
      expect(result.success).toBe(false);
    });

    it('should reject password with only spaces', () => {
      const result = passwordSchema.safeParse('        ');
      expect(result.success).toBe(false);
    });
  });

  describe('validatePasswordWithFeedback function', () => {
    it('should return isValid=true for a valid password', () => {
      const feedback = validatePasswordWithFeedback('SecurePass123!');
      expect(feedback.isValid).toBe(true);
      expect(feedback.errors).toHaveLength(0);
    });

    it('should identify missing minimum length requirement', () => {
      const feedback = validatePasswordWithFeedback('Abc1!@d');
      expect(feedback.isValid).toBe(false);
      expect(feedback.feedback.minLength).toBe(false);
      expect(feedback.errors).toContain('Mínimo 8 caracteres');
    });

    it('should identify missing uppercase letter', () => {
      const feedback = validatePasswordWithFeedback('abcdefg1!@#');
      expect(feedback.isValid).toBe(false);
      expect(feedback.feedback.hasUpperCase).toBe(false);
      expect(feedback.errors).toContain('Pelo menos 1 letra maiúscula');
    });

    it('should identify missing lowercase letter', () => {
      const feedback = validatePasswordWithFeedback('ABCDEFG1!@#');
      expect(feedback.isValid).toBe(false);
      expect(feedback.feedback.hasLowerCase).toBe(false);
      expect(feedback.errors).toContain('Pelo menos 1 letra minúscula');
    });

    it('should identify missing number', () => {
      const feedback = validatePasswordWithFeedback('AbcdefgHij!@#');
      expect(feedback.isValid).toBe(false);
      expect(feedback.feedback.hasNumber).toBe(false);
      expect(feedback.errors).toContain('Pelo menos 1 número');
    });

    it('should identify missing special character', () => {
      const feedback = validatePasswordWithFeedback('Abcdefgh1Ijkl');
      expect(feedback.isValid).toBe(false);
      expect(feedback.feedback.hasSpecialChar).toBe(false);
      expect(feedback.errors).toContain('Pelo menos 1 caractere especial');
    });

    it('should identify multiple missing requirements', () => {
      const feedback = validatePasswordWithFeedback('abcdefgh');
      expect(feedback.isValid).toBe(false);
      expect(feedback.errors.length).toBeGreaterThan(1);
      expect(feedback.feedback.hasUpperCase).toBe(false);
      expect(feedback.feedback.hasNumber).toBe(false);
      expect(feedback.feedback.hasSpecialChar).toBe(false);
    });

    it('should return all requirements as true for valid password', () => {
      const feedback = validatePasswordWithFeedback('ValidPass123!@');
      expect(feedback.feedback.minLength).toBe(true);
      expect(feedback.feedback.hasUpperCase).toBe(true);
      expect(feedback.feedback.hasLowerCase).toBe(true);
      expect(feedback.feedback.hasNumber).toBe(true);
      expect(feedback.feedback.hasSpecialChar).toBe(true);
    });
  });

  describe('passwordRequirements object', () => {
    it('should have minLength of 8', () => {
      expect(passwordRequirements.minLength).toBe(8);
    });

    it('should have regex patterns for all requirements', () => {
      expect(passwordRequirements.hasUpperCase).toBeInstanceOf(RegExp);
      expect(passwordRequirements.hasLowerCase).toBeInstanceOf(RegExp);
      expect(passwordRequirements.hasNumber).toBeInstanceOf(RegExp);
      expect(passwordRequirements.hasSpecialChar).toBeInstanceOf(RegExp);
    });

    it('should correctly match uppercase letter pattern', () => {
      expect(passwordRequirements.hasUpperCase.test('A')).toBe(true);
      expect(passwordRequirements.hasUpperCase.test('a')).toBe(false);
      expect(passwordRequirements.hasUpperCase.test('1')).toBe(false);
    });

    it('should correctly match lowercase letter pattern', () => {
      expect(passwordRequirements.hasLowerCase.test('a')).toBe(true);
      expect(passwordRequirements.hasLowerCase.test('A')).toBe(false);
      expect(passwordRequirements.hasLowerCase.test('1')).toBe(false);
    });

    it('should correctly match number pattern', () => {
      expect(passwordRequirements.hasNumber.test('1')).toBe(true);
      expect(passwordRequirements.hasNumber.test('A')).toBe(false);
      expect(passwordRequirements.hasNumber.test('!')).toBe(false);
    });

    it('should correctly match special character pattern', () => {
      expect(passwordRequirements.hasSpecialChar.test('!')).toBe(true);
      expect(passwordRequirements.hasSpecialChar.test('@')).toBe(true);
      expect(passwordRequirements.hasSpecialChar.test('#')).toBe(true);
      expect(passwordRequirements.hasSpecialChar.test('$')).toBe(true);
      expect(passwordRequirements.hasSpecialChar.test('%')).toBe(true);
      expect(passwordRequirements.hasSpecialChar.test('^')).toBe(true);
      expect(passwordRequirements.hasSpecialChar.test('&')).toBe(true);
      expect(passwordRequirements.hasSpecialChar.test('*')).toBe(true);
      expect(passwordRequirements.hasSpecialChar.test('A')).toBe(false);
      expect(passwordRequirements.hasSpecialChar.test('1')).toBe(false);
    });
  });

  describe('Edge cases', () => {
    it('should accept password with exactly 8 characters and all requirements', () => {
      const result = passwordSchema.safeParse('Abc1!@de');
      expect(result.success).toBe(true);
    });

    it('should accept very long passwords', () => {
      const longPassword = 'VeryLongPassword123!@#$%^&*()VeryLongPassword123!@#$%^&*()';
      const result = passwordSchema.safeParse(longPassword);
      expect(result.success).toBe(true);
    });

    it('should accept passwords with consecutive special characters', () => {
      const result = passwordSchema.safeParse('Abc123!@#$%^');
      expect(result.success).toBe(true);
    });

    it('should accept passwords with accented characters (as long as other requirements are met)', () => {
      // Accented characters are valid, but not counted for the special character requirement
      const result = passwordSchema.safeParse('Abç1defg!@#');
      expect(result.success).toBe(true);
    });
  });
});
