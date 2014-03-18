jQuery(document).ready(function($){
  
  $('#edit-field-geografi-kategori-tid-i18n').change(function(event){
    if($(this).val() !== 'All'){
      window.location.href = "/geografi/" + $(this).find('option:selected').text(); 
    }
  });
});
