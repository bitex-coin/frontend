// This file was automatically generated from line_of_credit_table.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.LineOfCreditTable.templates');

goog.require('soy');


bitex.ui.LineOfCreditTable.templates.btnGroup = function(opt_data) {
  return '<div class="btn-group">' + ((opt_data.button1 == 'info') ? bitex.ui.LineOfCreditTable.templates.btnInfo(opt_data) : '') + ((opt_data.button1 == 'enable') ? bitex.ui.LineOfCreditTable.templates.btnEnable(opt_data) : '') + ((opt_data.button1 == 'disable') ? bitex.ui.LineOfCreditTable.templates.btnDisable(opt_data) : '') + ((opt_data.button1 == 'get') ? bitex.ui.LineOfCreditTable.templates.btnGet(opt_data) : '') + ((opt_data.button1 == 'payback') ? bitex.ui.LineOfCreditTable.templates.btnPayback(opt_data) : '') + ((opt_data.button2 == 'info') ? bitex.ui.LineOfCreditTable.templates.btnInfo(opt_data) : '') + ((opt_data.button2 == 'enable') ? bitex.ui.LineOfCreditTable.templates.btnEnable(opt_data) : '') + ((opt_data.button2 == 'disable') ? bitex.ui.LineOfCreditTable.templates.btnDisable(opt_data) : '') + ((opt_data.button2 == 'get') ? bitex.ui.LineOfCreditTable.templates.btnGet(opt_data) : '') + ((opt_data.button2 == 'payback') ? bitex.ui.LineOfCreditTable.templates.btnPayback(opt_data) : '') + ((opt_data.button3 == 'info') ? bitex.ui.LineOfCreditTable.templates.btnInfo(opt_data) : '') + ((opt_data.button3 == 'enable') ? bitex.ui.LineOfCreditTable.templates.btnEnable(opt_data) : '') + ((opt_data.button3 == 'disable') ? bitex.ui.LineOfCreditTable.templates.btnDisable(opt_data) : '') + ((opt_data.button3 == 'get') ? bitex.ui.LineOfCreditTable.templates.btnGet(opt_data) : '') + ((opt_data.button3 == 'payback') ? bitex.ui.LineOfCreditTable.templates.btnPayback(opt_data) : '') + '</div>';
};


bitex.ui.LineOfCreditTable.templates.btnInfo = function(opt_data) {
  var output = '';
  /** @desc info button on line of credit table */
  var MSG_UNNAMED_105 = goog.getMsg('info');
  output += '<a class="btn btn-mini btn-info btn-line-of-credit-action btn-line-of-credit-info" href="#" data-action="INFO" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '">' + MSG_UNNAMED_105 + '<i class="icon-white icon-search"></i></a>';
  return output;
};


bitex.ui.LineOfCreditTable.templates.btnEnable = function(opt_data) {
  var output = '';
  /** @desc Enable button on line of credit table */
  var MSG_UNNAMED_107 = goog.getMsg('Enable');
  output += '<a class="btn btn-mini btn-success btn-line-of-credit-action btn-line-of-credit-enable" href="#" data-action="ENABLE" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '">' + MSG_UNNAMED_107 + '<i class="icon-white icon-check"></i></a>';
  return output;
};


bitex.ui.LineOfCreditTable.templates.btnDisable = function(opt_data) {
  var output = '';
  /** @desc Disable button on line of credit table */
  var MSG_UNNAMED_109 = goog.getMsg('Disable');
  output += '<a class="btn btn-mini btn-info btn-line-of-credit-action btn-line-of-credit-disable" href="#" data-action="DISABLE" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '">' + MSG_UNNAMED_109 + '<i class="icon-white icon-remove"></i></a>';
  return output;
};


bitex.ui.LineOfCreditTable.templates.btnGet = function(opt_data) {
  var output = '';
  /** @desc Get */
  var MSG_UNNAMED_111 = goog.getMsg('Get');
  output += '<a class="btn btn-mini btn-success btn-line-of-credit-action btn-line-of-credit-get" href="#" data-action="GET" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '">' + MSG_UNNAMED_111 + '<i class="icon-white icon-upload-alt"></i></a>';
  return output;
};


bitex.ui.LineOfCreditTable.templates.btnPayback = function(opt_data) {
  var output = '';
  /** @desc Pay back */
  var MSG_UNNAMED_113 = goog.getMsg('Pay back');
  output += '<a class="btn btn-mini btn-primary btn-line-of-credit-action btn-line-of-credit-payback" href="#" data-action="PAYBACK" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '">' + MSG_UNNAMED_113 + '<i class="icon-white icon-download-alt"></i></a>';
  return output;
};
