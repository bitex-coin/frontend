// This file was automatically generated from bitex_datagrid.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.DataGrid.templates');

goog.require('soy');


bitex.ui.DataGrid.templates.SortIconUp = function(opt_data) {
  return '<div id=\'id_sort_icon\' class=\'datagrid-sort\'><i class=\'glyphicon glyphicon-chevron-up datagrid-sort\' /></div>';
};


bitex.ui.DataGrid.templates.SortIconDown = function(opt_data) {
  return '<div id=\'id_sort_icon\' class=\'datagrid-sort\'><i class=\'glyphicon glyphicon-chevron-down datagrid-sort\' /></div>';
};


bitex.ui.DataGrid.templates.DataGrid = function(opt_data) {
  var output = '<div ' + ((opt_data.id) ? 'id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + '  class="fuelux ' + ((opt_data.base_class) ? soy.$$escapeHtml(opt_data.base_class) : '') + '" style="width:100%;"><table class="table table-bordered datagrid datagrid-stretch-header"><thead><tr><th colspan="4" ' + ((! opt_data.title && ! opt_data.show_search) ? 'style="display: none;"' : '') + '><span class="datagrid-header-title pull-left"  ' + ((! opt_data.title) ? 'style="display: none;"' : '') + ' ><strong>' + soy.$$escapeHtml(opt_data.title) + '</strong></span><div class="datagrid-header-left pull-left" ' + ((! opt_data.show_search) ? 'style="display: none;"' : '') + '><div class="input-group search datagrid-search"><input type="text" class="form-control" placeholder="' + soy.$$escapeHtml(opt_data.search_placeholder) + '"><span class="input-group-btn"><button type="button" class="btn btn-white"><i class="glyphicon glyphicon-search"></i></button></span></div></div><div class="datagrid-header-right pull-right">';
  if (opt_data.button_filters) {
    output += '<div class="select filter datagrid-filter" data-resize="auto"><button type="button" data-toggle="dropdown" class="btn dropdown-toggle">';
    var buttonList37 = opt_data.button_filters;
    var buttonListLen37 = buttonList37.length;
    for (var buttonIndex37 = 0; buttonIndex37 < buttonListLen37; buttonIndex37++) {
      var buttonData37 = buttonList37[buttonIndex37];
      output += (buttonIndex37 == 0) ? '<span class="dropdown-label" style="width: 111px;">' + soy.$$escapeHtml(buttonData37['label']) + '</span>' : '';
    }
    output += '<span class="caret"></span></button><ul class="dropdown-menu">';
    var buttonList45 = opt_data.button_filters;
    var buttonListLen45 = buttonList45.length;
    for (var buttonIndex45 = 0; buttonIndex45 < buttonListLen45; buttonIndex45++) {
      var buttonData45 = buttonList45[buttonIndex45];
      output += '<li data-value="' + soy.$$escapeHtml(buttonData45['value']) + '"><a href="#">' + soy.$$escapeHtml(buttonData45['label']) + '</a></li>';
    }
    output += '</ul></div>';
  }
  output += '</div></th></tr></thead></table><div class="datagrid-stretch-wrapper" style="height:' + ((opt_data.wrapper_height) ? soy.$$escapeHtml(opt_data.wrapper_height) : '360') + 'px;"><table class="table table-bordered datagrid"><tbody></tbody></table></div><table class="table table-bordered datagrid datagrid-stretch-footer"><tfoot><tr><th colspan="4"><div class="row"><div class="col-md-6 col-xs-3"><div class="datagrid-footer-left" style="visibility: visible;"><div class="grid-controls"><span><span class="grid-start"></span> -<span class="grid-end"></span></span></div></div></div><div class="col-md-6 col-xs-9"><div class="datagrid-footer-right" style="visibility: visible;"><div class="grid-pager pull-right"><button type="button" class="btn btn-outline grid-refresh"><i class="glyphicon glyphicon-refresh"></i></button><button type="button" class="btn btn-outline grid-prevpage"><i class="glyphicon glyphicon-chevron-left"></i></button><button type="button" class="btn btn-outline grid-nextpage"><i class="glyphicon glyphicon-chevron-right"></i></button></div></div></div></div></th></tr></tfoot></table></div>';
  return output;
};
