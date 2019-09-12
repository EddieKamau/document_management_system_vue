<template>
    <div class="main-section">
        <div class="create-item">
            <!-- input item -->
                <!-- label -->
            <div class="form-label item1">Cabinet Name:</div>
            <!-- input -->
            <div class="form-input item2"> <input type="text" v-model="cabinetName"> </div>

            <!-- submit btn -->
            <div class="submit-btn item3"  @click="$store.dispatch('cabinetCreate', cabinetName)"><button >Submit</button></div>
        </div>

        <hr>
        <div class="permisions">Permisions</div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            cabinetName: '',
        }
    },

    
}
</script>


<style scoped>

/* .item1 { grid-area: cabinet-label; }
.item2 { grid-area: cabinet-select; } */
.item1 { grid-area: name-label; }
.item2 { grid-area: section-input; }
.item3 { grid-area: submit-btn; }


.create-item {
    width: 34%;
    padding-bottom: 1em;
    display: grid;
    grid-template-areas:
    'name-label section-input'
    'ff submit-btn';
    grid-gap: .5em;
}



</style>
