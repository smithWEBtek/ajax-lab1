// 1. The ability to load the comments for a post via AJAX

//   Manually Trigger AJAX = Client Side Logic Model = Generic - Used in Ember, Angular, React and jQuery
//     A. Hijack the click event of a link, to fire an AJAX request.
//     B. Once we're in that click event, we fire an AJAX request to get DATA

//       -when server responds with HTML: 
//       C. Once we have DATA, we place it in the DOM(add DATA to element in the DOM)
//        see 1st and 2nd drafts below

//       -when server response with JSON:
//       C. Iterate over the JSON data and inject it into the DOM.

//   Ask the Server for What to Do Via AJAX = Server Side AJAX Model = Remote True (Rails only)
//     A. Bind a generic AJAX request for more instructions to the click event (asking server for JavaScript)
//     B. Have the server render some JS as a response
//     C. the Browser (jQery) will execute the JS response.

// 2. The ability to submit a new comment via AJAX (see ajax-video2.js)


// examples for response of HTML

// $(document).ready(function(){
// is the same as this: 

// 
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////--------1st draft ------ajax low level ---- client side logic model -----///////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// $(function(){
//   $('a.load_comments').on('click', function(e){
//     e.preventDefault()
//     $.ajax({
//       method: "GET",
//       url: this.href
//     }).done(function(response){
//      document.getElementById("comments").innerHTML = response
//     }).fail(function(){
//       alert("we broke!!!")
//     })
//   })
// })
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// edit the comments_controller to 'render layout: false'
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// refactor at 37:15
// https://www.youtube.com/watch?v=E8TJmwW5ayQ
// ---------------------------------------------------------------

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
// ---------2nd draft ------ajax higher level ----shorthand method - still client side logic  //////////////////////////////////////////////////////////////////////////////////////
/////////////////----------- using for -------------//////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// edit the comments_controller to:  render json: @comments
//////////////////////////////////////////////////////////////////////

// $(function(){
//   $("a.load_comments").on("click", function(e){
//     $.get(this.href).done(function(response){
//       let responseHTML = '<ul>'
//       for(let i = 0; i < response.length; i++){
//         let commenter = response[i].commenter
//         let body = response[i].body
//         responseHTML += `<li>${commenter}: ${body}</li>`
//       } 
//       responseHTML += '</ul>'
//       $("div#comments").html(responseHTML);
//     }).fail(function(){
//       alert("we broke!!!");
//     });
//     e.preventDefault();
//   });
// }); 

//////////////////////////////////////////////////////////////////////////////////////
/////////////////----------- using foreach -------------//////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
 
// $(function(){
//   $("a.load_comments").on("click", function(e){
//     $.get(this.href).done(function(response){
//       let responseHTML = '<ul>'
//       response.forEach(function(element) {
//         responseHTML += `<li>${element.commenter}: ${element.body}</li>`
//       }, this);
//       responseHTML += '</ul>'
//       $("div#comments").html(responseHTML);
//     }).fail(function(){
//       alert("we broke!!!");

//     });
//     e.preventDefault();
//   });
// }); 

 
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
///////////// ------3rd draft-----------//////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
 
// json example follows, ends at 49:30
// summary at 50:39
//------------------- Server side AJAX model 52:47
// summary at 57:45
// to 1:10
// ----  4th draft @1:10 the magic -----(remote: true added to erb link)--------------------------
// remote: true   added to hijacked link
// pattern 
//  summary at 1:13

// $(function() {
//   $("a.load_comments").on("click", function(e){
//     $.ajax({
//       url: this.href,
//       dataType: 'script'
//       });
 
//     e.preventDefault();
//   });
// });

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
///////////// ------4th draft-----------//////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
// in show.html.erb add: remote :true
// add another view called index.js.erb 
// put javascript there, including use of 'j' method to escape html string
// edit the comments_controller to 'render layout: false'
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////