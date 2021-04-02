const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should initialize a new Intern object', () => {
        const em1 = new Intern('John Smith', 1, "jsmith@gmail.com", "The Ohio State University");
        expect(em1).not.toEqual('null');
        expect(em1).not.toEqual('undefined');
    });

    it('should match same name as inputed', () => {
        const em2 = new Intern('Adam', 2, "adam@yahoo.com", "The Ohio State University");
        expect(em2.getName()).toEqual('Adam');
    });

    it('should match same ID as inputed', () => {
        const em3 = new Intern('Eve', 3, "eve@mail.com", "The Ohio State University");
        expect(em3.getId()).toEqual(3);
    });

    it('should match same email as inputed', () => {
        const em4 = new Intern('Steve', 4, "steve@mac.com", "The Ohio State University");
        expect(em4.getEmail()).toEqual("steve@mac.com");
    });

    it('should match same school as inputed', () => {
        const em5 = new Intern('Lloyd', 5, "lloyd@hotmail.com", "The Ohio State University");
        expect(em5.getSchool()).toEqual("The Ohio State University");
    });
});