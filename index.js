let words = [
    {
        "id": "1",
        "inputs": 5,
        "category": "Sports",
        "words": "Chess"
    },
    {
        "id": "2",
        "inputs": 6,
        "category": "European Country Name",
        "words": "France"
    },
]


$(document).ready(function(){
    fill_blanks()
})


function fill_blanks(){
    var gameOver =false
    const randomWord = words[Math.floor(Math.random()*words.length)]
    $("#blanks").empty()
    for(let i =0;i<randomWord.inputs;i++){
        let input_html = `<span class="fill_blanks">${i}</span>`
        $("#blanks").append(input_html)
    }
    $("#hint").html(randomWord.category)

    $(".clickable").click(function(){
        var correctGuess = false
        let id = $(this).attr("id")
        var life = parseInt($("#life").text())
    
        for(var i=0;i<randomWOrd.word.length;i++){
            if(randomWord.word.charAt(i).toLowerCase() == id){
                if(life > 0 && ($(".fill_blanks").eq(i).html()== "_" || $(".fill_blanks").eq(i).html() == id)){
                    $(".fill_blanks").eq(i).html(id)
                    correctGuess = true
    
                    if($("#blanks").text() === randomWord.word.toLowerCase()){
                        $("#result").text("You Winn!!")
                        correctGuess = true
                        gameOver = true
                    }
                }
            }
        }
        if(life > 0 && correctGuess != true && gameOver != true){
            life = life-1
            $("#life").text(life)
        }
        else if(life == 0){
            $("#result").text("YOU LOSTTTTTTTT")
        }
    })

    $(document).ready(function(){
        getTemplates()
    })

    function getTemplates(){
        $.ajax({
            url:"/get-template",
            type:"get",
            success:function(result){
                fill_blanks(result.word)
            },
            error:function(result){
                alert(result.responseJSON.message)
            }
        })
    }
}