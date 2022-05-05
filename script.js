let btn_upload = document.getElementById('btn-upload-csv').addEventListener('click', () => {
    Papa.parse(document.getElementById('upload-csv').files[0], {
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
}