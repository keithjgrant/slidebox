Slidebox
========

*AngularJS Directive for horizontal scrolling*

Horizontal scrolling on the web always seems better on paper than in
practice.  This is my attempt at a sane, user-friendly approach to
that problem.  Slidebox is friendly to both desktop computers and
touch devices.

This will overlay two large buttons on either side of the content
for scrolling left and right.  Hover the mouse over a button to
scroll in that direction; the closer to the edge the mouse goes,
the faster the content scrolls.  And the regular old scrollbar is
still there for use. On a touch device, the content scrolls at a
constant speed while one of the control buttons is pressed.

Live demo
---------
http://codepen.io/keithjgrant/pen/vqnaA

To Use
------
All you need is js/slidebox.js, css/slidebox.css, and the images.  Add those
to your project and include the 'Slidebox' module. Everything else in this
repository has to do with the demo and unit tests.

To view the demo, clone the repository into a local directory and open demo.html.

Markup example
--------------

```<slidebox speed="25" content-width="1000px" content-class="my-sb-content">
    Your content here!
</slidebox>```

All attributes are optional.

**speed** -- Default value is 25.

**content-width** -- Width of the *inner* content.  May be specified in 
px, em, or any other standard CSS unit Alternately, you may specify the
width in your stylesheet by selecting either the "slidebox-content" class
or another class specified with the "content-class" attribute.

**content-class** -- Space-seperated class names to be applied to the
*inner* content div.