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

<code>npm run bemificator</code>
This will translate the source bemified code into:
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

Configuration file:
configs basic path must be specified in the bemificator npm script

bemificator-config.json
source: source code path
styles-output: "none" / "sass" / "scss" / "css" / "less"