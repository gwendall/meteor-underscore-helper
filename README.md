Underscore-helper
=================

Brings Underscore functions directly in templates

-----------

Example:

``` sh
{{#if _ "isString" "bonjour"}}
  It is!
{{else}}
  It is not :(
{{/if}}
```

Returns "It is!"
