import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Sequence from './Sequence.js';

$(document).ready(function() {
  function displaySequence(sequence) {
    
    $('#display').css("background-color", sequence.colors[0]);
  }
  const mySequence = new Sequence();
  mySequence.getNext();
  console.log(mySequence.colors);
  displaySequence(mySequence);

  // $('#form1').submit(function(event) {
  //   event.preventDefault();
  //   // const input1 = $('#input1').val();
  //   // const input2 = $('#input2').val();
  //   // const input3 = $('#input3').val();
    
  // });
});