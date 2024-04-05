<script setup lang="ts">
import type { PropType } from "vue";
import type { Review } from "@/App.vue";

defineProps({
  review: {
    type: Object as PropType<Review>,
    required: true,
  },
  countReviews: {
    type: Number,
    required: true,
  },
  index:{
    type: Number,
    required: true,
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
        <div
          v-if="review.marketplace == 'Site'"
          class="sp-review-origin sp-review-from-ozon"
          title="Отзыв предоставлен ozon.ru"
        >
          <img
            class="sp-review-syndication-brand-icon nordfrost"
            alt=""
            width="120"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMSAoNjQtQml0KSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyMzdweCIgaGVpZ2h0PSIzNnB4IiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIKdmlld0JveD0iMCAwIDIzNyAzNiIKIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgogeG1sbnM6eG9kbT0iaHR0cDovL3d3dy5jb3JlbC5jb20vY29yZWxkcmF3L29kbS8yMDAzIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgIDwhW0NEQVRBWwogICAgLmZpbDAge2ZpbGw6YmxhY2s7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbC1vcGFjaXR5OjAuMzAxOTYxfQogICAgLmZpbDEge2ZpbGw6dXJsKCNpZDApO2ZpbGwtcnVsZTpub256ZXJvfQogICBdXT4KICA8L3N0eWxlPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iaWQwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjExOC40OCIgeTE9IjMzLjMxIiB4Mj0iMTE4LjQ4IiB5Mj0iMS4xMSI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3Atb3BhY2l0eToxOyBzdG9wLWNvbG9yOiNEOEQ4RDgiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjQ5MDE5NiIgc3R5bGU9InN0b3Atb3BhY2l0eToxOyBzdG9wLWNvbG9yOiNFOUU5RTkiLz4KICAgPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7IHN0b3AtY29sb3I6I0ZDRkNGQyIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+CiA8ZyBpZD0i0KHQu9C+0LlfeDAwMjBfMSI+CiAgPG1ldGFkYXRhIGlkPSJDb3JlbENvcnBJRF8wQ29yZWwtTGF5ZXIiLz4KICA8ZyBpZD0iXzI3NzkwMDM1MDA0NDgiPgogICA8cGF0aCBjbGFzcz0iZmlsMCIgZD0iTS0wLjA0IDM0Ljg5bDcuMSAwIDEuMzkgLTE0LjY3IDAuMjcgLTIuNzYgMC4wNiAwLjEgOC41MiAxNy4zMyA1Ljk0IDAgMi43OCAtMzIuMiAtNy4xMSAwIC0xLjI1IDEzLjA2IC0wLjQgNC4zMSAtOC41MiAtMTcuMzcgLTYuMDEgMCAtMi43NyAzMi4yIDAgMHptMTA3LjA0IC0zMi4ybC0wLjQgMCAtMTguMDkgMCAtMC40MSAwIC0yLjc3IDMyLjIgMC40IDAgMTguMTQgMCAwLjQgMGM0LjIsLTQuMzkgNi4xOCwtOS4zOCA2Ljc1LC0xNi4xIDAuNTcsLTYuNTkgLTAuNjgsLTExLjcxIC00LjAyLC0xNi4xem0tNzMuMjMgMGwtMC40IDBjLTQuMTgsNy4zNCAtNi4wNCwyNC4zNiAtMi44MywzMi4ybDAuNCAwYzYuMzYsMCAxMi4yOCwwIDE4LjY0LDBsMC40IDBjNC42OSwtOC4wNyA2LjE3LC0yMy41MSAyLjcyLC0zMi4ybC0wLjQgMGMtNi4zMywwIC0xMi4yLDAgLTE4LjUzLDBsMCAwem0xMi42NyA1Ljc2YzEuNDMsNS4zMyAwLjU2LDE0LjU3IC0xLjgyLDIwLjc2bC03Ljk0IDBjLTAuODUsLTUuNzIgMC4wOSwtMTUuOTMgMi4yLC0yMC43Nmw3LjU2IDB6bTE2Ny4xMSAtMC4wM2w3LjU1IDAgLTIuMjggMjYuNDcgNy4wNCAwIDIuMjggLTI2LjQ3IDcuMjEgMCAxLjUxIC01LjczYy03LjI1LDAgLTE0LjU1LDAgLTIxLjgsMGwtMS41MSA1LjczIDAgMHptLTIwLjc0IDI2LjQ3bC0wLjg2IDAgMC41IC01LjcyIDEyLjEyIDBjMC40OCwtMS43OSAxLjQ0LC01LjI1IDEuMTEsLTcuNzJsLTEyLjA3IDBjLTAuOTQsLTUuMjEgLTAuNSwtMTQuNDMgMi40LC0xOC43NmwxNS45MSAwIC0xLjUyIDUuNzIgLTkuNjkgMGMtMC44OSwyLjA4IC0xLjE1LDUuMTMgLTAuOTYsNy41MWwxMS44MSAwLjAzYzEuNCw1LjAxIDAuMjcsMTQuMzUgLTIuMDEsMTguOTRsLTE2Ljc0IDB6bS03NS45IC0zMi4ybC0wLjQgMCAtMi43OCAzMi4yIDcuMTEgMCAxLjAyIC0xMS44OCA5LjA3IDAgMS40OCAtNS41MiAtMTAuMDcgMCAwLjExIC0xLjMgMC42NyAtNy43OCAxMS42MyAwIDEuNTEgLTUuNzIgLTE5LjM1IDAgMCAwem0tMTQuOTYgNS43M2MxLjUzLDIuODQgMS45OCw1LjM4IDEuNjIsOS42IC0wLjM4LDQuMzUgLTEuNDQsOC4zMSAtMy41LDExLjE1bC03LjA5IDAgMS43OSAtMjAuNzYgNy4xOCAwLjAxIDAgMHptLTQxLjA2IC01LjczbC0wLjQgMCAtMi43OCAzMi4yIDcuMTEgMCAwLjg2IC05LjkzIDUuMzEgMGMxLjA1LDMuNjcgMS45OCw2LjI2IDMuMDMsOS45M2w3LjQxIDAgLTMuNDcgLTExLjIyYzIuNTUsLTIuOTYgMy44NywtNS45NyA0LjIxLC05LjkxIDAuMzIsLTMuNjkgLTAuMTcsLTguMTIgLTIuMzksLTExLjA3bC0xOC44OSAwIDAgMHptMTQuMTYgNS43MmMxLjAxLDIuNDYgMC4yMSw4LjMgLTEuMzIsMTAuNjdsLTcuNTUgMCAwLjkyIC0xMC42NyA3Ljk1IDB6bTkzLjIxIC01LjcyYy00LjE4LDcuMzQgLTYuMDQsMjQuMzYgLTIuODMsMzIuMmwxOS40NCAwYzQuNjksLTguMDcgNi4xNywtMjMuNTEgMi43MiwtMzIuMmwtMTkuMzMgMHptMTMuMDcgNS43NmMxLjQzLDUuMzMgMC41NiwxNC41NyAtMS44MiwyMC43NmwtNy45NCAwYy0wLjg1LC01LjcyIDAuMDksLTE1LjkzIDIuMiwtMjAuNzZsNy41NiAwem0tNDIuMjUgLTUuNzZsLTAuNCAwIC0yLjc4IDMyLjIgNy4xMSAwIDAuODUgLTkuOTMgNS4zMiAwYzEuMDUsMy42NyAxLjk4LDYuMjYgMy4wMyw5LjkzbDcuNDEgMCAtMy40NyAtMTEuMjJjMi41NSwtMi45NiAzLjg3LC01Ljk3IDQuMjEsLTkuOTEgMC4zMiwtMy42OSAtMC4xNywtOC4xMiAtMi4zOSwtMTEuMDdsLTE4Ljg5IDAgMCAwem0xNC4xNiA1LjcyYzEuMDEsMi40NiAwLjIxLDguMyAtMS4zMiwxMC42N2wtNy41NSAwIDAuOTIgLTEwLjY3IDcuOTUgMHoiLz4KICAgPHBhdGggY2xhc3M9ImZpbDEiIGQ9Ik0wLjAzIDMzLjMxbDcuMSAwIDEuMzkgLTE0LjY3IDAuMjcgLTIuNzUgMC4wNiAwLjA5IDguNTIgMTcuMzMgNS45NCAwIDIuNzggLTMyLjIgLTcuMTEgMCAtMS4yNSAxMy4wNiAtMC40IDQuMzEgLTguNTIgLTE3LjM3IC02LjAxIDAgLTIuNzcgMzIuMiAwIDB6bTEwNy4wNCAtMzIuMmwtMC40IDAgLTE4LjA5IDAgLTAuNDEgMCAtMi43NyAzMi4yIDAuNCAwIDE4LjE0IDAgMC40IDBjNC4yLC00LjM5IDYuMTgsLTkuMzggNi43NSwtMTYuMSAwLjU3LC02LjU5IC0wLjY4LC0xMS43MSAtNC4wMiwtMTYuMXptLTczLjIzIDBsLTAuNCAwYy00LjE4LDcuMzQgLTYuMDQsMjQuMzYgLTIuODMsMzIuMmwwLjQgMGM2LjM2LDAgMTIuMjgsMCAxOC42NCwwbDAuNCAwYzQuNjksLTguMDcgNi4xNywtMjMuNTEgMi43MiwtMzIuMmwtMC40IDBjLTYuMzMsMCAtMTIuMiwwIC0xOC41MywwbDAgMHptMTIuNjcgNS43N2MxLjQzLDUuMzIgMC41NiwxNC41NiAtMS44MiwyMC43NWwtNy45NCAwYy0wLjg1LC01LjcyIDAuMDksLTE1LjkzIDIuMiwtMjAuNzVsNy41NiAwem0xNjcuMTEgLTAuMDRsNy41NSAwIC0yLjI4IDI2LjQ3IDcuMDQgMCAyLjI4IC0yNi40NyA3LjIxIDAgMS41MSAtNS43M2MtNy4yNSwwIC0xNC41NSwwIC0yMS44LDBsLTEuNTEgNS43MyAwIDB6bS0yMC43NCAyNi40N2wtMC44NiAwIDAuNSAtNS43MiAxMi4xMiAwYzAuNDgsLTEuNzkgMS40NCwtNS4yNSAxLjExLC03LjcybC0xMi4wNyAwYy0wLjk0LC01LjIxIC0wLjUsLTE0LjQzIDIuNCwtMTguNzZsMTUuOTEgMCAtMS41MiA1LjcyIC05LjY5IDBjLTAuODksMi4wOCAtMS4xNSw1LjEzIC0wLjk2LDcuNTFsMTEuODIgMC4wM2MxLjM5LDUuMDEgMC4yNiwxNC4zNSAtMi4wMiwxOC45NGwtMTYuNzQgMHptLTc1LjkgLTMyLjJsLTAuNCAwIC0yLjc4IDMyLjIgNy4xMSAwIDEuMDIgLTExLjg4IDkuMDcgMCAxLjQ4IC01LjUyIC0xMC4wNyAwIDAuMTEgLTEuMyAwLjY3IC03Ljc4IDExLjYzIDAgMS41MSAtNS43MiAtMTkuMzUgMCAwIDB6bS0xNC45NiA1LjczYzEuNTMsMi44NCAxLjk4LDUuMzggMS42Miw5LjYgLTAuMzgsNC4zNSAtMS40NCw4LjMxIC0zLjUsMTEuMTVsLTcuMDkgMCAxLjc5IC0yMC43NiA3LjE4IDAuMDEgMCAwem0tNDEuMDYgLTUuNzNsLTAuNCAwIC0yLjc4IDMyLjIgNy4xMSAwIDAuODYgLTkuOTMgNS4zMiAwYzEuMDQsMy42NyAxLjk3LDYuMjYgMy4wMiw5LjkzbDcuNDEgMCAtMy40NyAtMTEuMjJjMi41NSwtMi45NiAzLjg3LC01Ljk3IDQuMjEsLTkuOTEgMC4zMiwtMy42OSAtMC4xNywtOC4xMiAtMi4zOSwtMTEuMDdsLTE4Ljg5IDAgMCAwem0xNC4xNiA1LjcyYzEuMDEsMi40NiAwLjIxLDguMyAtMS4zMiwxMC42N2wtNy41NSAwIDAuOTIgLTEwLjY3IDcuOTUgMHptOTMuMjEgLTUuNzJjLTQuMTgsNy4zNCAtNi4wNCwyNC4zNiAtMi44MywzMi4ybDE5LjQ0IDBjNC42OSwtOC4wNyA2LjE3LC0yMy41MSAyLjcyLC0zMi4ybC0xOS4zMyAwem0xMy4wNyA1Ljc3YzEuNDMsNS4zMiAwLjU2LDE0LjU2IC0xLjgyLDIwLjc1bC03Ljk0IDBjLTAuODUsLTUuNzIgMC4wOSwtMTUuOTMgMi4yLC0yMC43NWw3LjU2IDB6bS00Mi4yNSAtNS43N2wtMC40IDAgLTIuNzggMzIuMiA3LjExIDAgMC44NSAtOS45MyA1LjMyIDBjMS4wNSwzLjY3IDEuOTgsNi4yNiAzLjAzLDkuOTNsNy40MSAwIC0zLjQ3IC0xMS4yMmMyLjU1LC0yLjk2IDMuODcsLTUuOTcgNC4yMSwtOS45MSAwLjMyLC0zLjY5IC0wLjE3LC04LjEyIC0yLjM5LC0xMS4wN2wtMTguODkgMCAwIDB6bTE0LjE2IDUuNzJjMS4wMSwyLjQ2IDAuMjEsOC4zIC0xLjMyLDEwLjY3bC03LjU1IDAgMC45MiAtMTAuNjcgNy45NSAweiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg=="
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
            class="sp-review-syndication-brand-icon yandex"
            alt=""
            width="140"
            style=""
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjciIGhlaWdodD0iMzIiPjxwYXRoIGQ9Ik03OC4xIDI3aDMuM0w4NiA5LjlWMjdoMy43VjQuNGgtNS4xTDgwIDIxIDc1LjQgNC40aC01LjJWMjdoMy4yVjkuOUw3OC4xIDI3em0yNy4xLTExLjJjMC00LTItNS41LTYuMS01LjUtMi42IDAtNC42LjgtNS44IDEuNVYxNWMxLS44IDMuMy0xLjYgNS4zLTEuNiAxLjkgMCAyLjcuNyAyLjcgMi40di45aC0uNmMtNS45IDAtOC42IDItOC42IDUuM3MyIDUuMiA1IDUuMmMyLjMgMCAzLjMtLjcgNC0xLjVoLjJjMCAuNC4yIDEgLjMgMS4zaDMuOGMtLjEtMS4zLS4yLTIuNy0uMi00di03LjJ6bS0zLjkgNy4zYy0uNS43LTEuNCAxLjMtMi44IDEuMy0xLjYgMC0yLjQtMS0yLjQtMi40IDAtMS45IDEuMy0yLjYgNC43LTIuNmguNnYzLjd6bTEwLjYtMTIuNWgtMy42djIxLjFoMy45di02LjZjMSAxLjUgMi40IDIuMiA0LjEgMi4yIDMuOCAwIDYuNC0zIDYuNC04LjVzLTIuNS04LjUtNi4yLTguNWMtMS44IDAtMy4zLjgtNC40IDIuNGwtLjItMi4xem0zLjMgMTMuN2MtMiAwLTMuMS0xLjctMy4xLTUuNCAwLTMuOCAxLjEtNS41IDMuMy01LjUgMi4xIDAgMy4yIDEuNyAzLjIgNS40IDAgMy44LTEuMSA1LjUtMy40IDUuNXptMTkuNiAyLjdoNC40bC02LjItOC44IDUuNS03LjZoLTMuOWwtNS41IDcuNnYtNy42aC0zLjlWMjdoMy45di04bDUuNyA4em0xNy40LTEuMXYtMy4yYy0xLjIuOC0zLjIgMS41LTUuMSAxLjUtMi44IDAtMy45LTEuMy00LjEtNC4xaDkuM1YxOGMwLTUuNy0yLjUtNy44LTYuNC03LjgtNC43IDAtNyAzLjYtNyA4LjYgMCA1LjcgMi44IDguNSA3LjcgOC41IDIuNyAwIDQuNS0uNiA1LjYtMS40em0tNi4zLTEyLjVjMS45IDAgMi41IDEuNiAyLjUgMy42di4zSDE0M2MuMS0yLjYgMS4xLTMuOSAyLjktMy45em0yMC4zLjN2LTMuMWgtMTN2My4xaDQuNlYyN2gzLjlWMTMuN2g0LjV6Ii8+PHBhdGggZD0iTTQ3LjEgMzFjOC4zIDAgMTUtNi43IDE1LTE1cy02LjctMTUtMTUtMTUtMTUgNi43LTE1IDE1Yy0uMSA4LjMgNi43IDE1IDE1IDE1eiIgZmlsbD0iI0ZFRDQyQiIvPjxjaXJjbGUgY3g9IjE1IiBjeT0iMTYiIHI9IjE1IiBmaWxsPSIjRkMzRjFEIi8+PHBhdGggZD0iTTE3LjIgOS40aC0xLjVjLTIuNiAwLTMuOSAxLjMtMy45IDMuMyAwIDIuMi45IDMuMyAyLjggNC42bDEuNSAxLjEtNC4zIDYuN0g4LjNsNC4xLTYuMWMtMi40LTEuNy0zLjctMy4zLTMuNy02LjEgMC0zLjUgMi40LTUuOSA3LTUuOWg0LjZ2MThoLTNWOS40eiIgZmlsbD0iI0ZGRiIvPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZD0iTTQ3LjEgMzFjOC4zIDAgMTUtNi43IDE1LTE1cy02LjctMTUtMTUtMTUtMTUgNi43LTE1IDE1Yy0uMSA4LjMgNi43IDE1IDE1IDE1eiIvPjwvY2xpcFBhdGg+PHBhdGggZD0iTTM5LjcgOS4yTDI2LjUgMjYuNWwzLjUgNCA5LjgtMTMtMSA3LjEgNS41IDEuOUw1MSAxNS44Yy0uMyAyLS44IDYuNiAzLjYgOCA2LjkgMi4xIDEyLjktMTAuMyAxNS43LTE2LjZsLTQtMi4xYy0zLjEgNi41LTcuOSAxMy43LTkuOCAxMy4yLTEuOS0uNS0uMi02LjYuOS0xMC41di0uMWwtNi4xLTIuMUw0NCAxNy41bDEtNi41LTUuMy0xLjh6IiBjbGlwLXBhdGg9InVybCgjYSkiLz48L3N2Zz4="
          />
        </div>
      </div>
    </div>

    <!--/noindex-->
  </div>
</template>
