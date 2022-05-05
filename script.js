let btn_upload = document.getElementById('btn-upload-csv').addEventListener('click', () => {
    Papa.parse(document.getElementById('upload-csv').files[0], {
        download: true,
        header: false,
        complete: function (results) {
            console.log(results);
        }
    });
});