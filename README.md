Underscore Helper
=================

Brings Underscore functions directly in templates

## Installation

Install using Meteorite. When in a Meteorite-managed app directory, enter:

###for Meteor 0.9+
meteor add gwendall:underscore-helper

```
$ mrt add underscore-helper
```

## Examples

``` sh
{{#if _ "isString" "bonjour"}}
  It is!
{{else}}
  It is not :(
{{/if}}

// > Returns "It is!"
```

``` sh
// With var items = [1, 2, 3];

{{_ "size" items}}

// > Returns 3
```
