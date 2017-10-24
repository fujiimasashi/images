// GA basic setting
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-57435634-1', 'auto');
ga('require', 'linkid', 'linkid.js'); // link attribution
ga('require', 'displayfeatures'); // display ad
ga('send', 'pageview');

// target setting and outbound link tracking
(function(){
  if(typeof jQuery == 'undefined'){
    return;
  }
  jQuery(function($){
    // _blank
    $(function () {
      $('a[href^=http]').not('[href*="'+location.hostname+'"]').attr("target","_blank");
    });

    // Outbound link
    $('a').click(function(e) {
      var ahref = $(this).attr('href');
      if (ahref.indexOf(location.hostname) == -1 && ahref.indexOf('http') != -1 ) {
         ga('send', 'event', 'outbound', 'click', ahref);
      }
    });
  });
})();