<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <RouterLink :to="{ name: 'addnew' }" class="btn btn-primary">Add New</RouterLink>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">SL</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Product Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(product, index) in products" :key="product.id">
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td>{{ product.product_name }}</td>
                                    <td>{{ product.product_price }}</td>
                                    <td>
                                        <router-link :to="{name:'edit', params:{id: product.id}}" class="btn btn-primary">Edit</router-link>
                                        <a @click.prevent="destroy(product.id)" class="btn btn-danger">Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
        }
    },
    mounted() {
        this.ProductList();
    },
    methods: {
        ProductList() {
            axios.get('/api/product')
                .then((success) => {
                    this.products = success.data.product;
                }).catch((errors) => {
                    console.log('errors');
                });
        },
        destroy(product_id){
            axios.delete('/api/product/'+product_id)
            .then((success)=>{
                this.ProductList();
            }).catch((error)=>{
                console.log('error');
            });
        }
    }
};
</script>

<style scoped></style>
