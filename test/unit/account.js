/* global describe, it*/
'use strict';
var expect = require('chai').expect;
var Account = require('../../app/models/account');

describe('Account', function(){
  describe('constructor', function(){
    it('should create a new account', function(){
    var a1 = new Account('Sara', 3,'savings',1500);
    expect(a1.name).to.equal('Sara');
    expect(a1.number).to.equal(3);
    expect(a1.type).to.equal('savings');
    expect(a1.balance).to.equal(1500);
    expect(a1.deposits).to.have.length(0);
    expect(a1.withdrawals).to.have.length(0);
    });
  });
});


describe('#deposit', function(){
  it('should list deposit and provide balance', function(){
    var a1 = new Account('sara', 3,'savings', 5000);
    expect(a1.deposit).to.have.length(1);
    expect(a1.balance).to.equal(6500);

    });
});

describe('#withdraw', function(){
  it('should withdraw money from account - normal', function(){
    var sara = new Account(3, 'Sara', 1500, 'Savings');
    sara.withdraw(500);
    expect(sara.balance).to.equal(1000);
    expect(sara.withdraws).to.have.length(1);
  });

  it('should withdraw money from account - overdraft', function(){
    var sara = new Account(3, 'Sara', 1500, 'Savings');
    sara.withdraw(2000);
    expect(sara.balance).to.equal(-550);
    expect(sara.withdraws).to.have.length(1);
    expect(sara.fees).to.have.length(1);
  });
  it('should not withdraw money from account if 3 fees or greater', function(){
    var sara = new Account(3, 'Sara' 1000, 'Savings');
    sara.withdraw(2000);
    sara.withdraw(2000);
    sara.withdraw(2000);
    sara.withdraw(2000);
    sara.deposit(700);
    expect(sara.balance).to.equal(-5150);
    expect(sara.deposits).to.have.length(0);
    expect(sara.withdraws).to.have.length(3);
    expect(sara.fees)to.have.length(3);
    expect(sara.isSuspended).to.be.true;
  });
});
});







