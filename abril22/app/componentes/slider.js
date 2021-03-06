(function(){
	'use strict'

	var slider = {
		controller : sliderController,
		template   : `
		<div class="slider">
    	<ul class="slides">
      	<li ng-repeat="obj in $ctrl.collection">
        	<img ng-src="{{obj.img}}"> <!-- random image -->
        	<div class="caption center-align">
          		<h3>This is our big Tagline!</h3>
          		<h5 class="light grey-text text-lighten-3">Here is our small slogan.</h5>
        	</div>
      	</li>
    </ul>
  </div>
		`
	};

	function sliderController(){
		var asController = this;

		asController.collection = [
		{
			'img': 'http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        	'name': 'Matrix',
        	'cast' : ['NEO','TRINITY','MORFEO'],
        	'year' :  1999,
        	'category': 'Sci-Fi'
		},
      {
        'img': 'http://ia.media-imdb.com/images/M/MV5BMTkyNzY5MDA5MV5BMl5BanBnXkFtZTcwMjg4MzI3MQ@@._V1_UY268_CR4,0,182,268_AL_.jpg',
        'name': 'American Gangster',
        'cast' : ['NEO','TRINITY','MORFEO'],
        'year' :  1990,
        'category': 'Sci-Fi'
      },
      {
        'img': 'http://ia.media-imdb.com/images/M/MV5BMTYwOTEzMDMzMl5BMl5BanBnXkFtZTgwNzExODIzNzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        'name': 'Game of Thrones',
        'cast' : ['NEO','TRINITY','MORFEO'],
        'year' :  2014,
        'category': 'Sci-Fi'
      },
      {
        'img': 'http://ia.media-imdb.com/images/M/MV5BMTI2MTgyNjExM15BMl5BanBnXkFtZTcwNzU4MjkyMg@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        'name': 'Wolverine',
        'cast' : ['NEO','TRINITY','MORFEO'],
        'year' :  2000,
        'category': 'Sci-Fi'
      },
      {
        'img': 'http://ia.media-imdb.com/images/M/MV5BNDA5NDAzMzg1MF5BMl5BanBnXkFtZTgwOTY2MjU2NzE@._V1_UY268_CR2,0,182,268_AL_.jpg',
        'name': 'Batman',
        'cast' : ['NEO','TRINITY','MORFEO'],
        'year' :  2015,
        'category': 'Sci-Fi'
      },
      {
        'img': 'http://ia.media-imdb.com/images/M/MV5BMjU4NDExNDM1NF5BMl5BanBnXkFtZTgwMDIyMTgxNzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        'name': 'The revenant',
        'cast' : ['NEO','TRINITY','MORFEO'],
        'year' :  2016,
        'category': 'Sci-Fi'
       }

	 ]

	};

	angular
	.module('app_principal')
	.component('slider',slider);
})();