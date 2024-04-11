## Module Report
### Unknown Global

**Global**: `Ember.Comparable`

**Location**: `addon/fragment.js` at line 70

```js
  @uses Copyable
*/
const Fragment = Model.extend(Ember.Comparable, Copyable, {
  /**
    Compare two fragments by identity to allow `FragmentArray` to diff arrays.
```

### Unknown Global

**Global**: `Ember.libraries`

**Location**: `addon/index.js` at line 30

```js
});

if (Ember.libraries) {
  Ember.libraries.register('Model Fragments', MF.VERSION);
}
```

### Unknown Global

**Global**: `Ember.libraries`

**Location**: `addon/index.js` at line 31

```js

if (Ember.libraries) {
  Ember.libraries.register('Model Fragments', MF.VERSION);
}

```

### Unknown Global

**Global**: `Ember.Comparable`

**Location**: `tests/unit/fragment_test.js` at line 87

```js
    const fragment = store.createFragment('name');

    assert.ok(Ember.Comparable.detect(fragment), 'fragments are comparable');
  });

```
