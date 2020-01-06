/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
$(document).ready(onReady);

function onReady() {
  console.log('in onReady');
  $('.inputDate').empty();
  $('.snowAmt').empty();
  $('.submitBtn').on('click', dataToAdd);
}

function dataToAdd() {
  // test to see if function is being called on click
  console.log('in dataToAdd');
  let dateInput = $('.inputDate').val();
  let snowInput = $('.snowAmt').val();
  // test to see if inputs were gathered
  console.log(dateInput, snowInput);

  // identify data to send
  let dataToSend = {
    dateInput: dateInput,
    snowInput: snowInput,
  };
  console.log('dataToSend', dataToSend);

  // empty out user inputs
  $('.inputDate').val('');
  $('.snowAmt').val('');

  // make server request
  $.ajax({
    method: 'POST',
    url: '/sendSnow',
    data: dataToSend,
  }).then(function(reponse) {
    console.log(reponse);
    // call GET route func here
    getSnowHistory();
  });
}

function getSnowHistory() {
  $.ajax({
    method: 'GET',
    url: '/getSnowHistory',
  }).then(function(reponse) {
    // call function to display previous inputs here
  });
}
