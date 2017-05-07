// This file was automatically generated from algorithm_runner.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.AlgorithmRunner.templates');

goog.require('soy');


bitex.ui.AlgorithmRunner.templates.AlgorithmRunner = function(opt_data) {
  var output = '';
  /** @desc Market */
  var MSG_UNNAMED_79 = goog.getMsg('Market');
  output += '<form id="' + soy.$$escapeHtml(opt_data.id) + '_form" class="algo-runner form-horizontal page__padding page__section_white" data-uniform-control-holder-class="control-group" ><legend>' + soy.$$escapeHtml(opt_data.algorithmDefinition['description']) + '</legend><div class="control-group" style=""><label class="control-label">' + MSG_UNNAMED_79 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.id) + '" class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.symbol.symbol) + '</label></div></div>';
  var fieldList15 = opt_data.algorithmDefinition['params'];
  var fieldListLen15 = fieldList15.length;
  for (var fieldIndex15 = 0; fieldIndex15 < fieldListLen15; fieldIndex15++) {
    var fieldData15 = fieldList15[fieldIndex15];
    output += '<div class="control-group"><label class="control-label">' + soy.$$escapeHtml(fieldData15['label']) + '</label><div class="controls"><input class="algo-runner-field form-control"' + ((fieldData15['validator']) ? ' data-uniform-validators="' + soy.$$escapeHtml(fieldData15['validator']) + '" ' : '') + ((fieldData15['filter']) ? ' data-uniform-filters="' + soy.$$escapeHtml(fieldData15['filter']) + '" ' : '') + 'type="' + soy.$$escapeHtml(fieldData15['type']) + '" name="' + soy.$$escapeHtml(fieldData15['name']) + '" label="' + ((fieldData15['placeholder']) ? soy.$$escapeHtml(fieldData15['placeholder']) : '') + '" value="' + ((fieldData15['value']) ? soy.$$escapeHtml(fieldData15['value']) : '') + '" /></div></div>';
  }
  output += '<br><div class="control-group" style=""><div class="controls"><button id="' + soy.$$escapeHtml(opt_data.id) + '_btn_update_params" class="btn btn-success" ' + ((opt_data.status == '1' || opt_data.status == '3') ? 'disabled' : '') + '></button><button id="' + soy.$$escapeHtml(opt_data.id) + '_btn_stop" class="btn btn-danger" style="' + ((opt_data.status == '0' || opt_data.status == '1') ? 'display:none;' : '') + '"  ' + ((opt_data.status == '3') ? 'disabled' : '') + '></button></div></div><small><i id="' + soy.$$escapeHtml(opt_data.id) + '_instance_id">' + soy.$$escapeHtml(opt_data.instanceID) + '</i></small></form>';
  return output;
};
