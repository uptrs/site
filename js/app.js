new Vue({
  el: '#app',
  data() {
    return {
      certificates: null,
    };
  },

  mounted() {
    axios
      .get('../data/certificates.json')
      .then(response => (this.certificates = response.data));
  },
})