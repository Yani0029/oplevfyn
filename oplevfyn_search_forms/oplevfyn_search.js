jQuery(document).ready(function($){

jQuery('.views-exposed-form select').each(function(){
var $element = jQuery(this);

var text = $element.find('option:selected').text();
$element.parent().prepend('<p>'+text+'</p>');

$element.change(function(){
    text = $element.find('option:selected').text();
    $element.parent().find('p').text(text);
});

});

  var location = window.location.href,
      href;
  location = location.split('/');
  if(location.length > 4){
    jQuery('.category-list').find('a').each(function(){
      href = jQuery(this).attr('href');
      if(href.indexOf(location[location.length-1]) !== -1) {
        jQuery(this).parent().parent().addClass('active-page');
      }
    });
  }
});
