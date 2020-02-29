const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

class Login {

  register = (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password
    if(name === '' || email === '' || password === ''){
      res.status(204).json({
        status: 204,
        message: 'Form can not be empty. Please try again'
      });
    }
    User.findOne({email: email})
    .then(result => {
      if(result){
        res.status(200).json({
          status: 422,
          message: 'this email is already registered'
        });
      } else {
        bcrypt.hash(password, 10)
        .then(hash => {
          const user = new User({
            name:name,
            email: email,
            password: hash
          });
          user.save().then(response => {
            if(response){
            res.status(200).json({
            status: 200,
            message: 'user sucessfully registered'
          });
            }
          }).catch(err => {
            res.status(501).json({
            status: 501,
            message: 'somthing went wrong.Please try again'
          });
          })
        })
        .catch(err => {
          res.status(500).json({
            status: 500,
            message: 'somthing went wrong.Please try again'
          })
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        message:'Something went wrong. Please try again'
      });
    });
  }


  login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if(email === '' || password === ''){
       return res.status(201).json({
        status: 201,
        message:'Username and Password can not be empty. Please try again'
      })
    }
    User.findOne({email: email})
    .then(result => {
      if(result){
        bcrypt.compare(password, result.password)
        .then(response => {
          if(response){
            var token = jwt.sign({email},'secret')
            return res.status(200).json({
              data : {
                authDetail : result,
                token: token
              }
            })
        } else {
          return res.status(210).json({
            status: 210,
            message: 'Credentials Wrong. Please try again'
          })
        }
      })
        .catch(err => {
        });
      } else {
        res.status(201).json({
          status: 201,
          message: 'You are not registered with us.'
        })
      }
    })
    .catch(err => {
      res.status(400).json({
        'status': 400,
        'message': 'Something went wrong. Please try again.'
      })
    });
  }
}

module.exports = Login;
