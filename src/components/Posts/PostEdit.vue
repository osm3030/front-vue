<template>
    <h1>
        <i class="fa-solid fa-pen"></i>
        Editar post
    </h1>
    <form>
        <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" v-model="post.name">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Descripción</label>
            <textarea type="text" class="form-control" id="description" v-model="post.description"></textarea>
        </div>
        <div class="mb-3">
            <label for="content" class="form-label">Contenido</label>
            <textarea class="form-control" id="content" row="3" v-model="post.content"></textarea>
        </div>
        <div class="mb-3">
            <label for="category_id" class="form-label">Categoria</label>
            <select class="form-select" aria-label="Default select example" v-model="post.category_id">
            <option v-for="category in this.categories" v-bind:value="category.id"> {{ category.name }} </option>
            </select>
        </div>
        <div class="mb-3">
            <label for="user_id" class="form-label">Usuario</label>
            <select class="form-select" aria-label="Default select example" v-model="post.user_id">
            <option v-for="user in this.users" v-bind:value="user.id"> {{ user.name }} </option>
            </select>
        </div>
        <div class="mb-3">
            <label for="state" class="form-label">Estado</label>
            <select class="form-select" id="state" aria-label="Default select example" v-model="post.state">
                <option value='1'>Publicado</option>
                <option value='0' selected>No Publicado</option>
            </select>
        </div>
    <button class="btn btn-outline-success" @click="updatePost">Guardar</button> 
    </form>

</template>

<script>
    export default {
        props:['id'],
        async created(){
            const options = {
                method: "GET"
            }
            const response = await fetch("http://127.0.0.1:8000/api/post/" + this.id, options);
            const response3 = await fetch("http://localhost:8000/api/category", options);
            const response2 = await fetch("http://localhost:8000/api/user", options);
            const data3 = await response3.json();
            const data2 = await response2.json();
            const data = await response.json();
            // console.log(data);
            let editPostData = {
                name: data.data.name,
                description: data.data.description,
                content: data.data.content,
                category_id: data.data.category_id,
                categoryName: data.data.categoryName,
                user_id: data.data.user_id,
                userName: data.data.userName,
                state: data.data.state
            }
            this.post = editPostData;
            this.categories = data3.data;
            this.users = data2.data;
        },
        data(){
            return{
                post:  [],
                categories: [],
                users: []
            }
        },
        methods:{
            async updatePost(e){
                e.preventDefault();
                const options = {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json'
                },
                body:  JSON.stringify(this.post)
            }
                const response = await fetch("http://127.0.0.1:8000/api/post/"+ this.id +"/update", options);
                const data = await response.json();
                // console.log(data);
                this.$router.replace({path: '/posts'});
            }
        }
        
    }
</script>
<style scoped>
    form{
        width: 400px;
        margin: 2em auto;
    }
    h1{
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-align: center;
    }
</style>