$(function () {
    // 1番目のth要素: 1列目をソート
    $('#sampleTable thead th:eq(0)').addClass('{ sortIndex: 0 }');

    // 2番目のth要素: 4列目をソート
    // 使わないので余ったインデックスを割り振る
    $('#sampleTable thead th:eq(1)').addClass('{ sortIndex: 0 }');

    // 3番目のth要素: 2列目をソート
    $('#sampleTable thead th:eq(2)').addClass('{ sortIndex: 0 }');

    // 4番目のth要素: 3列目をソート
    $('#sampleTable thead thead th:eq(3)').addClass('{ sortIndex: 0 }');
    $("#sampleTable").tablesorter({
        cssAsc: 'headerSortUp',
        cssDesc: 'headerSortDown',
    });
});