(function($) {

	console.log('Welcome to the Spirit World..')
	
	$( document ).ready(function() {
		
		$('body').addClass('df-ao3 dark');
	    
		if ($('body').hasClass('df-ao3')) {
			$('#chapters').wrap('<div class="df-ao3_container"></div>');
			$('.df-ao3_container').append('<button class="df-ao3_btn">DF AO3</button>'),$('.df-ao3_container').prepend('<div class="df-ao3_meta"></div>');
			$('#chapters').prepend('<div class="df-ao3_chapter-meta"></div>');
			$('.chapter > .chapter.preface h3.title').addClass('df-ao3_chapter-title').prependTo('.df-ao3_chapter-meta');
			$('.df-ao3_chapter-meta').append('<button class="df-ao3_notes">Summary & Notes</button>');
			$('#feedback ul.actions').addClass('df-ao3_actions').appendTo('.df-ao3_container');
		}

		$('.df-ao3_btn').on('click', function(e) {
			e.stopPropagation();
			
			$('.df-ao3').toggleClass('enable');

			if ($('.df-ao3').hasClass('enable')) {
				$('.preface h2.title, .preface h3.byline').detach().appendTo('.df-ao3_meta');
				$('.chapter.preface').hide();
			} else {			
				$('.df-ao3_meta h3.byline, .df-ao3_meta h2.title').detach().prependTo('#workskin > .preface.group');
				$('.chapter.preface').show();
			}
		});


		$('.df-ao3_notes').on('click', function() {
			$('.chapter.preface').slideToggle(500);

		});

	});

}(jQuery));
