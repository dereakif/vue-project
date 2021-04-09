import * as dayjs from "dayjs";
const state = {
  showForm: false,
  ideas: [],
  newIdea: {
    id: "",
    title: "",
    description: "",
    votes: 1,
    voted: true,
    created_at: "",
    category: "",
  },
  filterby: { cat: "" },
};
const mutations = {
  toggleForm(state) {
    state.showForm = !state.showForm;
  },
  addIdea(state) {
    //state.ideas.some((idea)=>)
    state.newIdea.id = state.newIdea.title.toLowerCase().replace(" ", "_");
    state.newIdea.created_at = dayjs().format("YYYY-MM-DD HH:mm:ss");
    /*   let now = new Date();
    state.newIdea.created_at = now.getTime(); */
    if (state.ideas.some((idea) => idea.id === state.newIdea.id)) {
      alert("the idea already exists");
      return;
    } else {
      state.ideas.push(state.newIdea);
      state.newIdea = {
        id: "",
        title: "",
        description: "",
        votes: 1,
        voted: true,
        created_at: "",
        category: "",
      };
    }
  },
  voteHandler(state, payload) {
    state.ideas = state.ideas.map((item) =>
      item.title === payload.title
        ? { ...item, voted: !item.voted, votes: item.votes === 0 ? 1 : 0 }
        : item
    );
  },
};
const actions = {
  toggleForm: ({ commit }) => {
    commit("toggleForm");
  },
  addIdea: ({ commit }) => {
    commit("addIdea");
  },
  voteHandler: ({ commit }, payload) => {
    commit("voteHandler", payload);
  },
};
const getters = {
  filterByCat: (state) =>
    state.filterby.cat !== ""
      ? state.ideas.filter((idea) => idea.category.includes(state.filterby.cat))
      : state.ideas,
};
export default { namespaced: true, state, mutations, actions, getters };
