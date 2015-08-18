var libraryArray = [];
var libraryCounter = 0;

$(document).on('ready', function() {
  console.log('sanity check!');



    $('.submit-library').on('click', function(event){

      event.preventDefault();
      var library = new GameLibrary($('#gameLibraryTitle').val());

      libraryArray.push(library);

      libraryArray[libraryCounter].renderLibrary($('.show-games-library'));

      libraryArray[libraryCounter].renderTitle($('.library-titles'), 'h3');

      libraryArray[libraryCounter].renderListTitle($('.library-list'));

      $('#gameLibraryTitle').hide();
      $('.submit-library').hide();

    });


  $('.submit-game').on('click', function(event){

    event.preventDefault();

    if(libraryArray[0] === undefined){
      alert('You have to make a library first!!!');
    } else{

    var game = new Game($('#gameTitle').val(), $('#gameGenre').val());

    (libraryArray[libraryCounter].games.push(game));

    game.render($('.show-games'));

    libraryArray[libraryCounter].renderLibrary($('.show-games-library'));

    $('#gameTitle').val('');
    $('#gameGenre').val('');

   }

  });


  $('.new-library').on('click', function(){

    $('.show-games-library').html('');

    $('#gameLibraryTitle').val('');

    $('#gameLibraryTitle').show();
    $('.submit-library').show();

     libraryCounter += 1;

  });

  $(document).on('click', '.libraryTitleList', function(event){
    event.preventDefault();

    var index = ($('.libraryTitleList')).index($(this));

    libraryArray[index].renderLibrary($('.show-games-library'));
  });

});
