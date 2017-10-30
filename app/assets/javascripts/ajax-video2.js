// 2. The ability to submit a new comment via AJAX
//  A. Hijack the submit event of our form
//  B. Take form data, send to server via AJAX post request
//      - How will we know the URL of the post request? 
//  C. Take data from AJAX POST request, create corresponding element
//  D. Send back the HTML/JSON/JS (of the new comment), and inject it to the comment 'ol' on the DOM

////////////////////////////////////////////////////////////////////
///////////// first way, low level AJAX   //////////////////////////
////////////////////////////////////////////////////////////////////
// $(function(){
//   $('form#new_comment').on('submit', function(e){ 
//     $.ajax({
//                     // type: "POST",
//       type: ($("input[name='_method']").val() || this.method),
//       url: this.action,   
//                     // data: {
//                     //   'authenticity_token': $("input[name='authenticity_token']").val(),
//                     //   'comment': {
//                     //     'content': $('#comment_content').val()
//                     //   }
//                     // },
//       data: $(this).serialize(),
//       success: function(response){
//         $('#comment_content').val('')
//         var $ol = $("div.comments ol")
//         $ol.append(response)
//       }
//     })
//     e.preventDefault()
//     e.stopImmediatePropagation()
//   })
// })

////////////////////////////////////////////////////////////////////
///////////// 2nd way, using 'remote: true'  ///////////////////////
////////////////////////////////////////////////////////////////////

// $(function(){
//   $('form#new_comment').on('submit', function(e){ 
//     $.ajax({
//       type: ($("input[name='_method']").val() || this.method),
//       url: this.action,
//       data: $(this).serialize(),
//       success: function(response){
//         $('#comment_content').val('')
//         var $ol = $("div.comments ol")
//         $ol.append(response)
//       }
//     })
//     e.preventDefault()
//     e.stopImmediatePropagation()
//   })
// })
