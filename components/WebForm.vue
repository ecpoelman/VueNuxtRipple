<template>
  <div>
    <AppSection v-if="webform">
      <section class="section">
        <div class="container">
          <h1 class="title">{{ webform.title }}</h1>
          <h2 class="subtitle">
            {{ webform.description }}
          </h2>
        </div>
      </section>

      <div class="columns">
        <div class="column"></div>
        <div class="column is-two-thirds">

          <form @submit="submit">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">From</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <input class="input" type="text" placeholder="Name">
                  </p>
                </div>
                <div class="field">
                  <p class="control is-expanded">
                    <input class="input" type="email" placeholder="Email" value="alex@smith.com">
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Subject</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input" type="text" placeholder="e.g. Partnership opportunity">
                  </div>

                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Question</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label">
                <!-- Left empty for spacing -->
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <button class="button is-primary">
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <input type="hidden" name="uuid" :value="webform.id"/>
            <input type="hidden" name="type" value="webform_submission--contact"/>
          </form>

        </div>
        <div class="column"></div>
      </div>

    </AppSection>
  </div>
</template>

<script>
import AppSection from '~/components/AppSection';
// Create webform component with elements based on Drupal setup
export default {
  components: {
    AppSection
  },
  props: {
    webform: {
      type: Object,
      required: true,
    },
  },
  default() {
    return {
      webform: [{}]
    }
  }
}
</script>
