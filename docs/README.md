
<h1 align="center" style="border-bottom: none;">🚀 kQuery 🚀</h1>
<h3 align="center" style="margin-top:20px;margin-bottom:30px;">A light-weight clone of your oldie goldie jQuery </h3>
<p align="center">
  <a href="https://travis-ci.org/github/pratapdd/kQuery">
    <img alt="Travis" src="https://img.shields.io/travis/pratapdd/kQuery?style=flat-square">
  </a>
  <a href="https://codecov.io/gh/pratapdd/kQuery">
    <img alt="Codecov" src="https://img.shields.io/codecov/c/github/pratapdd/kQuery?style=flat-square">
  </a>
  <a href="https://github.com/pratapdd/kQuery/actions">
    <img alt="GitHub Workflow" src="https://img.shields.io/github/workflow/status/pratapdd/kQuery/Release%20npm%20package?style=flat-square">
  </a>
  <a href="https://github.com/pratapdd/kQuery/releases/tag/v1.0.0">
    <img alt="Semantic Release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
  <a href="https://github.com/pratapdd/kQuery/releases/tag/v1.0.0">
    <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
  </a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@pratapdd/kquery">
    <img alt="npm latest version" src="https://img.shields.io/npm/v/@pratapdd/kquery?style=flat-square">
  </a>
</p>

**kQuery** A light-weight clone of your oldie goldie jQuery.

## API

Below APIs will be made available by kQuery.

<ul>
  <li onclick="document.getElementById('kquery-class').scrollIntoView();">kQuery(cssSelectorString)</li>
  <li>kCollection.replaceWith(kCollection)</li>
  <li>kCollection.style(Object)</li>
  <li>kCollection.remove()</li>
  <li>kCollection.find(cssSelectorString)</li>
  <li onclick="document.getElementById('kquery-before').scrollIntoView();">kCollection.before(kCollection | htmlString)***</li>
  <li>kCollection.after(kCollection | htmlString)***</li>
</ul>


### `kQuery(cssSelectorString)`
<div id="kquery-class">

Select matching elements on the page.

- Reads a CSS selector string
- Returns a kQuery collection (`kCollection` or `collection` in this assignment)

#### Example

<h6 align="center">index.html</h6>

```html
<div class="item">Hello</div>
<div class="item">World!</div>
```

<h6 align="center">index.js</h6>

```js
const kCollection = kQuery('.item');
```

#### Result

`kCollection` now contains the elements matching the CSS selector `.item`.

</div>


### `kCollection.replaceWith(kCollection)`

- Replaces the current collection with another one
- Returns the new collection

#### Example

<h6 align="center">index.html</h6>

```html
<div class="item">Some</div>
<div class="item">Item</div>

<span class="itemReplacement">Hello</span>
<span class="itemReplacement">World!</span>
```

<h6 align="center">index.js</h6>

```js
kQuery('.item').replaceWith(kQuery('.itemReplacement'));
```

#### DOM result

```html
<span class="itemReplacement">Hello</span>
<span class="itemReplacement">World!</span>
```



### `kCollection.style(Object)`

- Updates the style of the current collection
- Returns the current collection

#### Example

<h6 align="center">index.html</h6>

```html
<div class="item">Hello World!</div>
```

<h6 align="center">index.js</h6>

```js
kQuery('.item').style({ color: 'red' });
```

#### Result

`Hello World!` is now displayed in red color.



### `kCollection.remove()`

- Removes the current collection from the DOM
- Returns an empty collection to allow the chain of commands to continue

#### Example

<h6 align="center">index.html</h6>

```html
<div class="item">Some</div>
<div class="item">Item</div>
<div>Hello World!</div>
```

<h6 align="center">index.js</h6>

```js
kQuery('.item').remove();
```

#### DOM result

```html
<div>Hello World!</div>
```



### `kCollection.find(cssSelectorString)`

- Searches the current collection for matching elements and replaces the current collection
- Returns the new collection

#### Example

<h6 align="center">index.html</h6>

```html
<div class="item">Hello <span>World!</span></div>
<div class="item">World! <span>Hello</span></div>
```

<h6 align="center">index.js</h6>

```js
const kCollection = kQuery('.item').find('span');
```

#### Result

`kCollection` contains two spawn elements.

### `kCollection.get()`

- Returns an [`Array`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) of all DOM elements in the `kCollection`

_After this call, the `kQuery` chain ends since you get a regular `Array` and not a `kCollection`._

#### Example

<h6 align="center">index.html</h6>

```html
<div class="item">Hello</div>
<div class="item">World!</div>
```

<h6 align="center">index.js</h6>

```js
const domElements = kQuery('.item').get();
```

**Result:**

`domElements` contains an array of DOM elements with two elements.



<div id="kquery-before">
### `kCollection.before(kCollection | htmlString)`

- Insert content, specified by the parameter, before each element in the set of matched elements
- Returns the new collection

#### Example with htmlString

<h6 align="center">index.html</h6>

```html
<h2>Greetings</h2>
<div class="inner">Hello</div>
<div class="inner">How are you?</div>

"<p>Text</p>"
```

<h6 align="center">index.js</h6>

```js
kQuery('.inner').before("<p>Text</p>");
```

#### DOM result

```html
<h2>Greetings</h2>
<p>Test</p>
<div class="inner">Hello</div>
<p>Test</p>
<div class="inner">Goodbye</div>
```

#### Example with kCollection elements

<h6 align="center">index.html</h6>

```html
<div class="container">
  <h2>Greetings</h2>
  <div class="inner">Hello</div>
  <div class="inner">How are you?</div>
</div>
```

<h6 align="center">index.js</h6>

```js
kQuery('.inner').before(kQuery('h2'));
```

#### DOM result

```html
<h2>Greetings</h2>
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">How are you?</div>
</div>
```
</div>


### `kCollection.after(kCollection | htmlString)`

- Insert content, specified by the parameter, after each element in the set of matched elements
- Returns the new collection

#### Example with htmlString

<h6 align="center">index.html</h6>

```html
<h2>Greetings</h2>
<div class="inner">Hello</div>
<div class="inner">How are you?</div>

"<p>Text</p>"
```

<h6 align="center">index.js</h6>

```js
kQuery('.inner').before("<p>Text</p>");
```

#### DOM result

```html
<h2>Greetings</h2>
<div class="inner">Hello</div>
<p>Test</p>
<div class="inner">Goodbye</div>
<p>Test</p>
```

#### Example with kCollection elements

<h6 align="center">index.html</h6>

```html
<div class="container">
  <h2>Greetings</h2>
  <div class="inner">Hello</div>
  <div class="inner">How are you?</div>
</div>
```

<h6 align="center">index.js</h6>

```js
kQuery('.inner').before(kQuery('h2'));
```

#### DOM result

```html
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">How are you?</div>
</div>
<h2>Greetings</h2>
```

