// This file was automatically generated from simple_order_entry.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.SimpleOrderEntry.templates');

goog.require('soy');


bitex.ui.SimpleOrderEntry.templates.SimpleOrderEntry = function(opt_data) {
  var output = '';
  /** @desc Advanced */
  var MSG_UNNAMED_201 = goog.getMsg('Advanced');
  /** @desc I want to sell */
  var MSG_UNNAMED_207 = goog.getMsg('Quantity');
  /** @desc for a total of */
  var MSG_UNNAMED_209 = goog.getMsg(' for a total of:');
  /** @desc I want to sell */
  var MSG_UNNAMED_211 = goog.getMsg('Total');
  /** @desc Fee label on simple order entry */
  var MSG_UNNAMED_217 = goog.getMsg('Fee');
  /** @desc Price per crypto currency label on simple order entry */
  var MSG_UNNAMED_219 = goog.getMsg(
      'Price per {$cryptocurrencydescription}:',
      {'cryptocurrencydescription': soy.$$escapeHtml(opt_data.cryptocurrencydescription)});
  /** @desc Simple Order */
  var MSG_UNNAMED_225 = goog.getMsg('Simple Order');
  /** @desc Amount */
  var MSG_UNNAMED_227 = goog.getMsg('Amount');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_229 = goog.getMsg('Amount');
  /** @desc Price per */
  var MSG_UNNAMED_231 = goog.getMsg('Price per');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_233 = goog.getMsg('Price');
  /** @desc Total */
  var MSG_UNNAMED_235 = goog.getMsg('Total');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_237 = goog.getMsg('Total');
  output += '<form id="' + soy.$$escapeHtml(opt_data.id) + '" class=""><!-- .order-form --><div class="simple-order-form page__section_white"><!-- .order-form__head --><header class="order-form__head"><h4 class="order-form__title"><i class="glyphicon glyphicon-shopping-cart"></i>';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_197 = goog.getMsg('Buy');
    output += MSG_UNNAMED_197;
  } else {
    /** @desc Sell button in Order Entry */
    var MSG_UNNAMED_199 = goog.getMsg('Sell');
    output += MSG_UNNAMED_199;
  }
  output += ' BTC<small><a id="' + soy.$$escapeHtml(opt_data.id) + '_open_action_advanced" style="cursor:pointer;margin-left:10px">' + MSG_UNNAMED_201 + '</a></small></h4></header><!-- /.order-form__head --><!-- .order-form__mid --><div class="order-form__mid row"><!-- .form-group --><div class="col-xs-6"><div class="form-group uniform-control-holder"><label for="' + soy.$$escapeHtml(opt_data.id) + '_qty" class="order-form__label">';
  if (opt_data.side == 1) {
    /** @desc I want to buy */
    var MSG_UNNAMED_203 = goog.getMsg('I want to buy:');
    output += MSG_UNNAMED_203;
  } else {
    /** @desc I want to sell */
    var MSG_UNNAMED_205 = goog.getMsg('I want to sell:');
    output += MSG_UNNAMED_205;
  }
  output += '<span class="add-on"></span></label><div class="input-group"><input id="' + soy.$$escapeHtml(opt_data.id) + '_qty" name="qty" data-uniform-label="' + MSG_UNNAMED_207 + '" class="form-control" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" type="text" required/><div id="' + soy.$$escapeHtml(opt_data.id) + '_amount_sign" id="' + soy.$$escapeHtml(opt_data.id) + '_amount_sign" class="input-group-addon  simple-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.crypto_currency_symbol) + '</div></div></div></div><!-- /.form-group --><!-- .form-group --><div class="col-xs-6"><div class="form-group uniform-control-holder"><label for="' + soy.$$escapeHtml(opt_data.id) + '_total" class="order-form__label">' + MSG_UNNAMED_209 + '</label><div class="input-group"><input id="' + soy.$$escapeHtml(opt_data.id) + '_total" name="total" data-uniform-label="' + MSG_UNNAMED_211 + '" class="form-control" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" type="text" required/><div id="' + soy.$$escapeHtml(opt_data.id) + '_amount_sign" id="' + soy.$$escapeHtml(opt_data.id) + '_amount_sign" class="input-group-addon simple-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.currency_symbol) + '</div></div></div></div><!-- /.form-group --></div><!-- /.order-form__mid --><!-- .order-form__bot --><footer class="row"><div class="order-form__action col-xs-12">';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_213 = goog.getMsg('BUY');
    output += '<button id="' + soy.$$escapeHtml(opt_data.id) + '_action_simple" class="btn btn-lg btn-success" style="display: block; width: 100%;">' + MSG_UNNAMED_213 + '</button>';
  } else {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_215 = goog.getMsg('SELL');
    output += '<button id="' + soy.$$escapeHtml(opt_data.id) + '_action_simple" class="btn btn-lg btn-danger" style="display: block; width: 100%;">' + MSG_UNNAMED_215 + '</button>';
  }
  output += '</div></footer><div class="row"><div class="col-xs-12">' + MSG_UNNAMED_217 + ' ( ' + soy.$$escapeHtml(opt_data.formatted_fee) + ' ): <span id="' + soy.$$escapeHtml(opt_data.id) + '_fee"></span>' + MSG_UNNAMED_219 + '<strong><span id="' + soy.$$escapeHtml(opt_data.id) + '_avg_price"></span></strong></div></div><!-- /.order-form__bot --></div><!-- /.order-form --></form><form id="' + soy.$$escapeHtml(opt_data.id) + '_advanced"><input id="' + soy.$$escapeHtml(opt_data.id) + '_type" type="hidden" name="type" value="' + soy.$$escapeHtml(opt_data.type) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_broker_id" type="hidden" name="broker_id" value="' + soy.$$escapeHtml(opt_data.broker_id) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_is_broker" type="hidden" value="' + soy.$$escapeHtml(opt_data.is_broker) + '"><div class="page__section_white simple-order-form"><header class="order-form__head"><h4 class="order-form__title"><i class="glyphicon glyphicon-shopping-cart"></i>';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_221 = goog.getMsg('Buy');
    output += MSG_UNNAMED_221;
  } else {
    /** @desc Sell button in Order Entry */
    var MSG_UNNAMED_223 = goog.getMsg('Sell');
    output += MSG_UNNAMED_223;
  }
  output += ' BTC<small><a id="' + soy.$$escapeHtml(opt_data.id) + '_cancel_action_advanced" style="cursor:pointer;margin-left:10px">' + MSG_UNNAMED_225 + '</a></small></h4></header><div class="order-form__mid row row"><div class="col-sm-4 col-xs-12"><div class="form-group uniform-control-holder"><label class="order-form__label">' + MSG_UNNAMED_227 + ': </label><div class="input-group"><input id="' + soy.$$escapeHtml(opt_data.id) + '_amount" name="amount" type="text" class="form-control" data-uniform-label="' + MSG_UNNAMED_229 + '" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" value="" required/><span class="input-group-addon simple-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.crypto_currency_symbol) + '</span></div></div></div><div class="col-sm-4 col-xs-12"><div class="form-group uniform-control-holder"><label class="order-form__label">' + MSG_UNNAMED_231 + ' ' + soy.$$escapeHtml(opt_data.crypto_currency_symbol) + ': </label><div class="input-group"><input id="' + soy.$$escapeHtml(opt_data.id) + '_price" name="price" type="text" class="form-control" data-uniform-label="' + MSG_UNNAMED_233 + '" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" value="" required/><span class="input-group-addon simple-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.currency_symbol) + '</span></div></div></div><div class="col-sm-4 col-xs-12"><div class="form-group uniform-control-holder"><label class="order-form__label">' + MSG_UNNAMED_235 + '</label><div class="input-group"><input id="' + soy.$$escapeHtml(opt_data.id) + '_total_advanced" name="total" type="text" class="form-control" data-uniform-label="' + MSG_UNNAMED_237 + '" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" required/><span class="input-group-addon simple-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.currency_symbol) + '</span></div></div></div></div><div class="row"><div class="order-form__action col-xs-12">';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_239 = goog.getMsg('BUY');
    output += '<button id="' + soy.$$escapeHtml(opt_data.id) + '_action_advanced" class="btn btn-lg btn-success order-entry-action col-xs-12">' + MSG_UNNAMED_239 + '</button>';
  } else {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_241 = goog.getMsg('SELL');
    output += '<button id="' + soy.$$escapeHtml(opt_data.id) + '_action_advanced" class="btn btn-lg btn-danger order-entry-action col-xs-12">' + MSG_UNNAMED_241 + '</button>';
  }
  output += '</div></div></div></form>';
  return output;
};
