<template>
  <div class="container">
    <div class="ht-box-images style">
      <div class="image-box-wrap">
        <div class="box-image">
          <div class="default-image">
            <img
              class="img-fluid"
              :src="img"
              alt=""
            >
          </div>
        </div>
        <div class="content">
          <h5 class="heading">
            {{ title }}
          </h5>
          <div class="text">
            <slot />
          </div>
          <ContentLink
            :to="link.to"
            class="box-images-arrow"
          >
            <span class="button-text">{{ link.text }}</span>
            <i class="fas fa-arrow-right" />
          </ContentLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Link } from "~/types";

defineProps<{
  title: string
  img: string
  link: Link
}>();
</script>
<style lang="scss" scoped>
$button-font-size: $body-font-size - 1;
.ht-box-images {
  &.style {
    transition: $transition--default;
    & .image-box-wrap {
      box-shadow: 0 0 40px 5px rgba(51,51,51,.1);
      background: #fff;
      border-radius: 5px;
      padding: 98px 35px 88px;
      overflow: hidden;
      position: relative;
      margin-top: 30px;
      & .box-image {
        position: relative;
        width: 162px;
        height: 162px;
        border-radius: 50%;
        margin: 0 auto 2px;
        text-align: center;
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(160deg,#fbf7f4 0%,#fefdfd 100%);
          border-radius: 50%;
          transform: translateY(-46px);
        }
        & .default-image {
          position: relative;
          z-index: 2;
        }
      }
      & .content {
        text-align: center;
        & .heading {
          font-weight: 500;
          line-height: 1.25;
          margin-bottom: 12px;
        }
        & .box-images-arrow {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1;
          height: 56px;
          line-height: 55px;
          text-align: center;

          font-size: $button-font-size;
          @media #{$desktop-device} { font-size: $button-font-size - 1; }
          @media #{$tablet-device} { font-size: $button-font-size - 2; }
          @media #{$large-mobile} { font-size: $button-font-size - 3; }

          font-weight: 500;
          border-top: 1px solid #eee;
          color: $theme-color--default;
          &::before{
            background-color: $theme-color--default;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transform: translateY(100%);
            transition: $transition--default;
            z-index: -1;
          }

          & .button-text {
            margin-right: 5px;
          }
        }
      }
    }
    &:hover {
      transform: translateY(-5px);
      & .content {
        & .box-images-arrow {
          color: $white;
          &::before {
            transform: translateY(0);
          }
        }
      }
    }
  }
}
</style>
