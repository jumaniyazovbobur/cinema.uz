import {CryptoSecurity} from './cryptoSecurity';

export class LocalStorageSecurity {

  public static setItem(key: string, value: string): void {
    const encryptedKey = CryptoSecurity.encrypte(key);
    const encryptedValue = CryptoSecurity.encrypte(value);

    localStorage.setItem(encryptedKey, encryptedValue);
  }


  public static getItem(key: string): any {
    const encryptedKey = CryptoSecurity.encrypte(key);
    const encryptedValue = localStorage.getItem(encryptedKey);
    if (encryptedValue) {
      const value = CryptoSecurity.decrypte(encryptedValue);
      return value;
    }
    return null;
  }

  public static removeItem(key: string): void {
    const encryptedKey = CryptoSecurity.encrypte(key);
    localStorage.removeItem(encryptedKey);
  }


}
