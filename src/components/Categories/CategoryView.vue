<template>
    <h1>
        Listado de categorias
        <router-link :to="'create'">
            <button class="btn btn-outline-success" >
                <i className="fa-solid fa-plus"></i>    
            </button>
        </router-link>
    </h1>

    <table class="table table-hover table-striped">
        <thead>
            <th>No.</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Fecha de creación</th>
            <th>Fecha de actualización</th>
            <th>Acciones</th>
        </thead>
        <tbody>
            <tr v-for="categories in categories" :key="categories.id">
                <td>{{ categories.id }}</td>
                <td>{{ categories.name }}</td>
                <td>{{ categories.description }}</td>
                <td>{{ dateFormat(categories.created_at) }}</td>
                <td>{{ dateFormat(categories.updated_at) }}</td>
                <td>
                    <router-link :to=" categories.id + '/edit'">
                        <button class="btn btn-outline-primary">
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                    </router-link>
                    <button class="btn btn-outline-danger" href="javascript:void(0)" @click="deleteCategory(categories.id)">
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
       async created(){
            const options = {
                method: "GET"
            }
            const response = await fetch("http://localhost:8000/api/category", options);
            const data = await response.json();
            this.categories = data.data;
        },
        data(){
            return{
                categories: []
            }
        },
       methods:{
            async deleteCategory(id){
                const options = {
                method: "DELETE",
                headers: { 
                    'Content-Type': 'application/json'
                },
            }
                const response = await fetch("http://localhost:8000/api/category/"+ id +"/destroy", options);
                const data = await response.json();
                this.categoriesAll();           
            },
            async categoriesAll(){
            const options = {
                method: "GET"
            }
            const response = await fetch("http://localhost:8000/api/category", options);
            const data = await response.json();
            this.categories = data.data;
            },
            dateFormat(created){
                const dateC = new Date(created)
                return dateC.toLocaleDateString('es-co', { year:"numeric", month:"short", day:"numeric"})  
            }
        }
    }
</script>

<style scoped>
    button{
        margin: 3%
    }
    h1{
        font-family: sans-serif, 'Arial bold', 'Arial Narrow', Arial;
        text-align: center; 
    }
</style>