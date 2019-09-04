import axios from "axios";
export default {
    strict: true,
    state: {
        todoList: [
            {status: 'completed', content: '学习了'},
            {status: 'completed', content: '吃饭了'},
            {status: 'completed', content: '睡觉了'}
        ],
        currentFilter: 'all',
    },
    getters: {
        filteredTodoList: function (state) {
            let filteredTodoList = [];
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
                    filteredTodoList.push(state.todoList[i])
                }
            }
            return filteredTodoList;
        }
    },
    mutations: {
        createToDoList:function(state,content){
            state.todoList.push(
                {status:'active',content}
            );
        },
        handleChangeStatus:function(state,index){
            state.todoList[index].status  === 'completed' ? 'active' : 'completed'; 
           
        },
        currentFilterStatus:function(state,currentFilter){
            state.currentFilter = currentFilter;
        },
        initToDos:function(state,request){
            state.todoList = request;
        },
        addToDo:function(state,request){
            state.todoList = request;
        },
        loading:function(){
            
        }


    }



}
