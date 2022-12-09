<template>
    <h1>
        Crear nuevo post
    </h1>
    <form>
        <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" v-model="post.name">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Descripción</label>
            <textarea class="form-control" id="description" row="3" v-model="post.description"></textarea>
        </div>
        <div class="mb-3">
            <label for="content" class="form-label">Contenido</label>
            <textarea class="form-control" id="content" row="3" v-model="post.content"></textarea>
        </div>
        <div class="mb-3">
            <label for="category_id" class="form-label">Categoria</label>
            <select class="form-select" aria-label="Default select example" v-model="post.category_id">
            <option value="" selected>Seleccionar una categoria</option>
            <option v-for="category in this.categories" v-bind:value="category.id"> {{ category.name }} </option>
            </select>
        </div>
        <div class="mb-3">
            <label for="user_id" class="form-label">Usuario</label>
            <select class="form-select" aria-label="Default select example" v-model="post.user_id">
            <option value="" selected>Seleccionar un usuario</option>
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
        <br>
        <div class="text-center">
            <button class="btn btn-outline-primary" @click="newPost">Guardar</button> 
        </div>
    </form>
</template>

<script>
    export default {
        async created(){
            const options = {
                method: "GET"
            }
            const response = await fetch("http://localhost:8000/api/category", options);
            const response2 = await fetch("http://localhost:8000/api/user", options);
            const data = await response.json();
            const data2 = await response2.json();
            this.categories = data.data;
            this.users = data2.data;
        },
        data(){
            return{
                post: {
                    name: "",
                    description: "",
                    content: "",
                    category_id: "",
                    user_id: "",
                    state: 0,
                },
                categories: [],
                users: []

            }
        },
        methods:{
            async newPost(e){
                e.preventDefault();
                console.log(e);
                const options = {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json'
                },
                body:  JSON.stringify(this.post)
            }
                const response = await fetch("http://127.0.0.1:8000/api/post/store", options);
                const data = await response.json();
                this.$router.replace({path: '/posts'});
            }
        }
        
    }
</script>
<style scoped>
    form{
        width: 500px;
        margin: 4em auto;
    }
    h1{
        margin: 35px;
        font-family: sans-serif, 'Arial Narrow', Arial;
        text-align: center;
    }
</style>