var users = [];

// 간소화를 위해 bcrypt는 적용하지 않음!
function create(body) {
  const { _username, _password } = body;

  const newUser = {
    username: _username,
    password: _password,
  };

  users.push(newUser);
}

function login(body) {
  const { _username, _password } = body;

  users.find(u => {
    if (u.username === _username) {
      if (u.password === _password) {
        return true;
      }
    }
  })

  return false;
}

exports.module = create;
exports.module = login;