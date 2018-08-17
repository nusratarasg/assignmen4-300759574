/* Custom javaScript goes here */

/* File name                 index.js
 * Student name              Nusrat Ara Riaz
 * Student id                300759574
 * Date Created              11/08/2018
 * Web site name             Assignment 4 Mini Portfolio
 * Latest Revision History   16/08/2018
 * File description          This file contains Custom JavaScript code 
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('content/index', {
    title: 'Home Page'
  });
});
/* GET about page. */
router.get('/contact', function (req, res, next) {
  res.render('content/contact', {
    title: 'Contact Page'
  });
});

/* GET contact page. */
router.get('/project', function (req, res, next) {
  res.render('content/project', {
    title: 'Project Page'
  });
});

module.exports = router;