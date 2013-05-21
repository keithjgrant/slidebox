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

Markup example
--------------

```<slidebox speed="25" content-width="1000px">
    Your content here!
</slidebox>```

The "speed" attribute is optional. Default value is 25.  The
"content-width" attribute may be specified in any px, em, or any
other standard CSS unit.  You may also specify the content-width
in your stylesheet by applying a width rule to the element with
the class "slidebox-content".