var audio = $("#buttonAudio")[0];
var audioGame = $("#canvasAudio")[0];
var blast1=$('#blast1')[0];
var blast2=$('#blast2')[0];
var blast3=$('#blast3')[0];
var blast4=$('#blast4')[0];
var dismb1=$('#disbm1')[0];
var dismb2=$('#disbm2')[0];
var dismb3=$('#disbm3')[0];
var dismb4=$('#disbm4')[0];


$(function () {
   $('#loadingScreen').fadeOut(5000,function () {
       window.open("Game.html", "_self").fadeIn(1000);

   })
});
// window.open("Game.html", "_self").fadeIn(1000);

    $("#button").click(function(){
        audio.play();

        $('#myCanvas').css('display','none');
        $('#myCanvasPoddakInna').css('background-image', 'url(images/1.png)');
        $('#myCanvasPoddakInna').css('display','flex');

        var imageIndex = 2;

        function changeImage() {
            if (imageIndex == 2) {
                $("#myCanvasPoddakInna").css('background-image', 'url(images/'+imageIndex+'.png)');
                $("#counting").css('background-image', 'url(images/counting.gif)');
                $("#counting").delay(4000).fadeOut();
                $('#myCanvasGame').delay(4000).fadeIn();
                function repeatAudio() {
                    audioGame.play()

                }
                setTimeout(repeatAudio,5000);
                // setInterval(repeatAudio,180000);

            }
        }
        setTimeout(changeImage, 5000);



    });




$(function () {
    var catcherPos=$('#catcher').position().left;
    var catcherHeight=$('#catcher').height();
    var catcherPosition=$('#catcher').position();
    var bomb1 = $('#bomb-1');
    var bomb2 = $('#bomb-2');
    var bomb3 = $('#bomb-3');
    var bomb4 = $('#bomb-4');
    var container = $('#myCanvasGame');

    var bomb1Height = bomb1.height();
    var bomb2Height = bomb2.height();
    var bomb3Height = bomb3.height();
    var bomb4Height = bomb4.height();

    var bomb1Width = bomb1.width();
    var bomb2Width = bomb2.width();
    var bomb3Width = bomb3.width();
    var bomb4Width = bomb4.width();

    var containerHeight = container.height();
    var containerWidth=container.width();

    var life = 20;
    var speed = 2;
    var counter = 0;
    var bomb=$('.bomb');
    var bombWidth=bomb.width();
    var bomb_width=bomb.width();
    var bomb_height=bomb.height();
    var score_span=$('#score');
    var timeScore_span=$('#timeScore');
    var lastScore_span=$('#bombLastScore');
    catcher = $('#catcher');
    var score=0;
    var bomb_initial_position = parseInt(bomb.css('top'));
    var disposedbomb_num;
    the_game = function () {
        counter++;
        console.log(counter);


        if (check_catch1()) {
            update_score(bomb1);
            var l=catcher.position().left;
            var t=catcher.position().top;
            displayDisposed(bomb1,l,t);
        }
        if (check_catch2()) {
            update_score(bomb2);
            var l=catcher.position().left;
            var t=catcher.position().top;
            displayDisposed(bomb2,l,t);

        }
        if (check_catch3()) {
            update_score(bomb3);
            var l=catcher.position().left;
            var t=catcher.position().top;
            displayDisposed(bomb3,l,t);

        }
        if (check_catch4()) {
            update_score(bomb4);
            var l=catcher.position().left;
            var t=catcher.position().top;
            displayDisposed(bomb4,l,t);

        }



        if (parseInt(bomb1.css('bottom'))<-70) {
            set_bomb_to_initial_position(bomb1,true);
            var a=parseInt(bomb1.css('left'));
            displayExposed(bomb1,a);

        }
        else {
            if (counter > 530) bomb_down1();
        }

        if (parseInt(bomb2.css('bottom'))<-70) {
            set_bomb_to_initial_position(bomb2,true);
            var b=parseInt(bomb2.css('left'));
            displayExposed(bomb2,b);


        }
        else {
            if (counter > 800) bomb_down2();
        }
        if (parseInt(bomb3.css('bottom'))<-70) {
            set_bomb_to_initial_position(bomb3, true);
            var c=parseInt(bomb3.css('left'));
            displayExposed(bomb3,c);
        }
        else {
            if (counter > 1000) bomb_down3();
        }
        if (parseInt(bomb4.css('bottom'))<-70) {
            set_bomb_to_initial_position(bomb4,true);
            var d=parseInt(bomb4.css('left'));
            displayExposed(bomb4,d);
        }
        else {
            if (counter > 1400) bomb_down4();
        }

        anim_id = requestAnimationFrame(the_game);
    };
    anim_id = requestAnimationFrame(the_game);

    //catcher moves//////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var container = $('#myCanvasGame');
    var catcher = $('#catcher');

    var container_left = parseInt(container.css('left'));
    var container_width = parseInt(container.width());
    var catcher_left=parseInt(catcher.position().left);
    var catcher_width=parseInt(catcher.width());

    $(document).on('keydown', function(e){
        switch (e.which){
            case 37:    //left arrow key
                if(parseInt(catcher.css('left'))>0){
                    $("#catcher").finish().animate({
                        left: "-=15"
                    });
                }
                break;
            case 39:    //right arrow key
                if(parseInt(catcher.css('left')) < 730){
                    $("#catcher").finish().animate({
                        left: "+=15"
                    });
                }
                break;
        }
    });


    var imgs = ["images/img1.png", "images/img2.png", "images/img4.png","images/img2.png","images/img1.png","images/img5.png","images/img1.png", "images/img6.png","images/img3.png","images/img4.png","images/img2.png","images/img1.png","images/img5.png","images/img1.png", "images/img6.png","images/img3.png","images/img4.png","images/img2.png","images/img1.png","images/img5.png","images/img1.png", "images/img6.png","images/img3.png","images/img4.png","images/img2.png","images/img1.png","images/img5.png","images/img1.png", "images/img6.png","images/img3.png","images/img4.png","images/img2.png","images/img1.png","images/img5.png","images/img1.png", "images/img6.png","images/img3.png","images/img4.png","images/img2.png","images/img1.png","images/img5.png","images/img1.png", "images/img6.png","images/img3.png","images/img4.png","images/img2.png","images/img1.png","images/img5.png","images/img1.png", "images/img6.png","images/img3.png","images/img4.png","images/img2.png","images/img1.png","images/img5.png","images/img1.png","images/img6.png","images/img3.png","images/img4.png"];
    var imgsLeft = ["images/img1Left.png", "images/img2Left.png", "images/img4Left.png","images/img2Left.png","images/img1Left.png","images/img5Left.png","images/img1Left.png", "images/img6Left.png","images/img3Left.png","images/img4Left.png","images/img2Left.png","images/img1Left.png","images/img5Left.png","images/img1Left.png", "images/img6Left.png","images/img3Left.png","images/img4Left.png","images/img2Left.png","images/img1Left.png","images/img5Left.png","images/img1Left.png", "images/img6Left.png","images/img3Left.png","images/img4Left.png","images/img2Left.png","images/img1Left.png","images/img5Left.png","images/img1Left.png", "images/img6Left.png","images/img3Left.png","images/img4Left.png","images/img2Left.png","images/img1Left.png","images/img5Left.png","images/img1Left.png", "images/img6Left.png","images/img3Left.png","images/img4Left.png","images/img2Left.png","images/img1Left.png","images/img5Left.png","images/img1Left.png", "images/img6Left.png","images/img3Left.png","images/img4Left.png"];

    function changeImage(dir) {
        $('#imgcatch').delay(100).attr('src',""+imgs[dir]+"");
    }
    function changeImageLeft(dir) {
        $('#imgcatch').delay(100).attr('src',""+imgsLeft[dir]+"");

    }
    var k=0;
    var l=0;
    $(document).on('keydown', function(e) {
        e = e || window.event;
        if (e.keyCode == '37') {
            changeImageLeft(l++);
            if(e.keyCode == '39'){
                l=0;
            }
            if(l>imgsLeft.length){
                l=3;
                changeImage(l++);
            }
        } else if (e.keyCode == '39') {
            changeImage(k++);
            if(e.keyCode == '37'){
                k=0;
            }
            if(k>imgs.length){
                k=3;
                changeImage(k++);
            }
        }
    });
    $(document).on('keyup', function(e) {
        e = e || window.event;
        if (e.keyCode == '37') {
            $('#imgcatch').attr('src',"images/catcherLeft.gif");
        } else if (e.keyCode == '39') {
            $('#imgcatch').attr('src',"images/catcher1.gif");
        }
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // function bomb_down(bomb) {
    //
    //     bomb_current_position = parseInt(bomb.css('top'));
    //     if (bomb_current_position > containerHeight) {
    //         bomb_current_position = -800;
    //         var bombAgain = parseInt(Math.random() * (containerWidth - bomb_width));
    //         bomb.css('left', bombAgain);
    //     }
    //     bomb.css('top', bomb_current_position + speed);
    //
    //     // if (parseInt(bomb.css('bottom'))<-60){
    //     //     $('#gameOverCanvas').slideDown();
    //     //     anim_id = oCancelAnimationFrame(the_game);
    //     //
    //     // }
    //     //
    //     //
    // }

    function bomb_down1() {

        var bomb_current_position = parseInt(bomb1.css('top'));
        if (bomb_current_position > containerHeight) {
            bomb_current_position = -800;
            var bombAgain = parseInt(Math.random() * (containerWidth - bomb1Width));
            bomb1.css('left', bombAgain);
        }
        bomb1.css('top', bomb_current_position + speed);
    }
    function bomb_down2() {

        var bomb_current_position = parseInt(bomb2.css('top'));
        if (bomb_current_position > containerHeight) {
            bomb_current_position = -800;
            var bombAgain = parseInt(Math.random() * (containerWidth - bomb2Width));
            bomb2.css('left', bombAgain);
        }
        bomb2.css('top', bomb_current_position + speed);
    }
    function bomb_down3() {

        var bomb_current_position = parseInt(bomb3.css('top'));
        if (bomb_current_position > containerHeight) {
            bomb_current_position = -800;
            var bombAgain = parseInt(Math.random() * (containerWidth - bomb3Width));
            bomb3.css('left', bombAgain);
        }
        bomb3.css('top', bomb_current_position + speed);
    }
    function bomb_down4() {

        var  bomb_current_position = parseInt(bomb4.css('top'));
        if (bomb_current_position > containerHeight) {
            bomb_current_position = -800;
            var bombAgain = parseInt(Math.random() * (containerWidth - bomb4Width));
            bomb4.css('left', bombAgain);
        }
        bomb4.css('top', bomb_current_position + speed);
    }

    function check_catch1() {
        if (collision(bomb1, catcher) && (parseInt(bomb1.css('top')) >= parseInt(containerHeight - catcherHeight - bomb1Height)) && (parseInt(bomb1.css('top')) <= parseInt(containerHeight - catcherHeight))) return true;
       return false;


    }
    function check_catch2() {
        if (collision(bomb2, catcher) && (parseInt(bomb2.css('top')) >= parseInt(containerHeight - catcherHeight - bomb2Height)) && (parseInt(bomb2.css('top')) <= parseInt(containerHeight - catcherHeight))) return true;
        return false;

    }
    function check_catch3() {
        if (collision(bomb3, catcher) && (parseInt(bomb3.css('top')) >= parseInt(containerHeight - catcherHeight - bomb3Height)) && (parseInt(bomb3.css('top')) <= parseInt(containerHeight - catcherHeight))) return true;
        return false;

    }
    function check_catch4() {
        if (collision(bomb4, catcher) && (parseInt(bomb4.css('top')) >= parseInt(containerHeight - catcherHeight - bomb4Height)) &&
            (parseInt(bomb4.css('top')) <= parseInt(containerHeight - catcherHeight))) return true;
        return false;

    }
    function update_score(bomb) {
        set_bomb_to_initial_position(bomb, false);
        score++;

        score_span.text(score);
        hidedisposedBom(bomb);
        if (score % 20 === 0) {
            speed = speed + 1;
        }
    }



    function set_bomb_to_initial_position(bomb, update_life_flag) {
        if (update_life_flag) {

            update_life();


        }

        hideExplodeBomb(bomb);
        bomb.css('top', bomb_initial_position);


    }


    function displayDisposed(bomb,l,t) {
        if(bomb===bomb1){
            disposedbomb_num = bomb1.attr('data-bomb');

            $('#bombDisposed' + disposedbomb_num).css('top',''+t+'px');
            $('#bombDisposed' + disposedbomb_num).css('left',''+l+'px');
            dismb1.play();
            $('#bombDisposed' + disposedbomb_num).show();
        }else if(bomb===bomb2){
            disposedbomb_num = bomb2.attr('data-bomb');
            $('#bombDisposed' + disposedbomb_num).css('top',''+t+'px');
            $('#bombDisposed' + disposedbomb_num).css('left',''+l+'px');
            dismb2.play();
            $('#bombDisposed' + disposedbomb_num).show();

        }else if(bomb===bomb3){
            disposedbomb_num = bomb3.attr('data-bomb');
            $('#bombDisposed' + disposedbomb_num).css('top',''+t+'px');
            $('#bombDisposed' + disposedbomb_num).css('left',''+l+'px');
            dismb3.play();
            $('#bombDisposed' + disposedbomb_num).show();

        }else if(bomb===bomb4){
            disposedbomb_num = bomb4.attr('data-bomb');
            $('#bombDisposed' + disposedbomb_num).css('top',''+t+'px');
            $('#bombDisposed' + disposedbomb_num).css('left',''+l+'px');
            dismb4.play();
            $('#bombDisposed' + disposedbomb_num).show();

        }

    }
    function hidedisposedBom(bomb) {
       if(bomb==bomb1){
           setTimeout(function () {
               disposedbomb_num = bomb1.attr('data-bomb');
               $('#bombDisposed' + disposedbomb_num).hide();
           }, 800);
       }else if(bomb==bomb2){
           setTimeout(function () {
               disposedbomb_num = bomb2.attr('data-bomb');
               $('#bombDisposed' + disposedbomb_num).hide();
           }, 800);
       }else if(bomb==bomb3){
           setTimeout(function () {
               disposedbomb_num = bomb3.attr('data-bomb');
               $('#bombDisposed' + disposedbomb_num).hide();
           }, 800);
       }else if(bomb==bomb4){
           setTimeout(function () {
               disposedbomb_num = bomb4.attr('data-bomb');
               $('#bombDisposed' + disposedbomb_num).hide();
           }, 800);
       }

    }
    function displayExposed(bomb,left) {
        if(bomb===bomb1){
            exposedbomb_num = bomb1.attr('data-bomb');
            $('#explosion' + exposedbomb_num).css('bottom',''+0+'px');
            $('#explosion' + exposedbomb_num).css('left',''+left+'px');
            blast1.play();

            $('#explosion' + exposedbomb_num).show();

        }else if(bomb===bomb2){
            exposedbomb_num = bomb2.attr('data-bomb');
            $('#explosion' + exposedbomb_num).css('bottom',''+0+'px');
            $('#explosion' + exposedbomb_num).css('left',''+left+'px');
            blast2.play();
            $('#explosion' + exposedbomb_num).show();
        }else if(bomb===bomb3){
            exposedbomb_num = bomb3.attr('data-bomb');
            $('#explosion' + exposedbomb_num).css('bottom',''+0+'px');
            $('#explosion' + exposedbomb_num).css('left',''+left+'px');
            blast3.play();
            $('#explosion' + exposedbomb_num).show();

        }else if(bomb===bomb4){
            exposedbomb_num = bomb4.attr('data-bomb');
            $('#explosion' + exposedbomb_num).css('bottom',''+0+'px');
            $('#explosion' + exposedbomb_num).css('left',''+left+'px');
            blast4.play();
            $('#explosion' + exposedbomb_num).show();

        }

    }
    function hideExplodeBomb(bomb) {
        if(bomb==bomb1){
            setTimeout(function () {
                exposedbomb_num = bomb1.attr('data-bomb');

                $('#explosion' + exposedbomb_num).hide();

            }, 800);
        }else if(bomb==bomb2){
            setTimeout(function () {
                exposedbomb_num = bomb2.attr('data-bomb');
                $('#explosion' + exposedbomb_num).hide();
            }, 800);
        }else if(bomb==bomb3){
            setTimeout(function () {
                exposedbomb_num = bomb3.attr('data-bomb');
                $('#explosion' + exposedbomb_num).hide();
            }, 800);
        }else if(bomb==bomb4){
            setTimeout(function () {
                exposedbomb_num = bomb4.attr('data-bomb');
                $('#explosion' + exposedbomb_num).hide();
            }, 800);
        }

    }
    function update_life() {
        life = life - 1;
        if (life < 0) {
            life = 0;
        }
        else {
            timeScore_span.text(life);
        }

        if(life===0){
            stop_the_game();

        }
    }

    $('#restart').click(function () {
        audio.play();
        location.reload();
    });

    function stop_the_game() {
        bomb.hide();
        bomb.css('position','static');
        audioGame.pause();
        $(document).on('keyup', function(e) {
            e = e || window.event;
            if (e.keyCode == '37') {
                $('#imgcatch').attr('src',"images/burnLeft.gif");
            } else if (e.keyCode == '39') {
                $('#imgcatch').attr('src',"images/burn.gif");
            }
        });

        function gameOverAnimation() {
            $('#imgcatch').attr('src',"images/burn.gif");
        }
        setTimeout(gameOverAnimation,3000);
        lastScore_span.text(score);
        $("#gameOverCanvas").delay(7000).slideDown();
         oCancelAnimationFrame(anim_id);


    }


    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }

});

