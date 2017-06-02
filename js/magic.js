function hola() {
    alert('hola');
}

$('#mainInfo').hover(
    function() {
        $(this).parallaxify(args);
    },
    function(){
        $(this).parallaxify('destroy');
    }
)