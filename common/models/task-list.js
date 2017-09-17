'use strict';

module.exports = function(Tasklist) {
  Tasklist.observe('before save', function(ctx, next) {
    if (ctx.instance && ctx.instance.projectId) {
      return Tasklist.app.models.Project
        .count({id: ctx.instance.projectId})
        .then(res => {
          if (res < 1) {
            return Promise.reject('任务列表不能属于一个不存在的项目');
          }
        });
    }
    return next();
  });
  Tasklist.validatesLengthOf('name', {
    min: 3,
    message: {
      min: 'The TaskList name should be at least 3 charactors',
    },
  });
  Tasklist.validatesUniquenessOf('name');
};
