/**
 * Created by Thomas on 19.8.2017.
 */

$( document ).ready(function() {
    console.log( "ready!" );

    var generate = function () {
        const rootUrl = $('#root').val();
        const hashLength = $('#hashLength').val();
        // const hashCount = $('#hashCount').val();
        const hashGen = new HashGenerator({
            hashLength: hashLength,
            requiredAlphabet: '#aA',
            rootUrl: rootUrl
        });
        const hash = hashGen.generate();
        $('#generatedQR').text(hash);
        const qr = new QRious({
            element: document.getElementById('qr'),
            value: hash,
            size: 256
        });
    };

    $('#generateBtn').click(generate);
});