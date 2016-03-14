//Problem: it looks gross in smaller browser devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);
//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  // Create an option
  var $option = $("<option></option>");
  //add selected class to li when item is selected
  if($anchor.parent().hasClass("selected")) {
     $option.prop("selected", true);
  }
  // options grabs values from the href of the link href="this.html"
  $option.val($anchor.attr("href"));
  //options text sets the text from the anchor text <a>home</a>
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
});
  
//bind to change listener
$select.change(function(){
  //Go to select's location we are getting val
  window.location = $select.val();
});
  
