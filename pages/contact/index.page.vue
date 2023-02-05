<template>
  <h3 v-if="page.title" class="font-thin text-4xl mb-8">{{page.title}}</h3>
  <div v-html="page.html"></div>

  <div class="mt-8">
    <form @submit.prevent="sendMail" ref="form" class="flex flex-col md:max-w-sm" action="#" accept-charset="UTF-8" enctype="multipart/form-data" method="POST">
      <div>Name*</div>
      <input required v-model="state.mail.name" class="mb-8" type="text" />

      <div>Email address*</div>
      <input required v-model="state.mail.address" class="mb-8" type="email" />

      <div>Phone number</div>
      <input v-model="state.mail.phone" class="mb-8" type="tel" />

      <div>Project details*</div>
      <textarea required v-model="state.mail.body" class="mb-8" cols="40" rows="10"></textarea>

      <!-- <div>Attach an image</div>
      <input @change="state.mail.file = $event.target.files?.[0]" class="mb-8" type="file" accept="image/*" tabindex="-1" /> -->

      <div>
        <input type="submit" class="bg-primary px-8 py-4 text-white" role="button" value="Send message">
      </div>
      <div class="mt-4" v-if="state.sent">Your message has been sent.</div>
    </form>

  </div>

</template>

<script>
    const pageProps = ['page'];
    export default {props: pageProps};
</script>

<script setup>
import { reactive, ref } from 'vue'

const form = ref(null);

const state = reactive({
  sent: false,
  mail: {
    name: null,
    address: null,
    phone: null,
    body: null,
    file: null,
  }
});

function sendMail() {
  let formData = new FormData();
  for(const [key, value] of Object.entries(state.mail)) {
    if (value) {
      formData.append(key, value);
    }
  }

  try {
    fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    for(const [key, value] of Object.entries(state.mail)) {
      state.mail[key] = null;
    }
    form.value.reset();
    state.sent = true;
  } catch(e) {
    console.error(e.message);
    window.alert('Something went wrong, try again later or send an email to info@itbazen.com');
  }
}
</script>

<style scoped>
</style>