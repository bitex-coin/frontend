// This file was automatically generated from order_book.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.OrderBook.templates');

goog.require('soy');


bitex.ui.OrderBook.templates.OrderBook = function(opt_data) {
  var output = '<div class="text-center">' + ((opt_data.side == '1') ? '<div class="btn-group pull-right">' + bitex.ui.OrderBook.templates.ShowCumQty(null) + bitex.ui.OrderBook.templates.ShowFees(null) + '</div>' : '') + '<h4 style="margin:auto;width:10%">' + soy.$$escapeHtml(opt_data.title) + '</h4></div><table class="table"><thead><tr>';
  var columnList13 = opt_data.columns;
  var columnListLen13 = columnList13.length;
  for (var columnIndex13 = 0; columnIndex13 < columnListLen13; columnIndex13++) {
    var columnData13 = columnList13[columnIndex13];
    output += '<th>' + soy.$$escapeHtml(columnData13) + '</th>';
  }
  output += '</tr></thead><tbody></tbody></table>';
  return output;
};


bitex.ui.OrderBook.templates.ShowCumQty = function(opt_data) {
  var output = '';
  /** @desc Cumulative */
  var MSG_UNNAMED_116 = goog.getMsg('Cumulative');
  output += '<div class="btn btn-mini btn-default btn-show-cum-qty">' + MSG_UNNAMED_116 + '</div>';
  return output;
};


bitex.ui.OrderBook.templates.ShowFees = function(opt_data) {
  var output = '';
  /** @desc Fees */
  var MSG_UNNAMED_118 = goog.getMsg('Fees');
  output += '<div class="btn btn-mini btn-default btn-show-fees">' + MSG_UNNAMED_118 + '</div>';
  return output;
};


bitex.ui.OrderBook.templates.OrderBookDragOrder = function(opt_data) {
  var output = '';
  /** @desc Caption shown when user is drag & dropping an order in the order book */
  var MSG_UNNAMED_120 = goog.getMsg('Cancel/Replace Order');
  output += '<div class="order-book-drag-order">' + MSG_UNNAMED_120 + '</div>';
  return output;
};


bitex.ui.OrderBook.templates.OrderBookOrderQtyEl = function(opt_data) {
  return '<td class="order-book-qty">' + soy.$$escapeHtml(opt_data.qty) + '</td>';
};


bitex.ui.OrderBook.templates.OrderBookOrderPriceEl = function(opt_data) {
  return '<td class="order-book-price ' + ((opt_data.side == '0') ? 'order-book-right' : 'order-book-left') + '">' + soy.$$escapeHtml(opt_data.price) + '</td>';
};


bitex.ui.OrderBook.templates.OrderBookOrderUsernameEl = function(opt_data) {
  return (opt_data.orderId) ? '<td class="order-book-username ' + ((opt_data.side == '0') ? 'order-book-left' : 'order-book-right') + '"><a href="" class="btn-cancel-order text-error" data-order-id="' + soy.$$escapeHtml(opt_data.orderId) + '">' + ((opt_data.side == '0') ? '<i class="icon-remove" data-order-id="' + soy.$$escapeHtml(opt_data.orderId) + '" style="line-height:2px;"></i> ' + soy.$$escapeHtml(opt_data.username) : soy.$$escapeHtml(opt_data.username) + ' <i class="icon-remove" data-order-id="' + soy.$$escapeHtml(opt_data.orderId) + '" style="line-height:2px;"></i>') + '</a></td>' : '<td class="order-book-username ' + ((opt_data.side == '0') ? 'order-book-left' : 'order-book-right') + '">' + soy.$$escapeHtml(opt_data.username) + '</td>';
};


bitex.ui.OrderBook.templates.OrderBookOrderRow = function(opt_data) {
  return '<tr class="order-book-row">' + ((opt_data.side == '0') ? bitex.ui.OrderBook.templates.OrderBookOrderUsernameEl(opt_data) + bitex.ui.OrderBook.templates.OrderBookOrderQtyEl(opt_data) + bitex.ui.OrderBook.templates.OrderBookOrderPriceEl(opt_data) : bitex.ui.OrderBook.templates.OrderBookOrderPriceEl(opt_data) + bitex.ui.OrderBook.templates.OrderBookOrderQtyEl(opt_data) + bitex.ui.OrderBook.templates.OrderBookOrderUsernameEl(opt_data)) + '</tr>';
};
