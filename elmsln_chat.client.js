
/**
 * elmsln_chat client side javascript
 *
 * A very simple client side implementation.  This file is loaded on
 * the form page. Upon submission of the form a simple message is 
 * sent back to the node server using socket.emit().
 *
 */

(function ($) {
  // A simple message.  The listener on the server side does not like us to
  // specify 'messageType' so we're calling it 'type' for now.
  var message = {
    type: 'elmslnChat',
    messageBody: 'Hello from the client side!'
  };

  Drupal.behaviors.sendDrupalMessage = {
    attach: function(context, settings) {
      // Have our message emitter fire on submission.
      $("#elmsln-chat-form").submit(function() {
        Drupal.Nodejs.socket.emit('message', message);
        return false;
      }); 
    }
  }

})(jQuery);