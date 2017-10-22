// This file was automatically generated from deposit_list.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.DepositList.templates');

goog.require('soy');


bitex.ui.DepositList.templates.NodesProgressBar = function(opt_data) {
  var output = '';
  /** @desc Number of nodes inside the progress bar in the deposit list grid */
  var MSG_UNNAMED_155 = goog.getMsg(
      '{$count} nodes',
      {'count': soy.$$escapeHtml(opt_data.count)});
  output += '<div class="progress progress-success progress-striped active" style="margin: 0px;position: relative;"><div class="bar" role="progressbar" aria-valuenow="' + soy.$$escapeHtml(opt_data.confidence) + '" aria-valuemin="0" aria-valuemax="100" style="width:' + soy.$$escapeHtml(opt_data.confidence) + '%"></div><div style="position:absolute;width:100%;font-size:13px;color:black;height:100%;text-align:center;font-weight:300;">' + MSG_UNNAMED_155 + '</div></div>';
  return output;
};


bitex.ui.DepositList.templates.LabelStatus = function(opt_data) {
  return '<span class="label label-' + soy.$$escapeHtml(opt_data.label) + '">' + soy.$$escapeHtml(opt_data.status) + '</span>';
};


bitex.ui.DepositList.templates.InputAddress = function(opt_data) {
  return '<div style="max-width: 120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"><a href="' + soy.$$escapeHtml(opt_data.blockchainAddress) + '" target="_blank">' + soy.$$escapeHtml(opt_data.address) + '</a></div>';
};


bitex.ui.DepositList.templates.btnShowReceipt = function(opt_data) {
  var output = '';
  /** @desc view */
  var MSG_UNNAMED_157 = goog.getMsg('view');
  output += '<button class="btn btn-mini btn-success btn-deposit-show-receipt" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '" data-action="SHOW_RECEIPT">' + MSG_UNNAMED_157 + '<i class="icon-white icon-file"></i></button>';
  return output;
};


bitex.ui.DepositList.templates.btnDepositDetails = function(opt_data) {
  var output = '';
  /** @desc view */
  var MSG_UNNAMED_159 = goog.getMsg('view');
  output += '<a class="btn btn-mini btn-info btn-deposit-view" target="_blank" href="' + soy.$$escapeHtml(opt_data.url) + '">' + MSG_UNNAMED_159 + '<i class="icon-white icon-eye-open"></i></a>';
  return output;
};


bitex.ui.DepositList.templates.btnShowQRCode = function(opt_data) {
  var output = '';
  /** @desc qr */
  var MSG_UNNAMED_161 = goog.getMsg('qr');
  output += '<button class="btn btn-mini btn-info btn-deposit-view-qr" data-action="SHOW_QR" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '">' + MSG_UNNAMED_161 + '<i class="icon-white icon-qrcode"></i></button>';
  return output;
};


bitex.ui.DepositList.templates.btnInstantFiatDeposit = function(opt_data) {
  var output = '';
  /** @desc Pre Approve */
  var MSG_UNNAMED_163 = goog.getMsg('pre-approve');
  output += '<button class="btn btn-mini btn-success btn-deposit-instantaneus" data-action="INSTANTANEOUS" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '">' + MSG_UNNAMED_163 + '<i class="icon-white icon-fire"></i></button>';
  return output;
};


bitex.ui.DepositList.templates.btnUpload = function(opt_data) {
  var output = '';
  /** @desc send receipt */
  var MSG_UNNAMED_165 = goog.getMsg('send receipt');
  output += '<button class="btn btn-mini btn-success btn-deposit-upload" data-action="UPLOAD" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '">' + MSG_UNNAMED_165 + '<i class="icon-white icon-file"></i></button>';
  return output;
};


bitex.ui.DepositList.templates.btnGroup = function(opt_data) {
  return '<div class="btn-group">' + ((opt_data.button1 == 'kyc') ? bitex.ui.DepositList.templates.btnBrokerKYC(opt_data) : '') + ((opt_data.button1 == 'cancel') ? bitex.ui.DepositList.templates.btnBrokerDespositCancel(opt_data) : '') + ((opt_data.button1 == 'progress') ? bitex.ui.DepositList.templates.btnBrokerDespositProgress(opt_data) : '') + ((opt_data.button1 == 'complete') ? bitex.ui.DepositList.templates.btnBrokerDespositComplete(opt_data) : '') + ((opt_data.button2 == 'kyc') ? bitex.ui.DepositList.templates.btnBrokerKYC(opt_data) : '') + ((opt_data.button2 == 'cancel') ? bitex.ui.DepositList.templates.btnBrokerDespositCancel(opt_data) : '') + ((opt_data.button2 == 'progress') ? bitex.ui.DepositList.templates.btnBrokerDespositProgress(opt_data) : '') + ((opt_data.button2 == 'complete') ? bitex.ui.DepositList.templates.btnBrokerDespositComplete(opt_data) : '') + ((opt_data.button3 == 'kyc') ? bitex.ui.DepositList.templates.btnBrokerKYC(opt_data) : '') + ((opt_data.button3 == 'cancel') ? bitex.ui.DepositList.templates.btnBrokerDespositCancel(opt_data) : '') + ((opt_data.button3 == 'progress') ? bitex.ui.DepositList.templates.btnBrokerDespositProgress(opt_data) : '') + ((opt_data.button3 == 'complete') ? bitex.ui.DepositList.templates.btnBrokerDespositComplete(opt_data) : '') + '</div>';
};


bitex.ui.DepositList.templates.btnBrokerDespositCancel = function(opt_data) {
  var output = '';
  /** @desc cancel */
  var MSG_UNNAMED_167 = goog.getMsg('cancel');
  output += '<button class="btn btn-mini btn-danger btn-deposit-cancel" data-action="CANCEL" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '">' + MSG_UNNAMED_167 + '<i class="icon-white icon-remove"></i></button>';
  return output;
};


bitex.ui.DepositList.templates.btnBrokerKYC = function(opt_data) {
  var output = '';
  /** @desc KYC */
  var MSG_UNNAMED_169 = goog.getMsg('KYC');
  output += '<button class="btn btn-mini btn-warning btn-deposit-kyc" data-action="KYC" data-row="' + soy.$$escapeHtml(opt_data.userVerification) + '">' + MSG_UNNAMED_169 + '</button>';
  return output;
};


bitex.ui.DepositList.templates.btnBrokerDespositProgress = function(opt_data) {
  var output = '';
  /** @desc Set in progress */
  var MSG_UNNAMED_171 = goog.getMsg('Set in progress');
  output += '<button class="btn btn-mini btn-deposit-progress" data-action="PROGRESS" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '">' + MSG_UNNAMED_171 + '<i class="icon-white icon-refresh"></i></button>';
  return output;
};


bitex.ui.DepositList.templates.btnBrokerDespositComplete = function(opt_data) {
  var output = '';
  /** @desc Set as complete */
  var MSG_UNNAMED_173 = goog.getMsg('Set as complete');
  output += '<button class="btn btn-mini btn-success btn-deposit-complete" data-action="COMPLETE" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '">' + MSG_UNNAMED_173 + '<i class="icon-white icon-ok"></i></button>';
  return output;
};
