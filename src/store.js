
export const initialStore = () => {
  //es un objeto
  return {
    nombre: 'opepe',
    agendas: [],
    message: 'pepe el magnifico',
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}
///en el reducer NADA PUEDE SER ASINCRONO
export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'updater':
      if (action.payload) {
        return {
          ...store,
          [action.payload.name]: action.payload.value
        }
      }
      return {
        ...store
      }
  
    case 'changeMessage':
      console.log('se ejecuta changeMessage')
      return {
        ...store,
        message: action.payload
      }
    case 'add_task':
      const { id, color } = action.payload
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }
}
