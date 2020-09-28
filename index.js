var bg = $("#particles-js");

$(document).keydown(function() {
    $(bg).css("background-color", getRandomColor);
});
// 
$(".img").on("click", function() {
    var name = $(this).attr("name");
    const initiale = name.charAt(0).toUpperCase();
    const nameCapitalized = initiale + name.slice(1);
    $("#titre").text(name);
    // 
    $(this).toggleClass("flash");
    // 
    var music = $(this).attr("name");
    music += ".mp3";
    playMusic(music);
});

$("#btn").click(function() {
    var artistre = $("#input").val();
    var music = article + ".mp3";
    playMusic(music);
})



function playMusic(music) {
    var audio = new Audio(music);
    audio.play();
}

function getRandomColor() {
    var letters = "0123456789ABCDEF"; //letters.length
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color = color + letters[Math.floor(Math.random() * 16)];
    }
    return color;

}