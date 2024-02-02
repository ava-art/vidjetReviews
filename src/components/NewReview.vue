<script lang="ts" setup>
import "../omnibox.css";



const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

</script>

<template>
  <div id="sp-omnibox">
    <div class="sp-application">
      <div class="sp-page sp-review-form-page">
        <div class="sp-page-inner">
          <div class="sp-page-header">
            <div class="sp-page-title-wrapper">
              <div class="sp-page-title sp-title">Новый отзыв</div>
              <br>
              <div class="sp-page-subtitle sp-subhead">
                {{ title }}
              </div>
            </div>
          </div>
          <div class="sp-page-content sp-review-form sp-scrollable">
            <div class="sp-review-form-inputs">
              <div
                class="sp-input-container sp-rating-stars-input-container sp-review-rating-detail sp-0-stars"
              >
                <div class="sp-rating-stars-input">
                  <label class="sp-input-label">Функциональность:</label>
                  <div class="sp-rating-stars sp-rating-stars-editable">
                    <div class="sp-rating-star sp-rating-star-off"></div>
                    <div class="sp-rating-star sp-rating-star-off"></div>
                    <div class="sp-rating-star sp-rating-star-off"></div>
                    <div class="sp-rating-star sp-rating-star-off"></div>
                    <div class="sp-rating-star sp-rating-star-off"></div>
                  </div>
                </div>
                <div class="sp-input-errors sp-input-no-errors"></div>
              </div>
              <div class="sp-input-container">
                <label class="sp-review-body-label sp-input-label"
                  >Комментарий:</label
                >
                <div class="sp-media-files-dropzone">
                  <div class="sp-review-form-text-inputs">
                    <div
                      class="sp-input-container sp-review-body sp-input-textarea"
                    >
                      <div class="textarea-wrapper">
                        <textarea
                          id="sp-element-2"
                          placeholder="Опишите подробнее свои впечатления"
                          rows="2"
                          class="sp-input"
                          style="
                            overflow: hidden;
                            overflow-wrap: break-word;
                            resize: none;
                            height: 53px;
                          "
                        ></textarea>
                      </div>
                      <div class="sp-input-errors sp-input-no-errors"></div>
                    </div>
                    <div
                      class="sp-input-container sp-review-pros sp-input-textarea"
                    >
                      <div class="textarea-wrapper">
                        <textarea
                          id="sp-element-3"
                          placeholder="Опишите достоинства"
                          rows="1"
                          class="sp-input"
                          style="
                            overflow: hidden;
                            overflow-wrap: break-word;
                            resize: none;
                            height: 34px;
                          "
                        ></textarea>
                      </div>
                      <div class="sp-input-errors sp-input-no-errors"></div>
                    </div>
                    <div
                      class="sp-input-container sp-review-cons sp-input-textarea"
                    >
                      <div class="textarea-wrapper">
                        <textarea
                          id="sp-element-4"
                          placeholder="Опишите недостатки"
                          rows="1"
                          class="sp-input"
                          style="
                            overflow: hidden;
                            overflow-wrap: break-word;
                            resize: none;
                            height: 34px;
                          "
                        ></textarea>
                      </div>
                      <div class="sp-input-errors sp-input-no-errors"></div>
                    </div>
                    <div class="sp-review-photos">
                      <div class="sp-media-files-add sp-gt-xs">
                        <div>
                          <button
                            sp-media-files-add-button="true"
                            class="sp-media-files-add-icon sp-dz-clickable"
                          ></button>
                          <span class="sp-media-files-add-hint"
                            >Добавте фото</span
                          >
                          <button
                            type="button"
                            sp-media-files-add-button="true"
                            class="sp-media-files-add-button sp-unstyled-button"
                          >
                            выбрать файл
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="sp-input-container sp-review-author-name sp-input-text"
              >
                <label for="sp-element-6" class="sp-input-label"
                  >Как вас зовут?</label
                >
                <input
                  id="sp-element-6"
                  type="text"
                  placeholder="Ваше имя"
                  class="sp-input"
                />
                <div class="sp-input-errors sp-input-no-errors"></div>
              </div>
              <div
                class="sp-agreement-confirmation sp-input-container sp-input-checkbox"
              >
                <input type="checkbox" id="new-review-politic" class="sp-input sp-input-required" />
                <label class="sp-input-label" for="new-review-politic">
                  Я согласен с правилами публикации пользовательского контента и
                  даю согласие на обработку
                  <a href="#" target="_blank">персональных данных</a>.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="sp-page-footer sp-review-form-actions">
          <div class="sp-page-footer-content">
            <button
              type="button"
              class="sp-review-form-save sp-button sp-primary sp-raised"
            >
              Отправить отзыв
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
