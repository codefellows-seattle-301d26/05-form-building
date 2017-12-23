'use strict';

let articleView = {};

//I believe this block of code is to populate the drop menu(filter), with article title/author
articleView.populateFilters = () => {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      let val = $(this).find('address a').text();
      let optionTag = `<option value="${val}">${val}</option>`;

      if ($(`#author-filter option[value="${val}"]`).length === 0) {
        $('#author-filter').append(optionTag);
      }

      val = $(this).attr('data-category');
      optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#category-filter option[value="${val}"]`).length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = () => {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-author="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = () => {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-category="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = () => {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

articleView.setTeasers = () => {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('article').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    if ($(this).text() === 'Read on →') {
      $(this).parent().find('*').fadeIn();
      $(this).html('Show Less &larr;');
    } else {
      $('body').animate({
        scrollTop: ($(this).parent().offset().top)
      },200);
      $(this).html('Read on &rarr;');
      $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
    }
  });
};

// COMMENT: Where is this function called? Why?
// This function is called in the new.html to dynamically render new article content to the DOM
articleView.initNewArticlePage = () => {
  // TODO: Ensure the main .tab-content area is revealed. We might add more tabs later or otherwise edit the tab navigation.

('tab-content').show();

  // TODO: The new articles we create will be copy/pasted into our source data file.
  // Set up this "export" functionality. We can hide it for now, and show it once we have data to export.
  //I added one line of code  
  ('#article-export').hide();
  $('#article-json').on('focus', function(){
    this.select();
  });
//the above says 'on focus "when the mouse is focused" make it easy to copy/paste (user interface plug)
  // TODO: Add an event handler to update the preview and the export field if any inputs change.
//deligation i am adding line below
$('#article-form').on('change', 'input, textarea', articleView.create)
};

articleView.create = () => {
  // TODO: Set up a variable to hold the new article we are creating.
  let article
  //the below code clears clears the #articles ID so we ca update preview
  // Clear out the #articles element, so we can put in the updated preview
  $('#articles').empty()

  

  // TODO: Instantiate an article based on what's in the form fields:
  //DONE BY ME
article = new Article({
  author: $('#article-autor').val(),
  authorUrl: $('#article-authorUrl').val(),
  title: $('#article-title').val(),
  category: $('#article-category').val(),
  body: $('#article-body').val(),
  publishedOn: $('#article-pubdate:checked').length? new Date () : null,
  //checks for true or false and prints date stamp based on check box 'published' event listener
})

  // TODO: Use our interface to the Handblebars template to put this new article into the DOM:
  //ME WORKING ON.. DONE

$('#articles').append(article.tHhtml())

  // TODO: Activate the highlighting of any code blocks; look at the documentation for hljs to see how to do this by placing a callback function in the .each():
  $('pre code').each();((i, block) => hljs.highlightBlock(block));

  // TODO: Show our export field, and export the new article as JSON, so it's ready to copy/paste into blogArticles.js:
$('#article-export').show().find('#article-json').val(Json.stringify(article))
};
// COMMENT: Where is this function called? Why?
// This is called in the index.html to publish new data with all the original data
articleView.initIndexPage = () => {
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
};
