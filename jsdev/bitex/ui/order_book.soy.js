// This file was automatically generated from order_book.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.OrderBook.templates');

goog.require('soy');


bitex.ui.OrderBook.templates.OrderBook = function(opt_data) {
  var output = '<div class="orders"><!-- .orders__head --><header class="orders__head"><div class="row"><h4 class="orders__title col-xs-6 ' + ((opt_data.side == '0') ? ' orders__title_center' : '') + '">' + soy.$$escapeHtml(opt_data.title) + '</h4>';
  if (opt_data.side == '1') {
    /** @desc Cumulative Description */
    var MSG_UNNAMED_127 = goog.getMsg('Cumulative OrderBook');
    /** @desc Fees Description */
    var MSG_UNNAMED_129 = goog.getMsg('Fees OrderBook');
    output += '<div class="orders__head-buttons btn-group"><button title=\'' + MSG_UNNAMED_127 + '\' class="btn btn-default btn-show-cum-qty">' + bitex.ui.OrderBook.templates.ShowCumQty(null) + '</button><button title=\'' + MSG_UNNAMED_129 + '\' class="btn btn-default btn-show-fees">' + bitex.ui.OrderBook.templates.ShowFees(null) + '</button></div>';
  }
  output += '</div></header><!-- /.orders__head --><!-- .orders__body --><div class="orders__body"><!-- .table-responsive --><div class="table-responsive"><!-- .orders-table --><table class="orders-table table"><thead><tr>';
  var columnList24 = opt_data.columns;
  var columnListLen24 = columnList24.length;
  for (var columnIndex24 = 0; columnIndex24 < columnListLen24; columnIndex24++) {
    var columnData24 = columnList24[columnIndex24];
    output += '<th>' + soy.$$escapeHtml(columnData24) + '</th>';
  }
  output += '</tr></thead><tbody></tbody></table><!-- /.orders-table --></div><!-- /.table-responsive --></div><!-- /.orders__body --></div>';
  return output;
};


bitex.ui.OrderBook.templates.ShowCumQty = function(opt_data) {
  var output = '';
  /** @desc Cumulative */
  var MSG_UNNAMED_131 = goog.getMsg('Cumulative');
  output += '<div>' + MSG_UNNAMED_131 + '</div>';
  return output;
};


bitex.ui.OrderBook.templates.ShowFees = function(opt_data) {
  var output = '';
  /** @desc Fees */
  var MSG_UNNAMED_133 = goog.getMsg('Fees');
  output += '<div>' + MSG_UNNAMED_133 + '</div>';
  return output;
};


bitex.ui.OrderBook.templates.OrderBookDragOrder = function(opt_data) {
  var output = '';
  /** @desc Caption shown when user is drag & dropping an order in the order book */
  var MSG_UNNAMED_135 = goog.getMsg('Cancel/Replace Order');
  output += '<div class="order-book-drag-order">' + MSG_UNNAMED_135 + '</div>';
  return output;
};


bitex.ui.OrderBook.templates.OrderBookOrderQtyEl = function(opt_data) {
  return '<td class="order-book-qty">' + soy.$$escapeHtml(opt_data.qty) + '</td>';
};


bitex.ui.OrderBook.templates.OrderBookOrderPriceEl = function(opt_data) {
  return '<td class="order-book-price ' + ((opt_data.side == '0') ? 'order-book-right' : 'order-book-left') + '">' + soy.$$escapeHtml(opt_data.price) + '</td>';
};


bitex.ui.OrderBook.templates.OrderBookOrderUsernameEl = function(opt_data) {
  return (opt_data.orderId) ? '<td class="order-book-username ' + ((opt_data.side == '0') ? 'order-book-left' : 'order-book-right') + '"><a href="" class="btn-cancel-order text-error" data-order-id="' + soy.$$escapeHtml(opt_data.orderId) + '">' + ((opt_data.side == '0') ? '<i class="glyphicon glyphicon-remove" data-order-id="' + soy.$$escapeHtml(opt_data.orderId) + '" style="line-height:2px;"></i> ' + soy.$$escapeHtml(opt_data.username) : soy.$$escapeHtml(opt_data.username) + ' <i class="glyphicon glyphicon-remove" data-order-id="' + soy.$$escapeHtml(opt_data.orderId) + '" style="line-height:2px;"></i>') + '</a></td>' : '<td class="order-book-username ' + ((opt_data.side == '0') ? 'order-book-left' : 'order-book-right') + '">' + soy.$$escapeHtml(opt_data.username) + '</td>';
};


bitex.ui.OrderBook.templates.OrderBookOrderRow = function(opt_data) {
  return '<tr class="order-book-row">' + ((opt_data.side == '0') ? bitex.ui.OrderBook.templates.OrderBookOrderUsernameEl(opt_data) + bitex.ui.OrderBook.templates.OrderBookOrderQtyEl(opt_data) + bitex.ui.OrderBook.templates.OrderBookOrderPriceEl(opt_data) : bitex.ui.OrderBook.templates.OrderBookOrderPriceEl(opt_data) + bitex.ui.OrderBook.templates.OrderBookOrderQtyEl(opt_data) + bitex.ui.OrderBook.templates.OrderBookOrderUsernameEl(opt_data)) + '</tr>';
};
