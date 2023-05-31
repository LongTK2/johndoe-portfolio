let _translate = window.TranslateService;

$(window).on("load", function () {
    console.log("currentLang:");
   
});

$(document).ready(function () {
    var _url = new URL(window.location.href);
    currentLang = _url.searchParams.get("locale");
    console.log("currentLang:" + currentLang);
    if (currentLang && currentLang != undefined && currentLang.length > 0)
        _translate.use(currentLang);
    //translate
    translate();
});


window.addEventListener('scroll', function() {
    var mainNav = document.getElementById('main-nav');
  
    if (window.pageYOffset > 0) {
      mainNav.classList.add('sticky');
    } else {
      mainNav.classList.remove('sticky');
    }
  });
  
  // Xử lý sự kiện click vào icon menu di động
  var mobileMenuIcon = document.getElementById('mobile-menu');
  var sidebarMenu = document.getElementById('sidebar-menu');
  
  mobileMenuIcon.addEventListener('click', function() {
    sidebarMenu.style.display = sidebarMenu.style.display === 'block' ? 'none' : 'block';
  });


function checkEnable() {
    if (_checkEmail && _checkPhone && _checkIdentity) {
        $(".payment-info .btn_pay").removeAttr("disabled");
    }
    else {
        $(".payment-info .btn_pay").attr("disabled", "disabled");
    }
}

function validateEmail(obj) {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var _val = $(obj).val();
    if (_val && _val.trim() && !regularExpression.test(_val.trim().toLocaleLowerCase())) {
        $(".t-invalid-email").show();
        $(obj).addClass("red_border");
        _checkEmail = false;
    } else {
        $(".t-invalid-email").hide();
        $(obj).removeClass("red_border");
        _checkEmail = true;
    }
    checkEnable();
    info.email = _val.trim().toLocaleLowerCase();
}

function validateIdentity(obj) {
    var _val = $(obj).val();
    // console.log("identity: " + _val + " length: " + _val.trim().length);
    if (_val != "" && (_val.trim().length != 9 && _val.trim().length != 12)) {
        $(".t-invalid-identity").show();
        $(obj).addClass("red_border");
        _checkIdentity = false;
    }
    else {
        $(".t-invalid-identity").hide();
        $(obj).removeClass("red_border");
        _checkIdentity = true;
    }
    checkEnable();
}

function validatePhone(obj) {
    var _val = $(obj).val();
    // console.log("identity: " + _val + " length: " + _val.trim().length);
    var _fChar = _val.slice(0, 1);
    if (_val != "" && (_val.trim().length != 10 || _fChar != "0")) {
        $(".t-invalid-phone").show();
        $(obj).addClass("red_border");
        _checkPhone = false;
    }
    else {
        $(".t-invalid-phone").hide();
        $(obj).removeClass("red_border");
        _checkPhone = true;
    }
    checkEnable();
}

function openDialog() {
    if (!_getDialog) {
        $(".modal-body").empty();
        $.get("./confirm-payment-dialog.html", {}, function (data) {
            $(".modal-body").html(data);
            _getDialog = true;
            translate();
        }).done(function () {
            if (_getDialog) {
                // console.log("submit_note_confirm_" + _selectedBank);
                var _note_description = _translate.translate("submit_note_confirm_" + _selectedBank);
                if (_note_description === undefined || _note_description === '' || _note_description === "submit_note_confirm_" + _selectedBank) {
                    _note_description = _translate.translate("submit_note_confirm");
                }
                $(".modal-body .t-note-description").html(_note_description);
            }
            $('#confirmPaymentDialog').modal('show');
        });
    }
    else {
        $('#confirmPaymentDialog').modal('show');
    }
}

function closeDialog() {
    $('#confirmPaymentDialog').modal('hide')
}


function translate() {
    // console.log("lang: " + _translate.currentLang);
    var _lst = $(document).find(".e-translate");

    $(_lst).each(function (index, value) {
        var k = $(value).attr("alt-trans");
        if (k && k != "" && k != undefined) {
            var text = _translate.translate(k);
            $(value).html(text);
        }
    });
}

function submitSupport() {
}


