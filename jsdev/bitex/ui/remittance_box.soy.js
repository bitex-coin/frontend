// This file was automatically generated from remittance_box.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.RemittancesBox.templates');

goog.require('soy');


bitex.ui.RemittancesBox.templates.RemittancesBoxCurrency = function(opt_data) {
  var output = '<tr><td style="padding: 4px;"><strong>' + soy.$$escapeHtml(opt_data.remittance_data_record[0]) + '</strong></td><td style="padding: 4px;"><!-- ' + soy.$$escapeHtml(opt_data.id) + ' -->';
  var field_dataList8 = opt_data.remittance_data_record[3];
  var field_dataListLen8 = field_dataList8.length;
  for (var field_dataIndex8 = 0; field_dataIndex8 < field_dataListLen8; field_dataIndex8++) {
    var field_dataData8 = field_dataList8[field_dataIndex8];
    output += '<span class="bitex-model" data-model-key-list="' + soy.$$escapeHtml(field_dataData8[1]) + '" data-model-formula="' + soy.$$escapeHtml(field_dataData8[0]) + '" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.remittance_data_record[2]) + '" data-blink-class="md-blink"></span>' + ((! (field_dataIndex8 == field_dataListLen8 - 1)) ? ' / ' : '');
  }
  output += '</td></tr>';
  return output;
};


bitex.ui.RemittancesBox.templates.RemittancesBox = function(opt_data) {
  var output = '<div id="' + soy.$$escapeHtml(opt_data.id) + '" class="remittance-box">';
  var remittance_data_recordList25 = opt_data.remittance_data_table;
  var remittance_data_recordListLen25 = remittance_data_recordList25.length;
  for (var remittance_data_recordIndex25 = 0; remittance_data_recordIndex25 < remittance_data_recordListLen25; remittance_data_recordIndex25++) {
    var remittance_data_recordData25 = remittance_data_recordList25[remittance_data_recordIndex25];
    if (remittance_data_recordData25.length == 1) {
      /** @desc Remittance box title */
      var MSG_UNNAMED_53 = goog.getMsg('Be your own Remittance Service');
      output += ((! (remittance_data_recordIndex25 == 0)) ? '</tbody></table>' : '') + '<table id="' + soy.$$escapeHtml(opt_data.id) + '_' + soy.$$escapeHtml(remittance_data_recordData25[0]) + '" style="display:none" class="table table-bordered table-condensed remittance-box-table"><thead><tr><td colspan="2"><strong>' + MSG_UNNAMED_53 + '</strong></td></tr></thead><tbody class="remittance-box-content">';
    } else {
      output += bitex.ui.RemittancesBox.templates.RemittancesBoxCurrency({id: opt_data.id, remittance_data_record: remittance_data_recordData25});
    }
  }
  output += '</div>';
  return output;
};
