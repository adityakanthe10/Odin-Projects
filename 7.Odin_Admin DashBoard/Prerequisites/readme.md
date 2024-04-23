# Introduction to Grid

- Flexbox can optionally wrap. If we allow a flex container to wrap, they will wrap down onto another row when the flex items fill a row. Where they line up on the next row is independent of what happenned on the first row, allowing for a masonry-like look.

- Grid can also optionally wrap (if we allow auto filling) in the sense that items can fill a row and move to the new row (or auto place themselves), but as they do, they will fall along the same grid lines all the other elements do.

## Creating a grid

- CSS Grid also includes a shorthand property for defining rows and columns. We can replace the properties for grid-template-rows and grid-template-columns with the shorthand grid-template property.
-grid-template: 50px 50px / 250px 50px 50px;

- We can set the implicit grid track sizes using the grid-auto-rows and grid-auto-columns properties.

## Positioning Grid Elements 

- Every track has a start line and an end line. The lines are numbered from left to right and top to bottom starting at 1.
-  The space in a grid shared by a single row track and a single column track is called a grid cell.

- Even shorter shorthand for positioning grid items with start and end lines.You can combine grid-row-start/grid-column-start/grid-row-end/grid-column-end into one line using grid-area

#living-room{
    grid-area: 1/1/3/6
}

## Advance grid Properties

- REPEAT
- Repeat is a css function available to the CSS Grid template properties that allow us to define a number of rows or columns and the size we want them to be without having to manually type out each.For example
,in this setup

.grid-container {
  grid-template-rows: 150px 150px;
  grid-template-columns: 150px 150px 150px 150px 150px;
}

.grid-conatiner{
    grid-template-rows:repeat(2,150px);
    grid-template-columns: repeat(5,150px)
}

- Fractional Units
- The most basic way to make our grid items dynamic is by using fractional units, also known as fr.
grid-template-columns: repeat(2, 2fr) repeat(3, 1fr);

- Minimum and Maximum Track Sizes- min() and max()
- when we provide a dynamic value as one of these arguments, we unlock the real potential of these functions, especially in the context of Grid:

- .grid-container {
  grid-template-rows: repeat(2, min(200px, 50%));
  grid-template-columns: repeat(5, max(120px, 15%));
}

- Dynamic Minimum and maximum sizes
.grid-container {
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, minmax(150px, 200px));
}

.non-grid-example {
  width: clamp(500px, 80%, 1000px);
}
.grid-container {
  grid-template-columns: repeat(5, clamp(150px, 20%, 200px));
}

## Using Flexbox and Grid

- In Content First Design, you begin with clarity of how the content should be, and the layout follows. This is a great opportunity to use Flexbox.
- In Layout First Design, you decide how you want the pieces arranged, then fill in the content.