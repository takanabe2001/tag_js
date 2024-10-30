
function arrToCSV(array) {

    let csvData = 'data:text/csv;charset=utf-8,'; /// 最初にcsvDataに出力方法を追加しておく
    array.forEach(a => {
        const row = a.join(',');
        csvData += row + '\r\n';
    });
    return csvData;
}

const downloadCsv = (array) => {
    // 本来であれば、mapなどを使って2次元配列を作ることになるかと思います。その場合は、pushやconcat、new Arrayなどを使うことが多いと思います。
    const csvData = arrToCSV(array)
    const encodedUri = encodeURI(csvData); // csvDataをエンコード化する
    const ele = document.createElement('a'); // a要素を作成する

    ele.setAttribute('href', encodedUri);  // a要素に出力データを追加
    ele.setAttribute('download', fileName + '_' + userName + '.csv'); // a要素に出力情報を追加。「'test'」部分は変数を入れることも可能。

    ele.style.visibility = 'hidden';
    document.body.appendChild(ele);
    ele.click(); // HTMLドキュメントに追加したa要素を実行(clickイベント発火)
    document.body.removeChild(ele);
}
