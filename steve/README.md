# Blog Articles
**Author**: Steven Carpenter
**Version**: 1.0.0

## Overview
This application displays blog articles to the user. It also has a new article
page 'ironically' not linked to the main page where the user has the ability
to add a new blog article. As the user enters text and tabs/clicks to the next
field, a preview will start being generated that they can view by clicking the
preview navigation tab at the top of the new page. The main page offers the
ability for the user to filter articles by the author of the article or the
category of the articles.

## Getting Started
To use this application, the user needs to clone the Github repo to their
local machine and navigate to that folder. Once inside the folder, they need
to either launch a live-server (software is usually preinstalled on your
machine) or actually open the pages of interest in the browser by using a
program to do so. For linux users, this program is often xdg-open and for mac
users it is often open on the command line followed by the target HTML file.

## Architecture
This application primarily uses JavaScript, CSS, and HTML. It also utilizes
some external JS libraries which are noted in the collaborations section
below.

## Change Log
Sun Dec 10 16:21:58 2017 -0800: Reorged the copied starter code to match lab requirements.
Sun Dec 10 19:24:58 2017 -0800: Fixed script paths in index.html
Sun Dec 10 19:25:40 2017 -0800: Moved the icons.css filepath
Sun Dec 10 19:26:35 2017 -0800: Added in the default.css and railscast.css links. Also added in the template HTML to the new.html
Sun Dec 10 19:26:55 2017 -0800: Updated the preview icon to be a power icon since having that and home as the home icon is silly.
Sun Dec 10 19:27:52 2017 -0800: Put in the new article form for filling in details on new page
Sun Dec 10 19:28:16 2017 -0800: Added the JSON input field to the new page HTML that will be populated with data from the new article.
Sun Dec 10 19:29:00 2017 -0800: Added in appropriate external library script links as well as fixed the script tags targeting local JS files.
Sun Dec 10 19:31:34 2017 -0800: Added in call to initialize the new page JS code.
Sun Dec 10 19:32:20 2017 -0800: Changed the toHTML() function back to a regular function since it uses the this keyword.
Sun Dec 10 19:33:12 2017 -0800: Added in the call to the marked JS library to mark all syntax code.
Sun Dec 10 19:42:04 2017 -0800: Added some semicolons and removed the call to append articles inside article.js.
Sun Dec 10 19:43:11 2017 -0800: Renamed the handleMainNav method since it will focus on both main and new page
Sun Dec 10 19:44:14 2017 -0800: Added a required comment.
Sun Dec 10 19:45:22 2017 -0800: Added call to show all the tab-content
Sun Dec 10 19:45:58 2017 -0800: Added call to hide all the exported json
Sun Dec 10 19:47:31 2017 -0800: Added event handler to update preview and configure the new page nav
Sun Dec 10 19:48:19 2017 -0800: Implemented code to update the preview and generate a JSON representation of it.
Sun Dec 10 19:49:59 2017 -0800: Added a comment explaining the purpose of the initIndexPage function and code to populate the articles.

## Credits and Collaborations
[Handlebars.js](http://handlebarsjs.com/)
[jQuery](https://jquery.com/)
[Highlight.js](https://highlightjs.org/)
[Marked.js](https://github.com/chjj/marked)
Scott Schmidt - Courteous donator of starter code along with functional code
