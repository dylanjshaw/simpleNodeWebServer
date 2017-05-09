$(document).ready(function(){
  $('#person-form').submit(function(event){
    event.preventDefault();
    var formData = {firstname: $(this).find("input[name='firstname']").val(), lastname: $(this).find("input[name='lastname']").val()}
    console.log(formData)
    $.ajax({
      method: 'POST',
      url: '/personjson',
      data: JSON.stringify(formData),
      dataType: 'json',
      contentType: 'application/json'
    })
  })
});
