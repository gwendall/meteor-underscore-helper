```diff
- NOTE: This package is not maintained anymore.
- If you want to help, please reach out to gwendall.esnault@gmail.com
```

Underscore Helper
=================

Brings Underscore functions directly in templates

## Installation  

**For Meteor 0.9+**

```
meteor add gwendall:underscore-helper
```

**For Meteor < 0.9**

```
mrt add underscore-helper
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
