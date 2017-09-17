'use strict';

const {app, expect} = require('../common');
const TaskList = app.models.TaskList;

describe('TaskList tests', () => {
  it('should not get created when referencing a non-existing project', () => {
    return TaskList.create({name: 'abcd', order: 1, projectId: -1})
      .then(res => expect(res).to.equal(null))
      .catch(err => expect(err).to.equal('任务列表不能属于一个不存在的项目'));
  });
});
