// 空白のテンプレートの概要については、次のドキュメントを参照してください:
// http://go.microsoft.com/fwlink/?LinkID=397704
// ページ上のコードをデバッグするには、Ripple で読み込むか、Android デバイス/エミュレーターで読み込みます。アプリを起動し、ブレークポイントを設定します。
// 次に、JavaScript コンソールで "window.location.reload()" を実行します。
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Cordova の一時停止を処理し、イベントを再開します
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova が読み込まれました。ここで、Cordova を必要とする初期化を実行します。
    };

    function onPause() {
        // TODO: このアプリケーションは中断されました。ここで、アプリケーションの状態を保存します。
    };

    function onResume() {
        // TODO: このアプリケーションが再アクティブ化されました。ここで、アプリケーションの状態を復元します。
    };
})();

jQuery(function ($) {
    var now = new Date();
    $('select[name=year]').append($('<option>').html('--').val(''));
    for (var i = 0; i <= 10; i++) {
        $('select[name=year]').append($('<option>').html(now.getFullYear() - 10 + i).val(now.getFullYear() - 10 + i));
    }

    //年
    $('select[name=year]').change(function () {
        var selectedYear = $('option:selected', $(this)).val();
        if ($('select[name=month] > option:selected').val() == '2') {
            if (selectedYear != '' && checkLeapyear(selectedYear)) {
                $('select[name=day] > option[value=29]').show();
            } else {
                $('select[name=day] > option[value=29]').hide();
                if ($('select[name=day] > option:selected').val() == '29') {
                    $('select[name=day]').val('28');
                }
            }
        }
        
    });
    //月
    $('select[name=month]').change(function () {
        $('select[name=day] > option').show();
        var selectedMonth = $('option:selected', $(this)).val();
        if (selectedMonth != '') {
            switch (selectedMonth) {
                case '1':
                case '3':
                case '5':
                case '7':
                case '8':
                case '10':
                case '12':
                    break;
                case '4':
                case '6':
                case '9':
                case '11':
                    $('select[name=day] > option[value=31]').hide();
                    if ($('select[name=day] > option:selected').val() == '31') {
                        $('select[name=day]').val('30');
                    }
                    break;
                case '2':
                    $('select[name=day] > option[value=31]').hide();
                    $('select[name=day] > option[value=30]').hide();
                    var selectedYear = $('select[name=year] option:selected').val();
                    var maxDay = 28;
                    if (selectedYear != '' && checkLeapyear(selectedYear)) {
                        maxDay = 29;
                    } else {
                        $('select[name=day] > option[value=29]').hide();
                    }

                    if (parseInt($('select[name=day] > option:selected').val()) > maxDay) {
                        $('select[name=day]').val(maxDay);
                    }
                    break;
            }
        }
    });

    function checkLeapyear(year) {
        return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    }
});