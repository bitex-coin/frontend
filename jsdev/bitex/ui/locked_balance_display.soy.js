// This file was automatically generated from locked_balance_display.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.LockedBalanceDisplay.templates');

goog.require('soy');


bitex.ui.LockedBalanceDisplay.templates.LockedBalanceDisplay = function(opt_data) {
  var output = '';
  /** @desc Shown above the order book bids */
  var MSG_UNNAMED_32 = goog.getMsg('You are buying a total of ');
  /** @desc Shown above the order book asks */
  var MSG_UNNAMED_34 = goog.getMsg('You are selling a total of ');
  output += '<div class="row-fluid locked-balance-display"><div class="span6 text-left locked-balance-display-buying">' + MSG_UNNAMED_32 + '<span id="' + soy.$$escapeHtml(opt_data.id) + '_buy_account" class="bitex-model" data-model-key="formatted_locked_balance_' + soy.$$escapeHtml(opt_data.accountBuy) + '" data-blink-class="balance-info-blink">' + ((opt_data.formattedAmountBuying) ? soy.$$escapeHtml(opt_data.formattedAmountBuying) : '') + '</span></div><div class="span6 text-right locked-balance-display-selling">' + MSG_UNNAMED_34 + '<span id="' + soy.$$escapeHtml(opt_data.id) + '_sell_account"  class="bitex-model" data-model-key="formatted_locked_balance_' + soy.$$escapeHtml(opt_data.accountSell) + '" data-blink-class="balance-info-blink">' + ((opt_data.formattedAmountSelling) ? soy.$$escapeHtml(opt_data.formattedAmountSelling) : '') + '</span></div></div>';
  return output;
};
