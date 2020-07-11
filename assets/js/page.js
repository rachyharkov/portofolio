document.addEventListener("DOMContentLoaded", function()
{
	var page = window.location.hash.substr(1);
	if(page === "")
	{
		page = "landing";
	}
	loadPage(page);

	function initiateSlickforWrapper()
	{
		$('.wrapper').slick({
	  		slidesToShow: 3,
	  		infinite: true,
	  		slidesToScroll: 1,
	  		autoplay: true,
	  		autoplaySpeed: 3000,
	  		arrows: true,
	  		pauseOnHover: false,
	  		dots: true,
	      	responsive: [
	      	{
	        	breakpoint: 768,
	        	settings:
	        	{
	          		slidesToShow: 2
	        	}
	      	},
	      	{
	        	breakpoint: 480,
	        	settings:
	        	{
	          		slidesToShow: 1,
	          	arrows: false
	        	}
	      	}]
		});
	}

	function destroySlick()
	{
		if ($('.wrapper').hasClass('slick-initialized')) 
		{
    		$('.wrapper').slick('destroy');
  		} 
	}

	function loadPage(page)
	{
		var xhttp = new XMLHttpRequest();

		xhttp.onloadstart = function () 
        {
            var content = document.querySelector("#body-content");
            content.innerHTML = `
            <div class="loading-ajax">
            	<div class="spinner-border" style="width: 3rem; height: 3rem; color: white;" role="status">
  					<span class="sr-only">Loading...</span>
				</div>
			</div>`;
        }

		xhttp.onreadystatechange = function()
		{
			if(this.readyState == 4)
			{	
				var content = document.querySelector("#body-content");
				if(this.status == 200)
				{
					content.innerHTML = xhttp.responseText;
					destroySlick();		
					initiateSlickforWrapper();
				}
				else if(this.status == 404)
				{
					content.innerHTML = "<p style='height: 100%; width: 100%; text-align: center; padding-top: 250px;'>Halaman yang anda cari tidak ditemukan :(</p>";
				}
				else
				{
					content.innerHTML = "<p style='height: 100%; width: 100%; text-align: center; padding-top: 250px;'>Ups.. Halaman yang anda inginkan tidak dapat diakses! :(</p>";
				}
			}
		};
		xhttp.open("GET", "pages/" + page + ".html", true);
		xhttp.send();
	}

});