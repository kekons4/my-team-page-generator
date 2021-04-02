const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should initialize a new Engineer object', () => {
        const em1 = new Engineer('John Smith', 1, "jsmith@gmail.com", "agentsmith");
        expect(em1).not.toEqual('null');
        expect(em1).not.toEqual('undefined');
    });

    it('should match same name as inputed', () => {
        const em2 = new Engineer('Adam', 2, "adam@yahoo.com", "adam1");
        expect(em2.getName()).toEqual('Adam');
    });

    it('should match same ID as inputed', () => {
        const em3 = new Engineer('Eve', 3, "eve@mail.com", "evebby");
        expect(em3.getId()).toEqual(3);
    });

    it('should match same email as inputed', () => {
        const em4 = new Engineer('Steve', 4, "steve@mac.com", "steveo");
        expect(em4.getEmail()).toEqual("steve@mac.com");
    });

    it('should match same Github username as inputed', () => {
        const em5 = new Engineer('Lloyd', 5, "lloyd@hotmail.com", "lloydian");
        expect(em5.getGithub()).toEqual("lloydian");
    });
});