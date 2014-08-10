Underscore Helper
=================

Brings Underscore functions directly in templates

## Installation

Install using Meteorite. When in a Meteorite-managed app directory, enter:

```
$ mrt add underscore-helper
```

## Example

``` sh
{{#if _ "isString" "bonjour"}}
  It is!
{{else}}
  It is not :(
{{/if}}
```

Returns "It is!"
