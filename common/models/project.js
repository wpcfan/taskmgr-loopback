'use strict';

module.exports = function(Project) {
  Project.validatesLengthOf('name', {
    min: 3,
    message: {
      min: 'Project name should be at least 3 charactors',
    },
  });
  Project.validatesUniquenessOf('name');
};
