// jqueryのお遊びをしてみましょう🤗
$("#gu_btn").on('click', function(){

var random = Math.floor(Math.random() * 3);
console.log(random, 'ランダムな箱')

if(random === 0){
    console.log("グー") 
    $("#pc_hands").html('グー')
    $("#judgment").html('引き分け')
}else if(random === 1){
    console.log("チョキ") 
    $("#pc_hands").html('チョキ')
    $("#judgment").html('勝ち')
}else if(random === 2){
    console.log("パー")
    $("#pc_hands").html('パー')
    $("#judgment").html('負け')
}

})

$("#cho_btn").on('click', function(){

    var random = Math.floor(Math.random() * 3);
    console.log(random, 'ランダムな箱')
    
    if(random === 0){
        console.log("グー") 
        $("#pc_hands").html('グー')
        $("#judgment").html('負け')
    }else if(random === 1){
        console.log("チョキ") 
        $("#pc_hands").html('チョキ')
        $("#judgment").html('引き分け')
    }else if(random === 2){
        console.log("パー")
        $("#pc_hands").html('パー')
        $("#judgment").html('勝ち')
    }
    
    })


$("#par_btn").on('click', function(){

    var random = Math.floor(Math.random() * 3);
    console.log(random, 'ランダムな箱')
    
    if(random === 0){
        console.log("グー") 
        $("#pc_hands").html('グー')
        $("#judgment").html('勝ち')
    }else if(random === 1){
        console.log("チョキ") 
        $("#pc_hands").html('チョキ')
        $("#judgment").html('負け')
    }else if(random === 2){
        console.log("パー")
        $("#pc_hands").html('パー')
        $("#judgment").html('引き分け')
    }
    
    })