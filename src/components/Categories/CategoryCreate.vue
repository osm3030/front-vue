<template>
    <h1>
        Crear nueva categoría
    </h1>
    <form>
        <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" v-model="category.name">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Descripción</label>
            <input type="text" class="form-control" id="description" v-model="category.description">
        </div>
        <br>
        <div class="text-center">
            <button class="btn btn-outline-primary" @click="newCategory">Guardar</button> 
        </div>
    </form>
</template>
<script>
    export default {
        data(){
            return{
                category: {
                    name: "",
                    description: ""
                }
            }
        },
        methods:{
            async newCategory(e){
                e.preventDefault();
                const options = {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json'
                },
                body:  JSON.stringify(this.category)
            }
                const response = await fetch("http://127.0.0.1:8000/api/category/store", options);
                const data = await response.json();
                this.$router.replace({path: '/categories'});
            }
        }
        
    }
</script>
<style scoped>
    form{
        width: 500px;
        margin: 3em auto;
    }
    h1{
        margin: 35px;
        font-family: sans-serif, 'Arial Narrow', Arial;
        text-align: center;
    }
</style>