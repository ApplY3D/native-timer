# native-timer

# Install
Connect .js file to your html file or copy function to your main js file

# Description
Function receive 1 required arguments and 4 optional arguments, that have default values.
```js
function timer(deadline, timerSelector='#timer', secondsSelector='.seconds', minuteSelector='.minutes', hoursSelector='.hours') {..}
```

# Usage

for using this script, you may pass deadline only: (if your structure of HTML like in example down below)
```js
timer('2020-05-08')
```

also you can declare elements that contains seconds, minutes, hours and theirs element parent
```js
timer('2020-05-08', '#timer', '.seconds', '.minutes', '.hours');
```

# Structure of HTML
```html
<div id="timer">
    <span class="hours">23</span>
    <span>:</span>
    <span class="minutes">59</span>
    <span>:</span>
    <span class="seconds">59</span>
</div>
```
Span is just for example
