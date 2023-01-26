// alert('Page loaded, JS alert');

function onClick() {
    alert('I\'m Clicked')
}

function changeText() {
    document.getElementById('targetTag').innerHTML= `Hello`;
}

$(document).ready(function() {
    $('#hideTitleBtn').click(function() {
      $('#title').toggle();
      $('p').text('jQuery text');
    })
})