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
    },
    actions:{
        //请求网络
        queryResponse:function(store){
            const url ="";
            axios.get(url).then(function(response){
                let request = response.data;
                console.log(response);
                store.commit('initToDos',request);
            }).catch(
                function(error){
                console.log(error.reponse);
            })
        },
        addResponse:function(store,inputParam){
            const url = "";
            console.log(inputParam,"11111");
            axios.post(url,{
                content:inputParam,
                status:"actice"
            }).then(function(response){
                console.log(response);

                store.queryResponse();
            }).catch(
                function(error){
                console.log(error);
            })
        },
        putResponse:function(){

        },
        deleteResponse:function(){
            const url = "";
            let param={id:''};
            axios.delete(url, {data: param})
              .then(function(response) {

                })
        }
    }
}
