<template>
  <h1>Flex</h1>
  <p>
    Each section has <span style="color: blue">blue</span> borders. Outer containers have
    <span>black</span> borders, and inner containers have
    <span style="color: gray">gray</span> borders
  </p>
  <div class="section">
    <h2>Flex grow</h2>
    <ul>
      <li>The remaining space is distributed by the ratio specified in <code>flex-grow</code></li>
      <li>Initial value is 0</li>
      <li>Valid value: [0, +inf]</li>
    </ul>
    <div class="flex-container">
      <div class="flex-item" style="flex-grow: 0">grow: 0</div>
    </div>
    <caption>
      It is interesting to see that
      <code>grow: 0.1</code>
      only receives 10% of remaining space
    </caption>
    <div class="flex-container">
      <div class="flex-item" style="flex-grow: 0.1">grow: 0.1</div>
    </div>
    <div class="flex-container">
      <div class="flex-item" style="flex-grow: 1">grow: 1</div>
    </div>
    <div class="flex-container">
      <div class="flex-item" style="flex-grow: 1">grow: 1</div>
      <div class="flex-item" style="flex-grow: 2">grow: 2</div>
    </div>
    <caption>
      As
      <code>-1</code>
      is not a valid value,
      <code>flex-grow</code>
      falls back to
      <code>0</code>
    </caption>
    <div class="flex-container">
      <div class="flex-item" style="flex-grow: -1">grow: -1</div>
    </div>
  </div>
  <div class="section">
    <h2>Flex shrink</h2>
    <ul>
      <li>The negative space is distributed by the ratio specified in <code>flex-shrink</code></li>
      <li>The initial value is 1</li>
      <li>Valid value: [0, +inf]</li>
    </ul>
    <caption>
      The flex containers below have width of 500px.
    </caption>
    <caption>
      The negative space is distributed by
      <code>flex-shrink</code
      >.
    </caption>
    <div class="flex-container" style="width: 500px">
      <div class="flex-item" style="width: 300px; flex-shrink: 1">
        Wanna have width of 300px, but actually has about 265px. It means that the item will shrink
        by 35px
      </div>
      <div class="flex-item" style="width: 300px; flex-shrink: 2">
        Wanna have width of 300px but <code>flex-shrink: 2</code>, and actually has about 230px. It
        means that the item will shrink by 70px, which is twice as much as the item with
        <code>flex-shrink: 1</code>
      </div>
    </div>
    <caption>
      As the initial value of
      <code>flex-shrink</code>
      is
      <code>1</code
      >, the items will shrink evenly.
    </caption>
    <div class="flex-container" style="width: 500px">
      <div class="flex-item" style="width: 300px">Wanna have width of 300px</div>
      <div class="flex-item" style="width: 300px">Wanna have width of 300px</div>
      <div class="flex-item" style="width: 300px">Wanna have width of 300px</div>
      <div class="flex-item" style="width: 300px">Wanna have width of 300px</div>
      <div class="flex-item" style="width: 300px">Wanna have width of 300px</div>
    </div>
    <caption>
      If I set
      <code>flex-shrink: 0</code
      >, the item will not shrink
    </caption>
    <div class="flex-container" style="width: 500px">
      <div class="flex-item" style="width: 300px">Wanna have width of 300px</div>
      <div class="flex-item" style="width: 300px">Wanna have width of 300px</div>
      <div class="flex-item" style="width: 300px">Wanna have width of 300px</div>
      <div class="flex-item" style="width: 300px">Wanna have width of 300px</div>
      <div class="flex-item" style="width: 300px; flex-shrink: 0">
        Wanna have width of 300px but <code>flex-shrink: 0</code>
      </div>
    </div>
    <caption>
      It is interesting to see that, if I set too high
      <code>flex-shrink</code
      >, the other items can have the width of 300px. But the item with
      <code>flex-shrink: 100000000000000000</code>
      will have smaller width.
    </caption>
    <div class="flex-container" style="width: 500px">
      <div class="flex-item" style="width: 300px">Wanna have width of 300px</div>
      <div class="flex-item" style="width: 300px">Wanna have width of 300px</div>
      <div class="flex-item" style="width: 300px; flex-shrink: 100000000000000000">
        Wanna have width of 300px but <code>flex-shrink: 100000000000000000</code>
      </div>
    </div>
  </div>
  <div class="section">
    <h2>Flex basis</h2>
    <ul>
      <li>It is the initial size of the item</li>
      <li>
        If both <code>flex-basis</code> (other than <code>auto</code>) and <code>width</code> are
        set, <code>flex-basis</code> will be used
      </li>
      <li>I can set absolute value with <code>px</code> or relative value with <code>%</code></li>
      <li>
        <code>auto</code>, <code>width</code> is used for horizontal value and
        <code>height</code> is used for vertical value. If neither is set, the
        <code>content</code> will be used
      </li>
      <li><code>content</code> is the automatic sizing based on the content</li>
      <li>
        <code>min-content</code> is the smallest size a box can take without overflowing its
        content. Thus if the content is a sentence, the longest word will determine the width of the
        box.
      </li>
      <li>
        <code>max-content</code> is the ideal size a box can take when given infinite space. I have
        to be careful as the items will overflow if I set <code>flex-basis: max-content</code>
      </li>
      <li>
        <code>fit-content</code> is like <code>max-content</code> but it will not overflow. It will
        shrink the content to fit the container until it reaches the <code>min-content</code>.
      </li>
      <li>Initial value is <code>auto</code></li>
    </ul>
    <caption>
      The examples are coming soon...
    </caption>
    <div class="flex-container"></div>
  </div>
</template>

<style>
.section {
  border: blue 1px solid;
  margin: 30px;
}

.flex-container {
  display: flex;
  border: black 1px solid;
  margin: 30px;
}

.flex-item {
  border: gray 1px solid;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
