// 2. The ability to submit a new comment via AJAX
//   Manually Trigger AJAX = Client Side Logic Model = Generic - Used in Ember, Angular, React and jQuery
//     A. Hijack the click event of a link, to fire an AJAX request.
//     B. Once we're in that click event, we fire an AJAX request to POST DATA

//       -when server responds with HTML: 
//       C. Once we have DATA, we place it in the DOM(add DATA to element in the DOM)
//        see 1st and 2nd drafts below

//       -when server response with JSON:
//       C. Iterate over the JSON data and inject it into the DOM.

//   Ask the Server for What to Do Via AJAX = Server Side AJAX Model = Remote True (Rails only)
//     A. Bind a generic AJAX request for more instructions to the click event (asking server for JavaScript)
//     B. Have the server render some JS as a response
//     C. the Browser (jQery) will execute the JS response.


