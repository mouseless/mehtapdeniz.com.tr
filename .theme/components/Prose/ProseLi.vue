<template>
  <div class="container">
    <li class="list-item">
      <slot />
    </li>
  </div>
</template>
<style lang="scss" scoped>
.circle-list {
    & .list-item {
        position: relative;
        padding-left: 14px;
        margin-bottom: 5px;
        &::before {
            content: '';
            position: absolute;
            top: 8px;
            left: 0;
            display: block;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #999;
        }
        &:last-child {
            margin-bottom: 0;
            padding-bottom: 0px;
        }
        & a {
            line-height: 16px;
        }
    }
}

.automatic-numbered-list {
    & .list-item {
        position: relative;
        margin-bottom: 5px;
        font-size: $body-font-size;
        font-weight: 400;
        & a {
            line-height: 16px;
        }
    }
}
</style>
