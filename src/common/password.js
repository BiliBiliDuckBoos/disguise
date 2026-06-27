import storage from '@system.storage'

const PASSWORD_KEY = 'disguise_password'
const DEFAULT_PASSWORD = '666666'

function getPassword(callback) {
  storage.get({
    key: PASSWORD_KEY,
    success: function (data) {
      if (data && data !== '') {
        callback(data)
      } else {
        callback(DEFAULT_PASSWORD)
      }
    },
    fail: function () {
      callback(DEFAULT_PASSWORD)
    }
  })
}

function setPassword(password, callback) {
  storage.set({
    key: PASSWORD_KEY,
    value: password,
    success: function () {
      if (callback) callback(true)
    },
    fail: function () {
      if (callback) callback(false)
    }
  })
}

export default {
  getPassword,
  setPassword
}
