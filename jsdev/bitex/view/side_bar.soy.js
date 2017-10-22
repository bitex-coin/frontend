// This file was automatically generated from side_bar.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.view.SideBarView.templates');

goog.require('soy');


bitex.view.SideBarView.templates.YourAccountPortfolioValue = function(opt_data) {
  var output = '';
  /** @desc Approx. balance help message in the Your Balance widget in the Sidebar */
  var MSG_UNNAMED_130 = goog.getMsg(
      'Your total balance in {$desc} according to the most recent trade. This value varies according to the market. Be advised that this value doesn\'t represent your total balance or any commitment to the exchange rate.',
      {'desc': soy.$$escapeHtml(opt_data.desc)});
  /** @desc Approx. balance title in the Your Balance widget in the Sidebar */
  var MSG_UNNAMED_132 = goog.getMsg('Approx. value');
  output += '<td style="padding: 4px;"><span><i><abbr title="' + MSG_UNNAMED_130 + '">' + MSG_UNNAMED_132 + '</abbr></i></span></td><td style="padding: 4px;" colspan="2"><i><span class="bitex-model" data-model-key-list="' + soy.$$escapeHtml(opt_data.variables) + '" data-model-formula="' + soy.$$escapeHtml(opt_data.formula) + '" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.pattern) + '" data-blink-class="balance-info-blink"></span></i></td>';
  return output;
};


bitex.view.SideBarView.templates.YourAccountSummary = function(opt_data) {
  var output = '';
  /** @desc Unconfirmed deposits */
  var MSG_UNNAMED_134 = goog.getMsg('Unconfirmed deposits');
  var boxList20 = opt_data.boxes;
  var boxListLen20 = boxList20.length;
  for (var boxIndex20 = 0; boxIndex20 < boxListLen20; boxIndex20++) {
    var boxData20 = boxList20[boxIndex20];
    output += '<table class="table table-bordered account-summary-table" ><tbody><tr class=\'account-summary-broker\'><td colspan="3"><strong>' + soy.$$escapeHtml(boxData20['title']) + '</strong></td></tr>';
    var balance_infoList24 = boxData20['balances'];
    var balance_infoListLen24 = balance_infoList24.length;
    for (var balance_infoIndex24 = 0; balance_infoIndex24 < balance_infoListLen24; balance_infoIndex24++) {
      var balance_infoData24 = balance_infoList24[balance_infoIndex24];
      output += '<tr><td style="padding: 4px;"><strong>' + soy.$$escapeHtml(balance_infoData24['currency']) + '</strong></td><td style="padding: 4px;"' + ((! balance_infoData24['showDeposit'] && ! balance_infoData24['showWithdraw']) ? 'colspan="2"' : '') + '><span class="bitex-model" data-model-key-list="Balance_' + soy.$$escapeHtml(balance_infoData24['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData24['accountID']) + '_' + soy.$$escapeHtml(balance_infoData24['currency']) + '" data-model-formula="Balance_' + soy.$$escapeHtml(balance_infoData24['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData24['accountID']) + '_' + soy.$$escapeHtml(balance_infoData24['currency']) + ' / 100000000" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(balance_infoData24['currencyPattern']) + '" data-blink-class="balance-info-blink"></span> <abbr title="' + MSG_UNNAMED_134 + '" class="bitex-model" data-model-action="show_element" data-model-key-list="Position_' + soy.$$escapeHtml(balance_infoData24['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData24['accountID']) + '_' + soy.$$escapeHtml(balance_infoData24['currency']) + '" data-model-formula="Position_' + soy.$$escapeHtml(balance_infoData24['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData24['accountID']) + '_' + soy.$$escapeHtml(balance_infoData24['currency']) + '"><em><span class="bitex-model" data-model-key-list="Position_' + soy.$$escapeHtml(balance_infoData24['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData24['accountID']) + '_' + soy.$$escapeHtml(balance_infoData24['currency']) + '" data-model-formula="Position_' + soy.$$escapeHtml(balance_infoData24['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData24['accountID']) + '_' + soy.$$escapeHtml(balance_infoData24['currency']) + ' / 100000000" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(balance_infoData24['currencyPattern']) + '" data-blink-class="balance-info-blink"></span></em></abbr></td>' + ((balance_infoData24['showDeposit'] && balance_infoData24['showWithdraw']) ? '<td style="padding: 4px;border-left:0;"><div class="btn-group">' + ((balance_infoData24['showDeposit']) ? '<button class="btn btn-mini" data-action="deposit" data-currency="' + soy.$$escapeHtml(balance_infoData24['currency']) + '"><i data-action="deposit" data-currency="' + soy.$$escapeHtml(balance_infoData24['currency']) + '" class="icon-download-alt"></i></button>' : '') + ((balance_infoData24['showWithdraw']) ? '<button class="btn btn-mini" data-action="withdraw" data-currency="' + soy.$$escapeHtml(balance_infoData24['currency']) + '"><i data-action="withdraw" data-currency="' + soy.$$escapeHtml(balance_infoData24['currency']) + '" class="icon-upload-alt"></i></button>' : '') + '</div></td>' : '') + '</tr>';
    }
    output += '<tr id="' + soy.$$escapeHtml(opt_data.id) + '_portfolio_value"></tr></tbody></table>';
  }
  return output;
};
