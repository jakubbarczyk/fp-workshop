# Functional Programming Workshop

**1st Edition**

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/J3J01WXBW)

## The Lambda

Lambda calculus is a formal system for expressing computation introduced in the 1930s by Alonzo Church.

It is based on function abstraction `λx.(x + 2)`, application `λx.(x + 2)(3)`, variable binding `[x := 3]` and substitution `(3 + 2) → 5`.

An anonymous function that accepts exactly one argument is a _lambda expression_, or _lambda_ for short.

## Higher-Order Functions

"Functions that operate on other functions, either by taking them as arguments or by returning them"

— Marijn Haverbeke, _Eloquent JavaScript_

```javascript
const numbers = [1, 2, 3, 4];

numbers.filter(n => n > 2); // → [6, 8]
numbers.find(n => n === 2); // → 2
```

## Functional Programming

Functional programming is a declarative programming paradigm.

It expresses the logic of a computation without describing its control flow.

```javascript
// imperative code
if (CONDITION) {
    TRUE PATH
} else {
    FALSE PATH
}

// declarative code
ifElse(CONDITION, TRUE PATH, FALSE PATH);
```

## Pure Functions

A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.

— Brian Lonsdorf, _Mostly Adequate Guide to Functional Programming_

```javascript
const numbers = [1, 2, 3, 4];

// pure
numbers.slice(0, 2); // → [1, 2, 3]
numbers.slice(0, 2); // → [1, 2, 3]
numbers.slice(0, 2); // → [1, 2, 3]

// impure
numbers.splice(0, 2); // → [1, 2]
numbers.splice(0, 2); // → [3, 4]
numbers.splice(0, 2); // → []
```

## Immutability

In functional programming, immutability is an important quality of data that makes reasoning about the logic of a program much easier.

```javascript
// mutable
let counter = 0;

function increment() {
    return ++counter;
}

// immutable
function increment(n) {
    return n + 1;
}
```

As of ES5, there exists a convenient method for making JavaScript objects immutable.

```javascript
// mutable
const user = { name: 'John', lastName: 'Doe' };

// immutable
const frozenUser = Object.freeze(user);
```

## Currying

"The process of reducing functions of more than one argument to functions of one argument"

— Haskell B. Curry

```javascript
// uncurried function
const add = (a, b) => a + b;

add(2, 5); // → 7

// curried function
const add = a => b => a + b;

add(2)(5); // → 7
```

## Partial Application

Applying a function to one argument at a time is partial application.

A function has to be curried in order to be partially applied.

```javascript
const add = a => b => a + b;

const add2 = add(2); // → b => 2 + b

const sum = add2(5); // → 7
```

## Function Composition

Function composition is the application of one function to the result of another.

In other words, the output of one function feeds the input of another.

The following example can be read as "bar after foo", "bar of foo", etc.

```javascript
bar(foo(x)) = (bar ∘ foo )(x)
```

The `compose` function is right-associative — it works right-to-left.

```javascript
const addThenDiv = compose(div(2), add(5));

addThenDiv(3); // → 4
```

The `pipe` function is left-associative — it works left-to-right.

```javascript
const addThenDiv = pipe(add(5), div(2));

addThenDiv(3); // → 4
```

## Point-free Style

 Point-free style is concerned with functions that do not reference the arguments (points) on which they operate. Instead, the definitions merely compose other functions.

```javascript
// pointful
const toKebabCase = text => text.toLowerCase().replace(/\s+/ig, '-');

// point-free
const toKebabCase = compose(replace(/\s+/ig, '_'), toLowerCase);
```
Such a composition is possible only with curried, data-last functions.

```javascript
const toLowerCase = string => string.toLowerCase();

const replace = curry((pattern, replacement, string) => string.replace(pattern, replacement));
```

## Hindley-Milner Notation

Hindley-Milner is a type system for lambda calculus with parametric polymorphism. It is based on two papers: _The principal type scheme of an object in combinatory logic_ (Roger J. Hindley, 1969) and _A Theory of Type Polymorphism_ (Robin Milner, 1978).

Writing function signatures in Hindley-Milner notation is a common practice among functional programmers.

```javascript
// toLowerCase :: String -> String
const toLowerCase = s => s.toLowerCase();

// add :: Number -> Number -> Number
const add = curry((a, b) => a + b);

// length :: String -> Number
const length = s => s.length;

// equals :: a -> b -> Boolean
const equals = curry((a, b) => a === b);

// head :: [a] -> a
const head = xs => xs[0];

// filter :: (a -> Boolean) -> [a] -> [a]
const filter = curry((fn, xs) => xs.filter(fn));
```

## Popular Libraries

- [Ramda](https://ramdajs.com/)
- [Rambda](https://selfrefactor.github.io/rambda/)

## License

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs 4.0 Unported License</a>.

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

## Copyright

The materials herein are all © 2020 Jakub Barczyk.
