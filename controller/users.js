const userModel = require("../models/users");
var qs = require('querystring');
const url = require('url');

async function getAllUsers(req, res) {
  res.setHeader("Content-Type", "application/json");
  const queryUser = url.parse(req.url, true).query;
  try {
    const users = await userModel.find({ ...queryUser });
    console.log(users);
    res.statusCode = 200;

    console.log(queryUser);
    return res.end(JSON.stringify({ success: true, users }));


  } catch (err) {
    console.log(err);
    res.statusCode = 500;
    return res.end(
      JSON.stringify({ success: false, message: "Internal server error" })
    );


  }
}
async function createUser(req, res) {
  /* req.body :*/
  var body = '';
  req.on('data', function (data) {
      body += data;
  });
  req.on('end', function () {

      var POST = qs.parse(body);
      // console.log(POST.name);
    var data = {id_user: 20, username: POST.name, email: POST.email, password: POST.password, is_admin: 0 }
    const user = new userModel(data);
    console.log(POST);
    try {
      user.save((err) => {
        if (err) {
          console.log(err)
          res.statusCode = 500
          res.end(JSON.stringify({ success: true}));
          res.end()
        } else {
          res.statusCode = 200
          res.end(JSON.stringify({ success: true}));
          res.end()
        }
      })
    } catch (e) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.write(JSON.stringify({ success: false, message: 'Internal server error!' }))
      res.end()
    }
  })
}
module.exports = { getAllUsers, createUser };
