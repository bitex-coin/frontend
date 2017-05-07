// This file was automatically generated from line_of_credit.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.view.LineOfCreditView.templates');

goog.require('soy');


bitex.view.LineOfCreditView.templates.InfoLineOfCredit = function(opt_data) {
  var output = '';
  /** @desc Provider full name on Line of credit info */
  var MSG_UNNAMED_717 = goog.getMsg('Provider');
  /** @desc Taker full name on Line of credit info */
  var MSG_UNNAMED_719 = goog.getMsg('Taker');
  /** @desc Currency on Line of credit info */
  var MSG_UNNAMED_721 = goog.getMsg('Currency');
  /** @desc Interest rate on Line of credit info */
  var MSG_UNNAMED_723 = goog.getMsg('Daily interest rate');
  /** @desc Credit Limit on Line of credit info */
  var MSG_UNNAMED_725 = goog.getMsg('Credit limit');
  /** @desc Created on Line of credit info */
  var MSG_UNNAMED_727 = goog.getMsg('Created');
  /** @desc Get ticker on credit info */
  var MSG_UNNAMED_731 = goog.getMsg('Ticker for get');
  /** @desc Payback ticker on credit info */
  var MSG_UNNAMED_733 = goog.getMsg('Ticker for payback');
  /** @desc Min/Max size for currency on credit info */
  var MSG_UNNAMED_735 = goog.getMsg('Min/Max size');
  output += '<table class="table table-condensed table-bordered"><tr><td>' + MSG_UNNAMED_717 + '</td><td>' + soy.$$escapeHtml(opt_data.data['ProviderFirstName']) + ' ' + soy.$$escapeHtml(opt_data.data['ProviderLastName']) + '</td></tr><tr><td>' + MSG_UNNAMED_719 + '</td><td>' + soy.$$escapeHtml(opt_data.data['TakerFirstName']) + ' ' + soy.$$escapeHtml(opt_data.data['TakerLastName']) + '</td></tr><tr><td>' + MSG_UNNAMED_721 + '</td><td>' + soy.$$escapeHtml(opt_data.data['Currency']) + '</td></tr><tr><td>' + MSG_UNNAMED_723 + '</td><td>' + soy.$$escapeHtml(opt_data.data['InterestRateHumanFormat']) + '</td></tr><tr><td>' + MSG_UNNAMED_725 + '</td><td>' + soy.$$escapeHtml(opt_data.data['CreditLimitHumanFormat']) + '</td></tr><tr><td>' + MSG_UNNAMED_727 + '</td><td>' + soy.$$escapeHtml(opt_data.data['Created']) + ' UTC</td></tr>';
  var cList38 = opt_data.data['DeliveryCurrencies'];
  var cListLen38 = cList38.length;
  for (var cIndex38 = 0; cIndex38 < cListLen38; cIndex38++) {
    var cData38 = cList38[cIndex38];
    /** @desc Delivery currency title on credit info */
    var MSG_UNNAMED_729 = goog.getMsg(
        'Get and pay back in {$c}',
        {'c': soy.$$escapeHtml(cData38)});
    output += '<tr><td colspan="2"> ' + MSG_UNNAMED_729 + '</td></tr><tr><td>' + MSG_UNNAMED_731 + '</td><td>' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['get_ticker']['market']) + ':' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['get_ticker']['instrument']) + ':' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['get_ticker']['column']) + ' <span class="bitex-model" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['get_ticker']['currency_pattern']) + '" data-model-formula="' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['get_ticker']['market']) + '_' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['get_ticker']['instrument']) + '_' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['get_ticker']['column']) + ' / 100000000" data-model-key-list="' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['get_ticker']['market']) + '_' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['get_ticker']['instrument']) + '_' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['get_ticker']['column']) + '"></span></td></tr><tr><td>' + MSG_UNNAMED_733 + '</td><td>' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['payback_ticker']['market']) + ':' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['payback_ticker']['instrument']) + ':' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['payback_ticker']['column']) + ' <span class="bitex-model" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['payback_ticker']['currency_pattern']) + '" data-model-formula="' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['payback_ticker']['market']) + '_' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['payback_ticker']['instrument']) + '_' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['payback_ticker']['column']) + ' / 100000000" data-model-key-list="' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['payback_ticker']['market']) + '_' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['payback_ticker']['instrument']) + '_' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['payback_ticker']['column']) + '"></span></td></tr><tr><td>' + MSG_UNNAMED_735 + '</td><td>' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['get_ticker']['min_size_human_format']) + ' / ' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData38]['get_ticker']['max_size_human_format']) + '</td></tr>';
  }
  output += '</table>';
  return output;
};


bitex.view.LineOfCreditView.templates.PayLineOfCredit = function(opt_data) {
  var output = '';
  /** @desc Amount to payback the line of credit withdow */
  var MSG_UNNAMED_739 = goog.getMsg('Amount:');
  /** @desc Fees on get line of credit */
  var MSG_UNNAMED_745 = goog.getMsg('Fees:');
  /** @desc Total after fees on get line of credit */
  var MSG_UNNAMED_747 = goog.getMsg('Net total:');
  output += '<form  id="' + soy.$$escapeHtml(opt_data.id) + '_form" class="pay-line-of-credit-data-entry-form form-horizontal"><input type="hidden" name="ID"  value="' + soy.$$escapeHtml(opt_data.data['ID']) + '"/><fieldset>';
  if (opt_data.data['DeliveryCurrencies'].length > 1) {
    /** @desc method */
    var MSG_UNNAMED_737 = goog.getMsg('Currency');
    output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_737 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.id) + '_form_delivery_currency" name="Currency" class="delivery-method-selector">';
    var cList114 = opt_data.data['DeliveryCurrencies'];
    var cListLen114 = cList114.length;
    for (var cIndex114 = 0; cIndex114 < cListLen114; cIndex114++) {
      var cData114 = cList114[cIndex114];
      output += '<option ' + ((cIndex114 == 0) ? 'selected' : '') + ' value="' + soy.$$escapeHtml(cData114) + '">' + soy.$$escapeHtml(cData114) + '</option>';
    }
    output += '</select></div></div>';
  } else {
    var cList127 = opt_data.data['DeliveryCurrencies'];
    var cListLen127 = cList127.length;
    for (var cIndex127 = 0; cIndex127 < cListLen127; cIndex127++) {
      var cData127 = cList127[cIndex127];
      output += '<input  id="' + soy.$$escapeHtml(opt_data.id) + '_form_delivery_currency" type="hidden" name="Currency"  value="' + soy.$$escapeHtml(cData127) + '"/>';
    }
  }
  var cList134 = opt_data.data['DeliveryCurrencies'];
  var cListLen134 = cList134.length;
  for (var cIndex134 = 0; cIndex134 < cListLen134; cIndex134++) {
    var cData134 = cList134[cIndex134];
    output += '<div class="line-of-credit-delivery-currency" data-delivery-currency="' + soy.$$escapeHtml(cData134) + '" style=""><div class="control-group"><label class="control-label">' + MSG_UNNAMED_739 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData134]['CurrencySign']) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_form_amount_' + soy.$$escapeHtml(cData134) + '_' + soy.$$escapeHtml(opt_data.data['Currency']) + '" data-uniform-validators="required; validateNumber;" data-uniform-type="number" data-uniform-filters="positive_number" value="" type="text" class="input-small label-input-label" size="16" name="Amount" placeholder=""/></div></div></div></div>';
    if (cData134 != opt_data.data['Currency']) {
      /** @desc Exchange rate on get line of credit */
      var MSG_UNNAMED_741 = goog.getMsg('Exchange rate:');
      /** @desc Total on get line of credit */
      var MSG_UNNAMED_743 = goog.getMsg('Total:');
      output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_741 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.id) + '_form_exchange_rate_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData134) + '" style="text-align: left;" class="bitex-model control-label" data-model-formatter="currency" data-blink-class="balance-info-blink" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData134]['payback_ticker']['currency_pattern']) + '" data-model-formula="(' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData134]['payback_ticker']['ticker']) + ' - ( (ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(cData134) + '_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_PREMIUM / 100) * (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData134]['payback_ticker']['ticker']) + ' ) ) ) / 100000000" data-model-key-list="' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData134]['payback_ticker']['ticker']) + ',ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(cData134) + '_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_PREMIUM"></label></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_743 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.id) + '_form_total_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData134) + '" style="text-align: left;" class="bitex-model control-label" data-model-formatter="currency" data-blink-class="balance-info-blink" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData134]['payback_ticker']['currency_pattern']) + '" data-model-formula="ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(cData134) + '_' + soy.$$escapeHtml(opt_data.data['Currency']) + ' / 100000000 * ( (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData134]['payback_ticker']['ticker']) + ' - ( (ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(cData134) + '_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_PREMIUM / 100) * (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData134]['payback_ticker']['ticker']) + ' ) ) ) ) / 100000000 " data-model-key-list="ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(cData134) + '_' + soy.$$escapeHtml(opt_data.data['Currency']) + ',ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(cData134) + '_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_PREMIUM,' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData134]['payback_ticker']['ticker']) + '"></label></div></div>';
    }
    output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_745 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.id) + '_form_fee_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData134) + '" style="text-align: left;" class="bitex-model control-label" data-model-formatter="currency" data-blink-class="balance-info-blink" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData134]['CurrencyPattern']) + '" data-model-formula="(' + soy.$$escapeHtml(opt_data.data['PercentFee']) + '/100 * ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(cData134) + '_' + soy.$$escapeHtml(opt_data.data['Currency']) + ' ) " data-model-key-list="ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(cData134) + '_' + soy.$$escapeHtml(opt_data.data['Currency']) + ',ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(cData134) + '_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_PREMIUM,' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData134]['payback_ticker']['ticker']) + '"></label></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_747 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.id) + '_form_net_total_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData134) + '" style="text-align: left;" class="bitex-model control-label" data-model-formatter="currency" data-blink-class="balance-info-blink" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData134]['payback_ticker']['currency_pattern']) + '" data-model-formula="(ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(cData134) + '_' + soy.$$escapeHtml(opt_data.data['Currency']) + ' - (' + soy.$$escapeHtml(opt_data.data['PercentFee']) + '/100 * ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(cData134) + '_' + soy.$$escapeHtml(opt_data.data['Currency']) + ' ) ) / 100000000 * ( (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData134]['payback_ticker']['ticker']) + ' - ( (ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(cData134) + '_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_PREMIUM / 100) * (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData134]['payback_ticker']['ticker']) + ' ) ) ) ) / 100000000  " data-model-key-list="ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(cData134) + '_' + soy.$$escapeHtml(opt_data.data['Currency']) + ',ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(cData134) + '_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_PREMIUM,' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData134]['payback_ticker']['ticker']) + '"></label></div></div>';
  }
  output += '</fieldset></form>';
  return output;
};


bitex.view.LineOfCreditView.templates.GetLineOfCredit = function(opt_data) {
  var output = '';
  /** @desc Amount on get line of credit withdow */
  var MSG_UNNAMED_751 = goog.getMsg('Amount:');
  /** @desc Fees on get line of credit */
  var MSG_UNNAMED_759 = goog.getMsg('Fees:');
  /** @desc Total after fees on get line of credit */
  var MSG_UNNAMED_761 = goog.getMsg('Net total:');
  /** @desc Interest rate on get line of credit */
  var MSG_UNNAMED_763 = goog.getMsg('Daily interest rate:');
  output += '<form  id="' + soy.$$escapeHtml(opt_data.id) + '_form" class="get-line-of-credit-data-entry-form form-horizontal"><input type="hidden" name="ID"  value="' + soy.$$escapeHtml(opt_data.data['ID']) + '"/><fieldset>';
  if (opt_data.data['DeliveryCurrencies'].length > 1) {
    /** @desc method */
    var MSG_UNNAMED_749 = goog.getMsg('Delivery method');
    output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_749 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.id) + '_form_delivery_currency" name="DeliveryMethod" class="delivery-method-selector">';
    var cList293 = opt_data.data['DeliveryCurrencies'];
    var cListLen293 = cList293.length;
    for (var cIndex293 = 0; cIndex293 < cListLen293; cIndex293++) {
      var cData293 = cList293[cIndex293];
      output += '<option ' + ((cIndex293 == 0) ? 'selected' : '') + ' value="' + soy.$$escapeHtml(cData293) + '">' + soy.$$escapeHtml(cData293) + '</option>';
    }
    output += '</select></div></div>';
  } else {
    var cList306 = opt_data.data['DeliveryCurrencies'];
    var cListLen306 = cList306.length;
    for (var cIndex306 = 0; cIndex306 < cListLen306; cIndex306++) {
      var cData306 = cList306[cIndex306];
      output += '<input  id="' + soy.$$escapeHtml(opt_data.id) + '_form_delivery_currency" type="hidden" name="DeliveryMethod"  value="' + soy.$$escapeHtml(cData306) + '"/>';
    }
  }
  var cList313 = opt_data.data['DeliveryCurrencies'];
  var cListLen313 = cList313.length;
  for (var cIndex313 = 0; cIndex313 < cListLen313; cIndex313++) {
    var cData313 = cList313[cIndex313];
    /** @desc Minimum and Maximum per transaction help block on the get line of credit  */
    var MSG_UNNAMED_753 = goog.getMsg(
        'Minimum of {$xxx_1} and Maximum of {$xxx_2} per transaction.',
        {'xxx_1': soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['min_size_human_format']),
         'xxx_2': soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['max_size_human_format'])});
    output += '<div class="line-of-credit-delivery-currency" data-delivery-currency="' + soy.$$escapeHtml(cData313) + '" style=""><div class="control-group"><label class="control-label">' + MSG_UNNAMED_751 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.data['CurrencySign']) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_form_amount_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '" data-uniform-validators="required; validateNumber; validateMin ' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['min_size_decimal']) + '; validateMax ' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['max_size_decimal']) + '" data-uniform-type="number" data-uniform-filters="positive_number" value="" type="text" class="input-small label-input-label" size="16" name="Amount" placeholder=""/></div><div><em><small> ' + MSG_UNNAMED_753 + '</small></em></div></div></div></div>';
    if (cData313 != opt_data.data['Currency']) {
      /** @desc Exchange rate on get line of credit */
      var MSG_UNNAMED_755 = goog.getMsg('Exchange rate:');
      /** @desc Total on get line of credit */
      var MSG_UNNAMED_757 = goog.getMsg('Total:');
      output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_755 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.id) + '_form_exchange_rate_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '" style="text-align: left;" class="bitex-model control-label" data-model-formatter="currency" data-blink-class="balance-info-blink" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['currency_pattern']) + '" data-model-formula="(' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + ' +  ( (ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '_PREMIUM / 100) * (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + ' ) ) ) / 100000000" data-model-key-list="' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + ',ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '_PREMIUM"></label></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_757 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.id) + '_form_total_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '" style="text-align: left;" class="bitex-model control-label" data-model-formatter="currency" data-blink-class="balance-info-blink" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['CurrencyPattern']) + '" data-model-formula="ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + ' / ( (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + ' +  ( (ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '_PREMIUM / 100) * (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + ' ) ) ) ) " data-model-key-list="ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + ',ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '_PREMIUM,' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + '"></label></div></div>';
    }
    output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_759 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.id) + '_form_fee_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '" style="text-align: left;" class="bitex-model control-label" data-model-formatter="currency" data-blink-class="balance-info-blink" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['CurrencyPattern']) + '" data-model-formula="( ( (ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '_PREMIUM / 100) * (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + ' ) ) ) ) + ( (' + soy.$$escapeHtml(opt_data.data['PercentFee']) + '/100)  * (ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + ' / ( (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + ' +  ( (ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '_PREMIUM / 100) * (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + ' ) ) ) ) - ( ( (ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '_PREMIUM / 100) * (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + ' ) ) ) ) ) )" data-model-key-list="ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + ',ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '_PREMIUM,' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + '"></label></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_761 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.id) + '_form_net_total_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '" style="text-align: left;" class="bitex-model control-label" data-model-formatter="currency" data-blink-class="balance-info-blink" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['CurrencyPattern']) + '" data-model-formula="(ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + ' / ( (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + ' +  ( (ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '_PREMIUM / 100) * (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + ' ) ) ) ) ) - ( ( ( (ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '_PREMIUM / 100) * (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + ' ) ) ) ) + ( (' + soy.$$escapeHtml(opt_data.data['PercentFee']) + '/100)  * (ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + ' / ( (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + ' +  ( (ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '_PREMIUM / 100) * (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + ' ) ) ) ) - ( ( (ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '_PREMIUM / 100) * (' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + ' ) ) ) ) ) ) ) " data-model-key-list="ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + ',ID_LOC_FORM_AMOUNT_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '_PREMIUM,' + soy.$$escapeHtml(opt_data.data['ContractInfo'][cData313]['get_ticker']['ticker']) + '"></label></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_763 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.id) + '_form_interest_rate_' + soy.$$escapeHtml(opt_data.data['Currency']) + '_' + soy.$$escapeHtml(cData313) + '" class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.data['ContractInfo']['interest_rate_human_format']) + '</label></div></div>';
  }
  output += '</fieldset></form>';
  return output;
};
