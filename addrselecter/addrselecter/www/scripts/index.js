jQuery(function ($) {
    //市町村検索
    //初期設定
    var area_pref = $('#area_pref'); //都道府県が入るselect
    var area_city = $('#area_city'); //市町村が入るselect
    var area_town = $('#area_town'); //町域が入るselect
    $('#foo').append(' <ul data-role="listview" data-child-pages="true"><li>北海道・東北<ul><li>a</li></ul></li><li>北海道・東北</li><li>北海道・東北</li></ul>').trigger("create");
    //最初に都道府県を読み込む
    $.getJSON('http://search.olp.yahooapis.jp/OpenLocalPlatform/V1/addressDirectory?callback=?',
{
    appid: 'dj0zaiZpPWxiYXZtUXZKS1RoWiZzPWNvbnN1bWVyc2VjcmV0Jng9YTE-',
    ac: 'JP',
    output: 'json'
},
        function (json) {
            area_pref.children().not(':first').remove();//一つ目のoption(選択してください）のみ残して削除
            $.each(json.Feature[0].Property.AddressDirectory, function (key, value) {
                var txt = String(this.Name);
                var code = String(this.AreaCode);
                area_pref.append('<option value="' + code + '">' + txt + "</option>");
            });
        });

    //都道府県から市町村を検索
    area_pref.on('change', function () {
        $.getJSON('http://search.olp.yahooapis.jp/OpenLocalPlatform/V1/addressDirectory?callback=?',
        {
            appid: 'dj0zaiZpPWxiYXZtUXZKS1RoWiZzPWNvbnN1bWVyc2VjcmV0Jng9YTE-',
            ac: area_pref.val(),
            output: 'json'
        },
        function (json) {
            area_city.children().not(':first').remove();//一つ目のoption(選択してください）のみ残して削除
            $.each(json.Feature[0].Property.AddressDirectory, function (key, value) {
                var txt = String(this.Name);
                var code = String(this.AreaCode);
                area_city.append('<option value="' + code + '">' + txt + "</option>");
            });
        });
    });

    //市町村から町域を検索
    area_city.on('change', function () {
        $.getJSON('http://search.olp.yahooapis.jp/OpenLocalPlatform/V1/addressDirectory?callback=?',
        {
            appid: 'dj0zaiZpPWxiYXZtUXZKS1RoWiZzPWNvbnN1bWVyc2VjcmV0Jng9YTE-',
            ac: area_city.val(),
            output: 'json'
        },
        function (json) {
            area_town.children().not(':first').remove();//一つ目のoption(選択してください）のみ残して削除

            $.each(json.Feature[0].Property.AddressDirectory, function (key, value) {
                var txt = String(this.Name);
                var code = String(this.AreaCode);
                area_town.append('<option value="' + code + '">' + txt + "</option>");
            });
        });
    });
});