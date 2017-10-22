// This file was automatically generated from templates.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.templates');

goog.require('soy');


bitex.templates.AlgoPermissionsDialogContent = function(opt_data) {
  var output = '';
  /** @desc Algorithm trading request permmissions dialog content */
  var MSG_UNNAMED_1641 = goog.getMsg('This algorithm is requesting your permission to:');
  output += '<p class="lead"> ' + MSG_UNNAMED_1641 + '</p><ul class="list-unstyled" style="line-height: 2">';
  var permissionList7 = opt_data.permissions;
  var permissionListLen7 = permissionList7.length;
  for (var permissionIndex7 = 0; permissionIndex7 < permissionListLen7; permissionIndex7++) {
    var permissionData7 = permissionList7[permissionIndex7];
    output += '<li><span class="fa fa-check text-success"></span>';
    switch (permissionData7) {
      case 'notification':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1643 = goog.getMsg(' Show notifications');
        output += MSG_UNNAMED_1643;
        break;
      case 'balance':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1645 = goog.getMsg(' See your balances');
        output += MSG_UNNAMED_1645;
        break;
      case 'execution_report':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1647 = goog.getMsg(' Listen to the execution reports from your orders');
        output += MSG_UNNAMED_1647;
        break;
      case 'new_order_limited':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1649 = goog.getMsg(' Send limited orders');
        output += MSG_UNNAMED_1649;
        break;
      case 'new_buy_order_limited':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1651 = goog.getMsg(' Send buy limited orders');
        output += MSG_UNNAMED_1651;
        break;
      case 'new_sell_order_limited':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1653 = goog.getMsg(' Send sell limited orders');
        output += MSG_UNNAMED_1653;
        break;
      case 'new_market_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1655 = goog.getMsg(' Send market orders');
        output += MSG_UNNAMED_1655;
        break;
      case 'new_buy_market_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1657 = goog.getMsg(' Send buy market orders');
        output += MSG_UNNAMED_1657;
        break;
      case 'new_sell_market_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1659 = goog.getMsg(' Send sell market order');
        output += MSG_UNNAMED_1659;
        break;
      case 'cancel_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1661 = goog.getMsg(' Cancel orders');
        output += MSG_UNNAMED_1661;
        break;
      default:
        output += soy.$$escapeHtml(permissionData7);
    }
    output += '</li>';
  }
  output += '</ul>';
  return output;
};


bitex.templates.APIKeyCreatedDialogContent = function(opt_data) {
  var output = '';
  /** @desc API Key created dialog description */
  var MSG_UNNAMED_1663 = goog.getMsg(
      'The API Key \'{$label}\' has been created successfully. Please make sure to store the credentials below in a secure location.',
      {'label': soy.$$escapeHtml(opt_data.label)});
  /** @desc API Key label on API Keycreated dialog */
  var MSG_UNNAMED_1665 = goog.getMsg('API Key');
  /** @desc API Password label on API Keycreated dialog */
  var MSG_UNNAMED_1667 = goog.getMsg('API Password');
  /** @desc API Secret label on API Keycreated dialog */
  var MSG_UNNAMED_1669 = goog.getMsg('API Secret');
  /** @desc Warning message on the API Key created dialog description */
  var MSG_UNNAMED_1671 = goog.getMsg('Warning! ');
  /** @desc Warning message on the API Key created dialog description */
  var MSG_UNNAMED_1673 = goog.getMsg('The API secret and password will never be displayed again. Make sure you have saved it before closing this window.');
  output += '<p>' + MSG_UNNAMED_1663 + '</p><dl class="dl-horizontal"><dt>' + MSG_UNNAMED_1665 + '</dt><dd>' + soy.$$escapeHtml(opt_data.key) + '</dd><dt>' + MSG_UNNAMED_1667 + '</dt><dd>' + soy.$$escapeHtml(opt_data.password) + '</dd><dt>' + MSG_UNNAMED_1669 + '</dt><dd>' + soy.$$escapeHtml(opt_data.secret) + '</dd></dl><div class="alert alert-error"><strong>' + MSG_UNNAMED_1671 + '</strong>' + MSG_UNNAMED_1673 + '</div>';
  return output;
};


bitex.templates.CustomerDetailDialog = function(opt_data) {
  var output = '';
  /** @desc Customer username */
  var MSG_UNNAMED_1675 = goog.getMsg('Username:');
  output += '<div class="row"><div class="span6">' + MSG_UNNAMED_1675 + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</div></div>';
  return output;
};


bitex.templates.ErrorDialogContent = function(opt_data) {
  var output = '';
  /** @desc Error code label on error dialog content */
  var MSG_UNNAMED_1677 = goog.getMsg('Error code');
  output += '<p class="lead">' + soy.$$escapeHtml(opt_data.error_message) + '</p><dl class="dl-horizontal"><dt>' + MSG_UNNAMED_1677 + '</dt><dd>' + soy.$$escapeHtml(opt_data.error_code) + '</dd></dl>';
  return output;
};


bitex.templates.FileViewDialogContent = function(opt_data) {
  return '<img src="' + soy.$$escapeHtml(opt_data.filename) + '" style="width:500px"/>';
};


bitex.templates.DepositDetailDialogContent = function(opt_data) {
  var output = '<table class="table table-bordered table-condensed"><tbody>';
  var dataList95 = opt_data.depositDetailData;
  var dataListLen95 = dataList95.length;
  for (var dataIndex95 = 0; dataIndex95 < dataListLen95; dataIndex95++) {
    var dataData95 = dataList95[dataIndex95];
    output += '<tr><td>' + soy.$$escapeHtml(dataData95['key']) + ' :</td><td>' + soy.$$escapeHtml(dataData95['value']) + '</td></tr>';
  }
  if (opt_data.depositReceiptList) {
    /** @desc Download picture link on deposit receipt dialog content */
    var MSG_UNNAMED_1679 = goog.getMsg('Download');
    output += '<tr><td>Recibo:</td><td>';
    var receiptList105 = opt_data.depositReceiptList;
    var receiptListLen105 = receiptList105.length;
    for (var receiptIndex105 = 0; receiptIndex105 < receiptListLen105; receiptIndex105++) {
      var receiptData105 = receiptList105[receiptIndex105];
      output += '<a href="' + soy.$$escapeHtml(receiptData105['url']) + '" target="_blank">' + MSG_UNNAMED_1679 + '</a> ';
    }
    output += '</td></tr>';
    var receiptList114 = opt_data.depositReceiptList;
    var receiptListLen114 = receiptList114.length;
    for (var receiptIndex114 = 0; receiptIndex114 < receiptListLen114; receiptIndex114++) {
      var receiptData114 = receiptList114[receiptIndex114];
      output += '<tr><td colspan="2">' + ((receiptData114['type'] == 'image') ? '<img width="100%" src="' + soy.$$escapeHtml(receiptData114['url']) + '"/>' : (receiptData114['type'] == 'pdf') ? '<iframe src="https://docs.google.com/gview?url=' + soy.$$escapeHtml(receiptData114['url']) + '&embedded=true" style="width:515px; height:300px;" frameborder="0" />' : '') + '</td></tr>';
    }
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.DepositReceiptDialogContent = function(opt_data) {
  var output = '';
  /** @desc Download picture link on deposit receipt dialog content */
  var MSG_UNNAMED_1681 = goog.getMsg('Download');
  var receipt_urlList131 = opt_data.depositReceiptList;
  var receipt_urlListLen131 = receipt_urlList131.length;
  for (var receipt_urlIndex131 = 0; receipt_urlIndex131 < receipt_urlListLen131; receipt_urlIndex131++) {
    var receipt_urlData131 = receipt_urlList131[receipt_urlIndex131];
    output += '<img width="100%" src="' + soy.$$escapeHtml(receipt_urlData131) + '"/><a href="' + soy.$$escapeHtml(receipt_urlData131) + '" target="_blank">' + MSG_UNNAMED_1681 + '</a>';
  }
  return output;
};


bitex.templates.BrokerConfirmDepositContent = function(opt_data) {
  var output = '';
  /** @desc Control number label */
  var MSG_UNNAMED_1683 = goog.getMsg('Control number');
  /** @desc Amount label */
  var MSG_UNNAMED_1685 = goog.getMsg('Amount paid');
  /** @desc Fee percentage label */
  var MSG_UNNAMED_1687 = goog.getMsg('Fees:');
  /** @desc Net amount */
  var MSG_UNNAMED_1689 = goog.getMsg('Net amount');
  output += '<form class="form-horizontal broker-confirm-deposit"><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1683 + '</label><div class="controls"><label class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.controlNumber) + '</label></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1685 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.id_value) + '" type="text" class="input-small" size="16" name="PaidValue" value="' + soy.$$escapeHtml(opt_data.value) + '"></div></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1687 + '</label><div class="controls"><div class="row-fluid"><div class="span4"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="text" class="input-mini" size="16" name="Fee" value="' + soy.$$escapeHtml(opt_data.percentFee) + '"><span class="add-on">%</span></div></div><div class="span4"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="text" class="input-mini" size="16" name="Fee" value="' + soy.$$escapeHtml(opt_data.fixedFee) + '"></div></div><div class="span4"><label id="' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label broker-confirm-deposit-fee" style="text-align: left;"></label></div></div></div></div><div class="control-group"><label class="control-label net-amount">' + MSG_UNNAMED_1689 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label net-amount broker-confirm-deposit-net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div></div></form>';
  return output;
};


bitex.templates.InstantFiatDepositDialogContent = function(opt_data) {
  var output = '';
  /** @desc Instant deposit fiat description 1 */
  var MSG_UNNAMED_1691 = goog.getMsg('Net value:');
  /** @desc Instant deposit fiat description 2 */
  var MSG_UNNAMED_1693 = goog.getMsg('Pre approval limit:');
  /** @desc Instant deposit fiat description 3 */
  var MSG_UNNAMED_1695 = goog.getMsg('(3x the approx. value of your account.)');
  /** @desc Instant deposit fiat description 4 */
  var MSG_UNNAMED_1697 = goog.getMsg('Pre approval fee: 0% (Promotional)');
  /** @desc Instant deposit fiat message */
  var MSG_UNNAMED_1699 = goog.getMsg('You won\'t be able to withdrawal funds until your DEPOSIT IS CONFIRMED by the exchange. In case of a fake deposit receipt or any fraud attempt, an administrative fee of 30% of the deposit amount will be applied and your account will be TERMINATED.');
  output += '<div class="row-fluid" data-deposit-status="confirm"><p>' + MSG_UNNAMED_1691 + ' <span class="bitex-model" data-model-key-list="' + soy.$$escapeHtml(opt_data.variables) + '" data-model-formula="min( ' + soy.$$escapeHtml(opt_data.formula) + ',  ' + soy.$$escapeHtml(opt_data.value) + ' )" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.pattern) + '" data-blink-class="balance-info-blink"></span></p><p>' + MSG_UNNAMED_1693 + '<span class="bitex-model" data-model-key-list="' + soy.$$escapeHtml(opt_data.variables) + '" data-model-formula="' + soy.$$escapeHtml(opt_data.formula) + '" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.pattern) + '" data-blink-class="balance-info-blink"></span> ' + MSG_UNNAMED_1695 + '</p><p>' + MSG_UNNAMED_1697 + '</p><div class="well"><p>' + MSG_UNNAMED_1699 + '</p></div></div>';
  return output;
};


bitex.templates.BrokerView = function(opt_data) {
  var output = '';
  if (opt_data.show_title) {
    /** @desc Title for the Broker view */
    var MSG_UNNAMED_1701 = goog.getMsg('My broker');
    output += '<div class="section-title"><h3>' + MSG_UNNAMED_1701 + '</h3></div>';
  }
  output += '<div class="content">';
  if (opt_data.msg_broker['BrokerID'] == -1) {
  } else {
    /** @desc Terms of service section subtitle on Broker view */
    var MSG_UNNAMED_1725 = goog.getMsg('Terms of service');
    output += '<address><strong>' + soy.$$escapeHtml(opt_data.msg_broker['BusinessName']) + '</strong><br/>' + soy.$$escapeHtml(opt_data.msg_broker['Address']) + '<br/>' + soy.$$escapeHtml(opt_data.msg_broker['City']) + ', ' + soy.$$escapeHtml(opt_data.msg_broker['State']) + ' ' + soy.$$escapeHtml(opt_data.msg_broker['ZipCode']) + ' - ' + soy.$$escapeHtml(opt_data.msg_broker['Country']) + '<br/>';
    if (opt_data.msg_broker['PhoneNumber1']) {
      /** @desc label in broker general information table */
      var MSG_UNNAMED_1703 = goog.getMsg('Phone');
      /** @desc label in broker general information table */
      var MSG_UNNAMED_1705 = goog.getMsg('P:');
      output += '<abbr title="' + MSG_UNNAMED_1703 + '">' + MSG_UNNAMED_1705 + '</abbr>' + soy.$$escapeHtml(opt_data.msg_broker['PhoneNumber1']) + ' ' + ((opt_data.msg_broker['PhoneNumber2']) ? ', ' + soy.$$escapeHtml(opt_data.msg_broker['PhoneNumber2']) : '') + '<br/>';
    }
    output += ((opt_data.msg_broker['Skype']) ? 'Skype: ' + soy.$$escapeHtml(opt_data.msg_broker['Skype']) + '<br/>' : '') + '<a href="mailto:' + soy.$$escapeHtml(opt_data.msg_broker['Email']) + '" target="_blank">' + soy.$$escapeHtml(opt_data.msg_broker['Email']) + '</a></address>';
    if (opt_data.msg_broker['BrokerID'] > 0) {
      /** @desc Allowed markets section subtitle on broker view */
      var MSG_UNNAMED_1707 = goog.getMsg('Markets');
      output += '<div class="row-fluid"><div class="span3"><h4>' + MSG_UNNAMED_1707 + '</h4>';
      var allowed_marketList266 = soy.$$getMapKeys(opt_data.msg_broker['AllowedMarkets']);
      var allowed_marketListLen266 = allowed_marketList266.length;
      for (var allowed_marketIndex266 = 0; allowed_marketIndex266 < allowed_marketListLen266; allowed_marketIndex266++) {
        var allowed_marketData266 = allowed_marketList266[allowed_marketIndex266];
        output += '<div class="row-fluid"><div class="span12">' + soy.$$escapeHtml(opt_data.msg_broker['AllowedMarkets'][allowed_marketData266]['description']) + '</div></div>';
      }
      output += '</div></div>';
    }
    if (! opt_data.msg_broker['IsBrokerHub']) {
      /** @desc Wallet section subtitle on Broker view */
      var MSG_UNNAMED_1709 = goog.getMsg('Wallets');
      /** @desc Coin  column on Broker wallet table */
      var MSG_UNNAMED_1711 = goog.getMsg('Coin');
      /** @desc type  column on Broker wallet table */
      var MSG_UNNAMED_1713 = goog.getMsg('Type');
      /** @desc address column type on Broker wallet table */
      var MSG_UNNAMED_1715 = goog.getMsg('Address');
      /** @desc multisig column type on Broker wallet table */
      var MSG_UNNAMED_1717 = goog.getMsg('Multi signature');
      /** @desc managed by column on Broker wallet table */
      var MSG_UNNAMED_1719 = goog.getMsg('Managed by');
      output += '<h4>' + MSG_UNNAMED_1709 + '</h4><table class="table table-bordered"><thead><tr><th>' + MSG_UNNAMED_1711 + '</th><th>' + MSG_UNNAMED_1713 + '</th><th>' + MSG_UNNAMED_1715 + '</th><th>' + MSG_UNNAMED_1717 + '</th><th>' + MSG_UNNAMED_1719 + '</th></tr></thead><tbody>';
      var crypto_currenciesList293 = opt_data.msg_broker['CryptoCurrencies'];
      var crypto_currenciesListLen293 = crypto_currenciesList293.length;
      for (var crypto_currenciesIndex293 = 0; crypto_currenciesIndex293 < crypto_currenciesListLen293; crypto_currenciesIndex293++) {
        var crypto_currenciesData293 = crypto_currenciesList293[crypto_currenciesIndex293];
        var walletsList294 = crypto_currenciesData293['Wallets'];
        var walletsListLen294 = walletsList294.length;
        for (var walletsIndex294 = 0; walletsIndex294 < walletsListLen294; walletsIndex294++) {
          var walletsData294 = walletsList294[walletsIndex294];
          output += '<tr><td>' + soy.$$escapeHtml(crypto_currenciesData293['CurrencyDescription']) + '</td><td>' + soy.$$escapeHtml(walletsData294['type']) + '</td><td class="broker-wallet">';
          if (crypto_currenciesData293['CurrencyCode'] == 'BTC') {
            switch (walletsData294['address'][0]) {
              case 'm':
              case 'n':
              case '2':
              case '9':
              case 'c':
                output += '<a href="https://live.blockcypher.com/btc-testnet/address/' + soy.$$escapeHtml(walletsData294['address']) + '/" target="_blank">' + soy.$$escapeHtml(walletsData294['address']) + '</a>';
                break;
              default:
                output += '<a href="https://blockchain.info/address/' + soy.$$escapeHtml(walletsData294['address']) + '/" target="_blank">' + soy.$$escapeHtml(walletsData294['address']) + '</a>';
            }
          } else {
            output += soy.$$escapeHtml(walletsData294['address']);
          }
          output += '</td><td>';
          if (walletsData294['multisig']) {
            /** @desc Multisig true */
            var MSG_UNNAMED_1721 = goog.getMsg('Yes');
            output += MSG_UNNAMED_1721;
          } else {
            /** @desc Multisig false */
            var MSG_UNNAMED_1723 = goog.getMsg('No');
            output += MSG_UNNAMED_1723;
          }
          output += '</td><td>' + soy.$$escapeHtml(walletsData294['managed_by']) + '</td></tr>';
        }
      }
      output += '</tbody></table>';
    }
    output += '<h4>' + MSG_UNNAMED_1725 + '</h4><iframe style="width:100%;height:400px;" src="' + soy.$$escapeHtml(opt_data.msg_broker['TosUrl']) + '"></iframe>';
  }
  output += '</div>';
  return output;
};


bitex.templates.CancelDepositDialogContent = function(opt_data) {
  var output = '';
  /** @desc Cancel deposit dialog message */
  var MSG_UNNAMED_1727 = goog.getMsg('Enter a reason for cancelling the deposit');
  /** @desc Cancel deposit reason label */
  var MSG_UNNAMED_1729 = goog.getMsg('Reason:');
  /** @desc reason for cancelling deposit */
  var MSG_UNNAMED_1731 = goog.getMsg('Other');
  output += '<p>' + MSG_UNNAMED_1727 + '</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.reason_id) + '" >' + MSG_UNNAMED_1729 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.reason_id) + '"><option value="0" selected>' + MSG_UNNAMED_1731 + '</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + soy.$$escapeHtml(opt_data.custom_reason_id) + '" rows="2" style=""></textarea></div></div></fieldset></form>';
  return output;
};


bitex.templates.GoogleAuthenticationCodeDialogContent = function(opt_data) {
  var output = '';
  /** @desc Google Authenticator code dialog label */
  var MSG_UNNAMED_1733 = goog.getMsg('Google Authenticator code:');
  /** @desc Limit table field header */
  var MSG_UNNAMED_1735 = goog.getMsg('Google authenticator code');
  /** @desc Google Authenticator code placeholder */
  var MSG_UNNAMED_1737 = goog.getMsg('eg. 555555');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><div class="control-group"><label>' + MSG_UNNAMED_1733 + '</label><input name="token" id="id_input_google_authenticator" data-uniform-validators="required" data-uniform-label="' + MSG_UNNAMED_1735 + '" label="' + MSG_UNNAMED_1737 + '" class="input-large" type="text" size="10"></div></fieldset></form>';
  return output;
};


bitex.templates.SecondFactorTokenDialogContent = function(opt_data) {
  var output = '';
  /** @desc Placeholder for the code field on the second factor token dialog */
  var MSG_UNNAMED_1739 = goog.getMsg('eg. 5555555');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><div class="control-group"><label>' + soy.$$escapeHtml(opt_data.description) + '</label><input name="token" id="' + soy.$$escapeHtml(opt_data.id) + '_token" data-uniform-validators="required" label="' + MSG_UNNAMED_1739 + '" class="input-large" type="text" size="10"></div>';
  if (opt_data.askForTrust) {
    /** @desc Label on the two factor authenticatior */
    var MSG_UNNAMED_1741 = goog.getMsg('Trust this device for 30 days');
    output += '<div class="control-group"><label class="checkbox"><input type="checkbox" name="TrustedDevice">' + MSG_UNNAMED_1741 + '</label></div>';
  }
  output += '</fieldset></form>';
  return output;
};


bitex.templates.BrokerChangeEmailDialogContent = function(opt_data) {
  var output = '';
  /** @desc Warning label on the Broker change email dialog content */
  var MSG_UNNAMED_1743 = goog.getMsg('Warning');
  /** @desc Change email warning message on the broker change email dialog content */
  var MSG_UNNAMED_1745 = goog.getMsg('Authorizing the change of a user\'s email address is always dangerous. Hackers will try to social engineer you into changing a user\'s email address to one they have control over. Additionally a bad intentioned user can pretend to be the victim of a hacker and claim that he did not request the change in order to ask for reimbursement.');
  /** @desc change email label */
  var MSG_UNNAMED_1747 = goog.getMsg('New Email');
  /** @desc First label warning on broker change email */
  var MSG_UNNAMED_1749 = goog.getMsg('I verified the identity of the user who requested the change with a video conference.');
  /** @desc Second label warning on broker change email */
  var MSG_UNNAMED_1751 = goog.getMsg('I am certain that the user is not able to receive the emails sent by our service.');
  /** @desc Third label warning on broker change email */
  var MSG_UNNAMED_1753 = goog.getMsg('I take 100% responsibility of possible losses should this user turn out to be an impostor.');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><div class="alert alert-warning"><strong>' + MSG_UNNAMED_1743 + '</strong> - ' + MSG_UNNAMED_1745 + '</div><div class="control-group"><label>' + MSG_UNNAMED_1747 + '</label><input id="' + soy.$$escapeHtml(opt_data.id) + '_new_email" type="text" data-uniform-validators="validateEmail;required" size="10"></div><div class="control-group"><label class="checkbox"  for="' + soy.$$escapeHtml(opt_data.id) + '_check_warning_1"><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_check_warning_1">' + MSG_UNNAMED_1749 + '</label><label class="checkbox"  for="' + soy.$$escapeHtml(opt_data.id) + '_check_warning_2"><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_check_warning_2">' + MSG_UNNAMED_1751 + '</label><label class="checkbox"  for="' + soy.$$escapeHtml(opt_data.id) + '_check_warning_3"><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_check_warning_3">' + MSG_UNNAMED_1753 + '</label></div></fieldset></form>';
  return output;
};


bitex.templates.WithdrawConfirmationDialogContent = function(opt_data) {
  var output = '';
  /** @desc Withdraw confirmation dialog message */
  var MSG_UNNAMED_1755 = goog.getMsg('We just sent a confirmation code to your email.');
  /** @desc Confirmation code placeholder on withdraw confirmation dialog */
  var MSG_UNNAMED_1757 = goog.getMsg('Confirmation code');
  /** @desc Withdraw confirmation dialog security disclaimer */
  var MSG_UNNAMED_1759 = goog.getMsg('This is security measure to improve your account security');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><p>' + MSG_UNNAMED_1755 + '</p><div class="control-group"><label>Confirmation Code</label><input name="confirmation_code" type="text" data-uniform-validators="required" label="' + MSG_UNNAMED_1757 + '" class="input-block-level"></div><p><i>' + MSG_UNNAMED_1759 + '</i></p></fieldset></form>';
  return output;
};


bitex.templates.UserFeesDialogContent = function(opt_data) {
  var output = '';
  /** @desc Buy fee */
  var MSG_UNNAMED_1761 = goog.getMsg('Taker Buy fee ');
  /** @desc Buy fee */
  var MSG_UNNAMED_1763 = goog.getMsg('Maker Buy fee ');
  /** @desc Buy fee */
  var MSG_UNNAMED_1765 = goog.getMsg('Taker Sell fee');
  /** @desc Buy fee */
  var MSG_UNNAMED_1767 = goog.getMsg('Maker Sell fee');
  output += '<form class="form-horizontal"><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee">' + MSG_UNNAMED_1761 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_taker_buy_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.taker_buy_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_taker_buy_fee"> Use Broker Fee</label></div></div></div><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee">' + MSG_UNNAMED_1763 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.buy_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_buy_fee"> Use Broker Fee</label></div></div></div><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee">' + MSG_UNNAMED_1765 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_taker_sell_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.taker_sell_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_taker_sell_fee"> Use Broker Fee</label></div></div></div><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee">' + MSG_UNNAMED_1767 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.sell_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_sell_fee"> Use Broker Fee</label></div></div></div></form>';
  return output;
};


bitex.templates.AccountBalances = function(opt_data) {
  var output = '<table class="table table-striped" style="width: 350px"><tbody>';
  var currencyList475 = opt_data.currencies;
  var currencyListLen475 = currencyList475.length;
  for (var currencyIndex475 = 0; currencyIndex475 < currencyListLen475; currencyIndex475++) {
    var currencyData475 = currencyList475[currencyIndex475];
    /** @desc label for available balance in a currency */
    var MSG_UNNAMED_1769 = goog.getMsg(
        'Available {$currency}',
        {'currency': soy.$$escapeHtml(currencyData475)});
    output += '<tr><td><strong>' + MSG_UNNAMED_1769 + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(currencyData475) + '" data-blink-class="balance-info-blink"></span></td>';
    if (opt_data.action == 'deposit') {
      /** @desc Deposit button label */
      var MSG_UNNAMED_1771 = goog.getMsg(' Deposit');
      output += '<td><button class="btn btn-mini" data-action="deposit"  data-currency="' + soy.$$escapeHtml(currencyData475) + '"><i data-action="deposit"  data-currency="' + soy.$$escapeHtml(currencyData475) + '" class="icon-plus"/>' + MSG_UNNAMED_1771 + '</button></td>';
    }
    if (opt_data.action == 'withdraw') {
      /** @desc Deposit button label */
      var MSG_UNNAMED_1773 = goog.getMsg(' Withdraw');
      output += '<td><button class="btn btn-mini" data-action="withdraw" data-currency="' + soy.$$escapeHtml(currencyData475) + '"><i data-action="withdraw" data-currency="' + soy.$$escapeHtml(currencyData475) + '" class="icon-minus"/>' + MSG_UNNAMED_1773 + '</button></td>';
    }
    output += '</tr>';
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.WaitingForDepositResponseDialogContent = function(opt_data) {
  var output = '';
  /** @desc processing deposit request waiting dialog msg */
  var MSG_UNNAMED_1775 = goog.getMsg('Processing deposit request...');
  output += '<div class="row-fluid" data-deposit-status="processing"><h5 class="text-center">' + MSG_UNNAMED_1775 + '</h5></div><div class="row-fluid"><div class="span6 offset3"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>';
  return output;
};


bitex.templates.DepositCryptoCurrencyContentDialog = function(opt_data) {
  var output = '';
  /** @desc Secured with BitGO */
  var MSG_UNNAMED_1779 = goog.getMsg('Secured with');
  output += '<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + soy.$$escapeHtml(opt_data.deposit_message['Data']['InputAddress']) + '</h4>';
  if (opt_data.formattedAmount) {
    /** @desc deposit the amount */
    var MSG_UNNAMED_1777 = goog.getMsg(' Deposit the exact amount of :');
    output += '<div class="text-center">' + MSG_UNNAMED_1777 + ' ' + soy.$$escapeHtml(opt_data.formattedAmount) + '</div>';
  }
  output += '<div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=bitcoin%3A' + soy.$$escapeHtml(opt_data.deposit_message['Data']['InputAddress']) + ((opt_data.amount) ? '%3Famount%3D' + soy.$$escapeHtml(opt_data.amount) : '') + '"/></div><p class="text-center">' + MSG_UNNAMED_1779 + ' <a href="https://www.bitgo.com/wallet?utm_source=blinktrade&amp;utm_medium=bd" target="_blank"><img style="width: 85px;" src="https://www.bitgo.com/img/bitgo-logo-black.png"></a></p>';
  if (opt_data.hasInstantDepositsEnabled) {
    /** @desc Instant deposit warning */
    var MSG_UNNAMED_1781 = goog.getMsg('Your account has instant deposits enabled. In case you intentionally try to do a "double spending" attack, your account will be frozen, even if your double spending attack is not successful.');
    output += '<div class="alert alert-block">' + MSG_UNNAMED_1781 + '</div>';
  }
  output += '</div>';
  return output;
};


bitex.templates.CryptoCurrencyQRContentDialog = function(opt_data) {
  return '<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + soy.$$escapeHtml(opt_data.data['Wallet']) + '</h4><div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=' + soy.$$escapeHtml(opt_data.data['Wallet']) + '"/></div></div>';
};


bitex.templates.ConfirmTrustedAddressContentDialog = function(opt_data) {
  var output = '';
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1783 = goog.getMsg(' Do you want to enable instant deposits for this address?');
  /** @desc confirm trusted label placeholder */
  var MSG_UNNAMED_1785 = goog.getMsg('Enter a label for this address.');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1787 = goog.getMsg('Only enable it if you have the private key for this address.');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1789 = goog.getMsg('Always remember what happened at MtGox');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1791 = goog.getMsg('Never ever under any circumstances leave your Bitcoins deposited at any Exchange, no matter how secure they claim to be. Bitcoins are meant to be with the people and not in the hands of the Exchange operator. We don\'t want to create a "pot of gold" that will attract hackers. The "Instant deposits" technology will allow you to send your bitcoins instantly to trade them in the exchange, thus eliminating the need for you to leave Bitcoins at the exchange in order to negotiate them quickly.');
  output += '<div class="row-fluid"><h3 class="text-center">' + MSG_UNNAMED_1783 + '</h3><h5 class="text-center">' + soy.$$escapeHtml(opt_data.data['Address']) + '</h5><div class="text-center"><input type="text" class="confirm-trusted-address-label" size="30" placeholder="' + MSG_UNNAMED_1785 + '"></input></div><h4 class="text-center">' + MSG_UNNAMED_1787 + '</h4><div class="alert alert-block"><h4>' + MSG_UNNAMED_1789 + '</h4>' + MSG_UNNAMED_1791 + '</div></div>';
  return output;
};


bitex.templates.InsufficientFundsContentDialog = function(opt_data) {
  var output = '';
  /** @desc Insufficient funds title */
  var MSG_UNNAMED_1793 = goog.getMsg('You don\'t have enough funds for this operation.');
  /** @desc Your account label on Insufficient Balance message */
  var MSG_UNNAMED_1795 = goog.getMsg('Your Account');
  /** @desc Your orders label on Insufficient Balance message */
  var MSG_UNNAMED_1797 = goog.getMsg('Your Orders');
  /** @desc Your orders label on Insufficient Balance message */
  var MSG_UNNAMED_1799 = goog.getMsg('Total available');
  output += '<div class="row-fluid"><p>' + MSG_UNNAMED_1793 + '</p><!-- ' + soy.$$escapeHtml(opt_data.currencyDescription) + ' --><table class="table table-bordered"><tr><td>' + MSG_UNNAMED_1795 + '</td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(opt_data.balanceKey) + '" data-blink-class="balance-info-blink">' + ((opt_data.depositFormattedBalance) ? soy.$$escapeHtml(opt_data.depositFormattedBalance) : '-') + '</span></td></tr><tr><td>' + MSG_UNNAMED_1797 + '</td><td><span class="bitex-model" data-model-key="locked_formatted_balance_' + soy.$$escapeHtml(opt_data.balanceKey) + '" data-blink-class="balance-info-blink">' + ((opt_data.lockedFormattedBalance) ? soy.$$escapeHtml(opt_data.lockedFormattedBalance) : '-') + '</span></td></tr><tr style="font-weight: bolder"><td>' + MSG_UNNAMED_1799 + '</td><td><span class="bitex-model" data-model-key="available_formatted_balance_' + soy.$$escapeHtml(opt_data.balanceKey) + '" data-blink-class="balance-info-blink">' + ((opt_data.availableFormattedBalance) ? soy.$$escapeHtml(opt_data.availableFormattedBalance) : '-') + '</span></td></tr></table>';
  if (opt_data.lockedFormattedBalance) {
    /** @desc Insufficient funds instructions */
    var MSG_UNNAMED_1801 = goog.getMsg('Please either deposit funds or cancel some of your other orders.');
    output += '<p>' + MSG_UNNAMED_1801 + '</p>';
  }
  output += '</div>';
  return output;
};


bitex.templates.ConfirmOrderContentDialog = function(opt_data) {
  var output = '';
  /** @desc Confirmation order title */
  var MSG_UNNAMED_1803 = goog.getMsg('Confirm your order');
  /** @desc Price per bitcoin confirmation message */
  var MSG_UNNAMED_1809 = goog.getMsg('Price per bitcoin');
  /** @desc For a total message */
  var MSG_UNNAMED_1811 = goog.getMsg('For a total of');
  output += '<div class="row-fluid"><p>' + MSG_UNNAMED_1803 + '</p><table class="table table-bordered"><tr><td>';
  if (opt_data.side == '1') {
    /** @desc You are buying message */
    var MSG_UNNAMED_1805 = goog.getMsg('You are buying');
    output += MSG_UNNAMED_1805;
  } else {
    /** @desc You are selling message */
    var MSG_UNNAMED_1807 = goog.getMsg('You are selling');
    output += MSG_UNNAMED_1807;
  }
  output += '</td><td><span class="bitex-model">' + soy.$$escapeHtml(opt_data.amount) + '</span></td></tr><tr><td>' + MSG_UNNAMED_1809 + '</td><td><span class="bitex-model">' + soy.$$escapeHtml(opt_data.price) + '</span></td></tr><tr><td>' + MSG_UNNAMED_1811 + '</td><td><span class="bitex-model">' + soy.$$escapeHtml(opt_data.total) + '</span></td></tr></table></div>';
  return output;
};


bitex.templates.ConfirmDepositCryptoCurrencyContentDialog = function(opt_data) {
  var output = '';
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1813 = goog.getMsg(' IMPORTANT! ');
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1815 = goog.getMsg(
      ' We will generate a unique {$currencydescription} address that will be valid only for this transaction.',
      {'currencydescription': soy.$$escapeHtml(opt_data.currencydescription)});
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1817 = goog.getMsg(' Did you understand? ');
  output += '<div class="row-fluid" data-deposit-status="confirm"><h3 class="text-center">' + MSG_UNNAMED_1813 + '</h3><h4 class="text-center">' + MSG_UNNAMED_1815 + '</h4><h3 class="text-center">' + MSG_UNNAMED_1817 + '</h3><br/><br/></div>';
  return output;
};


bitex.templates.ConfirmEmailSignupContentDialog = function(opt_data) {
  var output = '';
  /** @desc Confirm Email */
  var MSG_UNNAMED_1819 = goog.getMsg('Email: ');
  output += '<div class="row-fluid"><div class="control-group"><label for="email_confirm_field">' + soy.$$escapeHtml(opt_data.email) + '</label></div><div class="control-group"><label class="control-label" for="email_confirm_field">' + MSG_UNNAMED_1819 + '</label><div class="controls"><input type="text" id="id_email_confirm_field" /></div></div></div>';
  return output;
};


bitex.templates.DepositSlipContentDialog = function(opt_data) {
  return '<div class="row-fluid" data-deposit-status="done"><iframe allowtransparency="true" src="' + soy.$$escapeHtml(opt_data.rest_url) + '/get_deposit?deposit_id=' + soy.$$escapeHtml(opt_data.deposit_id) + '" frameborder="0" style="width: 500px; height: 500px; border: none;" scrolling="yes"></iframe></div>';
};


bitex.templates.FeesFormControls = function(opt_data) {
  var output = '';
  /** @desc Fee label */
  var MSG_UNNAMED_1821 = goog.getMsg('Fees:');
  /** @desc Fee percentage label */
  var MSG_UNNAMED_1823 = goog.getMsg('Percent fee');
  /** @desc Fee fixed label */
  var MSG_UNNAMED_1825 = goog.getMsg('Fixed fee');
  /** @desc Net amount */
  var MSG_UNNAMED_1827 = goog.getMsg('Net amount');
  output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1821 + '</label><div class="controls"><div class="row-fluid"><div class="span3"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="text" class="input-mini" size="16"  style="width: 40px;" name="PercentFee" value="' + soy.$$escapeHtml(opt_data.percentFee) + '"><span class="add-on">%</span></div><span style="font-style: italic;">' + MSG_UNNAMED_1823 + '</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">+</span></div><div class="span3"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="text" class="input-mini" size="16" style="width: 40px;" name="FixedFee" value="' + soy.$$escapeHtml(opt_data.fixedFee) + '"></div><span style="font-style: italic;">' + MSG_UNNAMED_1825 + '</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">=</span></div><div class="span4"><label id="' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label></div></div></div></div><div class="control-group" style="' + ((opt_data.hideNetValueID) ? 'display:none' : '') + '"><label class="control-label net-amount">' + MSG_UNNAMED_1827 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div></div>';
  return output;
};


bitex.templates.FeesForm = function(opt_data) {
  var output = '';
  /** @desc requested amount */
  var MSG_UNNAMED_1829 = goog.getMsg('Requested Amount');
  output += '<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="Currency" value="' + soy.$$escapeHtml(opt_data.currency) + '"><input id="' + soy.$$escapeHtml(opt_data.amountID) + '" type="hidden" name="Amount" value="' + soy.$$escapeHtml(opt_data.amount) + '"><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1829 + '</label><div class="controls"><label class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.formattedAmount) + '</label></div></div>' + bitex.templates.FeesFormControls({currencySign: opt_data.currencySign, percentFeeID: opt_data.percentFeeID, percentFee: opt_data.percentFee, fixedFeeID: opt_data.fixedFeeID, fixedFee: opt_data.fixedFee, totalFeesID: opt_data.totalFeesID, netValueID: opt_data.netValueID, hideNetValueID: true}) + '</form>';
  return output;
};


bitex.templates.DepositWithdrawDialogContent = function(opt_data) {
  var output = '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><input type="hidden" name="Currency" value="' + soy.$$escapeHtml(opt_data.currency) + '">' + ((opt_data.side == 'broker') ? '<input id="' + soy.$$escapeHtml(opt_data.amountID) + '" type="hidden" name="Amount" value="' + soy.$$escapeHtml(opt_data.amount / 1.0e8) + '">' : '') + '<div class="error"></div>';
  if (opt_data.type == 'withdrawal') {
    /** @desc Warning message when the user has unconfirmed deposits. */
    var MSG_UNNAMED_1831 = goog.getMsg('You can\'t withdraw funds from the exchange while you have unconfirmed deposits.');
    output += '<div class="alert alert-warning text-left bitex-model" data-model-action="show_element" data-model-key-list="HasAnyPosition" data-model-formula="HasAnyPosition" style="display:none;">' + MSG_UNNAMED_1831 + '</div>';
  }
  if (! opt_data.force_method) {
    if (opt_data.methods.length > 1) {
      /** @desc method */
      var MSG_UNNAMED_1833 = goog.getMsg('Method');
      output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1833 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.methodID) + '" name="Method" class="withdraw-method-selector">';
      var methodList750 = opt_data.methods;
      var methodListLen750 = methodList750.length;
      for (var methodIndex750 = 0; methodIndex750 < methodListLen750; methodIndex750++) {
        var methodData750 = methodList750[methodIndex750];
        output += '<option value="' + soy.$$escapeHtml(methodData750['method']) + '" data-net-value="' + soy.$$escapeHtml(methodData750['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" data-percent-fee="' + soy.$$escapeHtml(methodData750['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" data-fixed-fee="' + soy.$$escapeHtml(methodData750['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '">' + soy.$$escapeHtml(methodData750['description']) + '</option>';
      }
      output += '</select></div></div>';
    } else {
      var methodList771 = opt_data.methods;
      var methodListLen771 = methodList771.length;
      for (var methodIndex771 = 0; methodIndex771 < methodListLen771; methodIndex771++) {
        var methodData771 = methodList771[methodIndex771];
        output += '<input  id="' + soy.$$escapeHtml(opt_data.methodID) + '" type="hidden" name="Method"  value="' + soy.$$escapeHtml(methodData771['method']) + '" data-net-value="' + soy.$$escapeHtml(methodData771['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" data-percent-fee="' + soy.$$escapeHtml(methodData771['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" data-fixed-fee="' + soy.$$escapeHtml(methodData771['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '">';
      }
    }
  }
  output += '<div class="withdraw-methods">';
  if (opt_data.methods.length == 0) {
    if (opt_data.verificationLevel <= 2) {
      /** @desc Error message when the user is not yet verified. */
      var MSG_UNNAMED_1835 = goog.getMsg(
          'Due to anti-money laundry international laws and government regulations, deposits/withdrawals in the local currency are only available to verified customers.{$break}We are very sorry for the inconvenience.',
          {'break': '<br/>'});
      output += '<div class="alert alert-warning text-left">' + MSG_UNNAMED_1835 + '</div>';
      if (opt_data.verificationLevel == 0) {
        /** @desc get verified message */
        var MSG_UNNAMED_1837 = goog.getMsg(' Verify your account ');
        output += '<a href="" data-switch-view="verification">' + MSG_UNNAMED_1837 + '</a>';
      }
    } else {
      /** @desc Error message when the brokers doesn't have deposit methods */
      var MSG_UNNAMED_1839 = goog.getMsg('We are not accepting deposits at this moment. We sorry for the inconvenience.');
      output += '<div class="alert alert-danger text-center">' + MSG_UNNAMED_1839 + '</div>';
    }
  }
  var methodList816 = opt_data.methods;
  var methodListLen816 = methodList816.length;
  for (var methodIndex816 = 0; methodIndex816 < methodListLen816; methodIndex816++) {
    var methodData816 = methodList816[methodIndex816];
    if (opt_data.force_method) {
      if (methodData816['method'] == opt_data.force_method) {
        if (opt_data.side == 'client') {
          /** @desc amount */
          var MSG_UNNAMED_1841 = goog.getMsg('Amount');
          output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1841 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(methodData816['method']) + '_' + soy.$$escapeHtml(opt_data.amountID) + '" data-uniform-validators="required; validateNumber ' + ((methodData816['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData816['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData816['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData816['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData816['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-type="number" data-uniform-filters="positive_number" type="text" class="withdraw-field input-small" size="16" value="' + ((opt_data.formattedAmount) ? soy.$$escapeHtml(opt_data.formattedAmount) : '') + '" name="Amount"></div>';
          if (methodData816['limits'][opt_data.verificationLevel]['enabled']) {
            output += '<div><em><small>';
            if (methodData816['limits'][opt_data.verificationLevel]['max']) {
              /** @desc amount help block */
              var MSG_UNNAMED_1843 = goog.getMsg(
                  ' Available: {$xxx}',
                  {'xxx': soy.$$escapeHtml(methodData816['limits'][opt_data.verificationLevel]['formatted_max'])});
              output += MSG_UNNAMED_1843 + '<br>';
            }
            if (methodData816['limits'][opt_data.verificationLevel]['min']) {
              /** @desc amount help block */
              var MSG_UNNAMED_1845 = goog.getMsg(
                  ' Minimum: {$xxx} per transaction.  ',
                  {'xxx': soy.$$escapeHtml(methodData816['limits'][opt_data.verificationLevel]['formatted_min'])});
              output += MSG_UNNAMED_1845;
            }
            output += '</small></em></div>';
          }
          output += '</div></div>';
        }
        var fieldList870 = methodData816['fields'];
        var fieldListLen870 = fieldList870.length;
        for (var fieldIndex870 = 0; fieldIndex870 < fieldListLen870; fieldIndex870++) {
          var fieldData870 = fieldList870[fieldIndex870];
          output += (fieldData870['side'] == opt_data.side) ? '<div class="control-group"><label class="control-label">' + soy.$$escapeHtml(fieldData870['label']) + '</label><div class="controls"><input class="withdraw-field" data-uniform-validators="' + soy.$$escapeHtml(fieldData870['validator']) + '" type="' + soy.$$escapeHtml(fieldData870['type']) + '" name="' + soy.$$escapeHtml(fieldData870['name']) + '" label="' + soy.$$escapeHtml(fieldData870['placeholder']) + '" value="' + soy.$$escapeHtml(fieldData870['value']) + '"/></div></div>' : '';
        }
        if (opt_data.side == 'client') {
          /** @desc Fee percentage label */
          var MSG_UNNAMED_1847 = goog.getMsg('Fees:');
          output += '<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + soy.$$escapeHtml(methodData816['disclaimer']) + '</label><input id="' + soy.$$escapeHtml(methodData816['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData816['percent_fee']) + '"><input id="' + soy.$$escapeHtml(methodData816['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData816['fixed_fee']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1847 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(methodData816['method']) + '_' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label></div></div><div class="control-group" ' + ((opt_data.hideNetAmount) ? ' style="display:none;" ' : '') + ' ><label class="control-label net-amount">' + soy.$$escapeHtml(opt_data.netAmountLabel) + ':</label><div class="controls"><label id="' + soy.$$escapeHtml(methodData816['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(methodData816['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div></div>';
        } else {
          output += (opt_data.side == 'broker') ? '<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + soy.$$escapeHtml(methodData816['disclaimer']) + '</label></div></div>' + ((opt_data.showFeeDataEntry) ? bitex.templates.FeesFormControls({currencySign: opt_data.currencySign, percentFeeID: methodData816['method'] + '_' + opt_data.percentFeeID, percentFee: methodData816['percent_fee'], fixedFeeID: methodData816['method'] + '_' + opt_data.fixedFeeID, fixedFee: methodData816['fixed_fee'], totalFeesID: methodData816['method'] + '_' + opt_data.totalFeesID, netValueID: methodData816['method'] + '_' + opt_data.netValueID}) : '') : '';
        }
      }
    } else {
      /** @desc Fee percentage label */
      var MSG_UNNAMED_1855 = goog.getMsg('Fees:');
      output += '<div class="withdraw-method" data-withdraw-method="' + soy.$$escapeHtml(methodData816['method']) + '" style="' + ((opt_data.methods.length > 1) ? 'display:none;' : '') + '">';
      if (opt_data.side == 'client') {
        /** @desc amount */
        var MSG_UNNAMED_1849 = goog.getMsg('Amount');
        output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1849 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(methodData816['method']) + '_' + soy.$$escapeHtml(opt_data.amountID) + '" data-uniform-validators="required; validateNumber ' + ((methodData816['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData816['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData816['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData816['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData816['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-type="number" data-uniform-filters="positive_number" value="' + ((opt_data.formattedAmount) ? soy.$$escapeHtml(opt_data.formattedAmount) : '') + '" type="text" class="withdraw-field input-small" size="16" name="Amount" ' + ((! (methodIndex816 == 0)) ? 'disabled' : '') + '></div>';
        if (methodData816['limits'][opt_data.verificationLevel]['enabled']) {
          output += '<div><em><small>';
          if (methodData816['limits'][opt_data.verificationLevel]['max']) {
            /** @desc amount help block */
            var MSG_UNNAMED_1851 = goog.getMsg(
                ' Maximum: {$xxx}',
                {'xxx': soy.$$escapeHtml(methodData816['limits'][opt_data.verificationLevel]['formatted_max'])});
            output += MSG_UNNAMED_1851 + '<br>';
          }
          if (methodData816['limits'][opt_data.verificationLevel]['min']) {
            /** @desc amount help block */
            var MSG_UNNAMED_1853 = goog.getMsg(
                ' Minimum: {$xxx} per transaction.  ',
                {'xxx': soy.$$escapeHtml(methodData816['limits'][opt_data.verificationLevel]['formatted_min'])});
            output += MSG_UNNAMED_1853;
          }
          output += '</small></em></div>';
        }
        output += '</div></div>';
      }
      output += '<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + soy.$$escapeHtml(methodData816['disclaimer']) + '</label><input id="' + soy.$$escapeHtml(methodData816['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData816['percent_fee']) + '"><input id="' + soy.$$escapeHtml(methodData816['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData816['fixed_fee']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1855 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(methodData816['method']) + '_' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label></div></div><div class="control-group" ' + ((opt_data.hideNetAmount) ? ' style="display:none;" ' : '') + '><label class="control-label net-amount">' + soy.$$escapeHtml(opt_data.netAmountLabel) + ':</label><div class="controls"><label id="' + soy.$$escapeHtml(methodData816['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label net-amount broker-confirm-deposit-net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(methodData816['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div></div>';
      var fieldList1038 = methodData816['fields'];
      var fieldListLen1038 = fieldList1038.length;
      for (var fieldIndex1038 = 0; fieldIndex1038 < fieldListLen1038; fieldIndex1038++) {
        var fieldData1038 = fieldList1038[fieldIndex1038];
        output += (fieldData1038['side'] == opt_data.side) ? '<div class="control-group"><label class="control-label">' + soy.$$escapeHtml(fieldData1038['label']) + '</label><div class="controls"><input class="withdraw-field" data-uniform-validators="' + soy.$$escapeHtml(fieldData1038['validator']) + '" type="' + soy.$$escapeHtml(fieldData1038['type']) + '" name="' + soy.$$escapeHtml(fieldData1038['name']) + '" label="' + soy.$$escapeHtml(fieldData1038['placeholder']) + '" value="' + soy.$$escapeHtml(fieldData1038['value']) + '"' + ((! (methodIndex816 == 0)) ? 'disabled' : '') + ' /></div></div>' : '';
      }
      output += '</div>';
    }
  }
  output += '</div><div class="control-group dlg-response-group"><label class="control-label dlg-response-group-label"></label><div class="controls" class="dlg-response-group-value" ></div></div></fieldset></form>';
  return output;
};


bitex.templates.YourFeesBalances = function(opt_data) {
  var output = '';
  /** @desc label for user buy fee */
  var MSG_UNNAMED_1857 = goog.getMsg('Taker Buy Fee');
  /** @desc label for user buy fee */
  var MSG_UNNAMED_1861 = goog.getMsg('Maker Buy Fee');
  /** @desc label for user sell fee */
  var MSG_UNNAMED_1865 = goog.getMsg('Taker Sell Fee');
  /** @desc label for user sell fee */
  var MSG_UNNAMED_1869 = goog.getMsg('Maker Sell Fee');
  output += '<table class="table table-striped table-condensed"><tbody><tr><td><strong>' + MSG_UNNAMED_1857 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.taker_buy_fee) {
    output += soy.$$escapeHtml(opt_data.taker_buy_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1859 = goog.getMsg('-');
    output += MSG_UNNAMED_1859;
  }
  output += '</span></td></tr><tr><td><strong>' + MSG_UNNAMED_1861 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.buy_fee) {
    output += soy.$$escapeHtml(opt_data.buy_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1863 = goog.getMsg('-');
    output += MSG_UNNAMED_1863;
  }
  output += '</span></td></tr><tr><td><strong>' + MSG_UNNAMED_1865 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.taker_sell_fee) {
    output += soy.$$escapeHtml(opt_data.taker_sell_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1867 = goog.getMsg('-');
    output += MSG_UNNAMED_1867;
  }
  output += '</span></td></tr><tr><td><strong>' + MSG_UNNAMED_1869 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.sell_fee) {
    output += soy.$$escapeHtml(opt_data.sell_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1871 = goog.getMsg('-');
    output += MSG_UNNAMED_1871;
  }
  output += '</span></td></tr></tbody></table>';
  return output;
};


bitex.templates.YourAccountBalances = function(opt_data) {
  var output = '<table class="table table-striped" style="width: 350px"><tbody>';
  var currencyList1106 = opt_data.currencies;
  var currencyListLen1106 = currencyList1106.length;
  for (var currencyIndex1106 = 0; currencyIndex1106 < currencyListLen1106; currencyIndex1106++) {
    var currencyData1106 = currencyList1106[currencyIndex1106];
    /** @desc label for available balance in a currency */
    var MSG_UNNAMED_1873 = goog.getMsg(
        'Available {$code}',
        {'code': soy.$$escapeHtml(currencyData1106.code)});
    output += '<tr><td><strong>' + MSG_UNNAMED_1873 + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(currencyData1106.model_key) + '" data-blink-class="balance-info-blink">' + ((currencyData1106.balance) ? soy.$$escapeHtml(currencyData1106.balance) : '-') + '</span></td></tr>';
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.AccountOverviewHeaderVerified = function(opt_data) {
  var output = '';
  /** @desc label on  overview header */
  var MSG_UNNAMED_1875 = goog.getMsg('No');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1877 = goog.getMsg('Pending');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1879 = goog.getMsg('Progress');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1881 = goog.getMsg('Yes - Level I ');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1883 = goog.getMsg('Yes - Level II ');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1885 = goog.getMsg('Yes - Level III ');
  output += '<select id="id_select_new_verification_level" data-profile-change="Verified" ><option value="0" ' + ((opt_data.msg_customer_detail['Verified'] == 0) ? 'selected' : '') + '>' + MSG_UNNAMED_1875 + '</option><option value="1" ' + ((opt_data.msg_customer_detail['Verified'] == 1) ? 'selected' : '') + '>' + MSG_UNNAMED_1877 + '</option><option value="2" ' + ((opt_data.msg_customer_detail['Verified'] == 2) ? 'selected' : '') + '>' + MSG_UNNAMED_1879 + '</option><option value="3" ' + ((opt_data.msg_customer_detail['Verified'] == 3) ? 'selected' : '') + '>' + MSG_UNNAMED_1881 + '</option><option value="4" ' + ((opt_data.msg_customer_detail['Verified'] == 4) ? 'selected' : '') + '>' + MSG_UNNAMED_1883 + '</option><option value="5" ' + ((opt_data.msg_customer_detail['Verified'] == 5) ? 'selected' : '') + '>' + MSG_UNNAMED_1885 + '</option></select>';
  return output;
};


bitex.templates.AccountOverviewHeaderWithDrawEmailData = function(opt_data) {
  var output = '';
  if (opt_data.msg_customer_detail['NeedWithdrawEmail']) {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1887 = goog.getMsg('Enabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1889 = goog.getMsg('Disable');
    output += '<span class="label label-success">' + MSG_UNNAMED_1887 + '</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1889 + '</a>';
  } else {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1891 = goog.getMsg('Disabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1893 = goog.getMsg('Enabled');
    output += '<span class="label label-important">' + MSG_UNNAMED_1891 + '</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1893 + '</a>';
  }
  return output;
};


bitex.templates.AccountOverviewHeaderTwoFactors = function(opt_data) {
  var output = '';
  if (opt_data.msg_customer_detail['TwoFactorEnabled']) {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1895 = goog.getMsg('Enabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1897 = goog.getMsg('Disable');
    output += '<span class="label label-success">' + MSG_UNNAMED_1895 + '</span><a href="#" class="btn btn-primary btn-mini" data-action="SET_TWO_FACTOR" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1897 + '</a>';
  } else {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1899 = goog.getMsg('Disabled');
    output += '<span class="label label-important">' + MSG_UNNAMED_1899 + '</span>';
  }
  return output;
};


bitex.templates.AccountOverviewHeaderEmailTwoFactors = function(opt_data) {
  var output = '';
  if (opt_data.msg_customer_detail['EmailTwoFactorEnabled']) {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1901 = goog.getMsg('Enabled');
    /** @desc label on overview header */
    var MSG_UNNAMED_1903 = goog.getMsg('Disable');
    output += '<span class="label label-success">' + MSG_UNNAMED_1901 + '</span><a href="#" class="btn btn-primary btn-mini" data-action="DISABLE_EMAIL_TWO_FACTOR" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1903 + '</a>';
  } else {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1905 = goog.getMsg('Disabled');
    /** @desc label on overview header */
    var MSG_UNNAMED_1907 = goog.getMsg('Enable');
    output += '<span class="label label-important">' + MSG_UNNAMED_1905 + '</span><a href="#" class="btn btn-primary btn-mini" data-action="ENABLE_EMAIL_TWO_FACTOR" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1907 + '</a>';
  }
  return output;
};


bitex.templates.AccountOverviewHeader = function(opt_data) {
  var output = '';
  /** @desc label on overview header */
  var MSG_UNNAMED_1909 = goog.getMsg('ID');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1911 = goog.getMsg('Username');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1913 = goog.getMsg('Email');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1915 = goog.getMsg('State');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1917 = goog.getMsg('Country');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1919 = goog.getMsg('Last login');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1921 = goog.getMsg('Is verified');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1923 = goog.getMsg('Has two step authentication');
  /** @desc label on overview header */
  var MSG_UNNAMED_1925 = goog.getMsg('Has two step authentication on email');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1927 = goog.getMsg('Registration date');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1929 = goog.getMsg('Needs email confirmation on withdraw');
  output += '<table class="table table-striped table-condensed account-overview-table" style="width: 350px"><tbody><tr><td><strong>' + MSG_UNNAMED_1909 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1911 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1913 + '</strong></td><td><span id="account-overview-email">' + soy.$$escapeHtml(opt_data.msg_customer_detail['Email']) + '</span>&nbsp;<button data-action="CHANGE_EMAIL" class="btn btn-warning btn-mini">Change</button></td></tr><tr><td><strong>' + MSG_UNNAMED_1915 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['State']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1917 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['CountryCode']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1919 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['LastLogin']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1921 + '</strong></td><td class="account-overview-val account-overview-verified">' + bitex.templates.AccountOverviewHeaderVerified(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1923 + '</strong></td><td class="account-overview-val account-overview-two-factors" >' + bitex.templates.AccountOverviewHeaderTwoFactors(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1925 + '</strong></td><td class="account-overview-val account-overview-two-factors-email" >' + bitex.templates.AccountOverviewHeaderEmailTwoFactors(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1927 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Created']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1929 + '</strong></td><td class="account-overview-val account-overview-withdraw-email">' + bitex.templates.AccountOverviewHeaderWithDrawEmailData(opt_data) + '</td></tr></tbody></table>';
  return output;
};


bitex.templates.CustomerDetailButton = function(opt_data) {
  var output = '';
  /** @desc details */
  var MSG_UNNAMED_1931 = goog.getMsg('details');
  output += '<button class="btn btn-mini btn-primary btn-deposit" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '">' + MSG_UNNAMED_1931 + '</button>';
  return output;
};


bitex.templates.EnterVerificationDataDialogContent = function(opt_data) {
  var output = '';
  /** @desc label on  overview header */
  var MSG_UNNAMED_1933 = goog.getMsg('Verification data');
  output += '<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="ClientID" value="' + soy.$$escapeHtml(opt_data.clientID) + '"><div class="control-group"><label class="control-label"> ' + MSG_UNNAMED_1933 + ' </label><div class="controls"><input type="text" class="input-xlarge" size="16" name="VerificationData"></div></div></form>';
  return output;
};


bitex.templates.OrderEntry = function(opt_data) {
  var output = '';
  /** @desc Amount label in Order Entry */
  var MSG_UNNAMED_1935 = goog.getMsg('Amount:');
  /** @desc 'Price per label' in Order Entry */
  var MSG_UNNAMED_1937 = goog.getMsg('Price per ');
  /** @desc Total label in Order Entry */
  var MSG_UNNAMED_1939 = goog.getMsg('Total:');
  /** @desc 'Fee (optional):' label in Order Entry */
  var MSG_UNNAMED_1941 = goog.getMsg('Fee (optional):');
  /** @desc 'Client ID' label in Order Entry */
  var MSG_UNNAMED_1943 = goog.getMsg('Client ID');
  output += '<div id="' + soy.$$escapeHtml(opt_data.id) + '" class="well span6 order-entry"><input type="hidden" name="symbol" class="order-entry-symbol" value="' + soy.$$escapeHtml(opt_data.symbol) + '"><input type="hidden" name="side" class="order-entry-side" value="' + soy.$$escapeHtml(opt_data.side) + '"><input type="hidden" name="type" class="order-entry-type" value="' + soy.$$escapeHtml(opt_data.type) + '"><input type="hidden" name="broker_id" class="order-entry-broker-id" value="' + soy.$$escapeHtml(opt_data.broker_id) + '"><div class="row-fluid"><div class="span5 order-entry-label"> <span>' + MSG_UNNAMED_1935 + '</span></div><div class="span6"><div class="input-prepend input-block-level order-entry-data"><span class="add-on order-entry-amount-sign">฿</span><input class="input-block-level order-entry-amount" type="text" value="" required/></div></div></div><div class="row-fluid"><div class="span5 order-entry-label"> <span>' + MSG_UNNAMED_1937 + '<span class="order-entry-amount-sign">฿</span>:</span></div><div class="span6"><div class="input-prepend input-block-level order-entry-data"><span class="add-on order-entry-price-sign">$</span><input class="input-block-level order-entry-price" type="text" required/></div></div></div><div class="row-fluid"><div class="span5 order-entry-label"><span>' + MSG_UNNAMED_1939 + '</span></div><div class="span6"><div class="input-prepend input-block-level order-entry-data"><span class="add-on order-entry-price-sign">$</span><input class="input-block-level order-entry-total" type="text" required/></div></div></div><div class="row-fluid" ' + ((opt_data.hide_fee) ? 'style="display: none;"' : '') + ' ><div class="span5 order-entry-label"> <span>' + MSG_UNNAMED_1941 + '</span></div><div class="span6"><div class="input-prepend input-block-level order-entry-data"><span class="add-on order-entry-amount-sign">฿</span><input class="input-block-level order-entry-fee" type="text" value="0" /></div></div></div><div class="row-fluid"><div class="span5"><input class="input-block-level order-entry-client-id" label="' + MSG_UNNAMED_1943 + '" ' + ((opt_data.hide_client_id) ? 'style="display:none"' : '') + ' /></div><div class="span5"><button class="btn ' + ((opt_data.side == 1) ? 'btn-success' : 'btn-danger') + ' btn-execution order-entry-action">';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_1945 = goog.getMsg('BUY');
    output += MSG_UNNAMED_1945;
  } else {
    /** @desc Sell button in Order Entry */
    var MSG_UNNAMED_1947 = goog.getMsg('SELL');
    output += MSG_UNNAMED_1947;
  }
  output += '</button></div></div></div>';
  return output;
};


bitex.templates.DataGrid = function(opt_data) {
  var output = '<div ' + ((opt_data.id) ? 'id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + '  class="fuelux ' + ((opt_data.base_class) ? soy.$$escapeHtml(opt_data.base_class) : '') + '" style="width:100%;"><table class="table table-bordered datagrid datagrid-stretch-header"><thead><tr><th colspan="4" ' + ((! opt_data.title && ! opt_data.show_search) ? 'style="display: none;"' : '') + '><span class="datagrid-header-title"  ' + ((! opt_data.title) ? 'style="display: none;"' : '') + ' ><strong>' + soy.$$escapeHtml(opt_data.title) + '</strong></span><div class="datagrid-header-left" ' + ((! opt_data.show_search) ? 'style="display: none;"' : '') + '><div class="input-append search datagrid-search"><input type="text" class="input-medium" placeholder="' + soy.$$escapeHtml(opt_data.search_placeholder) + '"><button type="button" class="btn"><i class="icon-search"></i></button></div></div><div class="datagrid-header-right">';
  if (opt_data.button_filters) {
    output += '<div class="select filter datagrid-filter" data-resize="auto"><button type="button" data-toggle="dropdown" class="btn dropdown-toggle">';
    var buttonList1383 = opt_data.button_filters;
    var buttonListLen1383 = buttonList1383.length;
    for (var buttonIndex1383 = 0; buttonIndex1383 < buttonListLen1383; buttonIndex1383++) {
      var buttonData1383 = buttonList1383[buttonIndex1383];
      output += (buttonIndex1383 == 0) ? '<span class="dropdown-label" style="width: 111px;">' + soy.$$escapeHtml(buttonData1383['label']) + '</span>' : '';
    }
    output += '<span class="caret"></span></button><ul class="dropdown-menu">';
    var buttonList1391 = opt_data.button_filters;
    var buttonListLen1391 = buttonList1391.length;
    for (var buttonIndex1391 = 0; buttonIndex1391 < buttonListLen1391; buttonIndex1391++) {
      var buttonData1391 = buttonList1391[buttonIndex1391];
      output += '<li data-value="' + soy.$$escapeHtml(buttonData1391['value']) + '"><a href="#">' + soy.$$escapeHtml(buttonData1391['label']) + '</a></li>';
    }
    output += '</ul></div>';
  }
  output += '</div></th></tr></thead></table><div class="datagrid-stretch-wrapper" style="height:' + ((opt_data.wrapper_height) ? soy.$$escapeHtml(opt_data.wrapper_height) : '360') + 'px;"><table class="table table-bordered datagrid"><tbody></tbody></table></div><table class="table table-bordered datagrid datagrid-stretch-footer"><tfoot><tr><th colspan="4"><div class="datagrid-footer-left" style="visibility: visible;"><div class="grid-controls"><span><span class="grid-start"></span> -<span class="grid-end"></span></span></div></div><div class="datagrid-footer-right" style="visibility: visible;"><div class="grid-pager"><button type="button" class="btn grid-prevpage"><i class="icon-chevron-left"></i></button><button type="button" class="btn grid-nextpage"><i class="icon-chevron-right"></i></button></div></div></th></tr></tfoot></table></div>';
  return output;
};
