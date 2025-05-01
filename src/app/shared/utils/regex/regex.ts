export class RegexUtils {
  static email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


  static isValidEmail(email: string): boolean {
    const emailRegex = RegexUtils.email;
    return emailRegex.test(email);
  }
}
