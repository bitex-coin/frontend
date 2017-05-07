// This file was automatically generated from api_key_data_entry.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.APIKeyDataEntry.templates');

goog.require('soy');


bitex.ui.APIKeyDataEntry.templates.APIKeyDataEntry = function(opt_data) {
  var output = '';
  /** @desc API Key Data Entry form legend */
  var MSG_UNNAMED_148 = goog.getMsg('Create API Key');
  /** @desc Permissions title on the API Key Data Entry form */
  var MSG_UNNAMED_150 = goog.getMsg('Permissions');
  /** @desc Permissions clear all button on the API Key Data Entry form */
  var MSG_UNNAMED_152 = goog.getMsg('Clear all');
  /** @desc Permissions select all button on the API Key Data Entry form */
  var MSG_UNNAMED_154 = goog.getMsg('Select all');
  /** @desc Your Account on the API Key Data Entry form permissions section */
  var MSG_UNNAMED_156 = goog.getMsg('Your Account');
  /** @desc Account info permission label on API Key data entry */
  var MSG_UNNAMED_158 = goog.getMsg('Account info');
  /** @desc Order history permission label on API Key data entry */
  var MSG_UNNAMED_160 = goog.getMsg('Order history');
  /** @desc Ledger permission label on API Key data entry */
  var MSG_UNNAMED_162 = goog.getMsg('Ledger');
  /** @desc View withdrawals permission label on API Key data entry */
  var MSG_UNNAMED_164 = goog.getMsg('View withdrawals');
  /** @desc Balance permission label on API Key data entry */
  var MSG_UNNAMED_166 = goog.getMsg('Balance info');
  /** @desc View Deposits permission label on API Key data entry */
  var MSG_UNNAMED_168 = goog.getMsg('View deposits');
  /** @desc Buy and Sell orders on the API Key Data Entry form permissions section */
  var MSG_UNNAMED_170 = goog.getMsg('Buy and Sell Orders');
  /** @desc Buy limited orders permission label on API Key data entry */
  var MSG_UNNAMED_172 = goog.getMsg('Create Buy Limited Order');
  /** @desc Sell limited orders permission label on API Key data entry */
  var MSG_UNNAMED_174 = goog.getMsg('Create Sell Limited Order');
  /** @desc Buy market orders permission label on API Key data entry */
  var MSG_UNNAMED_176 = goog.getMsg('Create Buy Market Order');
  /** @desc Sell limited orders permission label on API Key data entry */
  var MSG_UNNAMED_178 = goog.getMsg('Create Sell Market Order');
  /** @desc Cancel orders permission label on API Key data entry */
  var MSG_UNNAMED_180 = goog.getMsg('Cancel Orders');
  /** @desc Notifications on the API Key Data Entry form permissions section */
  var MSG_UNNAMED_182 = goog.getMsg('Notifications');
  /** @desc Receive Deposit refresh notificaiton api permission label on API Key data entry */
  var MSG_UNNAMED_184 = goog.getMsg('Deposits updates');
  /** @desc Receive Witdrawal refresh notificaiton api permission label on API Key data entry */
  var MSG_UNNAMED_186 = goog.getMsg('Withdrawals updates');
  /** @desc Receive Balance notificaiton api permission label on API Key data entry */
  var MSG_UNNAMED_188 = goog.getMsg('Balance updates');
  /** @desc Receive Profile update refresh notificaiton api permission label on API Key data entry */
  var MSG_UNNAMED_190 = goog.getMsg('Profile updates');
  /** @desc Receive execution reports api permission label on API Key data entry */
  var MSG_UNNAMED_192 = goog.getMsg('Order updates / Execution reports');
  /** @desc Deposit methods on the API Key Data Entry form permissions section */
  var MSG_UNNAMED_196 = goog.getMsg('Deposit');
  /** @desc Withdrawals methods on the API Key Data Entry form permissions section */
  var MSG_UNNAMED_198 = goog.getMsg('Withdrawals');
  /** @desc IP Whitelist title on the API Key Data Entry form */
  var MSG_UNNAMED_200 = goog.getMsg('IP Whitelist');
  /** @desc IP Addresses on the API Key Data Entry form IP Whitelist section */
  var MSG_UNNAMED_202 = goog.getMsg('IP Addresses');
  /** @desc IP Whitelist help on the API Key Data Entry form */
  var MSG_UNNAMED_204 = goog.getMsg('Enter a list of IP Address separated by comma (ie. 55.55.55.55,44.44.44.44) that you want to white list. Not specifying an IP Address means that you are allowing this API Key to be used from any IP');
  output += '<form  id="' + soy.$$escapeHtml(opt_data.id) + '_form" class="api-key-data-entry-form"><fieldset><h2 class="h3">' + MSG_UNNAMED_148 + '</h2><div class="api-key-data-entry-form-block page__section_white page__padding"><label>API Key Label:</label><input id="' + soy.$$escapeHtml(opt_data.id) + '_label" type="text" class="form-control"></div><h3>' + MSG_UNNAMED_150 + '</h3><div class="api-key-data-entry-form-block page__section_white page__padding"><div class="pull-right"><a href="#" id="' + soy.$$escapeHtml(opt_data.id) + '_clear_all"><label class="no-selection">' + MSG_UNNAMED_152 + '</label></a></div><div class="pull-right api-key-data-entry-form-pipe">|</div><div class="pull-right"><a href="#" id="' + soy.$$escapeHtml(opt_data.id) + '_select_all"><label class="no-selection">' + MSG_UNNAMED_154 + '</label></a></div><div id="' + soy.$$escapeHtml(opt_data.id) + '_permissions_table"><h4>' + MSG_UNNAMED_156 + '</h4><table class="table api-key-data-entry-form-permissions-table"><tbody><tr><td class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="BF">' + MSG_UNNAMED_158 + '</input></label></div><!-- /.checkbox --></td><td class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U4">' + MSG_UNNAMED_160 + '</input></label></div><!-- /.checkbox --></td></tr><tr><td class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U34">' + MSG_UNNAMED_162 + '</input></label></div><!-- /.checkbox --></td><td class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U26">' + MSG_UNNAMED_164 + '</input></label></div><!-- /.checkbox --></td></tr><tr><td class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U2">' + MSG_UNNAMED_166 + '</input></label></div><!-- /.checkbox --></td><td  class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U30">' + MSG_UNNAMED_168 + '</input></label></div><!-- /.checkbox --></td></tr></tbody></table><h4>' + MSG_UNNAMED_170 + '</h4><table class="table api-key-data-entry-form-permissions-table"><tbody><tr><td class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="D" data-permission-filters=\'[ ["Side","eq", "1", "OrdType","eq","2"]]\'>' + MSG_UNNAMED_172 + '</input></label></div><!-- /.checkbox --></td><td class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="D" data-permission-filters=\'[ ["Side","eq", "2", "OrdType","eq","2"]]\'>' + MSG_UNNAMED_174 + '</input></label></div><!-- /.checkbox --></td></tr><tr><td class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check"  data-permission-msg="D" data-permission-filters=\'[ ["Side","eq", "1", "OrdType","eq","1"]]\'>' + MSG_UNNAMED_176 + '</input></label></div><!-- /.checkbox --></td><td class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check"  data-permission-msg="D" data-permission-filters=\'[ ["Side","eq", "2" , "OrdType","eq","1"]]\'>' + MSG_UNNAMED_178 + '</input></label></div><!-- /.checkbox --></td></tr><tr><td colspan="2" class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="F">' + MSG_UNNAMED_180 + '</input></label></div><!-- /.checkbox --></td></tr></tbody></table><h4>' + MSG_UNNAMED_182 + '</h4><table class="table api-key-data-entry-form-permissions-table"><tbody><tr><td class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U23">' + MSG_UNNAMED_184 + '</input></label></div><!-- /.checkbox --></td><td  class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U9">' + MSG_UNNAMED_186 + '</input></label></div><!-- /.checkbox --></td></tr><tr><td class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U3">' + MSG_UNNAMED_188 + '</input></label></div><!-- /.checkbox --></td><td class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U40">' + MSG_UNNAMED_190 + '</input></label></div><!-- /.checkbox --></td></tr><tr><td class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="8">' + MSG_UNNAMED_192 + '</input></label></div><!-- /.checkbox --></td>';
  if (opt_data.isBroker) {
    /** @desc Receive verify customer update refresh notificaiton api permission label on API Key data entry */
    var MSG_UNNAMED_194 = goog.getMsg('Customer verification updates');
    output += '<td class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B11">' + MSG_UNNAMED_194 + '</input></label></div><!-- /.checkbox --></td>';
  }
  output += '</tr></tbody></table><h4>' + MSG_UNNAMED_196 + '</h4><table class="table api-key-data-entry-form-permissions-table"><tbody><tr><td colspan="2" class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U18" data-permission-filters=\'[ ["Currency","eq", "BTC"]]\'>Bitcoin</input></label></div><!-- /.checkbox --></td></tr>';
  var mList93 = opt_data.depositMethods;
  var mListLen93 = mList93.length;
  for (var mIndex93 = 0; mIndex93 < mListLen93; mIndex93++) {
    var mData93 = mList93[mIndex93];
    output += '<tr><td colspan="2" class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U18" data-permission-filters=\'[ ["DepositMethodID","eq", "' + soy.$$escapeHtml(mData93['id']) + '"]]\' >' + soy.$$escapeHtml(mData93['currency']) + ' - ' + soy.$$escapeHtml(mData93['description']) + '</input></label></div><!-- /.checkbox --></td></tr>';
  }
  output += '</tbody></table><h4>' + MSG_UNNAMED_198 + '</h4><table class="table api-key-data-entry-form-permissions-table"><tbody>';
  var mList106 = opt_data.withdrawalMethods;
  var mListLen106 = mList106.length;
  for (var mIndex106 = 0; mIndex106 < mListLen106; mIndex106++) {
    var mData106 = mList106[mIndex106];
    output += '<tr><td colspan="2" class="no-selection"><!-- .checkbox --><div class="checkbox"><label><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U6" data-permission-filters=\'[ ["Method", "eq", "' + soy.$$escapeHtml(mData106['id']) + '" ] ]\' >' + soy.$$escapeHtml(mData106['currency']) + ' - ' + soy.$$escapeHtml(mData106['description']) + '</input></label></div><!-- /.checkbox --></td></tr>';
  }
  output += '</tbody></table></div></div><h3>' + MSG_UNNAMED_200 + '</h3><div class="api-key-data-entry-form-block page__section_white page__padding"><label for="' + soy.$$escapeHtml(opt_data.id) + '_ip_whitelist">' + MSG_UNNAMED_202 + ':</label><input id="' + soy.$$escapeHtml(opt_data.id) + '_ip_whitelist" type="text" class="form-control" style="margin-bottom: 5px;" /><small>' + MSG_UNNAMED_204 + '</small></div><br><div class="row-fluid"><button id="' + soy.$$escapeHtml(opt_data.id) + '_cancel_btn" class="btn">Cancel</button><button id="' + soy.$$escapeHtml(opt_data.id) + '_create_btn" type="submit" class="btn btn-success" style="margin-left:5px;">Create</button></div></fieldset></form>';
  return output;
};
