// This file was automatically generated from withdraw_method_editor.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.withdraw_method_editor.templates');

goog.require('soy');


bitex.ui.withdraw_method_editor.templates.WithdrawMethodFieldLineEditor = function(opt_data) {
  var output = '';
  /** @desc Client option on side select */
  var MSG_UNNAMED_421 = goog.getMsg('Client');
  /** @desc Broker option on side select */
  var MSG_UNNAMED_423 = goog.getMsg('Broker');
  /** @desc Field name */
  var MSG_UNNAMED_425 = goog.getMsg('Name');
  /** @desc Field name */
  var MSG_UNNAMED_427 = goog.getMsg('Label');
  /** @desc Text option on type select */
  var MSG_UNNAMED_429 = goog.getMsg('Text');
  /** @desc Yes option on required select */
  var MSG_UNNAMED_431 = goog.getMsg('Yes');
  /** @desc No option on required select */
  var MSG_UNNAMED_433 = goog.getMsg('No');
  /** @desc Field delete action */
  var MSG_UNNAMED_435 = goog.getMsg('delete');
  output += '<tr id="' + soy.$$escapeHtml(opt_data.id) + '_field_' + soy.$$escapeHtml(opt_data.idx) + '"><td><select id="' + soy.$$escapeHtml(opt_data.id) + '_field_side_' + soy.$$escapeHtml(opt_data.idx) + '" class="withdraw-method-editor-field-side"><option value="client" ' + ((opt_data.data['side'] == 'client') ? 'selected' : '') + '>' + MSG_UNNAMED_421 + '</option><option value="broker" ' + ((opt_data.data['side'] == 'broker') ? 'selected' : '') + '>' + MSG_UNNAMED_423 + '</option></select></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_field_name_' + soy.$$escapeHtml(opt_data.idx) + '" type="text" class="form-control input-block-level withdraw-method-editor-field-name"  data-uniform-label="' + MSG_UNNAMED_425 + '" data-uniform-filters="non_space"  data-uniform-validators="required ; validatePhrase"  placeholder="" required value="' + soy.$$escapeHtml(opt_data.data['name']) + '"></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_field_label_' + soy.$$escapeHtml(opt_data.idx) + '" type="text" class="form-control input-block-level withdraw-method-editor-field-label"  data-uniform-label="' + MSG_UNNAMED_427 + '"  data-uniform-validators="required" placeholder="" required value="' + soy.$$escapeHtml(opt_data.data['label']) + '"></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_field_placeholder_' + soy.$$escapeHtml(opt_data.idx) + '" type="text" class="form-control input-block-level withdraw-method-editor-field-placeholder" placeholder="" value="' + soy.$$escapeHtml(opt_data.data['placeholder']) + '"></td><td><select id="' + soy.$$escapeHtml(opt_data.id) + '_field_type_' + soy.$$escapeHtml(opt_data.idx) + '" class="withdraw-method-editor-field-type"><option value="text" ' + ((opt_data.data['type'] == 'text') ? 'selected' : '') + '>' + MSG_UNNAMED_429 + '</option></select></td><td><select id="' + soy.$$escapeHtml(opt_data.id) + '_field_validator_' + soy.$$escapeHtml(opt_data.idx) + '" class="withdraw-method-editor-field-validator"><option value="required" ' + ((opt_data.data['validator'] == 'required') ? 'selected' : '') + ' >Required</option><option value="validateEmail" ' + ((opt_data.data['validator'] == 'validateEmail') ? 'selected' : '') + ' >Email</option><option value="validateNumber" ' + ((opt_data.data['validator'] == 'validateNumber') ? 'selected' : '') + ' >Number</option><option value="validateInteger" ' + ((opt_data.data['validator'] == 'validateInteger') ? 'selected' : '') + ' >Integer</option><option value="validateAlpha" ' + ((opt_data.data['validator'] == 'validateAlpha') ? 'selected' : '') + ' >Alpha</option><option value="validateUsername" ' + ((opt_data.data['validator'] == 'validateUsername') ? 'selected' : '') + ' >Username</option><option value="validateAlphaNum" ' + ((opt_data.data['validator'] == 'validateAlphaNum') ? 'selected' : '') + ' >Alpha Numeric</option><option value="validatePhrase" ' + ((opt_data.data['validator'] == 'validatePhrase') ? 'selected' : '') + ' >Phrase</option><option value="validatePhoneNumber" ' + ((opt_data.data['validator'] == 'validatePhoneNumber') ? 'selected' : '') + ' >Phone Number</option><option value="validateAddress" ' + ((opt_data.data['validator'] == 'validateAddress') ? 'selected' : '') + '  >BTC Address</option><option value="validateCPFCNPJ" ' + ((opt_data.data['validator'] == 'validateCPFCNPJ') ? 'selected' : '') + ' >CPF/CNPJ</option></select></td><td><select id="' + soy.$$escapeHtml(opt_data.id) + '_field_required_' + soy.$$escapeHtml(opt_data.idx) + '" class="withdraw-method-editor-field-required"><option value="text" ' + ((opt_data.data['required'] == 'Yes') ? 'selected' : '') + '>' + MSG_UNNAMED_431 + '</option><option value="text" ' + ((opt_data.data['required'] == 'No') ? 'selected' : '') + '>' + MSG_UNNAMED_433 + '</option></select></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_field_value_' + soy.$$escapeHtml(opt_data.idx) + '" type="text" class="form-control input-block-level withdraw-method-editor-field-value" placeholder="" value="' + soy.$$escapeHtml(opt_data.data['value']) + '"></td><td><button id="' + soy.$$escapeHtml(opt_data.id) + '_field_delete_' + soy.$$escapeHtml(opt_data.idx) + '" data-index="' + soy.$$escapeHtml(opt_data.idx) + '" class="btn btn-mini btn-danger withdraw-method-editor-field-action-delete withdraw-method-editor-field-action">' + MSG_UNNAMED_435 + '</button></td></tr>';
  return output;
};


bitex.ui.withdraw_method_editor.templates.WithdrawMethodEditor = function(opt_data) {
  var output = '';
  /** @desc Method name label */
  var MSG_UNNAMED_437 = goog.getMsg('Method name');
  /** @desc Method description label */
  var MSG_UNNAMED_439 = goog.getMsg('Description');
  /** @desc Method disclaimer label */
  var MSG_UNNAMED_441 = goog.getMsg('Disclaimer');
  /** @desc Method Fees label */
  var MSG_UNNAMED_443 = goog.getMsg('Fees');
  /** @desc Percent fee placeholder */
  var MSG_UNNAMED_445 = goog.getMsg('Percent fee');
  /** @desc Fixed fee placeholder */
  var MSG_UNNAMED_447 = goog.getMsg('Fixed fee');
  /** @desc Method Costs label */
  var MSG_UNNAMED_449 = goog.getMsg('Costs');
  /** @desc Percent cost placeholder */
  var MSG_UNNAMED_451 = goog.getMsg('Percent cost');
  /** @desc Fixed cost placeholder */
  var MSG_UNNAMED_453 = goog.getMsg('Fixed cost');
  /** @desc Method fields header */
  var MSG_UNNAMED_455 = goog.getMsg('Custom fields');
  /** @desc Method field header */
  var MSG_UNNAMED_457 = goog.getMsg('Side');
  /** @desc Method field header */
  var MSG_UNNAMED_459 = goog.getMsg('Name');
  /** @desc Method field header */
  var MSG_UNNAMED_461 = goog.getMsg('Label');
  /** @desc Method field header */
  var MSG_UNNAMED_463 = goog.getMsg('Placeholder');
  /** @desc Method field header */
  var MSG_UNNAMED_465 = goog.getMsg('Type');
  /** @desc Method field header */
  var MSG_UNNAMED_467 = goog.getMsg('Validator');
  /** @desc Method field header */
  var MSG_UNNAMED_469 = goog.getMsg('Value');
  /** @desc Method field header */
  var MSG_UNNAMED_471 = goog.getMsg('Actions');
  /** @desc Add field button label */
  var MSG_UNNAMED_473 = goog.getMsg('Add field');
  /** @desc Method fields header */
  var MSG_UNNAMED_475 = goog.getMsg('Limits');
  /** @desc Limit table field header */
  var MSG_UNNAMED_477 = goog.getMsg('Verification Level');
  /** @desc Limit table field header */
  var MSG_UNNAMED_479 = goog.getMsg('Enabled');
  /** @desc Limit table field header */
  var MSG_UNNAMED_481 = goog.getMsg('Min');
  /** @desc Limit table field header */
  var MSG_UNNAMED_483 = goog.getMsg('Max');
  /** @desc Limit table field header */
  var MSG_UNNAMED_497 = goog.getMsg('Min');
  /** @desc Limit table field header */
  var MSG_UNNAMED_499 = goog.getMsg('Max');
  output += '<div class="row"><div class="col-xs-12" style="overflow-y:auto"><form id="' + soy.$$escapeHtml(opt_data.id) + '" class="form-horizontal span6"  data-uniform-control-holder-class="control-group"><fieldset><div class="control-group"><label class="control-label">' + MSG_UNNAMED_437 + '</label><div class="controls"><input id="' + soy.$$escapeHtml(opt_data.id) + '_name"  type="text" class="form-control"  data-uniform-validators="required; validateAlphaNum" data-uniform-filters="non_space" placeholder="" required value="' + soy.$$escapeHtml(opt_data.model['method']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_439 + '</label><div class="controls"><input id="' + soy.$$escapeHtml(opt_data.id) + '_description"  type="text" class="form-control" data-uniform-validators="required" placeholder="" required value="' + soy.$$escapeHtml(opt_data.model['description']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_441 + '</label><div class="controls"><input id="' + soy.$$escapeHtml(opt_data.id) + '_placeholder"  type="text" class="form-control" placeholder="" value="' + soy.$$escapeHtml(opt_data.model['disclaimer']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_443 + '</label><div class="controls"><div class="row"><div class="col-xs-6"><div class="input-group"><input id="' + soy.$$escapeHtml(opt_data.id) + '_percent_fee" type="text" class="form-control" autocomplete="off" maxlength="4" data-uniform-validators="required ; validateNumber; validateMin 0; validateMax 25" label="' + MSG_UNNAMED_445 + '" required value="' + soy.$$escapeHtml(opt_data.model['percent_fee']) + '"><span class="input-group-addon">%</span></div></div><div class="col-xs-6"><div class="input-group"><span class="input-group-addon">' + soy.$$escapeHtml(opt_data.model['currency']) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_fixed_fee" type="text" class="form-control" autocomplete="off" data-uniform-validators="required ; validateNumber; validateMin 0" label="' + MSG_UNNAMED_447 + '" required value="' + soy.$$escapeHtml(opt_data.model['fixed_fee']) + '"></div></div></div></div></div><hr><div class="control-group"><label class="control-label">' + MSG_UNNAMED_449 + '</label><div class="controls"><div class="row"><div class="col-xs-6"><div class="input-group"><input id="' + soy.$$escapeHtml(opt_data.id) + '_percent_cost" type="text" class="form-control" autocomplete="off" maxlength="4" data-uniform-validators="required ; validateNumber; validateMin 0; validateMax 25" label="' + MSG_UNNAMED_451 + '" required value="' + soy.$$escapeHtml(opt_data.model['percent_cost']) + '"><span class="input-group-addon">%</span></div></div><div class="col-xs-6"><div class="input-group"><span class="input-group-addon">' + soy.$$escapeHtml(opt_data.model['currency']) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_fixed_cost" type="text" class="form-control" autocomplete="off" data-uniform-validators="required ; validateNumber; validateMin 0" label="' + MSG_UNNAMED_453 + '" required value="' + soy.$$escapeHtml(opt_data.model['fixed_cost']) + '"></div></div></div></div></div><hr><div class="control-group" style="overflow: auto"><table id="' + soy.$$escapeHtml(opt_data.id) + '_table" class="table table-condensed table-bordered table-hover" style="max-width:160%;width:160%;padding-bottom:10px;"><thead><tr><td colspan="8" style="text-align: center">' + MSG_UNNAMED_455 + '</td></tr><tr><th> ' + MSG_UNNAMED_457 + '</th><th> ' + MSG_UNNAMED_459 + ' </th><th> ' + MSG_UNNAMED_461 + ' </th><th> ' + MSG_UNNAMED_463 + ' </th><th> ' + MSG_UNNAMED_465 + ' </th><th> ' + MSG_UNNAMED_467 + ' </th><th> ' + MSG_UNNAMED_469 + ' </th><th> ' + MSG_UNNAMED_471 + ' </th></tr></thead><tbody>';
  var fieldList234 = opt_data.model['fields'];
  var fieldListLen234 = fieldList234.length;
  for (var fieldIndex234 = 0; fieldIndex234 < fieldListLen234; fieldIndex234++) {
    var fieldData234 = fieldList234[fieldIndex234];
    output += bitex.ui.withdraw_method_editor.templates.WithdrawMethodFieldLineEditor({id: opt_data.id, idx: fieldIndex234, data: fieldData234});
  }
  output += '</tbody></table><button id="' + soy.$$escapeHtml(opt_data.id) + '_add" class="btn btn-primary"><i class="icon-white icon-plus"></i> ' + MSG_UNNAMED_473 + '</button></div><hr><div class="control-group" style="max-height:130px"><table id="' + soy.$$escapeHtml(opt_data.id) + '_limits" class="table table-condensed table-bordered table-hover"><thead><tr><td colspan="4" style="text-align: center">' + MSG_UNNAMED_475 + '</td></tr><tr><th>' + MSG_UNNAMED_477 + '</th><th>' + MSG_UNNAMED_479 + '</th><th>' + MSG_UNNAMED_481 + '</th><th>' + MSG_UNNAMED_483 + '</th></tr></thead><tbody>';
  for (var level263 = 0; level263 < 6; level263++) {
    output += '<tr>';
    switch (level263) {
      case 0:
        /** @desc Limit table field header */
        var MSG_UNNAMED_485 = goog.getMsg('Unverified');
        output += '<td>' + MSG_UNNAMED_485 + '</td>';
        break;
      case 1:
        /** @desc Limit table field header */
        var MSG_UNNAMED_487 = goog.getMsg('Pending');
        output += '<td>' + MSG_UNNAMED_487 + '</td>';
        break;
      case 2:
        /** @desc Limit table field header */
        var MSG_UNNAMED_489 = goog.getMsg('Progress');
        output += '<td>' + MSG_UNNAMED_489 + '</td>';
        break;
      case 3:
        /** @desc Limit table field header */
        var MSG_UNNAMED_491 = goog.getMsg('Verified - Level I');
        output += '<td>' + MSG_UNNAMED_491 + '</td>';
        break;
      case 4:
        /** @desc Limit table field header */
        var MSG_UNNAMED_493 = goog.getMsg('Verified - Level II');
        output += '<td>' + MSG_UNNAMED_493 + '</td>';
        break;
      case 5:
        /** @desc Limit table field header */
        var MSG_UNNAMED_495 = goog.getMsg('Verified - Level III');
        output += '<td>' + MSG_UNNAMED_495 + '</td>';
        break;
    }
    output += '<td><input id="' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level263) + '_enabled" type="checkbox" class="withdraw-method-editor-limit-enabled"' + ((opt_data.model['limits'] && opt_data.model['limits'][level263] && opt_data.model['limits'][level263]['enabled']) ? 'checked' : '') + '/></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level263) + '_min" name="min_' + soy.$$escapeHtml(level263) + '" type="text" autocomplete="off" class="form-control input-small withdraw-method-editor-limit-max" data-uniform-label="' + MSG_UNNAMED_497 + '" data-uniform-validators="validateNumber; validateMin 0" data-uniform-meta="display If ' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level263) + '_enabled == \'on\'; enable If ' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level263) + '_enabled == \'on\'" value="' + ((opt_data.model['limits'] && opt_data.model['limits'][level263] && opt_data.model['limits'][level263]['min']) ? soy.$$escapeHtml(opt_data.model['limits'][level263]['min']) : '0') + '"' + ((opt_data.model['limits'] && opt_data.model['limits'][level263] && ! opt_data.model['limits'][level263]['enabled']) ? 'style="display: none;" disabled' : '') + '/></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level263) + '_max" name="max_' + soy.$$escapeHtml(level263) + '" type="text" autocomplete="off" class="form-control input-small withdraw-method-editor-limit-max" data-uniform-label="' + MSG_UNNAMED_499 + '" data-uniform-validators="validateNumber" data-uniform-meta="display If ' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level263) + '_enabled == \'on\'; enable If ' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level263) + '_enabled == \'on\'"" value="' + ((opt_data.model['limits'] && opt_data.model['limits'][level263] && opt_data.model['limits'][level263]['max']) ? soy.$$escapeHtml(opt_data.model['limits'][level263]['max']) : '') + '"' + ((opt_data.model['limits'] && opt_data.model['limits'][level263] && ! opt_data.model['limits'][level263]['enabled']) ? 'style="display: none;" disabled' : '') + '/></td></tr>';
  }
  output += '</tbody></table></div></fieldset></form></div></div>';
  return output;
};
