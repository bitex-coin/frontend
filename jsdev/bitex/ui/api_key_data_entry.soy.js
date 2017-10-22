// This file was automatically generated from api_key_data_entry.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.APIKeyDataEntry.templates');

goog.require('soy');


bitex.ui.APIKeyDataEntry.templates.APIKeyDataEntry = function(opt_data) {
  var output = '';
  /** @desc API Key Data Entry form legend */
  var MSG_UNNAMED_254 = goog.getMsg('Create API Key');
  /** @desc Permissions clear all button on the API Key Data Entry form */
  var MSG_UNNAMED_256 = goog.getMsg('Clear all');
  /** @desc Permissions select all button on the API Key Data Entry form */
  var MSG_UNNAMED_258 = goog.getMsg('Select all');
  /** @desc Permissions title on the API Key Data Entry form */
  var MSG_UNNAMED_260 = goog.getMsg('Permissions');
  /** @desc Your Account on the API Key Data Entry form permissions section */
  var MSG_UNNAMED_262 = goog.getMsg('Your Account');
  /** @desc Account info permission label on API Key data entry */
  var MSG_UNNAMED_264 = goog.getMsg('Account info');
  /** @desc Order history permission label on API Key data entry */
  var MSG_UNNAMED_266 = goog.getMsg('Order history');
  /** @desc Ledger permission label on API Key data entry */
  var MSG_UNNAMED_268 = goog.getMsg('Ledger');
  /** @desc View withdrawals permission label on API Key data entry */
  var MSG_UNNAMED_270 = goog.getMsg('View withdrawals');
  /** @desc Balance permission label on API Key data entry */
  var MSG_UNNAMED_272 = goog.getMsg('Balance info');
  /** @desc View Deposits permission label on API Key data entry */
  var MSG_UNNAMED_274 = goog.getMsg('View deposits');
  /** @desc Buy and Sell orders on the API Key Data Entry form permissions section */
  var MSG_UNNAMED_276 = goog.getMsg('Buy and Sell Orders');
  /** @desc Buy limited orders permission label on API Key data entry */
  var MSG_UNNAMED_278 = goog.getMsg('Create Buy Limited Order');
  /** @desc Sell limited orders permission label on API Key data entry */
  var MSG_UNNAMED_280 = goog.getMsg('Create Sell Limited Order');
  /** @desc Buy market orders permission label on API Key data entry */
  var MSG_UNNAMED_282 = goog.getMsg('Create Buy Market Order');
  /** @desc Sell limited orders permission label on API Key data entry */
  var MSG_UNNAMED_284 = goog.getMsg('Create Sell Market Order');
  /** @desc Cancel orders permission label on API Key data entry */
  var MSG_UNNAMED_286 = goog.getMsg('Cancel Orders');
  /** @desc Notifications on the API Key Data Entry form permissions section */
  var MSG_UNNAMED_288 = goog.getMsg('Notifications');
  /** @desc Receive Deposit refresh notificaiton api permission label on API Key data entry */
  var MSG_UNNAMED_290 = goog.getMsg('Deposits updates');
  /** @desc Receive Witdrawal refresh notificaiton api permission label on API Key data entry */
  var MSG_UNNAMED_292 = goog.getMsg('Withdrawals updates');
  /** @desc Receive Balance notificaiton api permission label on API Key data entry */
  var MSG_UNNAMED_294 = goog.getMsg('Balance updates');
  /** @desc Receive Profile update refresh notificaiton api permission label on API Key data entry */
  var MSG_UNNAMED_296 = goog.getMsg('Profile updates');
  /** @desc Receive execution reports api permission label on API Key data entry */
  var MSG_UNNAMED_298 = goog.getMsg('Order updates / Execution reports');
  /** @desc IP Whitelist title on the API Key Data Entry form */
  var MSG_UNNAMED_374 = goog.getMsg('IP Whitelist');
  /** @desc IP Addresses on the API Key Data Entry form IP Whitelist section */
  var MSG_UNNAMED_376 = goog.getMsg('IP Addresses');
  /** @desc IP Whitelist help on the API Key Data Entry form */
  var MSG_UNNAMED_378 = goog.getMsg('Enter a list of IP Address separated by comma (ie. 55.55.55.55,44.44.44.44) that you want to white list. Not specifying an IP Address means that you are allowing this API Key to be used from any IP');
  output += '<form  id="' + soy.$$escapeHtml(opt_data.id) + '_form" class="api-key-data-entry-form"><fieldset><h2>' + MSG_UNNAMED_254 + '</h2><div class="api-key-data-entry-form-block control-group"><label>API Key Label<input id="' + soy.$$escapeHtml(opt_data.id) + '_label" type="text" class="input-block-level"></label></div><div class="api-key-data-entry-form-block control-group"><div class="pull-right"><a href="#" id="' + soy.$$escapeHtml(opt_data.id) + '_clear_all"><label class="no-selection">' + MSG_UNNAMED_256 + '</label></a></div><div class="pull-right api-key-data-entry-form-pipe">|</div><div class="pull-right"><a href="#" id="' + soy.$$escapeHtml(opt_data.id) + '_select_all"><label class="no-selection">' + MSG_UNNAMED_258 + '</label></a></div><h3>' + MSG_UNNAMED_260 + '</h3><table id="' + soy.$$escapeHtml(opt_data.id) + '_permissions_table" class="api-key-data-entry-form-permissions-table"><tbody><tr><td colspan="2"><h4>' + MSG_UNNAMED_262 + '</h4></td></tr><tr><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="BF">' + MSG_UNNAMED_264 + '</input></label></td><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U4">' + MSG_UNNAMED_266 + '</input></label></td></tr><tr><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U34">' + MSG_UNNAMED_268 + '</input></label></td><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U26">' + MSG_UNNAMED_270 + '</input></label></td></tr><tr><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U2">' + MSG_UNNAMED_272 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U30">' + MSG_UNNAMED_274 + '</input></label></td></tr><tr><td colspan="2"><h4>' + MSG_UNNAMED_276 + '</h4></td></tr><tr><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="D" data-permission-filters=\'[ ["Side","eq", "1", "OrdType","eq","2"]]\'>' + MSG_UNNAMED_278 + '</input></label></td><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="D" data-permission-filters=\'[ ["Side","eq", "2", "OrdType","eq","2"]]\'>' + MSG_UNNAMED_280 + '</input></label></td></tr><tr><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check"  data-permission-msg="D" data-permission-filters=\'[ ["Side","eq", "1", "OrdType","eq","1"]]\'>' + MSG_UNNAMED_282 + '</input></label></td><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check"  data-permission-msg="D" data-permission-filters=\'[ ["Side","eq", "2" , "OrdType","eq","1"]]\'>' + MSG_UNNAMED_284 + '</input></label></td></tr><tr><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="F">' + MSG_UNNAMED_286 + '</input></label></td></tr><tr><td colspan="2"><h4>' + MSG_UNNAMED_288 + '</h4></td></tr><tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U23">' + MSG_UNNAMED_290 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U9">' + MSG_UNNAMED_292 + '</input></label></td></tr><tr><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U3">' + MSG_UNNAMED_294 + '</input></label></td><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U40">' + MSG_UNNAMED_296 + '</input></label></td></tr><tr><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="8">' + MSG_UNNAMED_298 + '</input></label></td>';
  if (opt_data.isBroker) {
    /** @desc Receive verify customer update refresh notificaiton api permission label on API Key data entry */
    var MSG_UNNAMED_300 = goog.getMsg('Customer verification updates');
    output += '<td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B11">' + MSG_UNNAMED_300 + '</input></label></td>';
  }
  output += '</tr>';
  if (! opt_data.isBroker) {
    /** @desc Deposit methods on the API Key Data Entry form permissions section */
    var MSG_UNNAMED_302 = goog.getMsg('Deposit');
    /** @desc Withdrawals methods on the API Key Data Entry form permissions section */
    var MSG_UNNAMED_304 = goog.getMsg('Withdrawals');
    /** @desc Confirm Withdraw on the API Key Data Entry form permissions section */
    var MSG_UNNAMED_306 = goog.getMsg('Confirm Withdrawal');
    output += '<tr><td colspan="2"><h4>' + MSG_UNNAMED_302 + '</h4></td></tr><tr><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U18" data-permission-filters=\'[ ["Currency","eq", "BTC"]]\'>Bitcoin</input></label></td></tr>';
    var mList96 = opt_data.depositMethods;
    var mListLen96 = mList96.length;
    for (var mIndex96 = 0; mIndex96 < mListLen96; mIndex96++) {
      var mData96 = mList96[mIndex96];
      output += '<tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U18" data-permission-filters=\'[ ["DepositMethodID","eq", "' + soy.$$escapeHtml(mData96['id']) + '"]]\' >' + soy.$$escapeHtml(mData96['currency']) + ' - ' + soy.$$escapeHtml(mData96['description']) + '</input></label></td></tr>';
    }
    output += '<tr><td colspan="2"><h4>' + MSG_UNNAMED_304 + '</h4></td></tr>';
    var mList109 = opt_data.withdrawalMethods;
    var mListLen109 = mList109.length;
    for (var mIndex109 = 0; mIndex109 < mListLen109; mIndex109++) {
      var mData109 = mList109[mIndex109];
      output += '<tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U6" data-permission-filters=\'[ ["Method", "eq", "' + soy.$$escapeHtml(mData109['id']) + '" ] ]\' >' + soy.$$escapeHtml(mData109['currency']) + ' - ' + soy.$$escapeHtml(mData109['description']) + '</input></label></td></tr>';
    }
    output += '<tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U24">' + MSG_UNNAMED_306 + '</input></label></td></tr>';
  }
  if (opt_data.isBroker) {
    /** @desc Deposit withdrawals management on the API Key Data Entry form permissions section */
    var MSG_UNNAMED_308 = goog.getMsg('Deposit / Withdrawals management');
    /** @desc Cancel deposit request api permission label on API Key data entry */
    var MSG_UNNAMED_310 = goog.getMsg('Cancel deposit request');
    /** @desc Cancel withdrawal request api permission label on API Key data entry */
    var MSG_UNNAMED_312 = goog.getMsg('Cancel withdrawal request');
    /** @desc Set in progress deposit request api permission label on API Key data entry */
    var MSG_UNNAMED_314 = goog.getMsg('Set deposit in progress');
    /** @desc Set in progress withdrawal request api permission label on API Key data entry */
    var MSG_UNNAMED_316 = goog.getMsg('Set withdrawal in progress');
    /** @desc Set deposit as complete request api permission label on API Key data entry */
    var MSG_UNNAMED_318 = goog.getMsg('Set deposit as complete');
    /** @desc Set withdrawal as complete request api permission label on API Key data entry */
    var MSG_UNNAMED_320 = goog.getMsg('Set withdrawal as complete');
    /** @desc User verification the API Key Data Entry form permissions section */
    var MSG_UNNAMED_322 = goog.getMsg('User verification');
    /** @desc List users level 0 api permission label on API Key data entry */
    var MSG_UNNAMED_324 = goog.getMsg('List unverified users');
    /** @desc List users level 1 api permission label on API Key data entry */
    var MSG_UNNAMED_326 = goog.getMsg('List users with pending verification');
    /** @desc List users level 2 api permission label on API Key data entry */
    var MSG_UNNAMED_328 = goog.getMsg('List users with in progress verification');
    /** @desc List users level 3 api permission label on API Key data entry */
    var MSG_UNNAMED_330 = goog.getMsg('List users with level 1 verification');
    /** @desc List users level 4 api permission label on API Key data entry */
    var MSG_UNNAMED_332 = goog.getMsg('List users with level II verification');
    /** @desc List users level 5 api permission label on API Key data entry */
    var MSG_UNNAMED_334 = goog.getMsg('List users with level III verification');
    /** @desc List users level 6 api permission label on API Key data entry */
    var MSG_UNNAMED_336 = goog.getMsg('List users with level IV verification');
    /** @desc List users level 7 api permission label on API Key data entry */
    var MSG_UNNAMED_338 = goog.getMsg('List users with level V verification');
    /** @desc Set Verification as level 0 api permission label on API Key data entry */
    var MSG_UNNAMED_340 = goog.getMsg('Set as not verified');
    /** @desc Set Verification as level 1 api permission label on API Key data entry */
    var MSG_UNNAMED_342 = goog.getMsg('Set as pending verification');
    /** @desc Set Verification as level 2 api permission label on API Key data entry */
    var MSG_UNNAMED_344 = goog.getMsg('Set as in progress verification');
    /** @desc Set Verification as level 3 api permission label on API Key data entry */
    var MSG_UNNAMED_346 = goog.getMsg('Set verification level I');
    /** @desc Set Verification as level 4 api permission label on API Key data entry */
    var MSG_UNNAMED_348 = goog.getMsg('Set verification level II');
    /** @desc Set Verification as level 5 api permission label on API Key data entry */
    var MSG_UNNAMED_350 = goog.getMsg('Set verification level III');
    /** @desc Set Verification as level 6 api permission label on API Key data entry */
    var MSG_UNNAMED_352 = goog.getMsg('Set verification level IV');
    /** @desc Set Verification as level 7 api permission label on API Key data entry */
    var MSG_UNNAMED_354 = goog.getMsg('Set verification level V');
    /** @desc User administration the API Key Data Entry form permissions section */
    var MSG_UNNAMED_356 = goog.getMsg('Users management');
    /** @desc Request customer details api permission label on API Key data entry */
    var MSG_UNNAMED_358 = goog.getMsg('Get customer details');
    /** @desc Update user email api permission label on API Key data entry */
    var MSG_UNNAMED_360 = goog.getMsg('Update user email');
    /** @desc Update user trading fees api permission label on API Key data entry */
    var MSG_UNNAMED_362 = goog.getMsg('Update user fees');
    /** @desc Disable 2FA api permission label on API Key data entry */
    var MSG_UNNAMED_364 = goog.getMsg('Disable Google Authenticator/Authy');
    /** @desc Enable Email login confirmation api permission label on API Key data entry */
    var MSG_UNNAMED_366 = goog.getMsg('Enable user email login confirmation');
    /** @desc Disable Email login confirmation permission label on API Key data entry */
    var MSG_UNNAMED_368 = goog.getMsg('Disable user email login confirmation');
    /** @desc Enable  Withdrawal confirmation api permission label on API Key data entry */
    var MSG_UNNAMED_370 = goog.getMsg('Enable user  withdrawal confirmation');
    /** @desc Disable  Withdrawal confirmation permission label on API Key data entry */
    var MSG_UNNAMED_372 = goog.getMsg('Disable user  withdrawal confirmation');
    output += '<tr><td colspan="2"><h4>' + MSG_UNNAMED_308 + '</h4></td></tr><tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U18" data-permission-filters=\'[ ["Action","eq", "CANCEL"] ]\'>' + MSG_UNNAMED_310 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B6" data-permission-filters=\'[ ["Action","eq", "CANCEL"] ]\'>' + MSG_UNNAMED_312 + '</input></label></td></tr><tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U18" data-permission-filters=\'[ ["Action","eq", "PROGRESS"] ]\'>' + MSG_UNNAMED_314 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B6" data-permission-filters=\'[ ["Action","eq", "PROGRESS"] ]\'>' + MSG_UNNAMED_316 + '</input></label></td></tr><tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U18" data-permission-filters=\'[ ["Action","eq", "COMPLETE"] ]\'>' + MSG_UNNAMED_318 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B6" data-permission-filters=\'[ ["Action","eq", "COMPLETE"] ]\'>' + MSG_UNNAMED_320 + '</input></label></td></tr><tr><td colspan="2"><h4>' + MSG_UNNAMED_322 + '</h4></td></tr><tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B2" data-permission-filters=\'[ ["Status","eq", 0] ]\'>' + MSG_UNNAMED_324 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B2" data-permission-filters=\'[ ["Status","eq", 1] ]\'>' + MSG_UNNAMED_326 + '</input></label></td></tr><tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B2" data-permission-filters=\'[ ["Status","eq", 2] ]\'>' + MSG_UNNAMED_328 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B2" data-permission-filters=\'[ ["Status","eq", 3] ]\'>' + MSG_UNNAMED_330 + '</input></label></td></tr><tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B2" data-permission-filters=\'[ ["Status","eq", 4] ]\'>' + MSG_UNNAMED_332 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B2" data-permission-filters=\'[ ["Status","eq", 5] ]\'>' + MSG_UNNAMED_334 + '</input></label></td></tr><tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B2" data-permission-filters=\'[ ["Status","eq", 6] ]\'>' + MSG_UNNAMED_336 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B2" data-permission-filters=\'[ ["Status","eq", 7] ]\'>' + MSG_UNNAMED_338 + '</input></label></td></tr><tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B8" data-permission-filters=\'[ ["Verify","eq", 0] ]\'>' + MSG_UNNAMED_340 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B8" data-permission-filters=\'[ ["Verify","eq", 1] ]\'>' + MSG_UNNAMED_342 + '</input></label></td></tr><tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B8" data-permission-filters=\'[ ["Verify","eq", 2] ]\'>' + MSG_UNNAMED_344 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B8" data-permission-filters=\'[ ["Verify","eq", 3] ]\'>' + MSG_UNNAMED_346 + '</input></label></td></tr><tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B8" data-permission-filters=\'[ ["Verify","eq", 4] ]\'>' + MSG_UNNAMED_348 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B8" data-permission-filters=\'[ ["Verify","eq", 5] ]\'>' + MSG_UNNAMED_350 + '</input></label></td></tr><tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B8" data-permission-filters=\'[ ["Verify","eq", 6] ]\'>' + MSG_UNNAMED_352 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B8" data-permission-filters=\'[ ["Verify","eq", 7] ]\'>' + MSG_UNNAMED_354 + '</input></label></td></tr><tr><td colspan="2"><h4>' + MSG_UNNAMED_356 + '</h4></td></tr><tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="B4">' + MSG_UNNAMED_358 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U38" data-permission-filters=\'[ ["Fields","has", "Email"] ]\'>' + MSG_UNNAMED_360 + '</input></label></td></tr><tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U38" data-permission-filters=\'[ ["Fields","has", ["TakerTransactionFeeBuy", "TakerTransactionFeeSell", "TransactionFeeBuy", "TransactionFeeSell" ] ] ]\'>' + MSG_UNNAMED_362 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U38" data-permission-filters=\'[ ["Fields","has", "TwoFactorEnabled", "Fields.TwoFactorEnabled", "eq", false] ]\'>' + MSG_UNNAMED_364 + '</input></label></td></tr><tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U38" data-permission-filters=\'[ ["Fields","has", "EmailTwoFactorEnabled", "Fields.EmailTwoFactorEnabled", "eq", true] ]\'>' + MSG_UNNAMED_366 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U38" data-permission-filters=\'[ ["Fields","has", "EmailTwoFactorEnabled", "Fields.EmailTwoFactorEnabled", "eq", false] ]\'>' + MSG_UNNAMED_368 + '</input></label></td></tr><tr><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U38" data-permission-filters=\'[ ["Fields","has", "WithdrawEmailValidation" , "Fields.WithdrawEmailValidation", "eq", true] ]\'>' + MSG_UNNAMED_370 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U38" data-permission-filters=\'[ ["Fields","has", "WithdrawEmailValidation" , "Fields.WithdrawEmailValidation", "eq", false] ]\'>' + MSG_UNNAMED_372 + '</input></label></td></tr>';
  }
  output += '</tbody></table></div><div class="api-key-data-entry-form-block control-group"><h3>' + MSG_UNNAMED_374 + '</h3><label>' + MSG_UNNAMED_376 + '<input id="' + soy.$$escapeHtml(opt_data.id) + '_ip_whitelist" type="text" class="input-block-level"><span class="helpblock">' + MSG_UNNAMED_378 + '</span></label></div><div class="text-center"><button id="' + soy.$$escapeHtml(opt_data.id) + '_cancel_btn" class="btn">Cancel</button><button id="' + soy.$$escapeHtml(opt_data.id) + '_create_btn" type="submit" class="btn btn-primary">Create</button></div></fieldset></form>';
  return output;
};
