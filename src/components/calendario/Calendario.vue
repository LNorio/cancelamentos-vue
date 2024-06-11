<script setup>

    import { ref } from 'vue';
    import List from '../list/List.vue'
    import ModalRegionCount from '../modalRegionCount/ModalRegionCount.vue'
    import ModalReasonCount from '../modalReasonCount/ModalReasonCount.vue';

    const props = defineProps(['base','total']);
    var calendar = ref(true);
    var list = null;
    var abrirModalCount = ref(false);
    var abrirModalReason = ref(false);

    function showList(index){
        if(props.base[index] != undefined){
            list = props.base[index];
        }
        calendar.value = false;
    }

    function showCalendar(){
        list = null;
        calendar.value = true;
    }

    function toggleModalCount(){
        abrirModalCount.value = !abrirModalCount.value;
    }

    function toggleModalReason(){
        abrirModalReason.value = !abrirModalReason.value;
    }

</script>

<template>
    <div class="calendar" v-if="calendar">
        <h1>Calendário</h1>
        <div class="calendar-inside">
            <div class="square" v-for="i in 31" @click="showList(i)">
                <label class="day">{{ i }}</label>
                <label class="clients">{{ props.base[i]? props.base[i].length : 0 }}</label>
            </div>
        </div>
        <div class="footer">
            <button class="open-modal-count" @click="toggleModalCount">Total por região</button>
            <button class="open-modal-count" @click="toggleModalReason">Total por motivos</button>
            <p>Total: {{ props.total }} cancelamentos</p>
        </div>
    </div>
    <List 
        v-if="!calendar"
        :list="list"
        @back="showCalendar"
    />
    <Transition name="fade">
        <ModalRegionCount @closeModal="toggleModalCount" v-if="abrirModalCount"/>
    </Transition>
    <Transition name="fade">
        <ModalReasonCount @closeModal="toggleModalReason" v-if="abrirModalReason"/>
    </Transition>
  
</template>

<style scoped src="./Calendario.css"></style>