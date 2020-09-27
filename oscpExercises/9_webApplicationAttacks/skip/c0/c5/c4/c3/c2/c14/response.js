var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 17:44:46 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 28 Feb 2019 02:47:51 GMT\x0aETag: \x22f6d-582eb50f963c0-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-1208/1209\x0aContent-Length: 1209\x0aKeep-Alive: timeout=5, max=100\x0aConnection: Keep-Alive\x0aContent-Type: text/css\x0a\x0a/*\x0aTheme Name: Twenty Nineteen\x0a\x0aAdding print support. The print styles are based on the the great work of\x0aAndreas Hecht in https://www.jotform.com/blog/css-perfect-print-stylesheet-98272/.\x0a*/\x0a/*--------------------------------------------------------------\x0a\x3e\x3e\x3e TABLE OF CONTENTS:\x0a----------------------------------------------------------------\x0a# Margins\x0a# Typography\x0a# Page breaks\x0a# Links\x0a# Visibility\x0a--------------------------------------------------------------*/\x0a@media print {\x0a  /* Margins */\x0a  @page {\x0a    margin: 2cm;\x0a  }\x0a  .entry {\x0a    margin-top: 1em;\x0a  }\x0a  .entry .entry-header, .site-footer .site-info {\x0a    margin: 0;\x0a  }\x0a  /* Fonts */\x0a  body {\x0a    font: 13pt Georgia, \x22Times New Roman\x22, Times, serif;\x0a    line-height: 1.3;\x0a    background: #fff !important;\x0a    color: #000;\x0a  }\x0a  h1 {\x0a    font-size: 24pt;\x0a  }\x0a  h2,\x0a  h3,\x0a  h4,\x0a  .has-regular-font-size,\x0a  .has-large-font-size,\x0a  h2.author-title,\x0a  p.author-bio,\x0a  .comments-title, h3 {\x0a    font-size: 14pt;\x0a    margin-top: 25px;\x0a  }\x0a  /* Page breaks */\x0a  a {\x0a    page-break-inside: avoid;\x0a  }\x0a  blockquote {\x0a    page-break-inside: avoid;\x0a  }\x0a  h1,\x0a  h2,\x0a  h3,\x0a  h4,\x0a  h5,\x0a  h6 {\x0a    page-break-after: avoid;\x0a    page-break-inside: avoid;\x0a  }\x0a  img {\x0a    page-break-inside: avoid;\x0a    page-break-after: avoid;\x0a  }\x0a  table, pre {\x0a    page-break-inside: avoid;\x0a  }\x0a  ul, ol, dl {\x0a    page-break-before: avoid;\x0a  }\x0a  /* Links */\x0a  a:link, a:visited, a {\x0a    background: transparent;\x0a    font-weight: bold;\x0a    text-decoration: underline;\x0a    text-align: left;\x0a  }\x0a  a {\x0a    page-break-inside: avoid;\x0a  }\x0a  a[href^=http]:after {\x0a    content: \x22 \x3c \x22 attr(href) \x22\x3e \x22;\x0a  }\x0a  a:after \x3e img {\x0a    content: \x22\x22;\x0a  }\x0a  article a[href^=\x22#\x22]:after {\x0a    content: \x22\x22;\x0a  }\x0a  a:not(:local-link):after {\x0a    content: \x22 \x3c \x22 attr(href) \x22\x3e \x22;\x0a  }\x0a  /* Visibility */\x0a  .main-navigation,\x0a  .site-title + .main-navigation,\x0a  .social-navigation,\x0a  .site-branding-container:before,\x0a  .entry .entry-title:before,\x0a  .entry-footer,\x0a  .author-description:before,\x0a  .post-navigation,\x0a  .widget-area,\x0a  .comment-form-flex,\x0a  .comment-reply,\x0a  .comment .comment-metadata .edit-link {\x0a    display: none;\x0a  }\x0a  .entry .entry-content .wp-block-button .wp-block-button__link,\x0a  .entry .entry-content .button {\x0a    color: #000;\x0a    background: none;\x0a  }\x0a  /* Site Header (With Featured Image) */\x0a  .site-header.featured-image {\x0a    min-height: 0;\x0a  }\x0a  .site-header.featured-image .main-navigation a,\x0a  .site-header.featured-image .main-navigation a + svg,\x0a  .site-header.featured-image .social-navigation a,\x0a  .site-header.featured-image .site-title a,\x0a  .site-header.featured-image .site-featured-image a,\x0a  .site-header.featured-image .site-branding .site-title,\x0a  .site-header.featured-image .site-branding .site-description,\x0a  .site-header.featured-image .main-navigation a:after,\x0a  .site-header.featured-image .main-navigation .main-menu \x3e li.menu-item-has-children:after,\x0a  .site-header.featured-image .main-navigation li,\x0a  .site-header.featured-image .social-navigation li,\x0a  .site-header.featured-image .entry-meta,\x0a  .site-header.featured-image .entry-title,\x0a  .site-header.featured-image#masthead .site-title a {\x0a    color: #000;\x0a    text-shadow: none;\x0a  }\x0a  .site-header.featured-image .site-featured-image .entry-header,\x0a  .site-header.featured-image .site-branding-container {\x0a    margin-top: 0;\x0a    margin-bottom: 0;\x0a  }\x0a  .site-header.featured-image .site-featured-image .post-thumbnail img {\x0a    position: relative;\x0a    height: initial;\x0a    width: initial;\x0a    object-fit: none;\x0a    min-width: 0;\x0a    min-height: 0;\x0a    max-width: 100%;\x0a    margin-top: 1rem;\x0a  }\x0a  /* Remove image filters from featured image */\x0a  .image-filters-enabled *:after {\x0a    display: none !important;\x0a  }\x0a  .image-filters-enabled .site-header.featured-image .site-featured-image:before {\x0a    display: none;\x0a  }\x0a  .image-filters-enabled .site-header.featured-image .site-featured-image .post-thumbnail img {\x0a    filter: none;\x0a  }\x0a}\x0a'}