/**
 * Reusable Form Validation Utility for Dreamwarez Website
 * Provides consistent, user-friendly validation across Contact, Career, and Login forms.
 */

// Email regex adhering to RFC 5322 standard with common TLD and domain constraints
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * Validates an email address.
 * @param {string} email
 * @returns {{ isValid: boolean, error?: string }}
 */
export function validateEmail(email) {
  if (!email || typeof email !== 'string' || !email.trim()) {
    return { isValid: false, error: 'Please enter your email address' };
  }

  const trimmed = email.trim();

  if (trimmed.length > 254) {
    return { isValid: false, error: 'Email address is too long (max 254 characters)' };
  }

  if (trimmed.includes('..')) {
    return { isValid: false, error: 'Email address cannot contain consecutive dots' };
  }

  if (!EMAIL_REGEX.test(trimmed)) {
    return { isValid: false, error: 'Please enter a valid email address (e.g. name@company.com)' };
  }

  // Ensure top-level domain has at least 2 alphabetic characters
  const parts = trimmed.split('.');
  const tld = parts[parts.length - 1];
  if (!/^[a-zA-Z]{2,}$/.test(tld)) {
    return { isValid: false, error: 'Email must end with a valid domain extension (e.g. .com, .in)' };
  }

  return { isValid: true };
}

/**
 * Validates a phone number.
 * Supports standard local 10-digit mobile numbers as well as international formats with '+' and country code.
 * @param {string} phone
 * @returns {{ isValid: boolean, error?: string }}
 */
export function validatePhone(phone) {
  if (!phone || typeof phone !== 'string' || !phone.trim()) {
    return { isValid: false, error: 'Please enter your phone number' };
  }

  const trimmed = phone.trim();

  // Allow only digits, spaces, hyphens, plus sign, and parentheses
  if (/[^0-9+\s\-().]/.test(trimmed)) {
    return {
      isValid: false,
      error: 'Phone number can only contain digits, spaces, hyphens, and a leading +'
    };
  }

  // If a plus sign is present, it must be the first character and occur at most once
  const plusCount = (trimmed.match(/\+/g) || []).length;
  if (plusCount > 1 || (plusCount === 1 && !trimmed.startsWith('+'))) {
    return {
      isValid: false,
      error: "Country code '+' must be at the beginning of the number"
    };
  }

  // Extract raw digits
  const digits = trimmed.replace(/\D/g, '');

  if (digits.length < 10) {
    return {
      isValid: false,
      error: `Phone number is too short (${digits.length}/10 digits minimum)`
    };
  }

  if (digits.length > 15) {
    return {
      isValid: false,
      error: 'Phone number is too long (maximum 15 digits according to E.164 standards)'
    };
  }

  // Indian mobile number validation (standard 10-digit mobile numbers start with 6, 7, 8, or 9)
  if (digits.length === 10) {
    if (!/^[6-9]/.test(digits)) {
      return {
        isValid: false,
        error: '10-digit mobile number must start with 6, 7, 8, or 9'
      };
    }
  } else if (digits.length === 12 && digits.startsWith('91')) {
    // With 91 prefix
    const mobilePart = digits.slice(2);
    if (!/^[6-9]/.test(mobilePart)) {
      return {
        isValid: false,
        error: 'Indian mobile number after +91 must start with 6, 7, 8, or 9'
      };
    }
  } else if (digits.length === 11 && digits.startsWith('0')) {
    // With leading 0 prefix
    const mobilePart = digits.slice(1);
    if (!/^[6-9]/.test(mobilePart)) {
      return {
        isValid: false,
        error: 'Indian mobile number after 0 must start with 6, 7, 8, or 9'
      };
    }
  }

  return { isValid: true };
}

/**
 * Validates a person's full name.
 * Allows letters, spaces, hyphens, periods, and apostrophes (e.g. "Dr. John Doe", "Mary-Jane", "O'Connor").
 * @param {string} name
 * @returns {{ isValid: boolean, error?: string }}
 */
export function validateName(name) {
  if (!name || typeof name !== 'string' || !name.trim()) {
    return { isValid: false, error: 'Please enter your full name' };
  }

  const trimmed = name.trim();

  if (trimmed.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters long' };
  }

  if (trimmed.length > 70) {
    return { isValid: false, error: 'Name cannot exceed 70 characters' };
  }

  // Must contain at least one letter
  if (!/[a-zA-Z]/.test(trimmed)) {
    return { isValid: false, error: 'Name must contain letters' };
  }

  // Allowed characters: letters, spaces, dots, hyphens, apostrophes
  if (!/^[a-zA-Z\s.'’-]+$/.test(trimmed)) {
    return {
      isValid: false,
      error: 'Name can only contain letters, spaces, dots, and hyphens'
    };
  }

  return { isValid: true };
}

/**
 * Validates a generic required field with optional minimum length.
 * @param {string} value
 * @param {string} fieldLabel
 * @param {number} minLength
 * @returns {{ isValid: boolean, error?: string }}
 */
export function validateRequired(value, fieldLabel = 'This field', minLength = 1) {
  if (!value || typeof value !== 'string' || !value.trim()) {
    return { isValid: false, error: `Please enter ${fieldLabel.toLowerCase()}` };
  }

  const trimmed = value.trim();

  if (minLength > 1 && trimmed.length < minLength) {
    return {
      isValid: false,
      error: `${fieldLabel} must be at least ${minLength} characters`
    };
  }

  return { isValid: true };
}

/**
 * Validates a dropdown selection.
 * @param {string} value
 * @param {string} fieldLabel
 * @returns {{ isValid: boolean, error?: string }}
 */
export function validateSelect(value, fieldLabel = 'an option') {
  if (!value || !String(value).trim()) {
    return { isValid: false, error: `Please select ${fieldLabel.toLowerCase()}` };
  }
  return { isValid: true };
}

/**
 * Validates uploaded CV / resume files.
 * @param {File|{name: string, size?: number}} file
 * @param {{ allowedExtensions?: string[], maxSizeBytes?: number }} options
 * @returns {{ isValid: boolean, error?: string }}
 */
export function validateResumeFile(file, options = {}) {
  const allowedExtensions = options.allowedExtensions || ['.pdf', '.doc', '.docx'];
  const maxSizeBytes = options.maxSizeBytes || 10 * 1024 * 1024; // 10 MB

  if (!file || !file.name) {
    return { isValid: false, error: 'Please upload your CV / Resume (PDF or Word document)' };
  }

  const ext = '.' + file.name.split('.').pop().toLowerCase();
  if (!allowedExtensions.includes(ext)) {
    return {
      isValid: false,
      error: `Unsupported file format (${ext}). Please upload a PDF or DOC/DOCX file`
    };
  }

  if (file.size && file.size > maxSizeBytes) {
    const sizeInMb = (file.size / (1024 * 1024)).toFixed(1);
    return {
      isValid: false,
      error: `File is too large (${sizeInMb}MB). Maximum allowed size is 10MB`
    };
  }

  return { isValid: true };
}

/**
 * Validates password input.
 * @param {string} password
 * @param {number} minLength
 * @returns {{ isValid: boolean, error?: string }}
 */
export function validatePassword(password, minLength = 6) {
  if (!password || !password.trim()) {
    return { isValid: false, error: 'Please enter your password' };
  }

  if (password.length < minLength) {
    return {
      isValid: false,
      error: `Password must be at least ${minLength} characters`
    };
  }

  return { isValid: true };
}
