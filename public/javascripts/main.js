/*jslint node: true */
'use strict';

module.exports = {
  signUp: signUp,
  signUpAfterActivity: signUpAfterActivity,
  registerActivity: registerActivity
};

function signUp() {
  console.log('sign up do header');
  return true;
}
function signUpAfterActivity() {
  console.log('sign up depois de registrar atividade');
  return true;
}
function registerActivity() {
  console.log('Atividade registrada');
  return true;
}