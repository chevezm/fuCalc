// Optional enable tooltips
/*
document.addEventListener("DOMContentLoaded", function(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(element){
        return new bootstrap.Tooltip(element);
    });
});
*/

$( '#reset').on( 'click', function(){
    $( '#han' ).val('1');
    $( '#fu' ).val('30');
    $( '#honba' ).val(0);
    $( '#dealer' ).prop("checked", false);
    
    $( '#ron' ).html('1000');
    $( '#tsumoParent').html('500');
    $( '#tsumoChild').html('300');

    $( '#tsumoChild').show();
});

$( '.modifier' ).on( 'change', function(){
    
    const dealer = $( '#dealer').is(':checked');
    const han = parseInt( $( '#han' ).val() );
    const fu = parseInt( $( '#fu' ).val() );
    const honba = parseInt( $( '#honba' ).val() ) || 0;
    let basicPoints = fu * Math.pow(2, han + 2);


    switch(han){
        case 6:
        case 7:
            basicPoints = 3000;
            break;
        case 8:
        case 9:
        case 10:
            basicPoints = 4000;
            break;
        case 11:
        case 12:
            basicPoints = 6000;
            break;
        case 13:
            basicPoints = 8000;
            break;
        default:
            basicPoints = Math.min(2000, basicPoints);
    }

    let ron = 0;
    let tsumoParent = roundUp(basicPoints * 2) + (honba * 100);
    let tsumoChild = 0;

    if(!dealer){
        ron = roundUp(basicPoints * 4) + (honba * 300);
        tsumoChild = roundUp(basicPoints) + (honba * 100);

        $( '#tsumoChild' ).show();
    }

    
    if(dealer){
        ron = roundUp(basicPoints * 6) + (honba * 300);

        $( '#tsumoChild').hide();
    }

    $( '#ron' ).text(ron.toFixed(0));
    $( '#tsumoParent' ).text(tsumoParent.toFixed(0));
    $( '#tsumoChild' ).text(tsumoChild.toFixed(0));
});

function roundUp(num){
    return -1 * Math.floor(-num / 100) * 100;
}
