<template>
  <div class="haha">
    <h2>{{ text }}</h2>
    <HelloWorld msg="imported component"></HelloWorld>
    <input
      type="text"
      v-model="inputData"
      @keydown="enterHandler($event, inputData)"
    />

    <button @click="addTodo(inputData)">add</button>
    <div v-for="user in users" :key="user.name">
      {{ user.name
      }}<button @click="onClickHandler(user.name)" :key="user.name">
        click
      </button>
    </div>
  </div>
</template>
<script>
import HelloWorld from "./HelloWorld";

export default {
  name: "Akif",
  props: {
    text: String,
  },
  components: {
    HelloWorld,
  },
  data() {
    return {
      inputData: "",
      users: [
        { name: "ahmet" },
        { name: "akif" },
        { name: "ali" },
        { name: "ayse" },
      ],
    };
  },
  methods: {
    onClickHandler(clickedItem) {
      this.users = this.users.filter((item) => item.name !== clickedItem);
    },
    addTodo(item) {
      this.users = [...this.users, { name: item }];
    },
    enterHandler(e, item) {
      console.warn(e);
      e.keyCode === 13 && this.addTodo(item);
    },
  },
};
</script>

<style>
.haha {
  border: 1px solid black;
}
</style>
