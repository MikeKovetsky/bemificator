# Bemificator
An advanced preprocessor to write a cleat BEM oriented code.
Now is in the initial stage of syntax drafts.

# Basic usage:

some BEMified HTML code: 
```html
Tabs 
    tab[active]
    tab
    tab
```   

This will be translated into:
```html
<div class="tabs">
    <div class="tabs__tab--active">
    <div class="tabs__tab">
    <div class="tabs__tab">
</div>
```
Sass output:
```SASS
.tabs

  &__tab
  
    &--active
```

