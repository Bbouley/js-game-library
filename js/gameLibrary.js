var Game = function (title, genre){
  this.title = title;
  this.genre = genre;
};

Game.prototype.render = function(DOMElement, game){
  DOMElement.append('<p>Title : ' + this.title + '<br>Genre : ' +this.genre);
};

var GameLibrary = function(librarytitle){
  this.librarytitle = librarytitle;
  this.games = [];
};

GameLibrary.prototype.renderLibrary = function(DOMElement){
  DOMElement.append('<h3>' + this.librarytitle + '</h3><br>');
  for (var i = 0; i < this.games.length; i++) {
    this.games[i].render();
  }
};
