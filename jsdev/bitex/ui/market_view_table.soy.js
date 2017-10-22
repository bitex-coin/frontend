// This file was automatically generated from market_view_table.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.market_view_table.templates');

goog.require('soy');


bitex.ui.market_view_table.templates.MarketViewTable = function(opt_data) {
  var output = '';
  /** @desc Method field header */
  var MSG_UNNAMED_83 = goog.getMsg('Pair');
  /** @desc Method field header */
  var MSG_UNNAMED_85 = goog.getMsg('Last');
  /** @desc Method field header */
  var MSG_UNNAMED_87 = goog.getMsg('Bid');
  /** @desc Method field header */
  var MSG_UNNAMED_89 = goog.getMsg('Ask');
  /** @desc Method field header */
  var MSG_UNNAMED_91 = goog.getMsg('Volume (BTC)');
  /** @desc Method field header */
  var MSG_UNNAMED_93 = goog.getMsg('Volume');
  /** @desc Method field header */
  var MSG_UNNAMED_95 = goog.getMsg('High');
  /** @desc Method field header */
  var MSG_UNNAMED_97 = goog.getMsg('Low');
  output += '<div class="market-table-wrap"><table id="' + soy.$$escapeHtml(opt_data.id) + '_table" class="market-table table"><thead><tr><th> ' + MSG_UNNAMED_83 + '</th><th> ' + MSG_UNNAMED_85 + ' </th><th> ' + MSG_UNNAMED_87 + ' </th><th> ' + MSG_UNNAMED_89 + ' </th><th> ' + MSG_UNNAMED_91 + ' </th><th> ' + MSG_UNNAMED_93 + ' </th><th> ' + MSG_UNNAMED_95 + ' </th><th> ' + MSG_UNNAMED_97 + ' </th></tr></thead><tbody>';
  var instList30 = opt_data.instruments;
  var instListLen30 = instList30.length;
  for (var instIndex30 = 0; instIndex30 < instListLen30; instIndex30++) {
    var instData30 = instList30[instIndex30];
    output += '<tr data-symbol="' + soy.$$escapeHtml(instData30['Symbol']) + '" ><td>' + soy.$$escapeHtml(instData30['Description']) + ' </td><td><span class="bitex-model" data-model-key="formatted_' + soy.$$escapeHtml(instData30['Market']) + '_' + soy.$$escapeHtml(instData30['Symbol']) + '_LAST_PX"></span></td><td><span class="bitex-model" data-model-key="formatted_' + soy.$$escapeHtml(instData30['Market']) + '_' + soy.$$escapeHtml(instData30['Symbol']) + '_BEST_BID"></span></td><td><span class="bitex-model" data-model-key="formatted_' + soy.$$escapeHtml(instData30['Market']) + '_' + soy.$$escapeHtml(instData30['Symbol']) + '_BEST_ASK"></span></td><td><span class="bitex-model" data-model-key="formatted_' + soy.$$escapeHtml(instData30['Market']) + '_' + soy.$$escapeHtml(instData30['Symbol']) + '_SELL_VOLUME"></span></td><td><span class="bitex-model" data-model-key="formatted_' + soy.$$escapeHtml(instData30['Market']) + '_' + soy.$$escapeHtml(instData30['Symbol']) + '_BUY_VOLUME"></span></td><td><span class="bitex-model" data-model-key="formatted_' + soy.$$escapeHtml(instData30['Market']) + '_' + soy.$$escapeHtml(instData30['Symbol']) + '_HIGH_PX"></span></td><td><span class="bitex-model" data-model-key="formatted_' + soy.$$escapeHtml(instData30['Market']) + '_' + soy.$$escapeHtml(instData30['Symbol']) + '_LOW_PX"></span></td></tr>';
  }
  output += '</tbody></table></div>';
  return output;
};
