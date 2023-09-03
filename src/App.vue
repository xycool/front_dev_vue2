<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <TodoList :todos="todos">
      <template #todo="{ todo }">
        <TodoEntry
          :id="todo.id"
          :title="todo.title"
          :completed="todo.completed"
          @completeChange="handleCompleteChange(todo.id, $event)"
        />
      </template>
    </TodoList> -->
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import TodoList from "./components/TodoList.vue";
// import TodoEntry from "./components/TodoEntry.vue";

export default {
  name: "App",
  data() {
    return {
      layout: () =>
        import(/* webpackChunkName: "defaultLayout" */ "./layouts/default.vue"),
      // todos: [],
    };
  },
  async mounted() {
    //const { data: todos } = await this.axios.get(`${this.baseUrl}/todos`);
    //this.todos = todos;
  },
  methods: {
    handleCompleteChange(id, newCompleted) {
      this.todos = this.todos.map((t) =>
        t.id === id ? { ...t, completed: newCompleted } : t
      );
    },
  },
  components: {
    // HelloWorld,
    //TodoList,
    //TodoEntry,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
