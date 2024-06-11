<script setup lang="ts">

import { ref, reactive } from 'vue'
import { onBeforeMount } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Contract from '../contract/Contract.vue'

const props = defineProps(['list']);
const emit = defineEmits(['back']);
const indices: Array<String[]>[9] =
    [
        "Dourados",
        "Mato Grosso do Sul",
        "Ponta Porã",
        "Conesul",
        "Paraná",
        "Goiás",
        "Rio de Janeiro",
        "Paraguay",
        "Mato Grosso"
    ];

var listByRegion: Array<Array<any>>[9] = new Array();
var emptyDay = false;
var clientSelected: any = null;

var modal = ref(false);
var loading = ref(true);
var regionState: Array<boolean[]>[9] = reactive([false, false, false, false, false, false, false, false, false]);

onBeforeMount(() => {
    if (props.list) {
        for (let i of props.list) {
            switch (i.regiao.toUpperCase().trim()) {
                case "DOURADOS":
                    if (listByRegion[0] == undefined) {
                        listByRegion[0] = new Array;
                    }
                    listByRegion[0].push(i);
                    break;

                case "MS":
                    if (listByRegion[1] == undefined) {
                        listByRegion[1] = new Array;
                    }
                    listByRegion[1].push(i);
                    break;
                case "PONTA":
                    if (listByRegion[2] == undefined) {
                        listByRegion[2] = new Array;
                    }
                    listByRegion[2].push(i);
                    break;
                case "CONESUL":
                    if (listByRegion[3] == undefined) {
                        listByRegion[3] = new Array;
                    }
                    listByRegion[3].push(i);
                    break;
                case "PR":
                    if (listByRegion[4] == undefined) {
                        listByRegion[4] = new Array;
                    }
                    listByRegion[4].push(i);
                    break;
                case "GO":
                    if (listByRegion[5] == undefined) {
                        listByRegion[5] = new Array;
                    }
                    listByRegion[5].push(i);
                    break;
                case "RJ":
                    if (listByRegion[6] == undefined) {
                        listByRegion[6] = new Array;
                    }
                    listByRegion[6].push(i);
                    break;
                case "PY":
                    if (listByRegion[7] == undefined) {
                        listByRegion[7] = new Array;
                    }
                    listByRegion[7].push(i);
                    break;
                case "MT":
                    if (listByRegion[8] == undefined) {
                        listByRegion[8] = new Array;
                    }
                    listByRegion[8].push(i);
                    break;
                default:
                    break;
            }
        }
        for (let i = 0; i < 9; i++) {
            if (listByRegion[i] == undefined) {
                listByRegion[i] = new Array();
            }
        }
        loading.value = false;
    }
    else{
        emptyDay = true;
        loading.value = false;
    }

})

function switchState(index: number) {
    regionState[index] = !regionState[index];
}

function toggleModal(client: any){
    modal.value = !modal.value;
    if(client != null){
        clientSelected = client;
    } 
    else{
        clientSelected = null;
    }
}

function backToCalendar() {
    emit('back');
}

</script>

<template>
    <button class="back" @click="backToCalendar">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
        Voltar ao calendario
    </button>
    <div v-if="emptyDay" class="emptyDay">
        <h2>
            Sentimos muito,<br/> não encontamos cancelamentos para esse dia
        </h2>
    </div>
    <div class="list">
        <div v-for="(i, index) in listByRegion" class="region">
            <div class="region-name" @click="switchState(index)">
                <p>{{ i.length }}</p>
                <h3>{{ indices[index] }}</h3>
                <font-awesome-icon v-if="!regionState[index]" class="hidding" :icon="['fas', 'sort-down']" />
                <font-awesome-icon v-if="regionState[index]" class="hidding" :icon="['fas', 'sort-down']"
                    flip="vertical" />
            </div>
            <Transition name="region">
                <div v-if="regionState[index]">
                    <div v-if="i.length > 0"
                        style="background-color: #fffcc5; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;">
                        <div v-for="j in i" class="data" @click="toggleModal(j)">
                            <p>{{ j.contrato }}</p>
                            <p>{{ j.nome }}</p>
                        </div>
                    </div>
                    <div v-else :class="[regionState[index] ? 'show' : 'hide']"
                        style="background-color: #fffcc5; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;">
                        <p class="not-found">Não foram encontrados clientes para essa região</p>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
    <Transition name="fade">
        <Contract v-if="modal" :client="clientSelected" @back="toggleModal(null)"/>
    </Transition>
</template>

<style scoped src="./List.css"></style>