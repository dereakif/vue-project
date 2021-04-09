const state = {
  showForm: false,
  ideas: [],
  newIdea: {
    title: "",
    cat: "",
    description: "",
  },
};
const mutations = {
  toggleForm(state) {
    state.showForm = !state.showForm;
  },
  addIdea(state) {
    state.ideas.push(state.newIdea);
    state.newIdea = { title: "", cat: "", description: "" };
  },
};
const actions = {
  toggleForm: ({ commit }) => {
    commit("toggleForm");
  },
  addIdea: ({ commit }) => {
    commit("addIdea");
  },
};
const getters = {
  getItem: (state) => state.item,
};
export default { namespaced: true, state, mutations, actions, getters };
