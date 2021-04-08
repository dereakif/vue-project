<template>
  <div>
    <button @click="toggleForm">Add Idea</button>
    <div v-show="showForm" class="form-container">
      <div class="idea-title">Your Idea</div>
      <div><input type="text" v-model="newIdea.title" /></div>
      <div class="idea-category">Cat selection</div>
      <div><input type="text" v-model="newIdea.cat" /></div>
      <div class="description">Description</div>
      <div><input type="text" v-model="newIdea.description" /></div>
      <div>
        <button
          @click="addIdea(newIdea.title, newIdea.cat, newIdea.description)"
        >
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
export default {
  name: "IdeaForm",
  data() {
    return {
      showForm: false,
      ideas: [],
      newIdea: {
        title: "",
        cat: "",
        description: "",
      },
    };
  },
  methods: {
    addIdea(title, cat, description) {
      this.ideas = [
        { title: title, cat: cat, description: description },
        ...this.ideas,
      ];
      this.newIdea = {};
    },
    toggleForm() {
      this.showForm = !this.showForm;
    },
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
