// This file was automatically generated from side_bar.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.view.SideBarView.templates');

goog.require('soy');


bitex.view.SideBarView.templates.YourAccountPortfolioValue = function(opt_data) {
  var output = '';
  /** @desc Approx. balance help message in the Your Balance widget in the Sidebar */
  var MSG_UNNAMED_200 = goog.getMsg(
      'Your total balance in {$desc} according to the most recent trade. This value varies according to the market. Be advised that this value doesn\'t represent your total balance or any commitment to the exchange rate.',
      {'desc': soy.$$escapeHtml(opt_data.desc)});
  /** @desc Approx. balance title in the Your Balance widget in the Sidebar */
  var MSG_UNNAMED_202 = goog.getMsg('Approx. value');
  output += '<span class="balance-currency__name"><small title="' + MSG_UNNAMED_200 + '">' + MSG_UNNAMED_202 + '</small></span> <span class="balance-currency__amount"><span class="bitex-model" data-model-key-list="' + soy.$$escapeHtml(opt_data.variables) + '" data-model-formula="' + soy.$$escapeHtml(opt_data.formula) + '" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.pattern) + '" data-blink-class="balance-info-blink"></span></span>';
  return output;
};


bitex.view.SideBarView.templates.YourAccountSummary = function(opt_data) {
  var output = '';
  var boxList20 = opt_data.boxes;
  var boxListLen20 = boxList20.length;
  for (var boxIndex20 = 0; boxIndex20 < boxListLen20; boxIndex20++) {
    var boxData20 = boxList20[boxIndex20];
    output += '<ul class="balance__currencies balance__currency__' + soy.$$escapeHtml(boxData20['title']) + '">';
    if (boxData20['title'] == 'fees' || boxData20['title'] == 'bonus') {
      /** @desc Unconfirmed deposits */
      var MSG_UNNAMED_204 = goog.getMsg('Unconfirmed deposits');
      output += '<li class="balance-currency"><a class="dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-expanded="false"><strong style="text-transform:uppercase;">' + soy.$$escapeHtml(boxData20['title']) + '</strong><span class="caret"></span></a><ul class="dropdown-menu">';
      var balance_infoList29 = boxData20['balances'];
      var balance_infoListLen29 = balance_infoList29.length;
      for (var balance_infoIndex29 = 0; balance_infoIndex29 < balance_infoListLen29; balance_infoIndex29++) {
        var balance_infoData29 = balance_infoList29[balance_infoIndex29];
        output += '<li role="presentation" style="padding:6px!important;border-bottom:1px solid #ddd" ><span class="balance-currency__name">' + soy.$$escapeHtml(balance_infoData29['currency']) + '</span> <span class="balance-currency__amount balance-dropdown bitex-model" data-model-key-list="Balance_' + soy.$$escapeHtml(balance_infoData29['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData29['accountID']) + '_' + soy.$$escapeHtml(balance_infoData29['currency']) + '" data-model-formula="Balance_' + soy.$$escapeHtml(balance_infoData29['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData29['accountID']) + '_' + soy.$$escapeHtml(balance_infoData29['currency']) + ' / 100000000" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(balance_infoData29['currencyPattern']) + '" data-blink-class="balance-info-blink"></span></span> <small title="' + MSG_UNNAMED_204 + '" class="bitex-model" data-model-action="show_element" data-model-key-list="Position_' + soy.$$escapeHtml(balance_infoData29['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData29['accountID']) + '_' + soy.$$escapeHtml(balance_infoData29['currency']) + '" data-model-formula="Position_' + soy.$$escapeHtml(balance_infoData29['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData29['accountID']) + '_' + soy.$$escapeHtml(balance_infoData29['currency']) + '"><em><span class="bitex-model" data-model-key-list="Position_' + soy.$$escapeHtml(balance_infoData29['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData29['accountID']) + '_' + soy.$$escapeHtml(balance_infoData29['currency']) + '" data-model-formula="Position_' + soy.$$escapeHtml(balance_infoData29['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData29['accountID']) + '_' + soy.$$escapeHtml(balance_infoData29['currency']) + ' / 100000000" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(balance_infoData29['currencyPattern']) + '" data-blink-class="balance-info-blink"></span></em></small></li>';
      }
      output += '</ul></li>';
    } else {
      /** @desc Unconfirmed deposits */
      var MSG_UNNAMED_206 = goog.getMsg('Unconfirmed deposits');
      var balance_infoList79 = boxData20['balances'];
      var balance_infoListLen79 = balance_infoList79.length;
      for (var balance_infoIndex79 = 0; balance_infoIndex79 < balance_infoListLen79; balance_infoIndex79++) {
        var balance_infoData79 = balance_infoList79[balance_infoIndex79];
        output += '<!-- .balance-currency --><li class="balance-currency"><span class="balance-currency__name">' + soy.$$escapeHtml(balance_infoData79['currency']) + '</span> <span class="balance-currency__amount bitex-model" data-model-key-list="Balance_' + soy.$$escapeHtml(balance_infoData79['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData79['accountID']) + '_' + soy.$$escapeHtml(balance_infoData79['currency']) + '" data-model-formula="Balance_' + soy.$$escapeHtml(balance_infoData79['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData79['accountID']) + '_' + soy.$$escapeHtml(balance_infoData79['currency']) + ' / 100000000" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(balance_infoData79['currencyPattern']) + '" data-blink-class="balance-info-blink"></span></span> <small title="' + MSG_UNNAMED_206 + '" class="bitex-model" data-model-action="show_element" data-model-key-list="Position_' + soy.$$escapeHtml(balance_infoData79['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData79['accountID']) + '_' + soy.$$escapeHtml(balance_infoData79['currency']) + '" data-model-formula="Position_' + soy.$$escapeHtml(balance_infoData79['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData79['accountID']) + '_' + soy.$$escapeHtml(balance_infoData79['currency']) + '"><em><span class="bitex-model" data-model-key-list="Position_' + soy.$$escapeHtml(balance_infoData79['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData79['accountID']) + '_' + soy.$$escapeHtml(balance_infoData79['currency']) + '" data-model-formula="Position_' + soy.$$escapeHtml(balance_infoData79['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData79['accountID']) + '_' + soy.$$escapeHtml(balance_infoData79['currency']) + ' / 100000000" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(balance_infoData79['currencyPattern']) + '" data-blink-class="balance-info-blink"></span></em></small> ' + ((balance_infoData79['showDeposit']) ? '<a href="#" data-action="deposit" data-currency="' + soy.$$escapeHtml(balance_infoData79['currency']) + '" class="btn-balance btn-deposit"><i data-action="deposit" data-currency="' + soy.$$escapeHtml(balance_infoData79['currency']) + '" class="glyphicon glyphicon-save"></i></a>' : '') + ' ' + ((balance_infoData79['showWithdraw']) ? '<a href="#" data-action="withdraw" data-currency="' + soy.$$escapeHtml(balance_infoData79['currency']) + '" class="btn-balance btn-withdraw"><i data-action="withdraw" data-currency="' + soy.$$escapeHtml(balance_infoData79['currency']) + '" class="glyphicon glyphicon-open"></i></a><div class="separator"></div>' : '') + '</li><!-- /.balance-currency -->';
      }
    }
    output += '<li id="' + soy.$$escapeHtml(opt_data.id) + '_portfolio_value" class="balance-currency"></li></ul>';
  }
  return output;
};
