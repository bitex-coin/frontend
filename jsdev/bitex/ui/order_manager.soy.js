// This file was automatically generated from order_manager.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.OrderManager.templates');

goog.require('soy');


bitex.ui.OrderManager.templates.CancelOrder = function(opt_data) {
  var output = '';
  /** @desc cancel */
  var MSG_UNNAMED_17 = goog.getMsg('cancel');
  output += '<button class="btn btn-mini btn-danger" data-action="cancel" data-client-order-id="' + soy.$$escapeHtml(opt_data.dataClientOrderId) + '" ' + ((opt_data.dataOrderId) ? 'data-order-id="' + soy.$$escapeHtml(opt_data.dataOrderId) + '"' : '') + '>' + MSG_UNNAMED_17 + '</button>';
  return output;
};
