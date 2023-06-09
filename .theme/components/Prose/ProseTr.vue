<template>
  <tr>
    <slot />
  </tr>
</template>
<style lang="scss" scoped>
tr+tr {
    border-top: 1px solid #ededed;
}
</style>
