
// backToTop Scroll 
var backToTopBtn = $('#backToTop');
$(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
    backToTopBtn.addClass('show');
    } else {
    backToTopBtn.removeClass('show');
    }
});

backToTopBtn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});


// Filter Script
$(document).ready( function() {

	var itemSelector = '.grid-item'; 

	var $container = $('#container').isotope({
		itemSelector: itemSelector,
		masonry: {
		  columnWidth: itemSelector,
		  isFitWidth: true
		}
	});

	//Ascending order
	var responsiveIsotope = [
		[480, 7],
		[720, 10]
	];

	var itemsPerPageDefault = 12;
	var itemsPerPage = defineItemsPerPage();
	var currentNumberPages = 1;
	var currentPage = 1;
	var currentFilter = '*';
	var filterAtribute = 'data-filter';
	var pageAtribute = 'data-page';
	var pagerClass = 'isotope-pager';

	function changeFilter(selector) {
		$container.isotope({
			filter: selector
		});
	}


	function goToPage(n) {
		currentPage = n;

		var selector = itemSelector;
			selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
			selector += '['+pageAtribute+'="'+currentPage+'"]';

		changeFilter(selector);
	}

	function defineItemsPerPage() {
		var pages = itemsPerPageDefault;

		for( var i = 0; i < responsiveIsotope.length; i++ ) {
			if( $(window).width() <= responsiveIsotope[i][0] ) {
				pages = responsiveIsotope[i][1];
				break;
			}

			

		}

		return pages;
	}
	
	function setPagination() {

		var SettingsPagesOnItems = function(){

			var itemsLength = $container.children(itemSelector).length;
			
			var pages = Math.ceil(itemsLength / itemsPerPage);
			var item = 1;
			var page = 1;
			var selector = itemSelector;
				selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
			
			$container.children(selector).each(function(){
				if( item > itemsPerPage ) {
					page++;
					item = 1;
				}
				$(this).attr(pageAtribute, page);
				item++;
			});

			currentNumberPages = page;

		}();


	}

	setPagination();
	goToPage(1);

	//Adicionando Event de Click para as categorias
	$('.filters a').click(function(){
		var filter = $(this).attr(filterAtribute);
		currentFilter = filter;

		setPagination();
		goToPage(1);


	});

	//Evento Responsivo
	$(window).resize(function(){
		itemsPerPage = defineItemsPerPage();
		setPagination();
	});

	

});



 $(document).ready( function() {   

// filter items on button click
$('.filter-button-group').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $('.grid').isotope({ filter: filterValue });
  $('.filter-button-group li').removeClass('active');
  $(this).addClass('active');
});
    })
	

 $(document).ready( function() {   

	// filter items on button click
	$('.isotope-pager').on( 'click', 'a', function() {
	var filterValue = $(this).attr('data-page');

	$('.isotope-pager a').removeClass('active');
	$(this).addClass('active');
	});
})
	

$(document).ready(function(){
$('.popupimg').magnificPopup({
	type: 'image',
  mainClass: 'mfp-with-zoom', 
  gallery:{
			enabled:true
		},

  zoom: {
    enabled: true, 

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    opener: function(openerElement) {

      return openerElement.is('img') ? openerElement : openerElement.find('img');
  }
}

});

});

$(document).ready(function(){
	$('.contact').mkinfinite({
	  maxZoom:       1.4,
	  animationTime: 4000,
	  imagesRatio:   (960 / 720),
	  isFixedBG:     true,
	  zoomIn:        true,
	  imagesList:    new Array(
		'assets/images/art-brush-colors-3112.jpg',
		'assets/images/picjumbo.com_IMG_4563.jpg',
		'assets/images/picjumbo.com_HNCK1805.jpg'
	  )
	});
  });

  $(document).ready(function(){
	$('#one').mkinfinite({
	  maxZoom:       1.4,
	  animationTime: 4000,
	  imagesRatio:   (960 / 720),
	  isFixedBG:     true,
	  zoomIn:        true,
	  imagesList:    new Array(
		'assets/images/Alice-bg-1.jpg',
		'assets/images/Alice-bg-1.jpg'
	  )
	});
  });

  $(document).ready(function(){
	$('.about-bg').mkinfinite({
	  maxZoom:       1.4,
	  animationTime: 4000,
	  imagesRatio:   (960 / 720),
	  isFixedBG:     true,
	  zoomIn:        true,
	  imagesList:    new Array(
		'assets/images/autumn-avenue-path-946.jpg',
		'assets/images/autumn-avenue-path-946.jpg'
	  )
	});
  });

  $(document).ready(function(){
	$('#how-we-work').mkinfinite({
	  maxZoom:       1.4,
	  animationTime: 4000,
	  imagesRatio:   (960 / 720),
	  isFixedBG:     true,
	  zoomIn:        true,
	  imagesList:    new Array(
		'assets/images/picjumbo.com_IMG_7432.jpg',
		'assets/images/coffee-coffee-machine-cup-3042.jpg'
	  )
	});
  });

  $(document).ready(function(){
	$('#numbers').mkinfinite({
	  maxZoom:       1.4,
	  animationTime: 4000,
	  imagesRatio:   (960 / 720),
	  isFixedBG:     true,
	  zoomIn:        true,
	  imagesList:    new Array(
		'assets/images/picjumbo.com_IMG_7432.jpg',
		'assets/images/coffee-coffee-machine-cup-3042.jpg'
	  )
	});
  });

  $(document).ready(function(){
	$('.team').mkinfinite({
	  maxZoom:       1.4,
	  animationTime: 4000,
	  imagesRatio:   (960 / 720),
	  isFixedBG:     true,
	  zoomIn:        true,
	  imagesList:    new Array(
		'assets/images/3F7D411CC8.jpg',
		'assets/images/3F7D411CC8.jpg'
	  )
	});
  });

  $(document).ready(function(){
	$('.service').mkinfinite({
	  maxZoom:       1.4,
	  animationTime: 4000,
	  imagesRatio:   (960 / 720),
	  isFixedBG:     true,
	  zoomIn:        true,
	  imagesList:    new Array(
		'assets/images/coffee-coffee-machine-cup-3042.jpg',
		'assets/images/coffee-coffee-machine-cup-3042.jpg'
	  )
	});
  });

  $(document).ready(function(){
	$('.slogan').mkinfinite({
	  maxZoom:       1.4,
	  animationTime: 4000,
	  imagesRatio:   (960 / 720),
	  isFixedBG:     true,
	  zoomIn:        true,
	  imagesList:    new Array(
		'assets/images/art-brush-colors-3112.jpg',
		'assets/images/picjumbo.com_IMG_4563.jpg',
		'assets/images/picjumbo.com_HNCK1805.jpg'
	  )
	});
  });

  $(document).ready(function(){
	$('.works').mkinfinite({
	  maxZoom:       1.4,
	  animationTime: 4000,
	  imagesRatio:   (960 / 720),
	  isFixedBG:     true,
	  zoomIn:        true,
	  imagesList:    new Array(
		'assets/images/219FB68281.jpg',
		'assets/images/219FB68281.jpg'
	  )
	});
  });

  $(document).ready(function(){
	$('.skill').mkinfinite({
	  maxZoom:       1.4,
	  animationTime: 4000,
	  imagesRatio:   (960 / 720),
	  isFixedBG:     true,
	  zoomIn:        true,
	  imagesList:    new Array(
		'assets/images/219FB68281.jpg',
		'assets/images/219FB68281.jpg'
	  )
	});
  });


  $(document).ready(function(){
	$('.process-bg').mkinfinite({
	  maxZoom:       1.4,
	  animationTime: 4000,
	  imagesRatio:   (960 / 720),
	  isFixedBG:     true,
	  zoomIn:        true,
	  imagesList:    new Array(
		'assets/images/art-brush-colors-3112.jpg',
		'assets/images/art-brush-colors-3112.jpg'
	  )
	});
  });

  $( document ).ready(function() {
	//Calls the modal when button is clicked
	$('#jsModal').on('click', function(){
	  $('#myModal').modal()
	});
	// Calls when modal hides
	$('#myModal').on('hidden.bs.modal', function (e) {
	  alert('The modal closed')
	})
  });