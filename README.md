# bemification
An advanced preprocessor to write a cleat BEM oriented code.
Now is in the initial stage of syntax drafts.

# Basic usage:

some bemmedHTML code: 
<pre> 
Tabs 
    tab[active]
    tab
    tab
</pre>    

This will be translated into:
```html
    <div class="tabs">
        <div class="tabs__tab--active">
        <div class="tabs__tab">
        <div class="tabs__tab">
    </div>
```
```sass
    .tabs
      &__tab
        &--active
```

