// This file was automatically generated from simple_order_entry.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.SimpleOrderEntry.templates');

goog.require('soy');


bitex.ui.SimpleOrderEntry.templates.SimpleOrderEntry = function(opt_data) {
  var output = '';
  /** @desc I want to sell */
  var MSG_UNNAMED_158 = goog.getMsg('Quantity');
  /** @desc for a total of */
  var MSG_UNNAMED_160 = goog.getMsg(' for a total of ');
  /** @desc I want to sell */
  var MSG_UNNAMED_162 = goog.getMsg('Total');
  /** @desc Fee label on simple order entry */
  var MSG_UNNAMED_164 = goog.getMsg('Fee');
  /** @desc Price per crypto currency label on simple order entry */
  var MSG_UNNAMED_166 = goog.getMsg(
      'Price per {$cryptocurrencydescription} :',
      {'cryptocurrencydescription': soy.$$escapeHtml(opt_data.cryptocurrencydescription)});
  /** @desc Too expensive */
  var MSG_UNNAMED_168 = goog.getMsg('Too expensive');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_174 = goog.getMsg('Amount');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_176 = goog.getMsg('Price');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_178 = goog.getMsg('Total');
  /** @desc Simple Order */
  var MSG_UNNAMED_180 = goog.getMsg('Simple Order');
  output += '<form id="' + soy.$$escapeHtml(opt_data.id) + '" class="simple-order-entry well" ><div class="row-fluid"><div class="span10"><div class="row-fluid"><div class="pull-left"><span class="simple-order-entry-text" >';
  if (opt_data.side == 1) {
    /** @desc I want to buy */
    var MSG_UNNAMED_154 = goog.getMsg('I want to buy');
    output += MSG_UNNAMED_154;
  } else {
    /** @desc I want to sell */
    var MSG_UNNAMED_156 = goog.getMsg('I want to sell');
    output += MSG_UNNAMED_156;
  }
  output += '</span><div class="input-prepend uniform-control-holder"><span class="add-on simple-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.crypto_currency_symbol) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_qty" name="qty" data-uniform-label="' + MSG_UNNAMED_158 + '" class="input-small simple-order-entry-qty" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" type="text" required/></div></div><div class="pull-left"><span class="simple-order-entry-text" >' + MSG_UNNAMED_160 + '</span><div class="input-prepend uniform-control-holder"><span class="add-on simple-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.currency_symbol) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_total" name="total" data-uniform-label="' + MSG_UNNAMED_162 + '" class="input-small simple-order-entry-total" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" type="text" required/></div></div></div><div class="row-fluid"><small>' + MSG_UNNAMED_164 + ' ( ' + soy.$$escapeHtml(opt_data.formatted_fee) + ' ) : <span id="' + soy.$$escapeHtml(opt_data.id) + '_fee"></span>, ' + MSG_UNNAMED_166 + ' <strong><span id="' + soy.$$escapeHtml(opt_data.id) + '_avg_price"></span></strong></strong><a id="' + soy.$$escapeHtml(opt_data.id) + '_open_action_advanced" style="cursor:pointer; display:none"> ' + MSG_UNNAMED_168 + '</a></small></div></div><div class="span2"><div class="row-fluid">';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_170 = goog.getMsg('BUY');
    output += '<button id="' + soy.$$escapeHtml(opt_data.id) + '_action_simple" class="btn btn-large btn-success order-entry-action span12">' + MSG_UNNAMED_170 + '</button>';
  } else {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_172 = goog.getMsg('SELL');
    output += '<button id="' + soy.$$escapeHtml(opt_data.id) + '_action_simple" class="btn btn-large btn-danger order-entry-action span12">' + MSG_UNNAMED_172 + '</button>';
  }
  output += '</div></div></div></form><form id="' + soy.$$escapeHtml(opt_data.id) + '_advanced" class="simple-order-entry well" ><input id="' + soy.$$escapeHtml(opt_data.id) + '_type" type="hidden" name="type" value="' + soy.$$escapeHtml(opt_data.type) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_broker_id" type="hidden" name="broker_id" value="' + soy.$$escapeHtml(opt_data.broker_id) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_is_broker" type="hidden" value="' + soy.$$escapeHtml(opt_data.is_broker) + '"><div class="row-fluid"><h4>Advanced Order</h4><div class="row-fluid"><div class="span10"><div class="pull-left"><div class="row-fluid"><span class="simple-order-entry-text">Amount: </span><div class="input-prepend uniform-control-holder"><span class="add-on simple-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.crypto_currency_symbol) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_amount" name="amount" type="text" class="input-small input-block-level" data-uniform-label="' + MSG_UNNAMED_174 + '" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" value="" required/></div></div></div><div class="pull-left"><div class="row-fluid"><span class="simple-order-entry-text">Price per ' + soy.$$escapeHtml(opt_data.crypto_currency_symbol) + ': </span><div class="input-prepend uniform-control-holder"><span class="add-on simple-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.currency_symbol) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_price" name="price" type="text" class="input-small input-block-level" data-uniform-label="' + MSG_UNNAMED_176 + '" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" value="" required/></div></div></div><div class="pull-left"><div class="row-fluid"><span class="simple-order-entry-text">Total: </span><div class="input-prepend uniform-control-holder"><span class="add-on simple-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.currency_symbol) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_total_advanced" name="total" type="text" class="input-small input-block-level" data-uniform-label="' + MSG_UNNAMED_178 + '" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" required/></div></div><a id="' + soy.$$escapeHtml(opt_data.id) + '_cancel_action_advanced" style="cursor:pointer">' + MSG_UNNAMED_180 + '</a></div></div></div><div class="span2"><div class="row-fluid">';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_182 = goog.getMsg('BUY');
    output += '<button id="' + soy.$$escapeHtml(opt_data.id) + '_action_advanced" class="btn btn-large btn-success order-entry-action span12">' + MSG_UNNAMED_182 + '</button>';
  } else {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_184 = goog.getMsg('SELL');
    output += '<button id="' + soy.$$escapeHtml(opt_data.id) + '_action_advanced" class="btn btn-large btn-danger order-entry-action span12">' + MSG_UNNAMED_184 + '</button>';
  }
  output += '</div></div></div></form>';
  return output;
};
