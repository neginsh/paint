
var color = $(".selected").css("background-color");

var context = $("canvas")[0].getContext("2d");
var isMouseDown = false;
var lastEvent;

function selectColor(selectedColor) {

    $(".selected").removeClass("selected");
    $(selectedColor).addClass("selected");

    color = $(".selected").css("background-color");

}

function getColor() {

    var red = $("#red").val();
    var green = $("#green").val();
    var blue = $("#blue").val();
    var rgb = "rgb(" + red + "," + green + "," + blue + ")" ;

    return rgb;
}

$(document).ready(function () {

    $(".controls ul").on('click','li',function () {

        selectColor(this);

    });

    $("#colorSelectOpen").click(function () {

        $("#colorSelect").fadeToggle();

    });

    $(".controls #colorSelect .slider p input[type=range]").change(function () {

        var rgb = getColor();

        $(".controls #colorSelect span#newColor").css("background-color",rgb);

    });

    $("button#addColor").click(function () {

        var li = $("<li></li>");
        var rgb = getColor();

        li.css("background-color",rgb);
        $(".controls ul").append(li);
        li.click();

    })

    $("canvas").mousedown(function (e) {

        isMouseDown = true;
        lastEvent = e;

    }).mousemove(function (e) {

        if(isMouseDown){

            context.beginPath();
            context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
            context.lineTo(e.offsetX,e.offsetY);
            context.strokeStyle = color;
            context.stroke();

            lastEvent = e;
        }

    }).mouseup(function () {

        isMouseDown = false;

    }).mouseleave(function () {

        $("canvas").mouseup();

    })

})
