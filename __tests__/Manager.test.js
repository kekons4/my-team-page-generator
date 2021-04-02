const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should initialize a new Manager object', () => {
        const em1 = new Manager('John Smith', 1, "jsmith@gmail.com", 1);
        expect(em1).not.toEqual('null');
        expect(em1).not.toEqual('undefined');
    });

    it('should match same name as inputed', () => {
        const em2 = new Manager('Adam', 2, "adam@yahoo.com", 1);
        expect(em2.getName()).toEqual('Adam');
    });

    it('should match same ID as inputed', () => {
        const em3 = new Manager('Eve', 3, "eve@mail.com", 1);
        expect(em3.getId()).toEqual(3);
    });

    it('should match same email as inputed', () => {
        const em4 = new Manager('Steve', 4, "steve@mac.com", 1);
        expect(em4.getEmail()).toEqual("steve@mac.com");
    });

    it('should match same office number as inputed', () => {
        const em5 = new Manager('Lloyd', 5, "lloyd@hotmail.com", 1);
        expect(em5.officeNumber).toEqual(1);
    });
});