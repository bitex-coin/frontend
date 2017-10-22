// This file was automatically generated from withdraw_list.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.WithdrawList.templates');

goog.require('soy');


bitex.ui.WithdrawList.templates.labelStatus = function(opt_data) {
  return '<h5><span style="text-transform: uppercase" title="' + soy.$$escapeHtml(opt_data.reason) + '" class="label label-' + soy.$$escapeHtml(opt_data.label) + '">' + soy.$$escapeHtml(opt_data.status) + '</span></h5>';
};


bitex.ui.WithdrawList.templates.btnGroup = function(opt_data) {
  return '<div class="btn-group-vertical">' + ((opt_data.button1 == 'kyc') ? bitex.ui.WithdrawList.templates.btnKYC(opt_data) : '') + ((opt_data.button1 == 'cancel') ? bitex.ui.WithdrawList.templates.btnCancel(opt_data) : '') + ((opt_data.button1 == 'user_cancel') ? bitex.ui.WithdrawList.templates.btnUserCancel(opt_data) : '') + ((opt_data.button1 == 'progress') ? bitex.ui.WithdrawList.templates.btnProgress(opt_data) : '') + ((opt_data.button1 == 'complete') ? bitex.ui.WithdrawList.templates.btnComplete(opt_data) : '') + ((opt_data.button1 == 'redo') ? bitex.ui.WithdrawList.templates.btnRedo(opt_data) : '') + ((opt_data.button1 == 'comment') ? bitex.ui.WithdrawList.templates.btnComment(opt_data) : '') + ((opt_data.button2 == 'kyc') ? bitex.ui.WithdrawList.templates.btnKYC(opt_data) : '') + ((opt_data.button2 == 'cancel') ? bitex.ui.WithdrawList.templates.btnCancel(opt_data) : '') + ((opt_data.button2 == 'user_cancel') ? bitex.ui.WithdrawList.templates.btnUserCancel(opt_data) : '') + ((opt_data.button2 == 'progress') ? bitex.ui.WithdrawList.templates.btnProgress(opt_data) : '') + ((opt_data.button2 == 'complete') ? bitex.ui.WithdrawList.templates.btnComplete(opt_data) : '') + ((opt_data.button2 == 'redo') ? bitex.ui.WithdrawList.templates.btnRedo(opt_data) : '') + ((opt_data.button2 == 'comment') ? bitex.ui.WithdrawList.templates.btnComment(opt_data) : '') + ((opt_data.button3 == 'kyc') ? bitex.ui.WithdrawList.templates.btnKYC(opt_data) : '') + ((opt_data.button3 == 'cancel') ? bitex.ui.WithdrawList.templates.btnCancel(opt_data) : '') + ((opt_data.button3 == 'user_cancel') ? bitex.ui.WithdrawList.templates.btnUserCancel(opt_data) : '') + ((opt_data.button3 == 'progress') ? bitex.ui.WithdrawList.templates.btnProgress(opt_data) : '') + ((opt_data.button3 == 'complete') ? bitex.ui.WithdrawList.templates.btnComplete(opt_data) : '') + ((opt_data.button3 == 'redo') ? bitex.ui.WithdrawList.templates.btnRedo(opt_data) : '') + ((opt_data.button3 == 'comment') ? bitex.ui.WithdrawList.templates.btnComment(opt_data) : '') + ((opt_data.button4 == 'kyc') ? bitex.ui.WithdrawList.templates.btnKYC(opt_data) : '') + ((opt_data.button4 == 'cancel') ? bitex.ui.WithdrawList.templates.btnCancel(opt_data) : '') + ((opt_data.button4 == 'user_cancel') ? bitex.ui.WithdrawList.templates.btnUserCancel(opt_data) : '') + ((opt_data.button4 == 'progress') ? bitex.ui.WithdrawList.templates.btnProgress(opt_data) : '') + ((opt_data.button4 == 'complete') ? bitex.ui.WithdrawList.templates.btnComplete(opt_data) : '') + ((opt_data.button4 == 'redo') ? bitex.ui.WithdrawList.templates.btnRedo(opt_data) : '') + ((opt_data.button4 == 'comment') ? bitex.ui.WithdrawList.templates.btnComment(opt_data) : '') + '</div>';
};


bitex.ui.WithdrawList.templates.btnCancel = function(opt_data) {
  var output = '';
  /** @desc Cancel */
  var MSG_UNNAMED_208 = goog.getMsg('Cancel');
  output += '<button class="btn btn-xs btn-danger btn-withdraw-cancel" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '" >' + MSG_UNNAMED_208 + '<i class="icon-white icon-remove"></i></button>';
  return output;
};


bitex.ui.WithdrawList.templates.btnUserCancel = function(opt_data) {
  var output = '';
  /** @desc Cancel */
  var MSG_UNNAMED_210 = goog.getMsg('Cancel');
  output += '<button class="btn btn-xs btn-danger btn-withdraw-user-cancel" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '" >' + MSG_UNNAMED_210 + '<i class="icon-white icon-remove"></i></button>';
  return output;
};


bitex.ui.WithdrawList.templates.btnProgress = function(opt_data) {
  var output = '';
  /** @desc Withdraw progress button label in the  broker's withdraw list */
  var MSG_UNNAMED_212 = goog.getMsg('Set in progress');
  output += '<button class="btn btn-xs btn-primary btn-withdraw-progress" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '" >' + MSG_UNNAMED_212 + '</button>';
  return output;
};


bitex.ui.WithdrawList.templates.btnComplete = function(opt_data) {
  var output = '';
  /** @desc Withdraw progress button label in the  broker's withdraw list */
  var MSG_UNNAMED_214 = goog.getMsg('Set as complete');
  output += '<button class="btn btn-xs btn-success btn-withdraw-complete" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '" >' + MSG_UNNAMED_214 + '</button>';
  return output;
};


bitex.ui.WithdrawList.templates.btnKYC = function(opt_data) {
  var output = '';
  /** @desc KYC */
  var MSG_UNNAMED_216 = goog.getMsg('KYC');
  output += '<button class="btn btn-xs btn-warning btn-withdraw-kyc" data-row="' + soy.$$escapeHtml(opt_data.userVerification) + '">' + MSG_UNNAMED_216 + '</button>';
  return output;
};


bitex.ui.WithdrawList.templates.btnComment = function(opt_data) {
  var output = '';
  /** @desc Comments */
  var MSG_UNNAMED_218 = goog.getMsg('Comments');
  output += '<button class="btn btn-xs btn-warning btn-withdraw-comment" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '">' + MSG_UNNAMED_218 + '</button>';
  return output;
};


bitex.ui.WithdrawList.templates.btnBlockchain = function(opt_data) {
  var output = '';
  /** @desc blockchain */
  var MSG_UNNAMED_220 = goog.getMsg('blockchain');
  output += '<a class="btn btn-xs btn-info btn-btc-blockchain" href="' + soy.$$escapeHtml(opt_data.link) + '" target="_blank">' + MSG_UNNAMED_220 + '<i class="glyphicon glyphicon-share"></i></a>';
  return output;
};


bitex.ui.WithdrawList.templates.btnQR = function(opt_data) {
  var output = '';
  /** @desc qrcode */
  var MSG_UNNAMED_222 = goog.getMsg('qrcode');
  output += '<button class="btn btn-xs btn-info btn-withdraw-list-qr" data-action="SHOW_QR" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '">' + MSG_UNNAMED_222 + '<i class="glyphicon glyphicon-qrcode"></i></button>';
  return output;
};


bitex.ui.WithdrawList.templates.btnRedo = function(opt_data) {
  var output = '';
  /** @desc Redo */
  var MSG_UNNAMED_224 = goog.getMsg('Redo');
  output += '<button class="btn btn-xs btn-default btn-withdraw-redo" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '">' + MSG_UNNAMED_224 + '<i class="glyphicon glyphicon-refresh"></i></button>';
  return output;
};


bitex.ui.WithdrawList.templates.btnBrokerReceipt = function(opt_data) {
  var output = '';
  /** @desc view */
  var MSG_UNNAMED_226 = goog.getMsg('view');
  output += '<a class="btn btn-xs btn-primary btn-btc-blockchain" href="' + soy.$$escapeHtml(opt_data.link) + '" target="_blank" >' + MSG_UNNAMED_226 + '<i class="glyphicon glyphicon-eye-open"></i></a>';
  return output;
};
