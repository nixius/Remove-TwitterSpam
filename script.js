var intervalId = window.setInterval(function(){

  // grab all articles
  var articles = document.querySelectorAll("article");
   articles.forEach(article => {
     // loop through all spans in articles
      const spans = article.querySelectorAll("span");
     
     // if a span has a 'shit' text remove the article
      spans.forEach(span => {
          if(span.innerText == 'Based on your likes')
          {
              article.remove();
          }
          else if(span.innerText == 'Viral Tweets')
          {
              article.remove();
          }
          else if(span.innerText == 'Popular images')
          {
              article.remove();
          }
         // 'see more' can contain topics we have subscribed to, so only remove 'spam' ones (i.e. not subsrcibed)
         // which will have an 'X' - also code good ones green :)
          else if(span.innerText == 'See more')
          {
              var spanParent = span.parentElement.parentElement;

              if(spanParent.childNodes.length == 2)
              {
                  span.style.color = "green";
              }
              else
              {
                  article.remove();
              }
          }
      });

   });


}, 200);
