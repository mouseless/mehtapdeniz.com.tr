<template>
  <div class="container">
    <table>
      <slot />
    </table>
  </div>
</template>
<style lang="scss" scoped>
table {
    margin: 0 0 1.5em;
    margin-bottom: 1.5em;
    width: 100%;
    display: inline-table;
    overflow: hidden;
}
</style>
