'use strict';

module.exports = function(Task) {
  Task.validatesLengthOf('desc', {
    min: 3,
    message: {
      min: 'The TaskList name should be at least 3 charactors',
    },
  });
  const possibleValuesOfPriority = [1, 2, 3];
  const validatePriority = function(err) {
    if (possibleValuesOfPriority.indexOf(this.priority)) {
      err();
    }
  };
  Task.validate('priority', validatePriority, {
    message: 'The priority should be 1, 2 or 3',
  });
};
