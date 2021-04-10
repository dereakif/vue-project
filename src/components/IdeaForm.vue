<template>
  <div>
    <div>{{ showForm ? "true" : "false" }}</div>
    <button class="togbtn" @click="toggleForm">Add Idea</button>
    <div>
      <input type="text" v-model="filterby.cat" />
    </div>
    <div v-show="showForm" class="form-container">
      <div class="idea-title">Your Idea</div>
      <div>
        <input
          v-model="newIdea.title"
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          required
          class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
        />
      </div>
      <div class="idea-category">Cat selection</div>
      <!--  <div><input type="text" v-model="newIdea.category" /></div> -->
      <select
        class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
        v-model="newIdea.category"
      >
        <option>Category 1</option>
        <option>Category 2</option>
        <option>Category 3</option>
      </select>
      <div class="description">Description</div>
      <div><input type="text" v-model="newIdea.description" /></div>
      <div>
        <button @click="addIdea">
          submit idea
        </button>
      </div>
    </div>

    <div class="idea-container" v-for="idea in filterByCat" :key="idea.title">
      <div>{{ idea.title }}</div>
      <div></div>
      <div>{{ idea.description }}</div>
      <div class="time-cat">
        <span>{{ from(idea.created_at) }}</span>
        <span class="category-text">{{ idea.category }}</span>
        <span>category</span>
      </div>
      <div>
        <div class="voteBtnContainer">
          <div
            v-bind:class="{ active: idea.voted }"
            v-bind:style="{ color: `black` }"
          >
            {{ idea.votes }}
          </div>
          <div
            v-bind:style="{ backgroundColor: idea.voted ? `blue` : `gray` }"
            @click="voteHandler(idea)"
          >
            {{ idea.voted ? "Voted" : "Vote" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import * as dayjs from "dayjs";
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
console.warn(dayjs().from("2021-04-09 13:43:56"));

export default {
  name: "IdeaForm",
  data() {
    return {
      now() {
        return dayjs();
      },
      from(date) {
        return dayjs(date).from(this.now());
      },
    };
  },
  mounted() {
    this.now();
  },
  computed: {
    ...mapState("items", ["showForm", "ideas", "newIdea", "filterby"]),
    ...mapGetters("items", ["filterByCat"]),
  },
  methods: {
    // ...mapMutations("items", ["toggleForm"]),
    ...mapActions("items", ["toggleForm", "addIdea", "voteHandler"]),
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
.togbtn {
  border: 1px solid black;
  margin: 25px auto;
}
.time-cat {
  display: flex;
  justify-content: space-around;
}
.voteBtnContainer {
  width: 100px;
  margin: auto;
  border: 1px black solid;
  color: white;
}
.category-text {
  font-weight: bold;
}
.active {
  background-color: red;
}
</style>
