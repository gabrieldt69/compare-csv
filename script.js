/*let btn_upload = document.getElementById('btn-compare-csv').addEventListener('click', () => {
    Papa.parse(document.getElementById('upload-csv1','upload-csv2').files[0], {
            download: true,
            header: false,
            complete: function (results) {
                results.data.map((data, index) => {
                    let table = document.getElementById("tbl-data");
                    generateTableHead(table, data);
                });
        }
    });
});

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}*/

var file1 = document.getElementById('btn-compare-csv').addEventListener('click', () => {
    Papa.parse(document.getElementById('upload-csv1').files[0], {
        download: true,
        header: false,
        complete: function (results, file) {
            console.log("Parsing complete:", results, file);
        }
    });
});

var file2 = document.getElementById('btn-compare-csv').addEventListener('click', () => {
    Papa.parse(document.getElementById('upload-csv2').files[0], {
        download: true,
        header: false,
        complete: function (results, file) {
            console.log("Parsing complete:", results, file);

        }
    });
});


