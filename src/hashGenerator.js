/**
 * Created by Thomas on 19.8.2017.
 */

class HashGenerator {
    
    constructor( settings ) {

        this.length = settings.hashLength;
        this.alphabet = settings.requiredAlphabet;
        this.root = settings.rootUrl;

        this.upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
        this.digitCharacters = '0123456789';

        this.finalSetOfCharacters = '';
        if (this.alphabet.indexOf('a') > -1) {
            this.finalSetOfCharacters += this.lowerCaseCharacters;
        }
        if (this.alphabet.indexOf('A') > -1) {
            this.finalSetOfCharacters += this.upperCaseCharacters;
        }
        if (this.alphabet.indexOf('#') > -1) {
            this.finalSetOfCharacters += this.digitCharacters;
        }
    }
    
    generate() {

        let result = '';
        for (let i = this.length; i > 0; --i) {
            result += this.finalSetOfCharacters[Math.floor( Math.random() * this.finalSetOfCharacters.length )];
        }
        return this.root + '/' + result;
    }
}