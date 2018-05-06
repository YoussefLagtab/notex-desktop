const $ = require('jquery')

let goto = to => {
  $('.active').removeClass('active')
  $('#' + to + '-btn').addClass('active')
  $('#main').load('./pages/' + to + '/index.html')
}

$(() => {
  goto('dashboard')
})
