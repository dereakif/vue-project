<template>
  <div>
    <div>hello from user</div>
    <button @click="getUser">get user</button>
    <div>{{ email }}</div>
    <img v-bind:src="pic !== '' && pic" v-bind:alt="id" :key="id" />
    <!-- <div v-for="user in users" :key="user.cell">
      {{ user.email }}
    </div> -->
  </div>
</template>

<script>
export default {
  name: "User",
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api/");
      const { results } = await res.json();
      console.warn(results, "users");
      this.email = results[0].email;
      this.id = results[0].id.name;
      this.pic = results[0].picture.medium;
    },
  },
  data() {
    return {
      id: "",
      pic: "",
      email: "",
    };
  },
};
</script>

<style></style>
