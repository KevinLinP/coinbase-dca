'use strict';

module.exports.buy = async (event, context) => {
  const time = new Date();
  console.log(`buy ${time}`);
};

module.exports.deposit = async (event, context) => {
  const time = new Date();
  console.log(`deposit ${time}`);
};
