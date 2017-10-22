// This file was automatically generated from advanced_order_entry.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.AdvancedOrderEntry.templates');

goog.require('soy');


bitex.ui.AdvancedOrderEntry.templates.AdvancedOrderEntry = function(opt_data) {
  var output = '';
  /** @desc Amount label in Advanced Order Entry */
  var MSG_UNNAMED_162 = goog.getMsg('Amount:');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_164 = goog.getMsg('Amount');
  /** @desc 'Price per label' in Order Entry */
  var MSG_UNNAMED_166 = goog.getMsg('Price per ');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_168 = goog.getMsg('Price');
  /** @desc Total label in Order Entry */
  var MSG_UNNAMED_170 = goog.getMsg('Total:');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_172 = goog.getMsg('Total');
  output += '<form id="' + soy.$$escapeHtml(opt_data.id) + '" class="well span6 advanced-order-entry" data-uniform-control-holder-class="uniform-control-holder"><input id="' + soy.$$escapeHtml(opt_data.id) + '_symbol" type="hidden" name="symbol" value="' + soy.$$escapeHtml(opt_data.symbol) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_side" type="hidden" name="side" value="' + soy.$$escapeHtml(opt_data.side) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_type" type="hidden" name="type" value="' + soy.$$escapeHtml(opt_data.type) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_is_broker" type="hidden" value="' + soy.$$escapeHtml(opt_data.is_broker) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_broker_id" type="hidden" name="broker_id" value="' + soy.$$escapeHtml(opt_data.broker_id) + '"><div class="row-fluid uniform-control-holder"><div class="span5"> <span>' + MSG_UNNAMED_162 + '</span></div><div class="span6"><div class="input-prepend input-block-level"><span id="' + soy.$$escapeHtml(opt_data.id) + '_amount_sign" class="add-on advanced-order-entry-amount-sign">' + soy.$$escapeHtml(opt_data.amount_currency_symbol) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_amount" name="amount" type="text" class="input-block-level" data-uniform-label="' + MSG_UNNAMED_164 + '" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" value="" required/></div></div></div><div class="row-fluid uniform-control-holder"><div class="span5"> <span>' + MSG_UNNAMED_166 + '<span class="advanced-order-entry-amount-sign">' + soy.$$escapeHtml(opt_data.amount_currency_symbol) + '</span>:</span></div><div class="span6"><div class="input-prepend input-block-level"><span id="' + soy.$$escapeHtml(opt_data.id) + '_price_sign" class="add-on advanced-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.price_currency_symbol) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_price" name="price" type="text" class="input-block-level" data-uniform-label="' + MSG_UNNAMED_168 + '" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" required/></div></div></div><div class="row-fluid uniform-control-holder"><div class="span5"><span>' + MSG_UNNAMED_170 + '</span></div><div class="span6"><div class="input-prepend input-block-level"><span class="add-on advanced-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.price_currency_symbol) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_total" name="total" type="text" class="input-block-level" data-uniform-label="' + MSG_UNNAMED_172 + '" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" required/></div></div></div><div class="row-fluid uniform-control-holder"><div class="span5">';
  if (opt_data.is_broker) {
    /** @desc Client ID label in Order Entry */
    var MSG_UNNAMED_174 = goog.getMsg('Client ID');
    /** @desc Advanced Order Entry Label */
    var MSG_UNNAMED_176 = goog.getMsg('Client ID');
    output += '<input id="' + soy.$$escapeHtml(opt_data.id) + '_client_id" name="client_id" type="text" class="input-block-level" label="' + MSG_UNNAMED_174 + '" data-uniform-label="' + MSG_UNNAMED_176 + '" data-uniform-validators="required"/>';
  } else {
    /** @desc Available label inside the advanced order entry */
    var MSG_UNNAMED_178 = goog.getMsg('Available: ');
    output += '<div id="' + soy.$$escapeHtml(opt_data.id) + '_available_badge" class="text-block" style="margin-top: 10px;cursor: pointer;">' + MSG_UNNAMED_178 + '<span id="' + soy.$$escapeHtml(opt_data.id) + '_available_value" class="bitex-model" data-model-key="available_balance_' + soy.$$escapeHtml(opt_data.broker_id) + ':' + soy.$$escapeHtml(opt_data.client_id) + '_' + soy.$$escapeHtml(opt_data.price_currency_code) + '" style="display:none"></span><small>' + ((opt_data.side == 1) ? '<span id="' + soy.$$escapeHtml(opt_data.id) + '_available" class="bitex-model" data-model-key="formatted_available_balance_' + soy.$$escapeHtml(opt_data.broker_id) + ':' + soy.$$escapeHtml(opt_data.client_id) + '_' + soy.$$escapeHtml(opt_data.price_currency_code) + '" data-blink-class="balance-info-blink"></span>' : '<span id="' + soy.$$escapeHtml(opt_data.id) + '_available" class="bitex-model" data-model-key="formatted_available_balance_' + soy.$$escapeHtml(opt_data.broker_id) + ':' + soy.$$escapeHtml(opt_data.client_id) + '_' + soy.$$escapeHtml(opt_data.amount_currency_code) + '" data-blink-class="balance-info-blink"></span>') + '</small></div>';
  }
  output += '</div><div class="span7"><button id="' + soy.$$escapeHtml(opt_data.id) + '_action" class="btn ' + ((opt_data.side == 1) ? 'btn-success' : 'btn-danger') + ' btn-execution" style="width: 100%;">';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_180 = goog.getMsg('BUY');
    output += MSG_UNNAMED_180;
  } else {
    /** @desc Sell button in Order Entry */
    var MSG_UNNAMED_182 = goog.getMsg('SELL');
    output += MSG_UNNAMED_182;
  }
  output += '</button></div></div></form>';
  return output;
};
