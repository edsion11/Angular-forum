import { Injectable } from '@angular/core';
import { AES, mode, pad, enc } from 'crypto-js';
@Injectable({providedIn: 'root'})
export class UtilCrypto{
    private iv = enc.Utf8.parse('ABCDEF1234123412');
    private key = enc.Utf8.parse('1234123412ABCDEF')
    decrypt(word: string){
        let encryptedHexStr = enc.Hex.parse(word)
        let srcs = enc.Base64.stringify(encryptedHexStr)
        let decrypt = AES.decrypt(srcs, this.key, {
          iv: this.iv,
          mode: mode.CBC,
          padding: pad.Pkcs7,
        })
        let decryptedStr = decrypt.toString(enc.Utf8)
        return decryptedStr.toString()
    }
    encrypt(word: string) {
        let srcs = enc.Utf8.parse(word)
        let encrypted = AES.encrypt(srcs, this.key, {
          iv: this.iv,
          mode: mode.CBC,
          padding: pad.Pkcs7,
        })
        return encrypted.ciphertext.toString().toUpperCase()
    }
}