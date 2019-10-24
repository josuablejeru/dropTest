import { Droppable } from '@shopify/draggable';
import $ from 'jquery';

$(document).ready(function() {

  const droppable = new Droppable(document.querySelectorAll('.container'), {
    draggable: '.item',
    dropzone: '.dropzone'
  });
  
  droppable.on('droppable:dropped', () => console.log('droppable:dropped'));
  droppable.on('droppable:returned', () => console.log('droppable:returned'));

  console.log(droppable);

});


function injectOXIDs() {
  const foo = $('.item');
  const button  = $('#desktop-save');

  // let ids = [];
  //
  // for (let i = 0; i < foo.length; i++) {
  //     let oxid = foo[i].dataset.oxid;
  //     ids.push(oxid);
  // }

  button.value = 'blub';

  console.log(button.value);
}