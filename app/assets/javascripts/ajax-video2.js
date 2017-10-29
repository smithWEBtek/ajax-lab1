// 2. The ability to submit a new comment via AJAX
//  A. Hijack the submit event of our form
//  B. Take form data, send to server via AJAX post request
//      - How will we know the URL of the post request? 
//  C. Take data from AJAX POST request, create corresponding element
//  D. Send back the HTML/JSON/JS (of the new comment), and inject it to the comment 'ol' on the DOM
// 
// 

// $(function(){
//   $('#new_comment').on('submit', function(e){
//     e.preventDefault()
//     let post_id = parseInt(this.action.split('/')[4])
    
//     data = {
//       'post_id': post_id, 
//       'authenticity_token': $("input[name='authenticity_token']").attr("value"),
//       'comment': {
//         'content': $('form#new_comment')[0].comment_content.value
//       }
//     }
     
    // $.ajax({
    //   type: 'POST',
    //   url: this.action,   
    //   data: data
    // // }).done(load_comments(post_id))
    // }).done(debugger)
    
  // function load_comments(pid){
  //   $.ajax({
  //     type: "GET",
  //     url: `/posts/${pid}/comments`
  //   }).done(function(response){
  //     console.log(response)
  //     document.getElementById("comments").html = response
  //     })
  //   } 
//   })
// })