# Introduction to Grid

- Flexbox can optionally wrap. If we allow a flex container to wrap, they will wrap down onto another row when the flex items fill a row. Where they line up on the next row is independent of what happenned on the first row, allowing for a masonry-like look.

- Grid can also optionally wrap (if we allow auto filling) in the sense that items can fill a row and move to the new row (or auto place themselves), but as they do, they will fall along the same grid lines all the other elements do.

## Creating a grid

- CSS Grid also includes a shorthand property for defining rows and columns. We can replace the properties for grid-template-rows and grid-template-columns with the shorthand grid-template property.
-grid-template: 50px 50px / 250px 50px 50px;

- We can set the implicit grid track sizes using the grid-auto-rows and grid-auto-columns properties.

## Positioning Grid Elements

- 