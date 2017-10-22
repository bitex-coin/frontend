// This file was automatically generated from card_data_entry.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.CardDataEntry.templates');

goog.require('soy');


bitex.ui.CardDataEntry.templates.CardDataEntry = function(opt_data) {
  var output = '';
  /** @desc API Key Data Entry form legend */
  var MSG_UNNAMED_98 = goog.getMsg('Create Card');
  output += '<form  id="' + soy.$$escapeHtml(opt_data.id) + '_form" class="api-key-data-entry-form"><fieldset><h2>' + MSG_UNNAMED_98 + '</h2><div class="api-key-data-entry-form-block control-group"><label>Card Label<input id="' + soy.$$escapeHtml(opt_data.id) + '_label" type="text" class="input-block-level"></label></div><div class="api-key-data-entry-form-block"><div class="control-group"><h3>Your Card</h3><label for="">Metodo de pagamento</label><select id="' + soy.$$escapeHtml(opt_data.id) + '_method" name="Method" class="withdraw-method-selector">';
  var methodList13 = opt_data.methods;
  var methodListLen13 = methodList13.length;
  for (var methodIndex13 = 0; methodIndex13 < methodListLen13; methodIndex13++) {
    var methodData13 = methodList13[methodIndex13];
    output += '<option value="' + soy.$$escapeHtml(methodData13['method']) + '" data-net-value="' + soy.$$escapeHtml(opt_data.id) + '_method_' + soy.$$escapeHtml(methodData13['method']) + '_net_value" data-percent-fee="' + soy.$$escapeHtml(opt_data.id) + '_method_' + soy.$$escapeHtml(methodData13['method']) + '_percent_fee" data-fixed-fee="' + soy.$$escapeHtml(opt_data.id) + '_method_' + soy.$$escapeHtml(methodData13['method']) + '_fixed_fee">' + soy.$$escapeHtml(methodData13['description']) + '</option>';
  }
  output += '</select></div><div class="card-methods">';
  var methodList33 = opt_data.methods;
  var methodListLen33 = methodList33.length;
  for (var methodIndex33 = 0; methodIndex33 < methodListLen33; methodIndex33++) {
    var methodData33 = methodList33[methodIndex33];
    output += '<div class="withdraw-method" data-withdraw-method="' + soy.$$escapeHtml(methodData33['method']) + '" style="' + ((opt_data.methods.length > 1) ? 'display:none;' : '') + '">';
    var fieldList41 = methodData33['fields'];
    var fieldListLen41 = fieldList41.length;
    for (var fieldIndex41 = 0; fieldIndex41 < fieldListLen41; fieldIndex41++) {
      var fieldData41 = fieldList41[fieldIndex41];
      output += (fieldData41['side'] == 'client') ? '<div class="control-group"><label class="control-label">' + soy.$$escapeHtml(fieldData41['label']) + '</label><div class="controls"><input class="withdraw-field" data-uniform-validators="' + ((fieldData41['required']) ? 'required;' : '') + soy.$$escapeHtml(fieldData41['validator']) + '" type="' + soy.$$escapeHtml(fieldData41['type']) + '" name="' + soy.$$escapeHtml(fieldData41['name']) + '" label="' + soy.$$escapeHtml(fieldData41['placeholder']) + '" value="' + soy.$$escapeHtml(fieldData41['value']) + '"' + ((! (methodIndex33 == 0)) ? 'disabled' : '') + ' /></div></div>' : '';
    }
    output += '</div>';
  }
  output += '</div></div><div class="api-key-data-entry-form-block"><div class="control-group"><label class="control-label" for="">Card ID</label><div class="controls"><input id="' + soy.$$escapeHtml(opt_data.id) + '_id" type="text" class=\'' + soy.$$escapeHtml(opt_data.id) + '_card_id input-block-level\'></div></div></div><div class="text-center"><button id="' + soy.$$escapeHtml(opt_data.id) + '_cancel_btn" class="btn">Cancel</button><button id="' + soy.$$escapeHtml(opt_data.id) + '_create_btn" type="submit" class="btn btn-primary">Create</button></div></fieldset></form>';
  return output;
};
