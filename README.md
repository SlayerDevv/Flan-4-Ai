# Flan 4 AI
A Node.js package that let you interact with Specific Ai Models in Replicate. Powered by [ `node-replicate` ](https://replicate.com/replicate/flan-t5-xl/)

flan-t5-xl A language model by Google for tasks like classification, summarization, and more

# Installation

```js
npm i flan-4-ai
```

## USAGE

Just Enter a prompt and wait for the model to generate response for your text

```js
import Flan from 'flan-4-ai'
```

```js
await Flan('Can cats fly ?')
```
Specify additional parameters as a second argument. A list of supported parameters can be found [Here](https://replicate.com/replicate/flan-t5-xl/api#inputs)

```js
await Flan('Who invented Facebook ?', {temperature: 0.75, max_length:50 })
```