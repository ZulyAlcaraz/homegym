'use strict';

var FB = require('firebase');
var Q = require('q');
var uuid = require('node-uuid');
var environment = require('../../../config/environment');
var firebase = new FB(environment.database.url);
var SECRET = environment.database.secret;

firebase.authWithCustomToken(SECRET, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
    process.exit(1);
  } else {
    // console.log("Login Succeeded!", authData);
  }
});

// exports.createUser = function(email, password, temp_user){
//   var deferred = Q.defer();
//   firebase.createUser({
//     'email'    : email,
//     'password' : password
//   }, function(error, user_data) {
//     if (error) {
//       deferred.reject(error);
//     } else {
//       // deferred.resolve(userData);
//       updateAccount(user_data.uid, temp_user).then(function(response){
//         deferred.resolve(response);
//       });
//       // firebase('users/' + user_data.uid).update(temp_user, function(response){
//       //     deferred.resolve(response);
//       // });
//     }
//   });
//   return deferred.promise;
// };

// var updateAccount = exports.updateAccount = function (uuid, data) {
//   var deferred = Q.defer();
//   firebase.child('users/'+uuid).update(data, function (error) {
//     if ( error ) {
//       deferred.reject(error);
//     } else {
//       deferred.resolve(null);
//     }
//   });
//   return deferred.promise;
// };

// exports.updateSite = function (site_id, data) {
//   var deferred = Q.defer();
//   firebase.child('sites/'+site_id).update(data, function (error) {
//     if ( error ) {
//       deferred.reject(error);
//     } else {
//       deferred.resolve(null);
//     }
//   });
//   return deferred.promise;
// };

// exports.getAllUsers = function () {
//   var deferred = Q.defer();
//   firebase.child('users').once('value', function (snap) {
//     deferred.resolve(snap.val());
//   });
//   return deferred.promise;
// };

// exports.getUserByAccountCode = function (account_code) {
//   var deferred = Q.defer();
//   firebase.child('users').orderByChild('account_code').equalTo(account_code).once('value', function (snap) {
//     //console.log('FIREBASE SERVICE: ', snap.val());
//     //user is an obj which only contains 1 key which is the FirebaseID
//     var user = snap.val();
//     if (user) {
//       var firbase_uid =  Object.keys(user)[0];
//       user = user[firbase_uid];
//       deferred.resolve(user);
//     } else {
//       deferred.reject();
//     }
//   });
//   return deferred.promise;
// };

// exports.getSite = function (site_uuid) {
//   var deferred = Q.defer();
//   firebase.child('sites/'+site_uuid).once('value', function (snap) {
//     deferred.resolve(snap.val());
//   });
//   return deferred.promise;
// };

// exports.getAppInfo = function (app_info_id) {
//   var deferred = Q.defer();
//   firebase.child('app_info/'+app_info_id).once('value', function (snap) {
//     deferred.resolve(snap.val());
//   });
//   return deferred.promise;
// };

// exports.getTempUser = function(user_id){
//   var deferred = Q.defer();
//   firebase.child('temp_users/' + user_id).once('value', function (snap) {
//     deferred.resolve(snap.val());
//   });
//   return deferred.promise;
// };

// exports.getAccount = function () {

// };

// exports.genUuid = function () {
//   return uuid.v4();
// };
