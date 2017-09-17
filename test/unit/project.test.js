'use strict';

const {app, expect} = require('../common');

const Project = app.models.Project;

describe('Project Validation', function() {
  it('should reject a name < 3 chars', function() {
    return Project.create({
      name: 'a',
      coverImg: '/blablabla.jpg',
      createdDate: new Date()})
      .then(res => Promise.reject('Project should not be created'))
      .catch(err => {
        expect(err.message).to.contain('name should be at least 3 charactors');
        expect(err.statusCode).to.be.equal(422);
      });
  });
  it('should create a correct project', function() {
    return Project.create({
      name: 'abcd',
      coverImg: '/blablabla.jpg',
      createdDate: new Date()})
      .then(res => expect(res.name).to.equal('abcd'));
  });
});
