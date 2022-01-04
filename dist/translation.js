"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var dic = {
  'ru': {
    'Sign Up': 'Регистрация',
    'Log  In': 'Вход',
    'Sign up': 'Регистрация',
    'Log in': 'Вход',
    'Name': 'Имя',
    'Must contain at least 2 chars.': 'Должно содержать минимум 2 буквы',
    'Your Name': 'Ваше Имя',
    'Your Email': 'Ваш Email',
    'Must be a valid email.': 'Должен быть действительным Email адресом',
    'Password': 'Пароль',
    'Enter password': 'Введите пароль',
    'Must contain at least 6 chars.': 'Должен содержать минимум 6 символов',
    'Enter code': 'Введите Код',
    'We sent an SMS code to the phone number': 'Мы отправили СМС код на номер',
    'Already have an account? Log In': 'Уже есть аккаунт? Вход',
    'Forgot password?': 'Забыли пароль?',
    'Reset password': 'Восстановление пароля',
    'We`ll send a recovery link to': 'Мы отправим ссылку восстановления пароля на адрес',
    'Send recovery link': 'Отправить ссылку',
    'Something went wrong! Please try again later!': 'Неудачно. Попробуйте еще раз!'
  }
};

window.t = function (token) {
  var path = window.location.pathname.split('/');
  var lang = 'en';

  if (path.length > 1 && path[1].length === 2) {
    lang = path[1];
  }

  if (_typeof(dic[lang]) === 'object') {
    var _dic$lang$token;

    return (_dic$lang$token = dic[lang][token]) !== null && _dic$lang$token !== void 0 ? _dic$lang$token : token;
  }

  return token;
};