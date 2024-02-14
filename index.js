$(document).ready(function() {

    // INDEX.HTML
    
    $('#introduccion').click(function() {
        $(this).toggleClass('fullscreen');
        $('#dato').toggle();
    });

    $('#monoplaza').click(function() {
        $(this).toggleClass('fullscreen');
        $('#dato1').toggle();
    });

    $('#equipos').click(function() {
        $(this).toggleClass('fullscreen');
        $('#dato2').toggle();
    });

    $('#pilotos').click(function() {
        $(this).toggleClass('fullscreen');
        $('#dato3').toggle();
    });

    // PILOTOS

    $('#piloto').dblclick(function() {
        $('#descripcion').toggle();
    });

    $('#verstappen').hover(function() {
        $('#datopiloto').toggleClass('piloto1');
    });

    $('#checo').hover(function() {
        $('#datopiloto1').toggleClass('piloto1');
    });
    $('#hamilton').hover(function() {
        $('#datopiloto2').toggleClass('piloto1');
    });
    $('#russel').hover(function() {
        $('#datopiloto3').toggleClass('piloto1');
    });
    $('#sainz').hover(function() {
        $('#datopiloto4').toggleClass('piloto1');
    });
    $('#leclerc').hover(function() {
        $('#datopiloto5').toggleClass('piloto1');
    });
    $('#lando').hover(function() {
        $('#datopiloto6').toggleClass('piloto1');
    });
    $('#oscar').hover(function() {
        $('#datopiloto7').toggleClass('piloto1');
    });
    $('#alonso').hover(function() {
        $('#datopiloto8').toggleClass('piloto1');
    });
    $('#lance').hover(function() {
        $('#datopiloto9').toggleClass('piloto1');
    });
    $('#ocon').hover(function() {
        $('#datopiloto10').toggleClass('piloto1');
    });
    $('#pierre').hover(function() {
        $('#datopiloto11').toggleClass('piloto1');
    });
    $('#albon').hover(function() {
        $('#datopiloto12').toggleClass('piloto1');
    });
    $('#sargeant').hover(function() {
        $('#datopiloto13').toggleClass('piloto1');
    });
    $('#yuki').hover(function() {
        $('#datopiloto14').toggleClass('piloto1');
    });
    $('#ricciardo').hover(function() {
        $('#datopiloto16').toggleClass('piloto1');
    });
    $('#bottas').hover(function() {
        $('#datopiloto17').toggleClass('piloto1');
    });
    $('#zhou').hover(function() {
        $('#datopiloto18').toggleClass('piloto1');
    });
    $('#mag').hover(function() {
        $('#datopiloto19').toggleClass('piloto1');
    });
    $('#hulk').hover(function() {
        $('#datopiloto20').toggleClass('piloto1');
    });

    // EQUIPO

    // REDBULL
    $('#credbull').hover(function() {
        $('#nredbull').toggle();
    });
    

    // MERCEDES
    $('#cmercedes').hover(function() {
        $('#nmercedes').toggle();
    });

    // FERRARI
    $('#cferrari').hover(function() {
        $('#nferrari').toggle();
    });

    // MCLAREN
    $('#cmclaren').hover(function() {
        $('#nmclaren').toggle();
    });

    // ASTON
    $('#caston').hover(function() {
        $('#naston').toggle();
    });

    // ALPINE
    $('#calpine').hover(function() {
        $('#nalpine').toggle();
    });

    // WILLIAMS
    $('#cwilliams').hover(function() {
        $('#nwilliams').toggle();
    });

    // ALPHA
    $('#calpha').hover(function() {
        $('#nalpha').toggle();
    });

    // ALFA
    $('#calfa').hover(function() {
        $('#nalfa').toggle();
    });

    // HAAS
    $('#chaas').hover(function() {
        $('#nhaas').toggle();
    });



    // CIRCUITOS
    $('#circuito1').mousedown(function() {
        
        $('#datoCircuito').css('opacity', 0);

        $('#datoCircuito').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        
        $('#datoCircuito').toggleClass("rowCircuit");
    });

    $('#circuito2').mousedown(function() {
        $('#datoCircuito1').css('opacity', 0);

        $('#datoCircuito1').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito1').toggleClass("rowCircuit");
    });

    $('#circuito3').mousedown(function() {
        $('#datoCircuito2').css('opacity', 0);

        $('#datoCircuito2').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);

        $('#datoCircuito2').toggleClass("rowCircuit");
    });
    
    $('#circuito4').mousedown(function() {
        $('#datoCircuito3').css('opacity', 0);

        $('#datoCircuito3').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito3').toggleClass("rowCircuit");
    });

    $('#circuito5').mousedown(function() {
        $('#datoCircuito4').css('opacity', 0);

        $('#datoCircuito4').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito4').toggleClass("rowCircuit");
    });
    
    $('#circuito6').mousedown(function() {
        $('#datoCircuito5').css('opacity', 0);

        $('#datoCircuito5').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito5').toggleClass("rowCircuit");
    });
    
    $('#circuito7').mousedown(function() {
        $('#datoCircuito6').css('opacity', 0);

        $('#datoCircuito6').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito6').toggleClass("rowCircuit");
    });
    
    $('#circuito8').mousedown(function() {
        $('#datoCircuito7').css('opacity', 0);

        $('#datoCircuito7').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito7').toggleClass("rowCircuit");
    });
    
    $('#circuito9').mousedown(function() {
        $('#datoCircuito8').css('opacity', 0);

        $('#datoCircuito8').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito8').toggleClass("rowCircuit");
    });
    
    $('#circuito10').mousedown(function() {
        $('#datoCircuito9').css('opacity', 0);

        $('#datoCircuito9').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito9').toggleClass("rowCircuit");
    });
    
    $('#circuito11').mousedown(function() {
        $('#datoCircuito10').css('opacity', 0);

        $('#datoCircuito10').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito10').toggleClass("rowCircuit");
    });
    
    $('#circuito12').mousedown(function() {
        $('#datoCircuito11').css('opacity', 0);

        $('#datoCircuito11').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito11').toggleClass("rowCircuit");
    });
    
    $('#circuito13').mousedown(function() {
        $('#datoCircuito12').css('opacity', 0);

        $('#datoCircuito12').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito12').toggleClass("rowCircuit");
    });
    
    $('#circuito14').mousedown(function() {
        $('#datoCircuito13').css('opacity', 0);

        $('#datoCircuito13').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito13').toggleClass("rowCircuit");
    });
    
    $('#circuito15').mousedown(function() {
        $('#datoCircuito14').css('opacity', 0);

        $('#datoCircuito14').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito14').toggleClass("rowCircuit");
    });
    
    $('#circuito16').mousedown(function() {
        $('#datoCircuito15').css('opacity', 0);

        $('#datoCircuito15').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito15').toggleClass("rowCircuit");
    });
    
    $('#circuito17').mousedown(function() {
        $('#datoCircuito16').css('opacity', 0);

        $('#datoCircuito16').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito16').toggleClass("rowCircuit");
    });
    
    $('#circuito18').mousedown(function() {
        $('#datoCircuito17').css('opacity', 0);

        $('#datoCircuito17').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito17').toggleClass("rowCircuit");
    });
    
    $('#circuito19').mousedown(function() {
        $('#datoCircuito18').css('opacity', 0);

        $('#datoCircuito18').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito18').toggleClass("rowCircuit");
    });
    
    $('#circuito20').mousedown(function() {
        $('#datoCircuito19').css('opacity', 0);

        $('#datoCircuito19').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito19').toggleClass("rowCircuit");
    });
    
    $('#circuito21').mousedown(function() {
        $('#datoCircuito20').css('opacity', 0);

        $('#datoCircuito20').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito20').toggleClass("rowCircuit");
    });
    
    $('#circuito22').mousedown(function() {
        $('#datoCircuito21').css('opacity', 0);

        $('#datoCircuito21').animate({
            opacity: 1 // Cambia la opacidad gradualmente a 1
        }, 1000);
        $('#datoCircuito21').toggleClass("rowCircuit");
    });
    
    


});