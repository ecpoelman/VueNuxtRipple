<template>
  <div class="container">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          VIC.<em>GOV</em> FOOD MAGAZINE
        </h1>
      </div>
    </div>
<!--    <WebForm :webform="webform" />-->
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-thirds">

        <form @submit="submit">

          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input v-model="name" class="input" type="text" placeholder="Name" value="Alex Smith"/>
            </div>
          </div>

          <div class="field">
            <label class="label">From</label>
            <div class="control">
              <input v-model="email" class="input" type="email" placeholder="Email" value="alex@smith.com"/>
            </div>
          </div>

          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <input v-model="subject" class="input" type="text" placeholder="e.g. Partnership opportunity"/>
            </div>
          </div>

          <div class="field">
            <label class="label">Question</label>
            <div class="control">
              <textarea v-model="message" class="textarea" placeholder="Explain how we can help you"></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-primary">
                Send message
              </button>
            </div>
          </div>

        </form>

      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import { getWebForm, submitWebForm } from '~/lib/api';
//import WebForm from "@/components/WebForm";
export default {
  transition: 'page',
  components: {
  //  WebForm
  },
/*  async asyncData({ params }) {
    const webform = await getWebForm(params.id);
    console.log(webform.elements);
    return { webform };
  },*/
  data: function () {
    return {
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    async submit(e) {
      e.preventDefault();
      let data = {
        type: "webform_submission--contact",
        id: "28f04e7e-72f7-42b8-a51c-00fe362d5978",
        email: this.email,
        subject: this.subject,
        message: this.message
      };
      console.log(data);
      let res = submitWebForm('webform_submission/contact', data);
      console.log(res);
    }
  }
}
</script>
