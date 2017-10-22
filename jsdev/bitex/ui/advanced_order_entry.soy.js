// This file was automatically generated from advanced_order_entry.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.AdvancedOrderEntry.templates');

goog.require('soy');


bitex.ui.AdvancedOrderEntry.templates.AdvancedOrderEntry = function(opt_data) {
  var output = '';
  /** @desc Available label inside the advanced order entry */
  var MSG_UNNAMED_201 = goog.getMsg('Available:');
  /** @desc Amount label in Advanced Order Entry */
  var MSG_UNNAMED_203 = goog.getMsg('Amount:');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_205 = goog.getMsg('Amount');
  /** @desc 'Price per label' in Order Entry */
  var MSG_UNNAMED_207 = goog.getMsg('Price per:');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_209 = goog.getMsg('Price');
  /** @desc Total label in Order Entry */
  var MSG_UNNAMED_211 = goog.getMsg('Total:');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_213 = goog.getMsg('Total');
  /** @desc Client ID label in Order Entry */
  var MSG_UNNAMED_215 = goog.getMsg('Client ID');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_217 = goog.getMsg('Client ID');
  output += '<form id="' + soy.$$escapeHtml(opt_data.id) + '" style="' + ((opt_data.side == 1) ? 'border-right: 1px solid rgba(41,47,51,0.1);' : '') + '" class="col-md-6 col-xs-12" data-uniform-control-holder-class="uniform-control-holder"><input id="' + soy.$$escapeHtml(opt_data.id) + '_symbol" type="hidden" name="symbol" value="' + soy.$$escapeHtml(opt_data.symbol) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_side" type="hidden" name="side" value="' + soy.$$escapeHtml(opt_data.side) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_type" type="hidden" name="type" value="' + soy.$$escapeHtml(opt_data.type) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_is_broker" type="hidden" value="' + soy.$$escapeHtml(opt_data.is_broker) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_broker_id" type="hidden" name="broker_id" value="' + soy.$$escapeHtml(opt_data.broker_id) + '"><!-- .order-form --><div class="order-form"><!-- .order-form__head --><header class="order-form__head"><h4 class="order-form__title order-form__' + ((opt_data.side == 1) ? 'buy' : 'sell') + '"><i class="glyphicon glyphicon-shopping-cart"></i> ';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_197 = goog.getMsg('Buy');
    output += MSG_UNNAMED_197;
  } else {
    /** @desc Sell button in Order Entry */
    var MSG_UNNAMED_199 = goog.getMsg('Sell');
    output += MSG_UNNAMED_199;
  }
  output += ' BTC</h4><div id="' + soy.$$escapeHtml(opt_data.id) + '_available_badge" class="order-form__balance"><span id="' + soy.$$escapeHtml(opt_data.id) + '_available_value" class="bitex-model" data-model-key="available_balance_' + soy.$$escapeHtml(opt_data.broker_id) + ':' + soy.$$escapeHtml(opt_data.client_id) + '_' + soy.$$escapeHtml(opt_data.price_currency_code) + '" style="display:none"></span>' + MSG_UNNAMED_201 + '&nbsp;' + ((opt_data.side == 1) ? '<strong id="' + soy.$$escapeHtml(opt_data.id) + '_available" class="bitex-model" data-model-key="formatted_available_balance_' + soy.$$escapeHtml(opt_data.broker_id) + ':' + soy.$$escapeHtml(opt_data.client_id) + '_' + soy.$$escapeHtml(opt_data.price_currency_code) + '" data-blink-class="balance-info-blink"></strong>' : '<strong id="' + soy.$$escapeHtml(opt_data.id) + '_available" class="bitex-model" data-model-key="formatted_available_balance_' + soy.$$escapeHtml(opt_data.broker_id) + ':' + soy.$$escapeHtml(opt_data.client_id) + '_' + soy.$$escapeHtml(opt_data.amount_currency_code) + '" data-blink-class="balance-info-blink"></strong>') + '</div></header><!-- /.order-form__head --><!-- .order-form__mid --><div class="order-form__mid"><!-- .form-group --><div class="form-group uniform-control-holder"><label for="' + soy.$$escapeHtml(opt_data.id) + '_amount" class="order-form__label order-entry-label">' + MSG_UNNAMED_203 + '</label><div class="input-group"><input id="' + soy.$$escapeHtml(opt_data.id) + '_amount" name="amount" type="text" placeholder="0" class="form-control order-entry-data" data-uniform-label="' + MSG_UNNAMED_205 + '" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" value="" required /><div id="' + soy.$$escapeHtml(opt_data.id) + '_amount_sign" id="' + soy.$$escapeHtml(opt_data.id) + '_amount_sign" class="input-group-addon advanced-order-entry-amount-sign">' + soy.$$escapeHtml(opt_data.amount_currency_symbol) + '</div></div></div><!-- /.form-group --><!-- .form-group --><div class="form-group uniform-control-holder"><label for="' + soy.$$escapeHtml(opt_data.id) + '_price" class="order-form__label order-entry-label">' + MSG_UNNAMED_207 + '</label><div class="input-group"><input id="' + soy.$$escapeHtml(opt_data.id) + '_price" name="price" type="text" placeholder="0.00" class="form-control order-entry-data" data-uniform-label="' + MSG_UNNAMED_209 + '" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" required /><div id="' + soy.$$escapeHtml(opt_data.id) + '_price_sign" class="input-group-addon advanced-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.price_currency_symbol) + '</div></div></div><!-- /.form-group --><div class="form-group uniform-control-holder"><label for="' + soy.$$escapeHtml(opt_data.id) + '_total" class="order-form__label order-entry-label">' + MSG_UNNAMED_211 + '</label><div class="input-group"><input id="' + soy.$$escapeHtml(opt_data.id) + '_total" style="text-align: right;" name="total" type="text" class="form-control" data-uniform-label="' + MSG_UNNAMED_213 + '" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" required/><div id="' + soy.$$escapeHtml(opt_data.id) + '_price_sign" class="input-group-addon advanced-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.price_currency_symbol) + '</div></div></div></div><footer class="form-group uniform-control-holder"><input id="' + soy.$$escapeHtml(opt_data.id) + '_client_id" name="client_id" type="text" value="' + ((opt_data.client_id) ? soy.$$escapeHtml(opt_data.client_id) : '') + '" class="form-control" label="' + MSG_UNNAMED_215 + '" data-uniform-label="' + MSG_UNNAMED_217 + '"' + ((opt_data.is_broker) ? 'data-uniform-validators="required"' : 'style="display:none" disabled') + '/><button id="' + soy.$$escapeHtml(opt_data.id) + '_action" type="submit" class="btn btn-lg ' + ((opt_data.side == 1) ? 'btn-success' : 'btn-danger') + ' btn-execution" style="display: block; width: 100%;">';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_219 = goog.getMsg('BUY');
    output += MSG_UNNAMED_219;
  } else {
    /** @desc Sell button in Order Entry */
    var MSG_UNNAMED_221 = goog.getMsg('SELL');
    output += MSG_UNNAMED_221;
  }
  output += '</button></div><!-- /.order-form__bot --></div><!-- /.order-form --></form>';
  return output;
};
