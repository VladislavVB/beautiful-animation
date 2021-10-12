<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label
        >Files
        <input
          type="file"
          id="files"
          ref="files"
          multiple
          v-on:change="handleFilesUpload()"
        />
      </label>
      <button v-on:click="submitFiles()">Submit</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import FormData from 'form-data'
export default {
  /*
      Defines the data used by the component
    */
  data() {
    return {
        // data: ''
      files: "",
    };
  },
  methods: {
    submitFiles() {
      let data = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        data.append("files[" + i + "]", file);
      }
      axios
        .post("/multiple-files", data, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          },
        })
        .then(function () {
          console.log("SUCCESS!!");
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
    handleFilesUpload() {
      this.files = this.$refs.files.files;
    },
  },
};
</script>
