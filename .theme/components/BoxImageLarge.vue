<template>
  <div class="container">
    <ContentLink
      :to="link.to"
      class="box-large-image__wrap wow move-up"
    >
      <div class="box-large-image__box">
        <div class="box-large-image__midea">
          <div class="images-midea">
            <img
              :src="img"
              class="img-fluid"
              alt=""
            >
            <div class="button-wrapper">
              <Button type="white">
                {{ link.text }}
              </Button>
            </div>
            <div class="heading-wrap">
              <h5 class="heading">
                {{ title }}
              </h5>
            </div>
          </div>
        </div>
        <div class="box-large-image__content mt-30 text-center">
          <slot />
        </div>
      </div>
    </ContentLink>
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
.box-large-image {
  &__wrap {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    @media #{$large-mobile}{
      margin: auto;
    }
    &:hover {
      & .box-large-image__box {
        transform: translateY(-5px);
      }

      .images-midea {
        & img {
          transform: scale(1.1, 1.1);

        }
        &::after {
          background: $theme-color--two;
          opacity: .8;
        }
      }
      & .heading-wrap {
        & .heading {
          transform: translateY(-100%);
          opacity: 0;
        }
      }
      & .button-wrapper {
        & .btn {
          transform: translateY(0);
          opacity: 1;
        }
      }

    }
  }
  &__box {
    transition: $transition--default;
    & .button-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      border-radius: 5px;
      overflow: hidden;
      z-index: 3;
      & .btn {
        background: #fff;
        color: $theme-color--default;
        transform: translateY(100%);
        opacity: 0;
      }
    }
  }
  &__midea {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    & .images-midea {
      text-align: center;
      & img {
        width: 100%;
        transition: transform 1s;
      }
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: .5;
        background-image: linear-gradient(-180deg, transparent 39%, #1c0f69 100%);
      }
      & .heading-wrap {
        position: absolute;
        bottom: 30px;
        left: 0;
        right: 0;
        width: 250px;
        margin: 0 auto;
        z-index: 1;
        overflow: hidden;
        & .heading {
          font-size: 24px;
          line-height: 1.5;
          color: #fff;
          font-weight: 500;
          transition: $transition--default;
        }
      }

    }
  }

  & .box-info {
    position: relative;
    z-index: 2;
    padding: 30px 20px;
    text-align: center;
    -webkit-transform: translateY(100%);
    -ms-transform: translateY(100%);
    transform: translateY(100%);
    height: 100%;
    min-height: 330px;
    .heading {
      -webkit-transform: translateY(-100%) translateY(-54px);
      -ms-transform: translateY(-100%) translateY(-54px);
      transform: translateY(-100%) translateY(-54px);
      font-size: 24px;
      line-height: 1.5;
      color: #fff;
    }
  }
}
a:hover {
  color: $body-text-color;
}
</style>
