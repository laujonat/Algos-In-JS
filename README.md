# Data Structures & Algorithms - Interview Prep in JS

## How to Run

```sh
 $ npm install
 $ npm run start:dev
 $ npm run start
```

## Compiling

#### Setup Flow-types

```sh
 $ npm install flow-bin -g
```

#### Build All

```sh
 $ npm run build
```

#### Build Problem Sets

```sh
 $ npm run build:problems
```

#### Build Data Structure Implementations

```sh
 $ npm run build:ds
```

## JSON Template

Compile all files from `/problems` and `/dsaa` into a JSON file.

```sh
 $ node utils/genmap.js --target --root
```

## Create Mongodb Account. See documentation.

Create a new db collection. Create a `.env` and fill in the following fields.

```
 MONGODB_BASE=mongodb+srv://
 MONGODB_URL=<dburl>
 MONGODB_USER=<user>
 MONGODB_PASSWORD=<password>
```

## GraphQL Schema

- MongoDB Collections: `root`, `prompt`
- Nodes represent problems and data structure implementations. They are categorized by their type, and each node has an edge to `prompt`.

## Folder Organization

- GraphQL Schema: `/schema/**/*`
- Node Server: `/server/**/*`
- MongoDB Connection: `/db/**/*`
- Utils: `/utils/**/*`
- Leetcode-ish Problems (Organized by Types): `/problems/**/`
  - Sorting
  - Recursion
  - Graphs
  - Linked Lists
  - Dynamic Programming
  - Arrays
  - Trees
- Data Structures (Organized by Types): `/dsaa/**/`
  - Graphs
  - Node
  - Searching
  - Sorting
  - Trees
  - Struct

# Links

- HTML Standard
  - https://html.spec.whatwg.org/multipage/webappapis.html#webappapis
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Inline_text_semantics
- Cors https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
- Networking
  - Abort Controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
  - XHR https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  - Fetch API https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- Event Loop https://blog.carbonfive.com/the-javascript-event-loop-explained/
- Form Data https://www.javascripture.com/FormData
- Layouts & DOM Thrash https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing
- Async https://exploringjs.com/impatient-js/ch_async-js.html
- Critial Rendering Path https://developers.google.com/web/fundamentals/performance/critical-rendering-path/
- Interview Prep
  - https://khan4019.github.io/front-end-Interview-Questions/bst.html
  - https://frontendmasters.com/books/front-end-handbook/2018/
  - https://github.com/trekhleb/javascript-algorithms
  - https://github.com/yangshun/lago/tree/master/lib/algorithms
- Script Placement https://www.tutorialspoint.com/javascript/javascript_placement.htm
- DOM
  - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
  - https://developer.mozilla.org/en-US/docs/Web/API/Node
  - https://developer.mozilla.org/en-US/docs/Web/API/element
- Prototypes
  - Objects https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
  - Reflect https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
  - Arrays https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  - Strings https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

# TODO

- Scripts to generate json and group by data structure or problem types
- Add new problems from web page and auto-generate json
- CSS transitions
- Improve GraphQL schema
- Djikstra's Algorithm
- Topological Sort
- Radix Sort
- Heap Sort
- Quickselect
- Seed Data

# Frontend Practice

- File System with search filter
- Clock
- Search filter
- Display image

# Non-coding Questions

- Explain the difference between composition and inheritance. In which cases would you use each?
- How would you explain the difference between an API and SDK to a non-technical person?
- How would you explain web cookies to someone non-technical?

# Systems Design

- Create a file system API
- Create a General REST API
- URL Shortener
