<template>
  <footer class="footer-area-wrapper bg-theme-default section-space--mt_60">
    <ContentQuery
      v-slot="{ data: footer }"
      path="/"
      :where="{ _path: { $eq: '/footer' } }"
      find="one"
      :only="['_path', 'body', 'links', 'copyright']"
    >
      <div class="footer-area section-space--ptb_60">
        <div class="container">
          <div class="row footer-widget-wrapper">
            <div class="col-lg-4 col-md-4 footer-widget">
              <div class="footer-widget__logo mb-30">
                <NuxtLink href="/">
                  <img
                    src="/mds-white-logo.png"
                    width="160"
                    height="48"
                    class="img-fluid"
                    alt=""
                  />
                </NuxtLink>
              </div>
              <ContentRenderer :value="footer">
                <ContentRendererMarkdown :value="footer" />
              </ContentRenderer>
            </div>
            <div
              v-for="link in footer.links"
              :key="link.to"
              :class="`col-lg-${lg(footer.links.length)} col-md-${md(
                footer.links.length
              )} footer-widget`"
            >
              <h6 class="footer-widget__title mb-20 text-white">
                <ContentLink :to="link.to">
                  {{ link.text }}
                </ContentLink>
              </h6>
              <ul class="footer-widget__list">
                <li v-for="sublink in link?.sublinks" :key="sublink.to">
                  <ContentLink v-if="sublink.to" :to="sublink.to">
                    {{ sublink.text }}
                  </ContentLink>
                  <div v-else class="sublink__text-without__to">
                    {{ sublink.text }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright-area section-space--pb_30">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 text-center text-md-start">
              <span class="copyright-text text-white">
                &copy; {{ footer?.copyright }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </ContentQuery>
  </footer>
</template>
<script setup>
function lg(count) {
  if(count > 6) {
    return 1;
  }
  if(count > 3) {
    return 2;
  }

  return 6 / count;
}

function md(count) {
  if(count > 3) {
    return 2;
  }

  return 6 / count;
}
</script>
<style lang="scss">
body > div {
  height: 100%;
  > div {
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
}
.footer {
  &-widget {
    &__title a {
      font-size: 18px;
      font-weight: 700;
      &:hover {
        color: $white;
        text-decoration: underline;
      }
    }
    &__list {
      li {
        font-size: 14px;
        a {
          color: $white;
          &:hover {
            text-decoration: underline;
          }
        }
        & .sublink__text {
          &-without__to {
            color: $white
          }
        }
      }
    }
    & .container {
      padding: 0;
      & p {
        color: $white;
        margin: 0;
      }
    }
  }
}
</style>
