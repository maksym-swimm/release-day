---
title: Testing the docs in the web app
---

.

<SwmSnippet path="/src/DocFlow/Stack.js" line="12">

---

Here we remove and return the last element from the `items` stack if it is not empty.

```javascript
    // remove element from the stack
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
```

---

</SwmSnippet>

<SwmSnippet path="/src/DocFlow/Stack.js" line="40">

---

&nbsp;

```javascript
let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.items);
```

---

</SwmSnippet>

<SwmSnippet path="/src/DocFlow/Stack.js" line="2">

---

&nbsp;

```javascript
class Stack {
    constructor() {
        this.items = [];
    }

    // add element to the stack
    add(element) {
        return this.items.push(element);
    }

```

---

</SwmSnippet>

&nbsp;

<SwmToken path="/src/DocFlow/Stack.js" pos="7:3:3" line-data="    // add element to the stack">`add`</SwmToken>

<SwmLink doc-title="Test doc for doc flow">[Test doc for doc flow](/.swm/test-doc-for-doc-flow.oue8xxjm.sw.md)</SwmLink>

<SwmLink doc-title="Test playlist for doc flow">[Test playlist for doc flow](/.swm/test-playlist-for-doc-flow.wglvffmx.pl.sw.md)</SwmLink>

<SwmMention uid="1ljAsX">[Oren Weinberg](mailto:orenweinberg@swimm.io)</SwmMention>

<p align="center"><img src="https://media3.giphy.com/media/uUP7F5A1rQR9uKls9P/giphy.gif?cid=d56c4a8bzxhmh3f818z5ktoaz2rop03tnirrx2utbl2e8l1s&amp;ep=v1_gifs_search&amp;rid=giphy.gif&amp;ct=g"></p>

&nbsp;

<SwmPath>[src/DocFlow/Stack.js](/src/DocFlow/Stack.js)</SwmPath>

<SwmPath repo-id="veezvxCuzpPrRLLXWD2E" repo-name="swimm" path="/cloud/">`(swimm) cloud/`</SwmPath>

![](https://t3723701.p.clickup-attachments.com/t3723701/41ec6745-803b-4f66-a884-bb8b4879d3ab/ducks.jpg)

&nbsp;

> Verify this text is in quotes

&nbsp;

# Verify this is a header1

## Verify this is a header2

### Verify this is a header3

_Verify this text is italic_

**Verify this text is bold**

> Verify this text is in quotes

- Verify this is a bullet list - Item 1
- Verify this is a bullet list - Item 2

1. Verify this is an ordered list - Item 1
2. Verify this is an ordered list - Item 2

&nbsp;

- \# Verify this is a header1

- \## Verify this is a header2

- \### Verify this is a header3

- _Verify this text is italic_

- &nbsp;

- **Verify this text is bold**

- \> Verify this text is in quotes

- \* Verify this is a bullet list - Item 1

- \* Verify this is a bullet list - Item 2

- &nbsp;

- 1\. Verify this is an ordered list - Item 1

- 2\. Verify this is an ordered list - Item 2

| A       | B   | C   |
| ------- | --- | --- |
| \> aaaa |     |     |
|         |     |     |

> this test is in quotes

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBUmVsZWFzZURheVJlcG8lM0ElM0Fzd2ltbWlv" repo-name="ReleaseDayRepo"><sup>Powered by [Swimm](https://staging.swimm.cloud/)</sup></SwmMeta>
