$(window).on('load',function() {
 $('#loader').fadeOut(1500, function(){
     $('#loader').hide();
    });
});
$(document).ready(function (){
    $("#rec").on('click', function () {
        if (!$("#accueil-frame").length){
        let ifrm = document.createElement('iframe');
        ifrm.setAttribute('id', 'accueil-frame'); // assign an id
        document.body.appendChild(ifrm); // to place at end of document
    // assign url
        ifrm.setAttribute('src', './base.html');
        let frame = document.getElementById("accueil-frame");
        frame.style.height= '100%';
        frame.style.bottom= '0';
        $("#main-container").hide();

        }else {
            let frame = document.getElementById("accueil-frame");
            frame.style.height= '100%';
            frame.style.bottom= '0';
        }
});
});


