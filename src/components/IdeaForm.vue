<template>
  <div>
    <div>{{ showForm ? "true" : "false" }}</div>
    <button @click="toggleForm">Add Idea</button>
    <div v-show="showForm" class="form-container">
      <div class="idea-title">Your Idea</div>
      <div><input type="text" v-model="newIdea.title" /></div>
      <div class="idea-category">Cat selection</div>
      <div><input type="text" v-model="newIdea.cat" /></div>
      <div class="description">Description</div>
      <div><input type="text" v-model="newIdea.description" /></div>
      <div>
        <button @click="addIdea">
          submit idea
        </button>
      </div>
    </div>
    <div class="idea-container" v-for="idea in ideas" :key="idea.title">
      <div>{{ idea.title }}</div>
      <div>{{ idea.cat }}</div>
      <div>{{ idea.description }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "IdeaForm",
  /*  data() {
    return {
      newIdea: {
        title: "",
        cat: "",
        description: "",
      },
    };
  }, */
  computed: {
    ...mapState("items", ["showForm", "ideas", "newIdea"]),
  },
  methods: {
    // ...mapMutations("items", ["toggleForm"]),
    ...mapActions("items", ["toggleForm", "addIdea"]),
  },
};
</script>

<style scoped>
.form-container {
  border: 1px solid black;
  display: flex;
  margin: 25px auto;
  width: 30%;
  flex-direction: column;
}
.idea-container {
  border: 1px solid black;
  margin: 25px auto;
  width: 30%;
}
</style>
