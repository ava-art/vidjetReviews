<script setup lang="ts">
import type { PropType } from "vue";
import type { Review } from "@/App.vue";

defineProps({
  review: {
    type: Object as PropType<Review>,
    required: true,
  },
  countReviews: {
    type: Number
  },
  index:{
    type: Number
  }
});
</script>

<template>
  <div class="sp-review sp-review-from-syndication" v-if="index < countReviews">
    <!--noindex-->

    <!-- Header -->
    <div class="sp-review-header">
      <div class="sp-review-author">
        <span class="sp-review-author-name" itemprop="author">{{
          review.name
        }}</span>
      </div>

      <div class="sp-review-rating-and-date">
        <!-- Rating -->
        <div class="sp-review-rating">
          <div class="sp-content-rating-stars">
            <template v-for="itemsStar of 5">
              <div v-if="itemsStar <= review.rating" class="sp-star-on"></div>
              <div v-else class="sp-star-off"></div>
            </template>
          </div>

          <meta itemprop="worstRating" content="1" />
          <meta itemprop="bestRating" content="5" />
          <meta itemprop="ratingValue" content="{{ review.rating }}" />
        </div>

        <!-- Date -->
        <div class="sp-review-date" datetime="{{review.date}}">
          {{ review.date }}
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="sp-review-content">
      <div class="sp-review-content-main">
        <div class="sp-review-author-details"></div>

        <!-- Text -->
        <div class="sp-review-body-pros-cons">
          <!-- Pros -->

          <div class="sp-review-pros sp-review-text" v-if="review.plus">
            <div class="sp-review-pros-label sp-review-text-label">
              Преимущества:
            </div>
            <div class="sp-review-pros-content sp-review-text-content">
              {{ review.plus }}
            </div>
          </div>

          <!-- Cons -->

          <div class="sp-review-cons sp-review-text" v-if="review.minus">
            <div class="sp-review-cons-label sp-review-text-label">
              Недостатки:
            </div>
            <div class="sp-review-cons-content sp-review-text-content">
              {{ review.minus }}
            </div>
          </div>

          <!-- Body -->

          <div class="sp-review-body sp-review-text" v-if="review.comment">
            <div class="sp-review-body-label sp-review-text-label">
              Комментарий:
            </div>
            <div class="sp-review-body-content sp-review-text-content">
              {{ review.comment }}
            </div>
          </div>
        </div>

        <!-- Photos -->

        <!-- Recommended -->
      </div>

      <div class="sp-review-content-details">
        <div>
          <span class="sp-review-mvideo-icon"> </span>
        </div>

        <!-- Origin (Mvideo) -->

        <!-- Origin (Ozon) -->

        <div
          v-if="review.marketplace == 'Ozon'"
          class="sp-review-origin sp-review-from-ozon"
          title="Отзыв предоставлен ozon.ru"
        >
          <img
            class="sp-review-syndication-brand-icon"
            alt=""
            width="60"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAwIiBoZWlnaHQ9IjU0NiIgdmlld0JveD0iLTMuMDQgLTMuMDQgNDg3LjI1IDExMS43MTAwMDAwMDAwMDAwMSI+PHBhdGggZmlsbD0iIzAwNWJmZiIgZD0iTTU2LjQ5IDgwLjc1YzEyLjU0LTEuNTkgMjIuNjctMTEuNzIgMjQuMjctMjQuMjdhMjguMiAyOC4yIDAgMCAwLTMxLjYxLTMxLjYxQzM2LjYgMjYuNDcgMjYuNDcgMzYuNiAyNC44OCA0OS4xNGEyOC4yIDI4LjIgMCAwIDAgMzEuNjEgMzEuNjF6TTU4LjIuMjdhNTMgNTMgMCAwIDEgNDcuMTYgNDcuMTZjMy4zMSAzMy40LTI0LjUzIDYxLjI0LTU3Ljk0IDU3LjkzQTUzIDUzIDAgMCAxIC4yNyA1OC4yQy0zLjA0IDI0LjggMjQuOC0zLjA0IDU4LjIuMjd6bTc1LjUgMi4wOWg3Ny4zMWMyLjk0IDAgNC42IDMuMzYgMi44MyA1LjdsLTUzLjQ5IDcwLjU3aDQxLjkxYzcuNjQgMCAxMy42NSA2Ljk1IDEyLjA3IDE0Ljg3LTEuMTYgNS44MS02LjYxIDkuNzctMTIuNTMgOS43N2gtODMuOTZjLTIuOTEgMC00LjU2LTMuMzMtMi44MS01LjY0TDE2OC41NiAyN2gtMzQuNGMtNS45MiAwLTExLjM3LTMuOTctMTIuNTMtOS43Ny0xLjU5LTcuOTIgNC40My0xNC44NyAxMi4wNy0xNC44N3ptMzM1LjUxLjI4YzcuOTgtMS42OCAxNSA0LjM2IDE1IDEyLjA0djg1LjAzYzAgMi45Ny0zLjQzIDQuNjItNS43NSAyLjc4bC02Ni42OS01Mi45MXY0MS4zOWMwIDcuNjgtNy4wMiAxMy43Mi0xNSAxMi4wNC01LjcyLTEuMi05LjY0LTYuNTMtOS42NC0xMi4zN1Y1LjkxYzAtMi45NyAzLjQzLTQuNjIgNS43NS0yLjc4bDY2LjcgNTIuOTFWMTUuMDFjMC01Ljg0IDMuOTMtMTEuMTYgOS42NC0xMi4zN3pNMjk1LjU2IDBjNDAuODMgMCA3My45MyAyMy42NCA3My45MyA1Mi44cy0zMy4xIDUyLjgtNzMuOTMgNTIuOC03My45My0yMy42NC03My45My01Mi44UzI1NC43MyAwIDI5NS41NiAwem0wIDI0LjY0Yy0yOC4yMSAwLTQ5LjI5IDE0Ljg3LTQ5LjI5IDI4LjE2czIxLjA4IDI4LjE2IDQ5LjI5IDI4LjE2IDQ5LjI5LTE0Ljg2IDQ5LjI5LTI4LjE2LTIxLjA4LTI4LjE2LTQ5LjI5LTI4LjE2eiIvPjwvc3ZnPg=="
          />
        </div>

        <!-- Origin (Wildberries) -->

        <!-- Origin (Yandex Market) -->
        <div
          v-if="review.marketplace == 'Yandex'"
          class="sp-review-origin sp-review-from-ozon"
          title="Отзыв предоставлен ozon.ru"
        >
          <img
            class="sp-review-syndication-brand-icon"
            alt=""
            width="140"
            style="width: 140px !important"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjciIGhlaWdodD0iMzIiPjxwYXRoIGQ9Ik03OC4xIDI3aDMuM0w4NiA5LjlWMjdoMy43VjQuNGgtNS4xTDgwIDIxIDc1LjQgNC40aC01LjJWMjdoMy4yVjkuOUw3OC4xIDI3em0yNy4xLTExLjJjMC00LTItNS41LTYuMS01LjUtMi42IDAtNC42LjgtNS44IDEuNVYxNWMxLS44IDMuMy0xLjYgNS4zLTEuNiAxLjkgMCAyLjcuNyAyLjcgMi40di45aC0uNmMtNS45IDAtOC42IDItOC42IDUuM3MyIDUuMiA1IDUuMmMyLjMgMCAzLjMtLjcgNC0xLjVoLjJjMCAuNC4yIDEgLjMgMS4zaDMuOGMtLjEtMS4zLS4yLTIuNy0uMi00di03LjJ6bS0zLjkgNy4zYy0uNS43LTEuNCAxLjMtMi44IDEuMy0xLjYgMC0yLjQtMS0yLjQtMi40IDAtMS45IDEuMy0yLjYgNC43LTIuNmguNnYzLjd6bTEwLjYtMTIuNWgtMy42djIxLjFoMy45di02LjZjMSAxLjUgMi40IDIuMiA0LjEgMi4yIDMuOCAwIDYuNC0zIDYuNC04LjVzLTIuNS04LjUtNi4yLTguNWMtMS44IDAtMy4zLjgtNC40IDIuNGwtLjItMi4xem0zLjMgMTMuN2MtMiAwLTMuMS0xLjctMy4xLTUuNCAwLTMuOCAxLjEtNS41IDMuMy01LjUgMi4xIDAgMy4yIDEuNyAzLjIgNS40IDAgMy44LTEuMSA1LjUtMy40IDUuNXptMTkuNiAyLjdoNC40bC02LjItOC44IDUuNS03LjZoLTMuOWwtNS41IDcuNnYtNy42aC0zLjlWMjdoMy45di04bDUuNyA4em0xNy40LTEuMXYtMy4yYy0xLjIuOC0zLjIgMS41LTUuMSAxLjUtMi44IDAtMy45LTEuMy00LjEtNC4xaDkuM1YxOGMwLTUuNy0yLjUtNy44LTYuNC03LjgtNC43IDAtNyAzLjYtNyA4LjYgMCA1LjcgMi44IDguNSA3LjcgOC41IDIuNyAwIDQuNS0uNiA1LjYtMS40em0tNi4zLTEyLjVjMS45IDAgMi41IDEuNiAyLjUgMy42di4zSDE0M2MuMS0yLjYgMS4xLTMuOSAyLjktMy45em0yMC4zLjN2LTMuMWgtMTN2My4xaDQuNlYyN2gzLjlWMTMuN2g0LjV6Ii8+PHBhdGggZD0iTTQ3LjEgMzFjOC4zIDAgMTUtNi43IDE1LTE1cy02LjctMTUtMTUtMTUtMTUgNi43LTE1IDE1Yy0uMSA4LjMgNi43IDE1IDE1IDE1eiIgZmlsbD0iI0ZFRDQyQiIvPjxjaXJjbGUgY3g9IjE1IiBjeT0iMTYiIHI9IjE1IiBmaWxsPSIjRkMzRjFEIi8+PHBhdGggZD0iTTE3LjIgOS40aC0xLjVjLTIuNiAwLTMuOSAxLjMtMy45IDMuMyAwIDIuMi45IDMuMyAyLjggNC42bDEuNSAxLjEtNC4zIDYuN0g4LjNsNC4xLTYuMWMtMi40LTEuNy0zLjctMy4zLTMuNy02LjEgMC0zLjUgMi40LTUuOSA3LTUuOWg0LjZ2MThoLTNWOS40eiIgZmlsbD0iI0ZGRiIvPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZD0iTTQ3LjEgMzFjOC4zIDAgMTUtNi43IDE1LTE1cy02LjctMTUtMTUtMTUtMTUgNi43LTE1IDE1Yy0uMSA4LjMgNi43IDE1IDE1IDE1eiIvPjwvY2xpcFBhdGg+PHBhdGggZD0iTTM5LjcgOS4yTDI2LjUgMjYuNWwzLjUgNCA5LjgtMTMtMSA3LjEgNS41IDEuOUw1MSAxNS44Yy0uMyAyLS44IDYuNiAzLjYgOCA2LjkgMi4xIDEyLjktMTAuMyAxNS43LTE2LjZsLTQtMi4xYy0zLjEgNi41LTcuOSAxMy43LTkuOCAxMy4yLTEuOS0uNS0uMi02LjYuOS0xMC41di0uMWwtNi4xLTIuMUw0NCAxNy41bDEtNi41LTUuMy0xLjh6IiBjbGlwLXBhdGg9InVybCgjYSkiLz48L3N2Zz4="
          />
        </div>
      </div>
    </div>

    <!--/noindex-->
  </div>
</template>
