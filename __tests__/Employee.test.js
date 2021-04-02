const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should initialize a new Employee object', () => {
        const em1 = new Employee('John Smith', 1, "jsmith@gmail.com");
        expect(em1).not.toEqual('null');
        expect(em1).not.toEqual('undefined');
    });

    it('should match same name as inputed', () => {
        const em2 = new Employee('Adam', 2, "adam@yahoo.com");
        expect(em2.getName()).toEqual('Adam');
    });

    it('should match same ID as inputed', () => {
        const em3 = new Employee('Eve', 3, "eve@mail.com");
        expect(em3.getId()).toEqual(3);
    });

    it('should match same email as inputed', () => {
        const em4 = new Employee('Steve', 4, "steve@mac.com");
        expect(em4.getEmail()).toEqual("steve@mac.com");
    });
});