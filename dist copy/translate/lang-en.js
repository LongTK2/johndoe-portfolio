const LANG_EN_NAME = 'en';

const LANG_EN_TRANS = {
  'test': 'test english',
  'hello world': 'hello world',
  'hotline': 'Hotline',
  'about_op': 'About OnePay',
  'guide': 'Payment Guide',
  'faqs': 'FAQs',
  'contact_us': 'Contact Us',
  'copy_right': 'Copyright © 2006 - {currentYear} OnePay. All rights reserved.',
  'provided_by': 'Powered by OnePay Payment Solution',
  'all_rights_reserved': 'All rights reserved',
  'Order Information': 'Order Information',
  'Order Reference': 'Order Reference',
  'Total Amount': 'Total Amount',
  'Payment Information': 'Payment Information',
  'Pay with debit or credit': 'Pay with debit or credit',
  'whats_csc': 'What is CSC',
  'whats_csc_cvv': 'What is CSC',
  'Billing address': 'Billing Address',
  'pay_now': 'Pay Now',
  'continue': 'Continue',
  'cancel': 'Cancel Transaction',
  'card_number': 'Card Number',
  'expires': 'Expiration Date',
  'issue_date': 'Issue Date',
  'address_avs': 'Billing Address',
  'select_country': 'Select Country',
  'country': 'Country',
  'address': 'Address',
  'province': 'State/Province',
  'city': 'City/Town',
  'post_code': 'Postal Code',
  'card_info': 'Card Information',
  'domestic_selection': 'ATM Card / Bank Account',
  'international_selection': ' ',
  'payment_info': 'Payment information',
  'list_app_support': 'List application supported',
  'qr_payment_here': 'and scan this QR code to make payment.',
  'use_mobile_app': 'Open your mobile payment application',
  'scan_qr_payment': 'Scan QR code to make payment',
  'amount_payment': 'Total Amount',
  'order_info': 'Order Reference',
  'order_info_home_credit': 'Contract code',
  'merchant_name': 'Merchant Name',
  'merchant_name_text': 'Merchant Name',
  'invoice_info': 'Order Information',
  'error_mess_system_retry': 'Exception while processing transaction. Retry later.',
  'error_mess_processing': 'Exception while processing transaction.',
  'error_mess_fail': 'TRANSACTION WAS NOT SUCCESSFUL',
  'exception_state': 'Exception state. Retry later. ',
  'card_name': 'Cardholder Name',
  'invalid_card_info': 'Please check the fields marked in red',
  'invalid_card_offset': 'Missing or invalid card information',
  'invalid_card_type': 'Missing or invalid card type',
  'invalid_bank': 'Missing or invalid bank',
  'invalid_period_installment': 'Missing or invalid period installment',
  'invalid_email': 'Invalid email',
  'card_not_supported': 'This card type is not accepted',
  'tran_timeout': 'Transaction timeout.',
  'pm_processing': 'Transaction is being processed. Please wait and Do not refresh or close this screen',
  'pm_processing_timeout': 'Processing',
  'auth_info': 'Auth information',
  'about_op_href': 'https://www.onepay.vn/home/en/about-us.html',
  'guide_href': 'https://onepay.vn/documents/payment/guideVN.jsp?logos=v,m,a,j,u,at',
  'guide_d_href': 'https://onepay.vn/documents/payment/4en.html',
  'faqs_href': 'https://www.onepay.vn/home/en/supports/faqs/for-individuals.html',
  'contact_us_href': 'https://www.onepay.vn/en/for-business/',
  // 'app_support_href':'https://mtf.onepay.vn/onecomm-pay/apps.op?request_locale=en',
  'app_support_href': 'mpay-banks?locale=en',
  'bank_select': 'Select bank',
  'list_app': 'List of supplement applications',
  'op_mobile_app': 'OnePay mobile app',
  'bank_support': 'Banks supported',
  'what_csc': 'What is the CSC code?',
  'csc_desc': 'CSC is the Card Security Code which is embossed or printed on the card.',
  'for_card': 'For',
  'and': 'and',
  'visa': 'Visa',
  'master': 'MasterCard',
  'jcb': 'JCB',
  'amex': 'American Express',
  'csc_desc_vsmcjc': 'the CSC is the last three digits in the signature area on the back of your card. (see below).',
  'csc_desc_amex': 'the CSC is a group of four digits on front of the card.(see below).',
  'csc_href': 'csc?locale=en',
  'txt_redirect_to': 'Redirect to Internet Banking page on',
  'txt_to_pay': 'to do payment',
  'regis_internet_banking': 'Register "Internet Banking" at bank counter',
  'limit_amount': 'Maximum limit for payments in Online Banking: 50,000,000 VND/day/time and 10 times/day.',
  'note': 'Note',
  'time_remain': 'In',
  'second': 'second',
  'time_to_scan': 'Time to scan QR',
  'lang': 'en',
  'username': 'User name',
  'password': 'Internet Banking Password',
  'bank_bidv_username': 'BIDV Online Username',
  'bidv_card_account': 'Card Number/Account Number/User name',
  'bidv_card_name': 'Cardholder Name',
  'card_account': 'Card Number/Account Number',
  'phone_number': 'Phone number',
  'identity_number': 'Identity number',
  'vpb_card_name': 'Cardholder Name',
  'internetbanking': 'Easy Internet Banking',
  'mobilebanking': 'Easy OceanBank Mobile',
  'atm': 'ATM Card',
  'ocb_card_account': 'User name/Phone number/Card Number',
  'ocb_account': 'Internet Banking Username',
  'ocb_phone': 'Mobile Number',
  'ocb_card': 'Card Number',
  'card_no': 'Card Number',
  'dab_support': 'Currenly we only support the payment method Internet Banking',
  'dab_not_support': 'You can not do payment by SMS/Mobile Banking',
  'select_method': 'Customers kindly choose one in three types of information below to process the payment',
  '1_atm': '1. ATM card',
  '1_row1': 'Card Number: Include all the printed number on the card (without space bar)',
  '1_row2': 'Full name: Name printed on the card',
  '2_account': '2. Account',
  '2_row1': 'Account number: the deposit account number at BIDV',
  '2_row2': 'Full name: Account\'s owner',
  '3_cif': '3. CIF information',
  '3_row1': 'CIF number: The code is used by customer to enter BIDV system',
  '3_row2': 'Full name: Customer\'s name',
  'shb_lb1': 'Account Number/Card Number',
  'shb_lb2': 'Username',
  'shb_bank_customer_code': 'Internet Banking Username',
  'phone_number_vpb': 'Phone number registered Internet Banking or SMS topup',
  'lb_card_number': 'Card Number',
  'lb_card_holder': 'Card Holder',
  'lb_exp_date': 'Exp Date',
  'lb_date_issue': 'Issue Date',
  'lb_name_on_card': 'CARDHOLDER NAME',
  '1_html': '- Điều kiện sử dụng dịch vụ\:<br>\
    Đăng ký "Internet banking" và "SMS banking" tại quầy giao dịch của Ngân hàng.<br>\
    - Online payment limits:\:<br>\
    50,000,000 VND/ ngày/ lần và 10 lần / ngày.<br>',
  '1_html_desc': '* Conditions:<br>\
    Register "Internet Banking" and "SMS Banking" at bank counter<br>\
    * Online payment limits: 50,000,000 VND/ per day/ per transaction and 10 transactions/ per day<br>\
    * Hotline Vietcombank Contact Center: 1900 54 54 13 - 0243 8243524<br>',
  '47_html_desc': '* Conditions:<br>\
    Register "Internet Banking" and "SMS Banking" at bank counter<br>\
    * Online payment limits: 50,000,000 VND/ per day/ per transaction and 10 transactions/ per day<br>\
    * Hotline Vietcombank Contact Center: 1900 54 54 13 - 0243 8243524<br>',
  '2_html_desc': 'Please click "Continue" to be redirected to Techcombank Internet Banking page, then log in to your account and process your transaction.<br>\
    <br>\
   You will be automatically redirected after ',
  '67_html_desc': ' ',
  '3_html_desc': '* Conditions:<br>\
    Register "Intetnet Banking" service at bank counters<br>\
    * Hotline TPBank Contact Center: 1900 58 58 85 - (024) 37 683683<br>',
  '61_html_desc': '* Conditions:<br>\
    Register "Intetnet Banking" service at bank counters<br>\
    * Hotline TPBank Contact Center: 1900 58 58 85 - (024) 37 683683<br>',
  '4_html_desc': '* Conditions:<br>\
    Register "e-Payment" service at bank counter<br>\
    * Online payment limits: 30,000,000 VND/ per day/ per transaction and 10 transactions/ per day<br>\
    * Hotline VietinBank Contact Center: 1900 558 868/ (024) - 39418868<br>',
  '50_html_desc': '* Conditions:<br>\
    Register "e-Payment" service at bank counter<br>\
    * Online payment limits: 30,000,000 VND/ per day/ per transaction and 10 transactions/ per day<br>\
    * Hotline VietinBank Contact Center: 1900 558 868/ (024) - 39418868<br>',
  '5_html_desc': 'Please click "Continue" to be redirected to VIB Internet Banking page, then log in to your account and process your transaction.<br>\
    <br>\
   You will be automatically redirected after ',
  '48_html_desc': 'Please click "Continue" to be redirected to VIB Internet Banking page, then log in to your account and process your transaction.<br>\
    <br>\
   You will be automatically redirected after ',
  '6_html_desc': 'Please click "Continue" to be redirected to DongA Bank Internet Banking page, then log in to your account and process your transaction.<br>\
  \<br>\
  Note: DongA Bank does not support online payment by SMS/Mobile Banking method.\
   Please choose the correct method "Internet Banking payment" on DongA Bank page to process your transaction.',
  '31_html_desc': 'Please click "Continue" to be redirected to ViettelPay Internet Banking, then log in to your account and process your transaction.<br>\
   <br>\
  You will be automatically redirected after ', '57_html_desc': ' ',
  '7_html_desc': '* Conditions:<br>\
    Register Internet Banking service at transaction counter.<br>\
    * Hotline HDBank Contact Center: 1900 6060<br>',
  '51_html_desc': '* Conditions:<br>\
    Register Internet Banking service at transaction counter.<br>\
    * Hotline HDBank Contact Center: 1900 6060<br>',
  '8_html_desc': '* Conditions:<br>\
    Step 1: Register Internet Banking Advance service at bank counters.<br>\
    Step 2: Register "Payment Online" service for ATM cards by one of two following ways:<br>\
    - Sending sms message MB MOINTERNET [Identification card number] [The first 4 number of ATM card] to 8136<br>\
    - Access to "Internet Banking" / app Mobile Banking/ register at transaction counters.<br>\
    * Hotline MBBank Contact Center: 1900 545 426<br>',
  '49_html_desc': '* Conditions:<br>\
    Step 1: Register Internet Banking Advance service at bank counters.<br>\
    Step 2: Register "Payment Online" service for ATM cards by one of two following ways:<br>\
    - Sending sms message MB MOINTERNET [Identification card number] [The first 4 number of ATM card] to 8136<br>\
    - Access to "Internet Banking" / app Mobile Banking/ register at transaction counters.<br>\
    * Hotline MBBank Contact Center: 1900 545 426<br>',
  '9_html_desc': '* Conditions:<br>\
    Register Internet Banking and active online payment services at bank counters<br>\
    * Online payment limits: 50,000,000 VND/ per transaction and 100,000,000 VND/ per day<br>\
    * Hotline Viet A Bank: 1900 555 590<br>',
  '10_html_desc': '* Conditions:<br>\
    Accept payment for ATM card M1, M-Money<br>\
    * Online payment limits:<br>\
    M1 card: 50,000,000 VND/ per transaction/ per day<br>\
    M-Money card: 40,000,000 VND/ per transaction/ per day<br>\
    * Hotline MSB Contact Center: 1800 599 999<br>',
  '53_html_desc': '* Conditions:<br>\
    Accept payment for ATM card M1, M-Money<br>\
    * Online payment limits:<br>\
    M1 card: 50,000,000 VND/ per transaction/ per day<br>\
    M-Money card: 40,000,000 VND/ per transaction/ per day<br>\
    * Hotline MSB Contact Center: 1800 599 999<br>',
  '11_html_desc': '* Conditions:<br>\
    Step 1: Register "SMS Banking" service.<br>\
    Step 2: Register "Online Payment" service by one of two following ways:<br>\
    - Register at bank counters<br>\
    - Register on Internet Banking (https://ebanking.eximbank.vn), choose Register Online Payment Service by ATM card and fill in the required informations.<br>\
    * Hotline Eximbank Contact Center: 18001199<br>',
  '68_html_desc': '* Conditions:<br>\
    Step 1: Register "SMS Banking" service.<br>\
    Step 2: Register "Online Payment" service by one of two following ways:<br>\
    - Register at bank counters<br>\
    - Register on Internet Banking (https://ebanking.eximbank.vn), choose Register Online Payment Service by ATM card and fill in the required informations.<br>\
    * Hotline Eximbank Contact Center: 18001199<br>',
  '12_html_desc': '* Conditions:<br>\
    Register "Internet Banking" and "Authentication" services at bank counters<br>\
    * Online payment limits: 300,000,000VND/ per day and 20 transactions / per day<br>\
    * Hotline SHB Contact Center: 1800 588 856<br>',
  '60_html_desc': '* Conditions:<br>\
    Register "Internet Banking" and "Authentication" services at bank counters<br>\
    * Online payment limits: 300,000,000VND/ per day and 20 transactions / per day<br>\
    * Hotline SHB Contact Center: 1800 588 856<br>',
  '14_html_desc': '* Conditons:<br>\
    Register Internet Banking and SMS Banking service at bank counters.<br>\
    * Online payment limits: 50,000,000 VND/ per day<br>\
    * Hotline VPBank Contact Center: 1900545415 / (024) - 39288880<br>',
  '70_html_desc': '* Conditons:<br>\
    Register Internet Banking and SMS Banking service at bank counters.<br>\
    * Online payment limits: 50,000,000 VND/ per day<br>\
    * Hotline VPBank Contact Center: 1900545415 / (024) - 39288880<br>',
  '15_html_desc': '* Conditions:<br>\
    Register for "Online Payment" service by one of four following ways:<br>\
    - Register at bank counters.<br>\
    - Register on ABBank Mobile Banking<br>\
    - Register on Internet Banking - Online Banking<br>\
    - Register on ATM machines of ABBank.<br>\
    * Online payment limits:<br>\
    + Standard card: 50,000,000 VND/ per transaction/ per day<br>\
    + Yellow card: 100,000,000 VND/ per transaction/ per day<br>\
    + VIP card: 200,000,000 VND/ per transaction/ per day<br>\
    * Hotline ABBank Contact Center: 1800 1159<br>',
  '58_html_desc': '* Conditions:<br>\
    Register for "Online Payment" service by one of four following ways:<br>\
    - Register at bank counters.<br>\
    - Register on ABBank Mobile Banking<br>\
    - Register on Internet Banking - Online Banking<br>\
    - Register on ATM machines of ABBank.<br>\
    * Online payment limits:<br>\
    + Standard card: 50,000,000 VND/ per transaction/ per day<br>\
    + Yellow card: 100,000,000 VND/ per transaction/ per day<br>\
    + VIP card: 200,000,000 VND/ per transaction/ per day<br>\
    * Hotline ABBank Contact Center: 1800 1159<br>',
  '16_html_desc': '* Conditions:<br>\
    Register online payment (E-Commerce) by one of three following ways:<br>\
    - Register at bank counters<br>\
    - Register through Sacombank hotline<br>\
    - Register by sending sms message THE MO-ECOM XXXX  to 8149 (XXX is mean last 4 number of ATM card)<br>\
    * Online payment limits: 100,000,000 VND/ per transaction. 500,000,000 VND/ per day<br>\
    * Hotline Sacombank Contact Center: 1900 555 588<br>',
  '69_html_desc': '* Conditions:<br>\
    Register online payment (E-Commerce) by one of three following ways:<br>\
    - Register at bank counters<br>\
    - Register through Sacombank hotline<br>\
    - Register by sending sms message THE MO-ECOM XXXX  to 8149 (XXX is mean last 4 number of ATM card)<br>\
    * Online payment limits: 100,000,000 VND/ per transaction. 500,000,000 VND/ per day<br>\
    * Hotline Sacombank Contact Center: 1900 555 588<br>',
  '17_html_desc': '* Conditions:<br>\
    Register Internet Banking / SMS Banking services and "Online Payment E-Commerce" at bank counters( contact hotline of Nam A Bank to register E-Commerce service)<br>\
    * Hotline Nam A Bank Contact Center: 1900 6679<br>',
  '65_html_desc': '* Conditions:<br>\
    Register Internet Banking / SMS Banking services and "Online Payment E-Commerce" at bank counters( contact hotline of Nam A Bank to register E-Commerce service)<br>\
    * Hotline Nam A Bank Contact Center: 1900 6679<br>',
  '18_html_desc': '* Conditions:<br>\
    Register "Online Payment" by one of two following ways:<br>\
    - Register on Internet Banking<br>\
    - Register at bank counters<br>\
    Types of payment account:<br>\
    - Easy Internet Banking: enter username to ID/Phone Number/ATM Card Number blanks<br>\
    - Easy OceanBank Mobile: enter Phone Number to ID/Phone Number/ATM Card Numer blanks<br>\
    - ATM card: enter Card Number to ID/Phone Number/ATM Card Number blanks<br>\
    * Online payment limits: 200,000,000 VND/ per day<br>\
    * Hotline Oceanbank Contact Center: 1800 588 815<br>',
  '55_html_desc': '* Conditions:<br>\
    Register "Online Payment" by one of two following ways:<br>\
    - Register on Internet Banking<br>\
    - Register at bank counters<br>\
    Types of payment account:<br>\
    - Easy Internet Banking: enter username to ID/Phone Number/ATM Card Number blanks<br>\
    - Easy OceanBank Mobile: enter Phone Number to ID/Phone Number/ATM Card Numer blanks<br>\
    - ATM card: enter Card Number to ID/Phone Number/ATM Card Number blanks<br>\
    * Online payment limits: 200,000,000 VND/ per day<br>\
    * Hotline Oceanbank Contact Center: 1800 588 815<br>',
  '19_html_desc': '* Conditions:<br>\
    Register for BIDV Online service (choose Financial package and register phone numbers for OTP SMS)<br>\
    Register online at https://ebank.bidv.com.vn/DKNHDT/dk_bidvonline.htm<br>\
    * Online payment limits:<br>\
    Up to 50,000,000 VND/ transaction/ day.<br>\
    * Hotline BIDV Contact Center: 1900 9247<br>',
  '59_html_desc': '* Conditions:<br>\
    Register for BIDV Online service (choose Financial package and register phone numbers for OTP SMS)<br>\
    Register online at https://ebank.bidv.com.vn/DKNHDT/dk_bidvonline.htm<br>\
    * Online payment limits:<br>\
    Up to 100,000,000 VND/ transaction/ day.<br>\
    * Hotline BIDV Contact Center: 1900 9247<br>',
  '20_html_desc': '* Hotline SeABank Contact Center: 1900 555 587<br>',
  '64_html_desc': '* Hotline SeABank Contact Center: 1900 555 587<br>',
  '22_html_desc': '* Conditions:<br>\
    Register for Internet Banking and SMS Banking services at bank counters.<br>\
    *Online payment limits: 50,000,000 VND/ per transaction/ per day<br>\
    *Hotline Bac A Bank Contact Center: 1800 588 828<br>',
  '56_html_desc': '* Conditions:<br>\
    Register for Internet Banking and SMS Banking services at bank counters.<br>\
    *Online payment limits: 50,000,000 VND/ per transaction/ per day<br>\
    *Hotline Bac A Bank Contact Center: 1800 588 828<br>',
  '23_html_desc': '* Conditions:<br>\
    Register online payment (E-Commerce service) at bank counters.<br>\
    * Online payment limits: 100,000,000 VND/ per day<br>\
    * Hotline NCB Contact Center: 1800 6166<br>',
  '52_html_desc': '* Conditions:<br>\
    Register online payment (E-Commerce service) at bank counters.<br>\
    * Online payment limits: 100,000,000 VND/ per day<br>\
    * Hotline NCB Contact Center: 1800 6166<br>',
  '24_html_desc': '* Conditions:<br>\
    Register for Internet Banking or E-mobile Banking services and E-Commerce service at bank counters.<br>\
    * Online payment limits:<br>\
    + Green card: 25,000,000 VND/per transaction/per day.<br>\
    + Red card: 50,000,000 VND/per transaction/per day.<br>\
    * Hotline Agribank Contact Center: 1900 558 818<br>',
  '62_html_desc': '* Conditions:<br>\
    Register for Internet Banking or E-mobile Banking services and E-Commerce service at bank counters.<br>\
    * Online payment limits:<br>\
    + Green card: 25,000,000 VND/per transaction/per day.<br>\
    + Red card: 50,000,000 VND/per transaction/per day.<br>\
    * Hotline Agribank Contact Center: 1900 558 818<br>',
  '25_html_desc': '* Conditions:<br>\
    Register "Internet Banking" service at bank counters.<br>\
    * Online payment limits: 30,000,000 VND/ per transaction/ per day<br>\
    * Hotline SCB Contact Center: 1900 6538<br>',
  '63_html_desc': '* Conditions:<br>\
    Register "Internet Banking" service at bank counters.<br>\
    * Online payment limits: 30,000,000 VND/ per transaction/ per day<br>\
    * Hotline SCB Contact Center: 1900 6538<br>',
  '27_html_desc': '* Conditions:<br>\
    Register "PV-eCommerce" service by sending sms message PVB ECOMON to 6089<br>\
    * Hotline PVcomBank Contact Center: 1900 555 592<br>',
  '66_html_desc': '* Conditions:<br>\
    Register "PV-eCommerce" service by sending sms message PVB ECOMON to 6089<br>\
    * Hotline PVcomBank Contact Center: 1900 555 592<br>',
  '30_html_desc': '* Conditions:<br>\
    ATM card is being active, register "Ebanking" service at bank counters<br>\
    * Online payment limit 100,000,000 VND/ per transaction; 300,000,000 VND/ per day<br>\
    * Hotline VCCB Contact Center: 1900 555 596<br>',
  '71_html_desc': '* Conditions:<br>\
    ATM card is being active, register "Ebanking" service at bank counters<br>\
    * Online payment limit 100,000,000 VND/ per transaction; 300,000,000 VND/ per day<br>\
    * Hotline VCCB Contact Center: 1900 555 596<br>',
  'auth_method': 'Authentication Method',
  'type_account': 'Account type',
  'deep_link_text': 'Quick Online Pay',
  'deep_link_text2': 'On Mobile Application',
  'cancel_adayroi': 'Cancel / Choose another payment method',
  'amount': 'Amount',
  'account_no': 'Account No.',
  'valid_from': 'Valid from',
  'name_on_card': 'Cardholder Name',
  'note_l': 'Note',
  'note_l_detail': 'Please ensure you have registered "Internet Banking and SMS Banking service"',
  'card_infomation': 'Please fill in your card information',
  'name_place_holder': 'Input without tone mark',
  'title_phone': 'Internet Banking or SMS topup registered mobile no. (10 digits)',
  'lzd_card_number': 'Card Number',
  'lzd_expires': 'Expiration Date (mm/yy)',
  'lzd_issue_date': 'Issue Date (mm/yy)',
  'lzd_expires_title': 'Expiration Date',
  'lzd_issue_date_title': 'Issue Date',
  'otp_title': 'Enter Verification Code (Sent via SMS)',
  'password_lazada': 'Internet Banking Password',
  'global_months': 'Months',
  'global_month': 'month',
  'order_reference': 'Order Reference',
  'personal_information': 'Cardholder Information',
  'card_full_name': 'Cardholder Name',
  'email': 'Email Address',
  'error_offset1': 'You cannot make installment payment within ',
  'error_offset2': ' to ',
  'error_offset3': '. Please come back later.',
  'ok': 'OK',
  'please_select_bank': 'Please select a Bank',
  'please_select_card_type': 'Please select a Card Type',
  'please_select_period': 'Please select an Installment Period',
  'please_input_card_number': 'Please enter the correct card number',
  'card_number_is_not_supported': 'Card Number is not supported',
  'please_input_exp_date': 'Please enter the correct exp date',
  'please_input_csc': 'Please enter the correct csc',
  'please_input_card_name': 'Please enter the correct card name',
  'please_input_phone': 'Please enter the correct mobile number',
  'please_input_email': 'Please enter the correct email',
  'lzd_title_charge': 'Topup',
  'bank_card_number': 'Card Number',
  'bank_account_number': 'Account Number',
  'bank_username': 'Username',
  'bank_customer_code': 'Username',
  'bidv_full_name': 'Full Name',
  'payment_guide': 'Payment Guide',
  'example': 'Example',
  'card_number_guide': 'The 16 or 19 digits on the front side of the card.',
  'expiration_date_guide': 'The expiration month (MM) and year (YY) on the front side of the card (VALID/GOOD THRU).',
  'csc_guide_1': 'CSC (Card Security Code) is embossed or printed on the card.',
  'for': 'For ',
  'csc_guide_2': 'Visa, MasterCard and JCB',
  'csc_guide_3': ': the CSC code is the last three digits in the signature area on the back side of the card (image below).',
  'csc_amex_guide': ' the CSC code is a group of four digits above the card number on the front side of the card (image below).',
  'back': 'You will be redirected to the page of ',
  'expired': 'Your session has expired. You will be redirected to the page of  ',
  'after': 'in',
  'seconds': 'seconds',
  'leave_now': 'Leave Now',
  'error_code_1': 'Unspecified failure in the authorization process of your Card Issuer.\n' +
    'Please contact your Card Issuer (by the phone number on the back of your card) and provide your transaction information to check detailed reason and get assistance to make payment again.',
  'error_code_2': 'Card Issuer declined to authorize the transaction.\n' +
    'Please check your Expiration Date, CSC, credit limit/ account balance, or contact your Card Issuer (by the phone number on the back of your card) and provide your transaction information to check detailed reason and get assistance to make payment again.',
  'error_code_3': 'No response from Card Issuer.\n' +
    'Please make payment again or contact your Card Issuer (by the phone number on the back of your card) and provide your transaction information to check detailed reason and get assistance to make payment again.',
  'error_code_4': ' Invalid Expiration Date or your card is now expired.\n' +
    'Please make payment again and enter the right Expiration Date on the front side of your card (VALID/GOOD THRU), or contact your Card Issuer (by the phone number on the back of your card) to check the Expiration Date of your card.',
  'error_code_5': 'Your card credit limit/ account balance was not enough to cover the payment or your Card Issuer could not verify your card credit limit/ account balance.',
  'error_code_6': 'No response from Card Issuer.\n' +
    'Please make payment again or contact your Card Issuer (by the phone number on the back of your card) and provide your transaction information to check detailed reason and get assistance to make payment again.',
  'error_code_7': 'System error while processing transaction.\n' +
    'Please contact your Card Issuer (by the phone number on the back of your card) and provide your transaction information to check detailed reason and get assistance to make payment again.',
  'error_code_8': 'Card Issuer does not support online payment.\n' +
    'Please contact your Card Issuer (by the phone number on the back of your card) and provide your transaction information to check detailed reason and get assistance to make payment again.',
  'error_code_9': 'Card Issuer declined to authorize the transaction.\n' +
    'Please check your Expiration Date, CSC, credit limit/ account balance, or contact your Card Issuer (by the phone number on the back of your card) and provide your transaction information to check detailed reason and get assistance to make payment again.',
  'error_code_99': 'User cancelled transaction.',
  'error_code_10': 'Your card is now expired or deactivated.<br>' +
    'Please contact your Card Issuer (by the phone number on the back of your card) to check the Expiration Date or the active status your card.',
  'error_code_11': 'Your card/account was not activated features supporting for online payment.<br>' +
    'Please contact your Bank to get assistance to activate features supporting for online payment.',
  'error_code_12': 'Invalid Issue Date or Expiration Date.<br>' +
    'Please make payment again and enter the valid Issue Date or Expiration Date, or contact your Bank to check the valid Issue Date or Expiration Date.',
  'error_code_13': 'Your transaction was exceeded online payment limit in accordance with your Bank\'s regulations.<br>' +
    'Please contact your Bank to check and get assistance on online payment limit.',
  'error_code_21': 'Your account balance was not enough to cover the payment or your Bank could not verify your account balance.<br>' +
    'Please contact your Bank to check your account balance before making payment again, or choose other Banks to make payment again.',
  'error_code_22': 'Invalid Account Information.<br>' +
    'Please make payment again and enter the valid Account Information, or contact your Bank to check the valid Account Information.',
  'error_code_23': 'Your card/account is now blocked or not activated.<br>' +
    'Please contact your Card Issuer (by the phone number on the back of your card) to check the active status your card.',
  'error_code_24': 'Invalid Card/Account Information.<br>' +
    'Please make payment again and enter the valid Card/Account Information, or contact your Bank to check the valid Card/Account Information.',
  'error_code_25': 'Invalid OTP.<br>' +
    'Please make payment again and enter the valid OTP in the SMS from your Bank sent to the registered mobile phone number.',
  'error_code_B': 'Authentication failed.\n' +
    'Please contact your Card Issuer (by the phone number on the back of your card) and provide your transaction information to check detailed reason and get assistance to make payment again.',
  'error_code_D': 'Authentication failed.\n' +
    'Please make payment again or contact your Card Issuer (by the phone number on the back of your card) and provide your transaction information to check detailed reason and get assistance to make payment again.',
  'error_code_E': 'Your card was not enrolled 3D-Secure authentication.\n' +
    'Please make payment again or contact your Card Issuer (by the phone number on the back of your card) and provide your transaction information to check detailed reason and get assistance to make payment again.',
  'error_code_F': 'Invalid authentication password.\n' +
    'Please make payment again and enter the right password following the guide of your Card Issuer.',
  'error_code_I': 'CSC verification failed.\n' +
    'Please make payment again and enter the right CSC printed on your card.',
  'error_code_U': ' Invalid CSC.\n' +
    'Please make payment again and enter the right CSC printed on your card.',
  'error_code_Z': 'Your transaction was declined.\n' +
    'Please contact the Merchant for assistance.',
  'error_code_253': 'Your session has expired.',
  'error_code_overtime': 'Your session has expired.',
  'error-i': 'Your transaction was declined. Please contact the Merchant for assistance.',
  'payment_method_selection': 'Select payment method',
  // domescard
  'payment_by': 'Pay with',
  'issue_date_label': 'Issue Date',
  'expire_date_label': 'Expiration Date',
  'invalid_message': 'Invalid Information',
  'invalid_card_number': 'Invalid Card Number',
  'condition': 'Conditions for online payment',
  'bank_search': 'Find your bank',
  'card_name_guide': 'Cardholder Name on the front of the card, with spaces but not Vietnamese accents.',
  'card_name_example': 'NGUYEN VAN A',
  'issue_date_guide': 'Issue Month and Year on the front of the card (VALID FROM) (if any).',
  'issue_date_example': '05/17',
  'expire_date_guide': 'The expiration month (MM) and year (YY) on the front side of the card (VALID/GOOD THRU).',
  'expire_date_example': '12/25',
  'card_number_guide_19': '19 digits on the front of the card, first 4 digits are 9704.',
  'card_number_example_19': '9704 1234 5678 9123 012',
  'card_number_example_1619': '9704 1234 5678 9123 012',
  'card_number_guide_16': '16 digits on the front of the card, first 4 digits are 9704.',
  'card_number_example_16': '9704 1234 5678 9123',
  'card_number_guide_1619': '16 or 19 digits on the front of the card, first 4 digits are 9704.',
  'dialog_title': 'Payment guide by',
  'condition_1': 'Activated <strong>SMS-OTP</strong> (OTP receiving method by SMS) for Vietcombank Domestic Debit Card, follow one of below ways:<br>' +
    '<strong>1.</strong> Log in VCB-iB@nking (at <a class="outline_none" href="https://www.vietcombank.com.vn/IBanking2020/" target="_blank">https://www.vietcombank.com.vn/IBanking2020/</a>), then setup OTP receiving method by SMS.<br>' +
    '<strong>2.</strong> Register at Vietcombank bank counters.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 50,000,000 VND/ transaction/ day and up to 10 transactions/ day.<br>' +
    '<br>' +
    '<strong>Vietcombank hotline: </strong> (+84) 1900 545413',
  'condition_47': 'Activated <strong>SMS-OTP</strong> (OTP receiving method by SMS) for Vietcombank Domestic Debit Card, follow one of below ways:<br>' +
    '<strong>1.</strong> Log in VCB-iB@nking (at <a class="outline_none" href="https://www.vietcombank.com.vn/IBanking2020/" target="_blank">https://www.vietcombank.com.vn/IBanking2020/</a>), then setup OTP receiving method by SMS.<br>' +
    '<strong>2.</strong> Register at Vietcombank bank counters.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 50,000,000 VND/ transaction/ day and up to 10 transactions/ day.<br>' +
    '<br>' +
    '<strong>Vietcombank hotline: </strong> (+84) 1900 545413',
  'condition_19': 'Registered for <strong>BIDV Online service - The "financial" service package</strong>or <strong>BIDV Smart Banking</strong> service, follow one of below ways:<br>\n' +
    '<strong>1.</strong> Online register at <a class="outline_none" href="https://ebank.bidv.com.vn/DKNHDT/dk_bidvonline.htm" target="_blank">https://ebank.bidv.com.vn/DKNHDT/dk_bidvonline.htm</a><br>\n' +
    '<strong>2.</strong> Register at BIDV bank counters.<br>\n' +
    '<br>\n' +
    '<strong>Online payment limit</strong><br>\n' +
    'Up to 50,000,000 VND/ day/ transaction.<br>\n' +
    '<br>\n' +
    '<strong>BIDV Hotline:</strong> (+84) 1900 9247',
  'condition_59': 'Registered for <strong>BIDV Online service - The "financial" service package</strong> or <strong>BIDV Smart Banking</strong> service, follow one of below ways:<br>\n' +
    '<strong>1.</strong> Online register at <a class="outline_none" href="https://ebank.bidv.com.vn/DKNHDT/dk_bidvonline.htm" target="_blank">https://ebank.bidv.com.vn/DKNHDT/dk_bidvonline.htm</a><br>\n' +
    '<strong>2.</strong> Register at BIDV bank counters.<br>\n' +
    '<br>\n' +
    '<strong>Online payment limit</strong><br>\n' +
    'Up to 100,000,000 VND/ day/ transaction.<br>\n' +
    '<br>\n' +
    '<strong>BIDV Hotline:</strong> (+84) 1900 9247',
  'condition_24': 'Registered for <strong>SMS Banking</strong> at Agribank bank counter.<br>' +
    'Activated <strong>Internet Service</strong> for Agribank Domestic Debit Card, follow one of below ways:<br/>' +
    '<strong>1.</strong> Log in Agribank E-Mobile Banking on your mobile phone, then select Card service - View card information - Activate Internet service for ATM card.<br>' +
    '<strong>2.</strong> Register for service at Agribank ATM/CDM.<br>' +
    '<strong>3.</strong> Register for service at Agribank bank counter.<br>' +
    '<br>' +
    '<strong>* Online payment limit (Internet service)</strong><br>' +
    '- Success Debit Card: Up to 20,000,000 VND/ day/ transaction.<br>' +
    '- Success Plus Debit Card: Up to 30,000,000 VND/ day/ transaction.<br>' +
    '<br>' +
    '<strong>*Agribank hotline: </strong> (+84) 1900 558 818',
  'condition_62': 'Registered for <strong>SMS Banking</strong> at Agribank bank counter.<br>' +
    'Activated <strong>Internet Service</strong> for Agribank Domestic Debit Card, follow one of below ways:<br/>' +
    '<strong>1.</strong> Log in Agribank E-Mobile Banking on your mobile phone, then select Card service - View card information - Activate Internet service for ATM card.<br>' +
    '<strong>2.</strong> Register for service at Agribank ATM/CDM.<br>' +
    '<strong>3.</strong> Register for service at Agribank bank counter.<br>' +
    '<br>' +
    '<strong>* Online payment limit (Internet service)</strong><br>' +
    '- Success Debit Card: Up to 20,000,000 VND/ day/ transaction.<br>' +
    '- Success Plus Debit Card: Up to 30,000,000 VND/ day/ transaction.<br>' +
    '<br>' +
    '<strong>*Agribank hotline: </strong> (+84) 1900 558 818',
  'condition_4': 'Registered for <strong>Online payment (e-Payment)</strong> service for VietinBank Domestic Debit Card at VietinBank bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit </strong><br>' +
    'Up to 30,000,000 VND/ transaction/ day and up to 10 transactions/ day.<br>' +
    '<br>' +
    '<strong>VietinBank hotline: </strong> (+84) 1900 558868',
  'condition_50': 'Registered for <strong>Online payment (e-Payment)</strong> service for VietinBank Domestic Debit Card at VietinBank bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit </strong><br>' +
    'Up to 30,000,000 VND/ transaction/ day and up to 10 transactions/ day.<br>' +
    '<br>' +
    '<strong>VietinBank hotline: </strong> (+84) 1900 558868',
  'condition_16': 'Registered for <strong>e-Commerce</strong> service for Sacombank Domestic Debit Card, by composing an SMS with the syntax: ' +
    '<strong>THE MO_ECOM XXXX</strong> and send to <strong>8149 </strong>(<strong>XXXX</strong>  are the last 4 digits on your Sacombank Domestic Debit Card).\n' +
    'Note: The phone number to send service activation message must be the phone number registered with Sacombank.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 500,000,000 VND/ day và 100,000,000 VND/ transaction<br>' +
    '<br>' +
    '<strong>Sacombank hotline: </strong> (+84) 1900 555588',
  'condition_69': 'Registered for <strong>e-Commerce</strong> service for Sacombank Domestic Debit Card, by composing an SMS with the syntax: ' +
    '<strong>THE MO_ECOM XXXX</strong> and send to <strong>8149 </strong>(<strong>XXXX</strong>  are the last 4 digits on your Sacombank Domestic Debit Card).\n' +
    'Note: The phone number to send service activation message must be the phone number registered with Sacombank.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 500,000,000 VND/ day và 100,000,000 VND/ transaction<br>' +
    '<br>' +
    '<strong>Sacombank hotline: </strong> (+84) 1900 555588',
  'condition_3': 'Registered for TPBank <strong>Internet Banking</strong> service at TPBank bank counters.<br>' +
    '<br>' +
    '<strong>TPBank hotline: </strong> (+84) 1900 585885',
  'condition_61': 'Registered for TPBank <strong>Internet Banking</strong> service at TPBank bank counters.<br>' +
    '<br>' +
    '<strong>TPBank hotline: </strong> (+84) 1900 585885',
  'condition_8': '<strong>MBBank Active Plus</strong> Domestic Debit Card with active <strong>"Internet Usage"</strong>, follow one of below ways:' +
    ' follow one of bellow ways:<br>' +
    '<strong>1.</strong>Compose an SMS with the syntax: <strong>MB_MOINTERNET_CMND_FIRST 4 DIGITS_LAST 4 DIGITS</strong>' +
    ' and send to <strong>8136</strong>. Note: Please use the phone number which was registered with MBBank to send SMS.<br>' +
    '<strong>2.</strong>Log in MBBank Internet Banking (<a class="outline_none" href="https://online.mbbank.com.vn/retail/" target="_blank">https://online.mbbank.com.vn/retail/</a>)' +
    ' or MB Bank application on your mobile phone, then select Card Service - On/Off Internet Usage.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 50,000,000 VND/ transaction/ day.<br>' +
    '<br>' +
    '<strong>MBBank hotline: </strong> (+84) 1900 545 426',
  'condition_49': '<strong>MBBank Active Plus</strong> Domestic Debit Card with active <strong>"Internet Usage"</strong>, follow one of below ways:' +
    ' follow one of bellow ways:<br>' +
    '<strong>1.</strong>Compose an SMS with the syntax: <strong>MB_MOINTERNET_CMND_FIRST 4 DIGITS_LAST 4 DIGITS</strong>' +
    ' and send to <strong>8136</strong>. Note: Please use the phone number which was registered with MBBank to send SMS.<br>' +
    '<strong>2.</strong>Log in MBBank Internet Banking (<a class="outline_none" href="https://online.mbbank.com.vn/retail/" target="_blank">https://online.mbbank.com.vn/retail/</a>)' +
    ' or MB Bank application on your mobile phone, then select Card Service - On/Off Internet Usage.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 50,000,000 VND/ transaction/ day.<br>' +
    '<br>' +
    '<strong>MBBank hotline: </strong> (+84) 1900 545 426',
  'condition_11': 'Registered for <strong>SMS Banking</strong> at Eximbank bank counter.<br/>' +
    'Activated <strong>Online Payment Service</strong> for Eximbank V-Top Domestic Debit Card, follow one of below ways:<br/>' +
    '<strong>1.</strong> Log in Eximbank Internet Banking (<a class="outline_none" href="https://ebanking.eximbank.com.vn/ibcn/faces/" target="_blank">https://ebanking.eximbank.com.vn/ibcn/faces/</a>)' +
    ', then select “Registration/ Online payment by V-Top card” and fill in information as required.<br>' +
    '<strong>2.</strong> Compose an SMS with the syntax: <strong>EIB ECOM [Last 8 digits]</strong> or <strong>EIB ECOM [Card Number]</strong> and send to <strong>8149</strong>.' +
    ' Note: Please use the phone number which was registered with Eximbank to send SMS.<br>' +
    '<strong>3.</strong>Register at Eximbank bank counter.<br>' +
    '<br>' +
    '<strong>Eximbank hotline: </strong> (+84) 1800 1199',
  'condition_68': 'Registered for <strong>SMS Banking</strong> at Eximbank bank counter.<br/>' +
    'Activated <strong>Online Payment Service</strong> for Eximbank V-Top Domestic Debit Card, follow one of below ways:<br/>' +
    '<strong>1.</strong> Log in Eximbank Internet Banking (<a class="outline_none" href="https://ebanking.eximbank.com.vn/ibcn/faces/" target="_blank">https://ebanking.eximbank.com.vn/ibcn/faces/</a>)' +
    ', then select “Registration/ Online payment by V-Top card” and fill in information as required.<br>' +
    '<strong>2.</strong> Compose an SMS with the syntax: <strong>EIB ECOM [Last 8 digits]</strong> or <strong>EIB ECOM [Card Number]</strong> and send to <strong>8149</strong>.' +
    ' Note: Please use the phone number which was registered with Eximbank to send SMS.<br>' +
    '<strong>3.</strong>Register at Eximbank bank counter.<br>' +
    '<br>' +
    '<strong>Eximbank hotline: </strong> (+84) 1800 1199',
  'condition_12': 'Registered for SHB <strong>Internet Banking</strong> service at SHB bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 300,000,000 VND/ day and 20 transactions/ day.<br>' +
    '<br>' +
    '<strong>SHB hotline: </strong> (+84) 1800 588856',
  'condition_60': 'Registered for SHB <strong>Internet Banking</strong> service at SHB bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 300,000,000 VND/ day and 20 transactions/ day.<br>' +
    '<br>' +
    '<strong>SHB hotline: </strong> (+84) 1800 588856',
  'condition_10': 'Registered for issuing MSB <strong>M1/ M-Money</strong> Domestic Debit Card.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'M1 Card: Up to 50,000,000 VND/ transaction/ day.<br>' +
    'M-Money Card: Up to 40,000,000 VND/ transaction/ day.<br>' +
    '<br>' +
    '<strong>MSB hotline: </strong> (+84) 1800 599 999',
  'condition_53': 'Registered for issuing MSB <strong>M1/ M-Money</strong> Domestic Debit Card.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'M1 Card: Up to 50,000,000 VND/ transaction/ day.<br>' +
    'M-Money Card: Up to 40,000,000 VND/ transaction/ day.<br>' +
    '<br>' +
    '<strong>MSB hotline: </strong> (+84) 1800 599 999',
  'condition_7': 'Registered for <strong>SMS Banking, E-Banking Transfer</strong> at HDBank bank counter.<br>' +
    'Activated <strong>Online Payment</strong> service for HDBank Domestic Debit Card, follow one of below ways:<br/>' +
    '<strong>1.</strong> Log in HDBank Internet Banking (<a class="outline_none" href="https://ebanking.hdbank.vn/ipc/individual/" target="_blank">https://ebanking.hdbank.vn/ipc/individual/</a>)' +
    ', then select Managing Services - Other Services Installed - choose "Registry" and "Active" for Online Payment Services.<br>' +
    '<strong>2.</strong> Compose an SMS with the syntax: <strong>HDB STAONE [ebanking username] [SMS Banking password]</strong> and send to <strong>8149</strong>.' +
    ' Note: Please use the phone number which was registered with HDBank to send SMS.<br>' +
    '<strong>3.</strong>Register at HDBank bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Refer to transfer limit registered with ebanking.<br>' +
    '<br>' +
    '<strong>Tổng đài hỗ trợ HDBank hotline: </strong> (+84) 1900 6060',
  'condition_51': 'Registered for <strong>SMS Banking, E-Banking Transfer</strong> at HDBank bank counter.<br>' +
    'Activated <strong>Online Payment</strong> service for HDBank Domestic Debit Card, follow one of below ways:<br/>' +
    '<strong>1.</strong> Log in HDBank Internet Banking (<a class="outline_none" href="https://ebanking.hdbank.vn/ipc/individual/" target="_blank">https://ebanking.hdbank.vn/ipc/individual/</a>)' +
    ', then select Managing Services - Other Services Installed - choose "Registry" and "Active" for Online Payment Services.<br>' +
    '<strong>2.</strong> Compose an SMS with the syntax: <strong>HDB STAONE [ebanking username] [SMS Banking password]</strong> and send to <strong>8149</strong>.' +
    ' Note: Please use the phone number which was registered with HDBank to send SMS.<br>' +
    '<strong>3.</strong>Register at HDBank bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Refer to transfer limit registered with ebanking.<br>' +
    '<br>' +
    '<strong>Tổng đài hỗ trợ HDBank hotline: </strong> (+84) 1900 6060',
  'condition_20': 'Registered for SeABank <strong>Internet Banking</strong> service at SeABank bank counter.<br>' +
    '<br>' +
    '<strong>SeABank hotline: </strong> (+84) 1900 555587',
  'condition_64': 'Registered for SeABank <strong>Internet Banking</strong> service at SeABank bank counter.<br>' +
    '<br>' +
    '<strong>SeABank hotline: </strong> (+84) 1900 555587',
  'condition_15': 'Registered for <strong>Online Payment</strong> service for ABBANK YOUcard Domestic Debit Card on ABBANK Mobile Banking application/ Internet Banking/ ATM/ at ABBANK bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'ABBANK YOUcard: Up to 50,000,000 VND/ day/ transaction.<br>' +
    'ABBANK YOUcard Gold: Up to 100,000,000 VND/ day/ transaction.<br>' +
    'ABBANK YOUcard VIP: Up to 200,000,000 VND/ day/ transaction.<br>' +
    '<br>' +
    '<strong>ABBank hotline: </strong> (+84) 1800 1159',
  'condition_58': 'Registered for <strong>Online Payment</strong> service for ABBANK YOUcard Domestic Debit Card on ABBANK Mobile Banking application/ Internet Banking/ ATM/ at ABBANK bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'ABBANK YOUcard: Up to 50,000,000 VND/ day/ transaction.<br>' +
    'ABBANK YOUcard Gold: Up to 100,000,000 VND/ day/ transaction.<br>' +
    'ABBANK YOUcard VIP: Up to 200,000,000 VND/ day/ transaction.<br>' +
    '<br>' +
    '<strong>ABBank hotline: </strong> (+84) 1800 1159',
  'condition_22': 'Registered for <strong>SMS Banking</strong> and <strong>Internet Banking</strong> for BAC A BANK Domestic Debit Card at BAC A BANK bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 50,000,000 VND/ day/ transaction.<br>' +
    '<br>' +
    '<strong>BAC A BANK hotline: </strong> (+84) 1800 588828',
  'condition_56': 'Registered for <strong>SMS Banking</strong> and <strong>Internet Banking</strong> for BAC A BANK Domestic Debit Card at BAC A BANK bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 50,000,000 VND/ day/ transaction.<br>' +
    '<br>' +
    '<strong>BAC A BANK hotline: </strong> (+84) 1800 588828',
  'condition_17': 'Registered for <strong>Internet Banking/ SMS Banking</strong> service and <strong>Online Payment E-Commerce</strong> service for NAM A BANK Domestic Debit Card at NAM A BANK bank counter or contact NAM A BANK Hotline.<br>\
    <br>\
    <strong>NAM A BANK Hotline:</strong> (+84) 1900 6679',
  'condition_65': 'Registered for <strong>Internet Banking/ SMS Banking</strong> service and <strong>Online Payment E-Commerce</strong> service for NAM A BANK Domestic Debit Card at NAM A BANK bank counter or contact NAM A BANK Hotline.<br>\
    <br>\
    <strong>NAM A BANK Hotline:</strong> (+84) 1900 6679',
  'condition_23': 'Register <strong>online payment (E-Commerce service)</strong> at NCB bank counters.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    '100,000,000 VND per day.<br>' +
    '<br>' +
    '<strong>NCB hotline: </strong> (+84) 1800 6166',
  'condition_52': 'Register <strong>online payment (E-Commerce service)</strong> at NCB bank counters.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    '100,000,000 VND per day.<br>' +
    '<br>' +
    '<strong>NCB hotline: </strong> (+84) 1800 6166',
  'condition_18': 'Register for <strong>Online Payment</strong> service for OceanBank Domestic Debit Card on Easy InternetBanking ' +
    '(<a class="outline_none" href="https://ib.oceanbank.vn/" target="_blank">https://ib.oceanbank.vn/</a>)' +
    ' or at OceanBank bank counters.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 200,000,000 VND/ day.<br>' +
    '<br>' +
    '<strong>OceanBank hotline: </strong> (+84) 1800 588815',
  'condition_55': 'Register for <strong>Online Payment</strong> service for OceanBank Domestic Debit Card on Easy InternetBanking ' +
    '(<a class="outline_none" href="https://ib.oceanbank.vn/" target="_blank">https://ib.oceanbank.vn/</a>)' +
    ' or at OceanBank bank counters.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 200,000,000 VND/ day.<br>' +
    '<br>' +
    '<strong>OceanBank hotline: </strong> (+84) 1800 588815',
  'condition_27': 'Registered for <strong>PV-eCommerce</strong> service for PVcomBank Domestic Debit Card by composing an SMS with the syntax: ' +
    '<strong>PVB ECOMON</strong> and send to <strong>6089.</strong><br/>' +
    'Note: Please use the phone number which was registered with PVcomBank to send SMS.<br/>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 50,000,000 VND/ day và 25,000,000 VND/ transaction.<br>' +
    '<br>' +
    '<strong>PVcomBank hotline: </strong> (+84) 1900 555592',
  'condition_66': 'Registered for <strong>PV-eCommerce</strong> service for PVcomBank Domestic Debit Card by composing an SMS with the syntax: ' +
    '<strong>PVB ECOMON</strong> and send to <strong>6089.</strong><br/>' +
    'Note: Please use the phone number which was registered with PVcomBank to send SMS.<br/>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 50,000,000 VND/ day và 25,000,000 VND/ transaction.<br>' +
    '<br>' +
    '<strong>PVcomBank hotline: </strong> (+84) 1900 555592',
  'condition_25': 'Registered for SCB <strong>Internet Banking</strong> service at SCB bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 50,000,000 VND/ transaction/ day.<br>' +
    '<br>' +
    '<strong>SCB hotline: </strong> (+84) 1900 6538',
  'condition_63': 'Registered for SCB <strong>Internet Banking</strong> service at SCB bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 50,000,000 VND/ transaction/ day.<br>' +
    '<br>' +
    '<strong>SCB hotline: </strong> (+84) 1900 6538',
  'condition_30': 'Registered for Viet Capital Bank <strong>Internet Banking</strong> service at Viet Capital Bank bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 300,000,000 VND/ day and 100,000,000 VND/ transaction.<br>' +
    '<br>' +
    '<strong>Viet Capital Bank hotline: </strong> (+84) 1900 555596',
  'condition_71': 'Registered for Viet Capital Bank <strong>Internet Banking</strong> service at Viet Capital Bank bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 300,000,000 VND/ day and 100,000,000 VND/ transaction.<br>' +
    '<br>' +
    '<strong>Viet Capital Bank hotline: </strong> (+84) 1900 555596',
  'condition_9': 'Registered for VietABank <strong>Internet Banking</strong> service and <strong>Online Payment</strong> ' +
    'service for VietABank Domestic Debit Card at VietABank bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 100,000,000 VND/ day and 50,000,000 VND/ transaction.<br>' +
    '<br>' +
    '<strong>VietABank hotline: </strong> (+84) 1900 555590',
  'condition_54': 'Registered for VietABank <strong>Internet Banking</strong> service and <strong>Online Payment</strong> ' +
    'service for VietABank Domestic Debit Card at VietABank bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 100,000,000 VND/ day and 50,000,000 VND/ transaction.<br>' +
    '<br>' +
    '<strong>VietABank hotline: </strong> (+84) 1900 555590',
  'condition_33': 'Registered for <strong>Online Payment Ecommerce</strong> service for ACB Domestic Debit Card at ACB bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 50,000,000 VND/ day and 20 transactions/ day.<br>' +
    '<br>' +
    '<strong>ACB Hotline:</strong> (+84) 1900 577775',
  'condition_34': 'Registered for <strong>GP.eCom – Electronic commercial service</strong> for GPBank Domestic Debit Card on Internet Banking (<a class="outline_none" href="https://ib.gpbank.com.vn/GIB/SignIn" target="_blank">https://ib.gpbank.com.vn/GIB/SignIn</a>) at GPBank bank counter.<br>\
    <br>\
    <strong>Online payment limit</strong><br>\
    Up to 50,000,000VND/ transaction/ day.<br>\
    <br>\
    <strong>GPBank Hotline:</strong> (+84) 1800 585866',
  'condition_35': 'Registered for <strong>OCB Online Service - Gold Package</strong> at OCB bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 50,000,000 VND/ transaction; 100,000,000 VND/ day; 30 transactions/ day.<br>' +
    '<br>' +
    '<strong>OCB Hotline:</strong> (+84) 1800 6678',
  'condition_36': 'Registered for <strong>Internet Banking</strong> service at LienVietPostBank bank counter.<br>\
    <br>\
    <strong>Online payment limit</strong><br>\
    Up to 50,000,000 VND/ transaction/ day.<br>\
    <br>\
    <strong>LienVietPostBank Hotline:</strong> (+84) 1800 577768',
  'condition_37': 'Registered for <strong>Online Payment BVB-Ecom</strong> service for BAOVIET Bank Domestic Debit Card on Internet Banking (<a class="outline_none" href="https://ebank.baovietbank.vn/" target="_blank">https://ebank.baovietbank.vn/</a>) or at BAOVIET Bank bank counter.<br>\
    <br>\
    <strong>Online payment limit</strong><br>\
    Up to 30,000,000 VND/ transaction; 70,000,000 VND/ day; 10 transactions/ day.<br>\
    <br>\
    <strong>BAOVIET Bank Hotline:</strong> (+84) 1800 558848',
  'condition_38': 'Registered for <strong>Online Payment eCom</strong> service for Kienlongbank Domestic Debit Card on Internet Banking (<a class="outline_none" href="https://ebank.kienlongbank.com/" target="_blank">https://ebank.kienlongbank.com/</a>) or at Kienlongbank bank counter.<br>\
    <br>\
    <strong>Online payment limit</strong><br>\
    Up to 20 transaction/ day.<br>\
    Basic Package: Up to 20,000,000 VND/ transaction; 100,000,000 VND/ day.<br>\
    Advance Package: Up to 50,000,000 VND/ transaction; 200,000,000 VND/ day.<br>\
    <br>\
    <strong>Kienlongbank Hotline:</strong> (+84) 1800 6929',
  'condition_39': 'Registered for <strong>Online Payment VRB E-Commerce</strong> service for VRB Domestic Debit Card at VRB bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Standard Package: Up to 10,000,000 VND/ day.<br>' +
    'Gold Package: Up to 20,000,000 VND/ day.<br>' +
    'Platinum Package: Up to 30,000,000 VND/ day.<br>' +
    '<br>' +
    '<strong>VRB Hotline:</strong> (+84) 1800 6656',
  'condition_40': 'Registered for <strong>E-Banking, SMS Banking</strong> and <strong>Online Payment E-com</strong> service for Public Bank Domestic Debit Card at Public Bank bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 20,000,000 VND/ day.<br>' +
    '<br>' +
    '<strong>Public Bank Hotline:</strong> (+84) 1800 1198 / (+84) 1800 599930',
  'condition_41': 'Registered for <strong>Online Payment</strong> service for SAIGONBANK Domestic Debit Card at SAIGONBANK bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 100,000,000 VND/ transaction and 500,000,000 VND/ day.<br>' +
    '<br>' +
    '<strong>SAIGONBANK Hotline:</strong> (+84) 1900 555511',
  'condition_42': 'Registered for <strong>Flexilink Internet Banking Service - Financial Package</strong> at PG Bank bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 50,000,000 VND/ transaction and 500,000,000 VND/ day.<br>' +
    '<br>' +
    '<strong>PG Bank Hotline:</strong> (+84) 1900 555574',
  'condition_43': 'Registered for <strong>Online Payment IVB E-Commerce</strong> service for IVB Domestic Debit Card, follow one of below ways:<br>' +
    '<strong>1.</strong> Log in IVB Internet Banking (<a class="outline_none" href="https://ebanking.indovinabank.com.vn/" target="_blank">https://ebanking.indovinabank.com.vn/</a>), then select Utilities - Lock/Unlock E-Commerce Service.<br>' +
    '<strong>2.</strong> Contact Hotline IVB to register for service.<br>' +
    '<strong>3.</strong> Register for service at IVB bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 50,000,000 VND/ transaction/ day.<br>' +
    '<br>' +
    '<strong>IVB Hotline:</strong> (+84) 1900 588879',
  'condition_44': 'Registered for <strong>Internet Banking</strong> service at Wooribank bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 100,000,000 VND/ transaction/ day.<br>' +
    '<br>' +
    '<strong>Wooribank Hotline:</strong> (+84) 1800 6003',
  'condition_45': 'Registered for <strong>Online Payment</strong> service for UOB Domestic Debit Card at UOB bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 50,000,000 VND/ transaction; 100,000,000 VND/ day.<br>' +
    '<br>' +
    '<strong>UOB Hotline:</strong> (+84) 1800 599921',
  'condition_46': 'Registered for <strong>Online Payment</strong> service for Shinhan Domestic Debit Card, follow one of below ways:<br>' +
    '<strong>1.</strong> Log in Shinhan Internet Banking (<a class="outline_none" href="https://online.shinhan.com.vn/global.shinhan" target="_blank">https://online.shinhan.com.vn/global.shinhan</a>) or Mobile Banking SOL on your mobile phone, then select Cards - E-commerce Service Registration/Deactivation.<br>' +
    '<strong>2.</strong> Register for service at Shinhan Bank bank counter.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 30,000,000 VND/ day.<br>' +
    '<br>' +
    '<strong>Shinhan Bank Hotline:</strong> (+84) 1900 1577',
  'condition_2': 'Please click "Continue" to be redirected to Techcombank Internet Banking page to process your transaction.<br>\
    <br>\
    You will be automatically redirected after <strong>10</strong> seconds.',
  'condition_67': 'Registered to active the <strong>Online payment</strong> function for Techcombank Domestic Debit Card, follow one of below ways:<br>\n' +
    '<strong>1.</strong> Log in F@st iBank (<a class="outline_none" href="https://ib.techcombank.com.vn/" target="_blank">https://ib.techcombank.com.vn/</a>), then select Cards - Card Service - Reg. Internet Payment.<br>\n' +
    '<strong>2.</strong> Register at Techcombank bank counter.<br>\n' +
    '<br>\n' +
    '<strong>Online payment limit</strong><br>\n' +
    'Up to 20,000,000 VND/ day.<br>\n' +
    '<br>\n' +
    '<strong>Techcombank Hotline:</strong> (+84) 1800 588 822',
  'condition_14': 'Subcribed to <strong>Online payment</strong> service for VPBank Domestic Debit Card, follow one of below ways:<br>' +
    '<strong>1.</strong> Log in VPBank Online (<a class="outline_none" href="https://online.vpbank.com.vn/" target="_blank">https://online.vpbank.com.vn/</a>) or VPBank Online on your mobile phone, then select "Servive +" - Subscribe/Unsubscribe to online payment.<br>' +
    '<strong>2.</strong> Contact hotline VPBank to register for service.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 100,000,000 VND/ transaction/ day.<br>' +
    '<br>' +
    '<strong>VPBank hotline: </strong> (+84) 1900 545415',
  'condition_70': 'Subcribed to <strong>Online payment</strong> service for VPBank Domestic Debit Card, follow one of below ways:<br>' +
    '<strong>1.</strong> Log in VPBank Online (<a class="outline_none" href="https://online.vpbank.com.vn/" target="_blank">https://online.vpbank.com.vn/</a>) or VPBank Online on your mobile phone, then select "Servive +" - Subscribe/Unsubscribe to online payment.<br>' +
    '<strong>2.</strong> Contact hotline VPBank to register for service.<br>' +
    '<br>' +
    '<strong>Online payment limit</strong><br>' +
    'Up to 100,000,000 VND/ transaction/ day.<br>' +
    '<br>' +
    '<strong>VPBank hotline: </strong> (+84) 1900 545415',
  'condition_6': 'Please click "Continue" to be redirected to DongA Bank Internet Banking page to process your transaction.<br>\
    <br>\
    Note: DongA Bank does not support online payment by SMS/Mobile Banking method. Please choose the correct method "Internet Banking payment" on DongA Bank page to process your transaction.',
  'condition_57': 'Registered for <strong>Transfer/ Online payment on Internet Banking</strong> service at DongA Bank bank counter.<br>\n' +
    '<br>\n' +
    '<strong>Online payment limit</strong><br>\n' +
    'Package 9,900 VND/ month/ account: Limit up to 10,000,000 VND/ day.<br>\n' +
    'Package 50,000 VND/ month/ account: Limit from 10,000,000 VND up to 100,000,000 VND/ day.<br>\n' +
    'Package 100,000 VND/ month/ account: Limit from 100,000,000 VND up to 500,000,000 VND/ day.<br>\n' +
    '<br>\n' +
    'DongA Bank Hotline:</strong> (+84) 1900 54 54 64',
  'condition_5': 'Please click "Continue" to be redirected to VIB Internet Banking page to process your transaction.<br>\
    <br>\
    You will be automatically redirected after <strong>10</strong> seconds.',
  'condition_48': 'Registered for VIB <strong>Internet Banking</strong> service at VIB bank counter.<br>\n' +
    '<br>\n' +
    '<strong>Online payment limit</strong><br>\n' +
    'Up to 50,000,000 VND/ day.<br>\n' +
    '<br>\n' +
    '<strong>VIB Hotline:</strong> (+84) 1800 8180',
  'condition_payment_1': 'Conditions: Activated SMS-OTP (OTP receiving method by SMS) for Vietcombank Domestic Debit Card.',
  'condition_payment_47': 'Conditions: Activated SMS-OTP (OTP receiving method by SMS) for Vietcombank Domestic Debit Card.',
  'condition_payment_2': 'Conditions', //tech
  'condition_payment_67': 'Conditions: Registered to active the Online payment function for Techcombank Domestic Debit Card.', //tech
  'condition_payment_3': 'Conditions: Registered for TPBank Internet Banking service.', //tpbank
  'condition_payment_61': 'Conditions: Registered for TPBank Internet Banking service.', //tpbank
  'condition_payment_4': 'Conditions: Registered for Online payment (e-Payment) service for VietinBank Domestic Debit Card.', //vietin
  'condition_payment_50': 'Conditions: Registered for Online payment (e-Payment) service for VietinBank Domestic Debit Card.', //vietin
  'condition_payment_5': 'Conditions', //vib
  'condition_payment_48': 'Conditions: Registered for VIB Internet Banking.', //vib
  'condition_payment_6': 'Conditions', //donga
  'condition_payment_57': 'Conditions: Registered for DongA Bank Transfer/ Online payment on Internet Banking service.', //donga
  'condition_payment_7': 'Conditions: Registered for SMS Banking, E-Banking Transfer and activated Online Payment service for HDBank Domestic Debit Card.', //hdb
  'condition_payment_8': 'Conditions: MBBank Active Plus Card with active Internet Usage.', //mbbank
  'condition_payment_51': 'Conditions: Registered for SMS Banking, E-Banking Transfer and activated Online Payment service for HDBank Domestic Debit Card.', //hdb
  'condition_payment_49': 'Conditions: MBBank Active Plus Card with active Internet Usage.', //mbbank
  'condition_payment_9': 'Conditions: Registered for VietABank Internet Banking service and activated Online Payment service for VietABank Domestic Debit Card.', //vieta
  'condition_payment_54': 'Conditions: Registered for VietABank Internet Banking service and activated Online Payment service for VietABank Domestic Debit Card.', //vieta
  'condition_payment_10': 'Conditions: Registered for issuing MSB M1/ M-Money Domestic Debit Card.', //msb
  'condition_payment_53': 'Conditions: Registered for issuing MSB M1/ M-Money Domestic Debit Card.', //msb
  'condition_payment_11': 'Conditions: Registered for SMS Banking and activated Online Payment Service for Eximbank V-Top Domestic Debit Card', //Eximbank
  'condition_payment_68': 'Conditions: Registered for SMS Banking and activated Online Payment Service for Eximbank V-Top Domestic Debit Card', //Eximbank
  'condition_payment_12': 'Conditions: Registered for SHB Internet Banking service.', //SHB
  'condition_payment_60': 'Conditions: Registered for SHB Internet Banking service.', //SHB
  'condition_payment_14': 'Conditions: Subcribed to Online payment service for VPBank Domestic Debit Card.', //VPBank
  'condition_payment_70': 'Conditions: Subcribed to Online payment service for VPBank Domestic Debit Card.', //VPBank
  'condition_payment_15': 'Conditions: Registered for Online payment service for ABBANK YOUcard Domestic Debit Card.', //ABB
  'condition_payment_58': 'Conditions: Registered for Online payment service for ABBANK YOUcard Domestic Debit Card.', //ABB
  'condition_payment_16': 'Conditions: Registered for e-Commerce service for Sacombank Domestic Debit Card.', //Sacombank
  'condition_payment_69': 'Conditions: Registered for e-Commerce service for Sacombank Domestic Debit Card.', //Sacombank
  'condition_payment_17': 'Conditions: Registered for Internet Banking/ SMS Banking service and Online Payment E-Commerce service for NAM A BANK Domestic Debit Card.', //NamABank
  'condition_payment_65': 'Conditions: Registered for Internet Banking/ SMS Banking service and Online Payment E-Commerce service for NAM A BANK Domestic Debit Card.', //NamABank
  'condition_payment_18': 'Conditions: Registered for Online Payment service for OceanBank Domestic Debit Card.', //OceanBank
  'condition_payment_55': 'Conditions: Registered for Online Payment service for OceanBank Domestic Debit Card.', //OceanBank
  'condition_payment_19': 'Conditions: Registered for BIDV Online service - The "financial" service package or BIDV Smart Banking service.', //BIDV
  'condition_payment_59': 'Conditions: Registered for BIDV Online service - The "financial" service package or BIDV Smart Banking service.', //BIDV
  'condition_payment_20': 'Conditions: Registered for SeABank Internet Banking service.', //Seabank
  'condition_payment_64': 'Conditions: Registered for SeABank Internet Banking service.', //Seabank
  'condition_payment_22': 'Conditions: Registered for SMS Banking and Internet Banking service for BAC A BANK Domestic Debit Card.', //BacAbank
  'condition_payment_56': 'Conditions: Registered for SMS Banking and Internet Banking service for BAC A BANK Domestic Debit Card.', //BacAbank
  'condition_payment_23': 'Conditions: Registered for Online Payment E-Commerce service for NCB Domestic Debit Card.', //NCB
  'condition_payment_52': 'Conditions: Registered for Online Payment E-Commerce service for NCB Domestic Debit Card.', //NCB
  'condition_payment_24': 'Conditions: Registered for SMS Banking and activated Internet Service for Agribank Domestic Debit Card.', //Agribank
  'condition_payment_62': 'Conditions: Registered for SMS Banking and activated Internet Service for Agribank Domestic Debit Card.', //Agribank
  'condition_payment_25': 'Conditions: Registered for SCB Internet Banking service.', //SCB
  'condition_payment_63': 'Conditions: Registered for SCB Internet Banking service.', //SCB
  'condition_payment_27': 'Conditions: Registered for PV-eCommerce service for PVcomBank Domestic Debit Card.', //PVcomBank
  'condition_payment_66': 'Conditions: Registered for PV-eCommerce service for PVcomBank Domestic Debit Card.', //PVcomBank
  'condition_payment_30': 'Conditions: Registered for Viet Capital Bank Internet Banking service.', //VCCB
  'condition_payment_71': 'Conditions: Registered for Viet Capital Bank Internet Banking service.', //VCCB
  'condition_payment_33': 'Conditions: Registered for Online Payment Ecommerce service for ACB Domestic Debit Card.\n', //ACB
  'condition_payment_34': 'Conditions: Registered for GP.eCom – Electronic commercial service for GPBank Domestic Debit Card.', //GPBank
  'condition_payment_35': 'Conditions: Registered for OCB Online Service - Gold Package.\n', //Oricom
  'condition_payment_36': 'Conditions: Registered for LienVietPostBank Internet Banking service.\n', //LPB
  'condition_payment_37': 'Conditions: Registered for Online Payment BVB-Ecom service for BAOVIET Bank Domestic Debit Card.\n', //BVB
  'condition_payment_38': 'Conditions: Registered for Online Payment eCom service for Kienlongbank Domestic Debit Card.\n', //KLB
  'condition_payment_39': 'Conditions: Registered for Online Payment VRB E-Commerce service for VRB Domestic Debit Card.\n', //VRB
  'condition_payment_40': 'Conditions: Registered for E-Banking, SMS Banking and Online Payment E-com service for Public Bank Domestic Debit Card.\n', //PBVN
  'condition_payment_41': 'Conditions: Registered for Online Payment service for SAIGONBANK Domestic Debit Card.', //Saigon
  'condition_payment_42': 'Conditions: Registered for Flexilink Internet Banking Service - Financial Package.\n', //PGB
  'condition_payment_43': 'Conditions: Registered for Online Payment IVB E-Commerce service for IVB Domestic Debit Card.\n', //IVB
  'condition_payment_44': 'Conditions: Registered for Wooribank Internet Banking service.\n', //WOO
  'condition_payment_45': 'Conditions: Registered for Online Payment service for UOB Domestic Debit Card.\n', //UOB
  'condition_payment_46': 'Conditions: Registered for Online Payment service for Shinhan Domestic Debit Card.\n', //SVB
  'verify_code': 'OTP Code',
  'qr_dialog_title': 'Pay with QR Code using', // QR
  'qr_note': 'Please log in to your mobile app to scan QR code and make payment',
  'qr_timeout_note': 'The QR code is now expired. Please make payment on your mobile app used to scan the QR code.',
  'qr_timer': 'Expired after',
  'qr_timeout': 'Expired',
  'qr_amount_payment': 'Total Amount',
  'qr_selection': 'Pay with QR Code',
  'qr_mobile_banking_app_select': 'Select a Mobile Banking app',
  'qr_other_app_select': 'Or select another app',
  'qr_search': 'Find your app',
  'no_result': 'No result found',
  'intercard': 'Credit / Debit Card',
  'domescard': 'ATM Card / Bank Account',
  'payment_with': 'Payment with',
  'qr_code': 'Pay with QR Code',
  'paypal_html_desc': 'Please click "Continue" to be redirected to PayPal page, then log in to your account and process your transaction.<br>\n' +
    '<br>\n' +
    'You will be automatically redirected after ',
  're_payment': 'Pay Again',
  'cancel_description': 'Are you sure you want to cancel this transaction and go back to ',
  'confirm': 'Confirm',
  'not_now': 'Not now',
  'error_post_8': 'You have entered incorrect card number. Please try again.',
  'error_post_9': 'You have entered incorrect card holder name. Please try again.',
  'error_post_12': 'You have entered incorrect Issue date or Expiry date. Please try again.',
  'error_post_13': 'Your transaction was exceeded online payment limit. Please choose other payment method.',
  'error_post_24': 'You have entered incorrect card informations. Please try again.',
  'error_post_25': 'You have entered incorrect one time password (OTP). Please click “Resend OTP” and try again.',
  'resend_otp': 'Resend OTP',
  'refresh_error': 'Invalid actions while processing transaction. Please cancel and make another transaction.',
  'support_error': 'An error while processing transaction.',
  'support_hotline': 'Please contact hotline ',
  'support_or': ' or ',
  'support_send_email_to': ' ',
  'support_message': '  for support.',
  'installment_choose_method': 'Select Installment Options',
  'installment_step_select_bank': 'Step 1: Select Bank',
  'installment_step_select_card_type': 'Step 2: Input first 6 digits or 8 digits of the card',
  'installment_note': 'Note: Credit card only',
  'installment_step_period': 'Installment Period',
  'installment_select_bank': 'Select Bank',
  'installment_select_card_type': 'Select Card Type',
  'installment_select_period': 'Select Installment Period',
  'installment_time_period': 'Installment Period',
  'installment_card_information': 'Card Information',
  'installment_card_number': 'Card Number',
  'installment_expiration_date': 'Expiration Date (MM/YYYY)',
  'installment_card_holder_name': 'Card Holder Name',
  // 'installment_note': 'Note',
  'installment_note_datail1': 'The successful transaction will be automatically converted into installment payments with the card issuer.' +
    ' Please ignore any messages or notifications from your card issuer (if any) about instruction for installment conversion' +
    ' and do not take any further actions to make conversion.<br>',
  'installment_note_SGTTVNVX': 'The successful transaction will be automatically converted into installment payments with the card issuer.' +
    ' Please ignore any messages or notifications from your card issuer (if any) about instruction for installment conversion' +
    ' and do not take any further actions to make conversion.<br>',
  'installment_note_MCOBVNVX': 'Note: MSB will collect the installment conversion fee directly from the cardholder once the transaction is successfully converted to installment. The fees depend on MSB’s policy from time to time.' +
    '<br/>' +
    'MSB hotline center: 1800 599 999.',
  'installment_note_VPBKVNVXFE': 'Note: FE CREDIT will collect the installment conversion fee directly from the cardholder once the transaction is successfully converted to installment. The fees depend on FE CREDIT’s policy from time to time.' +
    '<br/>' +
    'FE CREDIT hotline center: 1900 6939.',
  'installment_note_VTCBVNVX': 'Note: Techcombank will collect the installment conversion fee directly from the cardholder once the transaction is successfully converted to installment. The fees depend on Techcombank’s policy from time to time.' +
    '<br/>' +
    'Techcombank hotline center: 1800 588 822.',
  'installment_note_ORCOVNVX': 'Note: The 0% Interest Installment Plan does not apply to OCB Installment cards.' +
    '<br/>' +
    'Transactions using OCB Installment card will be automatically converted to 3-month or 6-month installments and will be charged installment conversion fee according to OCB’s regulations.' +
    '<br/>' +
    'OCB hotline center: 1800 6678.',
  'installment_note_datail2': 'Conversion Fee 1.9%',
  'installment_note_datail3': 'Hotline OnePay Support: 1900 633 927 (08h30 - 18h00).<br>',
  'installment_note_other': 'The successful transaction will be automatically converted into installment payments with the card issuer. Please do not take any further actions to make conversion.',
  'installment_info': 'Installment Scheme',
  'installment_merchant_name': 'Merchant Name',
  'installment_order_id': 'Order ID',
  'installment_order_valuation': 'Total Purchase Amount',
  'installment_amount_pay_per_month': 'Monthly Installment Amount',
  'installment_amount_fee': 'Fee Amount',
  'installment_total_amount': 'Total Purchase Amount',
  'installment_bank': 'Installment bank',
  'card_type': 'Card type',
  'phone': 'Phone number',
  'installment_invalid_date': 'Selected Installment Period has exceeded Card Expiration Date.',
  'submit_note_confirm': 'The successful transaction will be automatically converted into installment payments with the card issuer. <br/>Please do not take any further actions to make conversion.',
  'submit_note_confirm_MCOBVNVX': "The successful transaction will be automatically converted into installment payments with the card issuer.<br/>Please do not take any further actions to make conversion.<br/><br/>Note: MSB will collect the installment conversion fee directly from the cardholder once the transaction is successfully converted to installment. The fees depend on MSB’s policy from time to time.<br/>MSB hotline center: 1800 599 999.",
  'submit_note_confirm_VPBKVNVXFE': "The successful transaction will be automatically converted into installment payments with the card issuer.<br/>Please do not take any further actions to make conversion.<br/><br/>Note: FE CREDIT will collect the installment conversion fee directly from the cardholder once the transaction is successfully converted to installment. The fees depend on FE CREDIT's policy from time to time.<br/>FE CREDIT hotline center: 1900 6939.",
  'submit_note_confirm_VTCBVNVX': "The successful transaction will be automatically converted into installment payments with the card issuer.<br/>Please do not take any further actions to make conversion.<br/><br/>Note: Techcombank will collect the installment conversion fee directly from the cardholder once the transaction is successfully converted to installment. The fees depend on Techcombank’s policy from time to time.<br/>Techcombank hotline center: 1800 588 822.",
  'submit_note_confirm_ORCOVNVX': "The successful transaction will be automatically converted into installment payments with the card issuer.<br/>Please do not take any further actions to make conversion.<br/><br/>Note: The 0% Interest Installment Plan does not apply to OCB Installment cards.<br/>Transactions using OCB Installment card will be automatically converted to 3-month or 6-month installments and will be charged installment conversion fee according to OCB's regulations.<br/>OCB hotline center: 1800 6678.",
  'confirm_and_continute': 'Agree and Continue Payment',
  'provider_text': 'POWERED BY',
  'amount_text': 'Payment amount',
  'transaction_content': 'Transaction content',
  'payment_card': 'Bank card',
  'order_information': 'Order info',
  'installment_button': 'Installment',
  'btn_back': 'Back',
  'total_amount': 'Total amount',
  'installment_fee': 'Installment fee',
  'installment_valid_card_noti': 'Installment valid card notice',
  'installment_amount_per_month': 'Installment amount per month',
  'invalid_phone': 'Invalid phone number',
  'invalid_identity': 'Invalid identity number'
};
