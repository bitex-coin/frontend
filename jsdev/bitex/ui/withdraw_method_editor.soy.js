// This file was automatically generated from withdraw_method_editor.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.withdraw_method_editor.templates');

goog.require('soy');


bitex.ui.withdraw_method_editor.templates.WithdrawMethodFieldLineEditor = function(opt_data) {
  var output = '';
  /** @desc Client option on side select */
  var MSG_UNNAMED_424 = goog.getMsg('Client');
  /** @desc Broker option on side select */
  var MSG_UNNAMED_426 = goog.getMsg('Broker');
  /** @desc Field name */
  var MSG_UNNAMED_428 = goog.getMsg('Name');
  /** @desc Field name */
  var MSG_UNNAMED_430 = goog.getMsg('Label');
  /** @desc Text option on type select */
  var MSG_UNNAMED_432 = goog.getMsg('Text');
  /** @desc Yes option on required select */
  var MSG_UNNAMED_434 = goog.getMsg('Yes');
  /** @desc No option on required select */
  var MSG_UNNAMED_436 = goog.getMsg('No');
  /** @desc Field delete action */
  var MSG_UNNAMED_438 = goog.getMsg('delete');
  output += '<tr id="' + soy.$$escapeHtml(opt_data.id) + '_field_' + soy.$$escapeHtml(opt_data.idx) + '"><td><select id="' + soy.$$escapeHtml(opt_data.id) + '_field_side_' + soy.$$escapeHtml(opt_data.idx) + '" class="withdraw-method-editor-field-side"><option value="client" ' + ((opt_data.data['side'] == 'client') ? 'selected' : '') + '>' + MSG_UNNAMED_424 + '</option><option value="broker" ' + ((opt_data.data['side'] == 'broker') ? 'selected' : '') + '>' + MSG_UNNAMED_426 + '</option></select></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_field_name_' + soy.$$escapeHtml(opt_data.idx) + '" type="text" class="input-block-level withdraw-method-editor-field-name"  data-uniform-label="' + MSG_UNNAMED_428 + '" data-uniform-filters="non_space"  data-uniform-validators="required ; validatePhrase"  placeholder="" required value="' + soy.$$escapeHtml(opt_data.data['name']) + '"></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_field_label_' + soy.$$escapeHtml(opt_data.idx) + '" type="text" class="input-block-level withdraw-method-editor-field-label"  data-uniform-label="' + MSG_UNNAMED_430 + '"  data-uniform-validators="required" placeholder="" required value="' + soy.$$escapeHtml(opt_data.data['label']) + '"></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_field_placeholder_' + soy.$$escapeHtml(opt_data.idx) + '" type="text" class="input-block-level withdraw-method-editor-field-placeholder" placeholder="" value="' + soy.$$escapeHtml(opt_data.data['placeholder']) + '"></td><td><select id="' + soy.$$escapeHtml(opt_data.id) + '_field_type_' + soy.$$escapeHtml(opt_data.idx) + '" class="withdraw-method-editor-field-type"><option value="text" ' + ((opt_data.data['type'] == 'text') ? 'selected' : '') + '>' + MSG_UNNAMED_432 + '</option></select></td><td><select id="' + soy.$$escapeHtml(opt_data.id) + '_field_validator_' + soy.$$escapeHtml(opt_data.idx) + '" class="withdraw-method-editor-field-validator"><option value="required" ' + ((opt_data.data['validator'] == 'required') ? 'selected' : '') + ' >Required</option><option value="validateEmail" ' + ((opt_data.data['validator'] == 'validateEmail') ? 'selected' : '') + ' >Email</option><option value="validateNumber" ' + ((opt_data.data['validator'] == 'validateNumber') ? 'selected' : '') + ' >Number</option><option value="validateInteger" ' + ((opt_data.data['validator'] == 'validateInteger') ? 'selected' : '') + ' >Integer</option><option value="validateAlpha" ' + ((opt_data.data['validator'] == 'validateAlpha') ? 'selected' : '') + ' >Alpha</option><option value="validateUsername" ' + ((opt_data.data['validator'] == 'validateUsername') ? 'selected' : '') + ' >Username</option><option value="validateAlphaNum" ' + ((opt_data.data['validator'] == 'validateAlphaNum') ? 'selected' : '') + ' >Alpha Numeric</option><option value="validatePhrase" ' + ((opt_data.data['validator'] == 'validatePhrase') ? 'selected' : '') + ' >Phrase</option><option value="validatePhoneNumber" ' + ((opt_data.data['validator'] == 'validatePhoneNumber') ? 'selected' : '') + ' >Phone Number</option><option value="validateAddress" ' + ((opt_data.data['validator'] == 'validateAddress') ? 'selected' : '') + '  >BTC Address</option><option value="validateCPFCNPJ" ' + ((opt_data.data['validator'] == 'validateCPFCNPJ') ? 'selected' : '') + ' >CPF/CNPJ</option></select></td><td><select id="' + soy.$$escapeHtml(opt_data.id) + '_field_required_' + soy.$$escapeHtml(opt_data.idx) + '" class="withdraw-method-editor-field-required"><option value="text" ' + ((opt_data.data['required'] == 'Yes') ? 'selected' : '') + '>' + MSG_UNNAMED_434 + '</option><option value="text" ' + ((opt_data.data['required'] == 'No') ? 'selected' : '') + '>' + MSG_UNNAMED_436 + '</option></select></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_field_value_' + soy.$$escapeHtml(opt_data.idx) + '" type="text" class="input-block-level withdraw-method-editor-field-value" placeholder="" value="' + soy.$$escapeHtml(opt_data.data['value']) + '"></td><td><button id="' + soy.$$escapeHtml(opt_data.id) + '_field_delete_' + soy.$$escapeHtml(opt_data.idx) + '" data-index="' + soy.$$escapeHtml(opt_data.idx) + '" class="btn btn-mini btn-danger withdraw-method-editor-field-action-delete withdraw-method-editor-field-action">' + MSG_UNNAMED_438 + '</button></td></tr>';
  return output;
};


bitex.ui.withdraw_method_editor.templates.WithdrawMethodEditor = function(opt_data) {
  var output = '';
  /** @desc Method name label */
  var MSG_UNNAMED_440 = goog.getMsg('Method name');
  /** @desc Method description label */
  var MSG_UNNAMED_442 = goog.getMsg('Description');
  /** @desc Method disclaimer label */
  var MSG_UNNAMED_444 = goog.getMsg('Disclaimer');
  /** @desc Method Fees label */
  var MSG_UNNAMED_446 = goog.getMsg('Fees');
  /** @desc Percent fee placeholder */
  var MSG_UNNAMED_448 = goog.getMsg('Percent fee');
  /** @desc Fixed fee placeholder */
  var MSG_UNNAMED_450 = goog.getMsg('Fixed fee');
  /** @desc Method Costs label */
  var MSG_UNNAMED_452 = goog.getMsg('Costs');
  /** @desc Percent cost placeholder */
  var MSG_UNNAMED_454 = goog.getMsg('Percent cost');
  /** @desc Fixed cost placeholder */
  var MSG_UNNAMED_456 = goog.getMsg('Fixed cost');
  /** @desc Method fields header */
  var MSG_UNNAMED_458 = goog.getMsg('Custom fields');
  /** @desc Method field header */
  var MSG_UNNAMED_460 = goog.getMsg('Side');
  /** @desc Method field header */
  var MSG_UNNAMED_462 = goog.getMsg('Name');
  /** @desc Method field header */
  var MSG_UNNAMED_464 = goog.getMsg('Label');
  /** @desc Method field header */
  var MSG_UNNAMED_466 = goog.getMsg('Placeholder');
  /** @desc Method field header */
  var MSG_UNNAMED_468 = goog.getMsg('Type');
  /** @desc Method field header */
  var MSG_UNNAMED_470 = goog.getMsg('Validator');
  /** @desc Method field header */
  var MSG_UNNAMED_472 = goog.getMsg('Required');
  /** @desc Method field header */
  var MSG_UNNAMED_474 = goog.getMsg('Value');
  /** @desc Method field header */
  var MSG_UNNAMED_476 = goog.getMsg('Actions');
  /** @desc Add field button label */
  var MSG_UNNAMED_478 = goog.getMsg('Add field');
  /** @desc Method fields header */
  var MSG_UNNAMED_480 = goog.getMsg('Limits');
  /** @desc Limit table field header */
  var MSG_UNNAMED_482 = goog.getMsg('Verification Level');
  /** @desc Limit table field header */
  var MSG_UNNAMED_484 = goog.getMsg('Enabled');
  /** @desc Limit table field header */
  var MSG_UNNAMED_486 = goog.getMsg('Min');
  /** @desc Limit table field header */
  var MSG_UNNAMED_488 = goog.getMsg('Max');
  /** @desc Limit table field header */
  var MSG_UNNAMED_502 = goog.getMsg('Min');
  /** @desc Limit table field header */
  var MSG_UNNAMED_504 = goog.getMsg('Max');
  output += '<div class="row-fluid"><div class="span12"><form id="' + soy.$$escapeHtml(opt_data.id) + '" class="form-horizontal span6"  data-uniform-control-holder-class="control-group"><fieldset><div class="control-group"><label class="control-label">' + MSG_UNNAMED_440 + '</label><div class="controls"><input id="' + soy.$$escapeHtml(opt_data.id) + '_name"  type="text" class="input-block-level"  data-uniform-validators="required; validateAlphaNum" data-uniform-filters="non_space" placeholder="" required value="' + soy.$$escapeHtml(opt_data.model['method']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_442 + '</label><div class="controls"><input id="' + soy.$$escapeHtml(opt_data.id) + '_description"  type="text" class="input-block-level" data-uniform-validators="required" placeholder="" required value="' + soy.$$escapeHtml(opt_data.model['description']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_444 + '</label><div class="controls"><input id="' + soy.$$escapeHtml(opt_data.id) + '_placeholder"  type="text" class="input-block-level" placeholder="" value="' + soy.$$escapeHtml(opt_data.model['disclaimer']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_446 + '</label><div class="controls"><div class="row-fluid"><div class="span6"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.id) + '_percent_fee" type="text" class="input-block-level" autocomplete="off" maxlength="4" data-uniform-validators="required ; validateNumber; validateMin 0; validateMax 25" label="' + MSG_UNNAMED_448 + '" required value="' + soy.$$escapeHtml(opt_data.model['percent_fee']) + '"><span class="add-on">%</span></div></div><div class="span6"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.model['currency']) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_fixed_fee" type="text" class="input-block-level" autocomplete="off" data-uniform-validators="required ; validateNumber; validateMin 0" label="' + MSG_UNNAMED_450 + '" required value="' + soy.$$escapeHtml(opt_data.model['fixed_fee']) + '"></div></div></div></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_452 + '</label><div class="controls"><div class="row-fluid"><div class="span6"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.id) + '_percent_cost" type="text" class="input-block-level" autocomplete="off" maxlength="4" data-uniform-validators="required ; validateNumber; validateMin 0; validateMax 25" label="' + MSG_UNNAMED_454 + '" required value="' + soy.$$escapeHtml(opt_data.model['percent_cost']) + '"><span class="add-on">%</span></div></div><div class="span6"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.model['currency']) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_fixed_cost" type="text" class="input-block-level" autocomplete="off" data-uniform-validators="required ; validateNumber; validateMin 0" label="' + MSG_UNNAMED_456 + '" required value="' + soy.$$escapeHtml(opt_data.model['fixed_cost']) + '"></div></div></div></div></div><div class="control-group"><table id="' + soy.$$escapeHtml(opt_data.id) + '_table" class="table table-condensed table-bordered table-hover"><thead><tr><td colspan="7" style="text-align: center">' + MSG_UNNAMED_458 + '</td></tr><tr><th> ' + MSG_UNNAMED_460 + '</th><th> ' + MSG_UNNAMED_462 + ' </th><th> ' + MSG_UNNAMED_464 + ' </th><th> ' + MSG_UNNAMED_466 + ' </th><th> ' + MSG_UNNAMED_468 + ' </th><th> ' + MSG_UNNAMED_470 + ' </th><th> ' + MSG_UNNAMED_472 + ' </th><th> ' + MSG_UNNAMED_474 + ' </th><th> ' + MSG_UNNAMED_476 + ' </th></tr></thead><tbody>';
  var fieldList237 = opt_data.model['fields'];
  var fieldListLen237 = fieldList237.length;
  for (var fieldIndex237 = 0; fieldIndex237 < fieldListLen237; fieldIndex237++) {
    var fieldData237 = fieldList237[fieldIndex237];
    output += bitex.ui.withdraw_method_editor.templates.WithdrawMethodFieldLineEditor({id: opt_data.id, idx: fieldIndex237, data: fieldData237});
  }
  output += '</tbody></table><button id="' + soy.$$escapeHtml(opt_data.id) + '_add" class="btn btn-primary"><i class="icon-white icon-plus"></i> ' + MSG_UNNAMED_478 + '</button></div><div class="control-group"><table id="' + soy.$$escapeHtml(opt_data.id) + '_limits" class="table table-condensed table-bordered table-hover"><thead><tr><td colspan="4" style="text-align: center">' + MSG_UNNAMED_480 + '</td></tr><tr><th>' + MSG_UNNAMED_482 + '</th><th>' + MSG_UNNAMED_484 + '</th><th>' + MSG_UNNAMED_486 + '</th><th>' + MSG_UNNAMED_488 + '</th></tr></thead><tbody>';
  for (var level266 = 0; level266 < 6; level266++) {
    output += '<tr>';
    switch (level266) {
      case 0:
        /** @desc Limit table field header */
        var MSG_UNNAMED_490 = goog.getMsg('Unverified');
        output += '<td>' + MSG_UNNAMED_490 + '</td>';
        break;
      case 1:
        /** @desc Limit table field header */
        var MSG_UNNAMED_492 = goog.getMsg('Pending');
        output += '<td>' + MSG_UNNAMED_492 + '</td>';
        break;
      case 2:
        /** @desc Limit table field header */
        var MSG_UNNAMED_494 = goog.getMsg('Progress');
        output += '<td>' + MSG_UNNAMED_494 + '</td>';
        break;
      case 3:
        /** @desc Limit table field header */
        var MSG_UNNAMED_496 = goog.getMsg('Verified - Level I');
        output += '<td>' + MSG_UNNAMED_496 + '</td>';
        break;
      case 4:
        /** @desc Limit table field header */
        var MSG_UNNAMED_498 = goog.getMsg('Verified - Level II');
        output += '<td>' + MSG_UNNAMED_498 + '</td>';
        break;
      case 5:
        /** @desc Limit table field header */
        var MSG_UNNAMED_500 = goog.getMsg('Verified - Level III');
        output += '<td>' + MSG_UNNAMED_500 + '</td>';
        break;
    }
    output += '<td><input id="' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level266) + '_enabled" type="checkbox" class="withdraw-method-editor-limit-enabled"' + ((opt_data.model['limits'] && opt_data.model['limits'][level266] && opt_data.model['limits'][level266]['enabled']) ? 'checked' : '') + '/></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level266) + '_min" name="min_' + soy.$$escapeHtml(level266) + '" type="text" autocomplete="off" class="input-small withdraw-method-editor-limit-max" data-uniform-label="' + MSG_UNNAMED_502 + '" data-uniform-validators="validateNumber; validateMin 0" data-uniform-meta="display If ' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level266) + '_enabled == \'on\'; enable If ' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level266) + '_enabled == \'on\'" value="' + ((opt_data.model['limits'] && opt_data.model['limits'][level266] && opt_data.model['limits'][level266]['min']) ? soy.$$escapeHtml(opt_data.model['limits'][level266]['min']) : '0') + '"' + ((opt_data.model['limits'] && opt_data.model['limits'][level266] && ! opt_data.model['limits'][level266]['enabled']) ? 'style="display: none;" disabled' : '') + '/></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level266) + '_max" name="max_' + soy.$$escapeHtml(level266) + '" type="text" autocomplete="off" class="input-small withdraw-method-editor-limit-max" data-uniform-label="' + MSG_UNNAMED_504 + '" data-uniform-validators="validateNumber" data-uniform-meta="display If ' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level266) + '_enabled == \'on\'; enable If ' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level266) + '_enabled == \'on\'"" value="' + ((opt_data.model['limits'] && opt_data.model['limits'][level266] && opt_data.model['limits'][level266]['max']) ? soy.$$escapeHtml(opt_data.model['limits'][level266]['max']) : '') + '"' + ((opt_data.model['limits'] && opt_data.model['limits'][level266] && ! opt_data.model['limits'][level266]['enabled']) ? 'style="display: none;" disabled' : '') + '/></td></tr>';
  }
  output += '</tbody></table></div></fieldset></form></div></div>';
  return output;
};
