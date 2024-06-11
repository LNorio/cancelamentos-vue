<script setup lang="ts">
    import { inject, reactive } from 'vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    const countRegion: any = inject('totalCountRegion');
    const emit = defineEmits(['closeModal']);

    var regionState: Array<boolean[]>[9] = reactive([false, false, false, false, false, false, false, false, false]);

    function closeModal(){
        emit('closeModal');
    }

    function toggleReasons(index: number){
        regionState[index] = !regionState[index];
    }

</script>

<template>
    <div class="black-back" @click="closeModal">
        <div class="contract-base" @click.stop="">
            <div class="header">
                <h2>Total por Região</h2>
                <font-awesome-icon class="close" @click="closeModal" :icon="['fas', 'xmark']" />
            </div>
            <div div="region-outer">
                <div class="region" @click="toggleReasons(0)">
                    <font-awesome-icon v-if="!regionState[0]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="regionState[0]" :icon="['fas', 'minus']" />
                    <label>Dourados: </label>
                    <p>{{ countRegion.dourados.total }}</p>
                </div>
                <Transition name="region-details">
                    <div v-if="regionState[0]">
                        <div v-for="i in countRegion.dourados.reasons" class="reasons-outer">
                            <div v-if="i.total > 0" class="reasons">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div class="region-outer"> 
                <div class="region" @click="toggleReasons(1)">
                    <font-awesome-icon v-if="!regionState[1]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="regionState[1]" :icon="['fas', 'minus']" />
                    <label>Mato Grosso do Sul: </label>
                    <p>{{ countRegion.ms.total }}</p>
                </div>
                <Transition name="region-details">
                    <div v-if="regionState[1]">
                        <div v-for="i in countRegion.ms.reasons" class="reasons-outer">
                            <div v-if="i.total > 0" class="reasons">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div class="region-outer"> 
                <div class="region" @click="toggleReasons(2)">
                    <font-awesome-icon v-if="!regionState[2]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="regionState[2]" :icon="['fas', 'minus']" />
                    <label>Ponta Porã: </label>
                    <p>{{ countRegion.ponta.total }}</p>
                </div>
                <Transition name="region-details">
                    <div v-if="regionState[2]">
                        <div v-for="i in countRegion.ponta.reasons" class="reasons-outer">
                            <div v-if="i.total > 0" class="reasons">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div class="region-outer">
                <div class="region" @click="toggleReasons(3)"> 
                    <font-awesome-icon v-if="!regionState[3]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="regionState[3]" :icon="['fas', 'minus']" />
                    <label>Conesul: </label>
                    <p>{{ countRegion.conesul.total }}</p>
                </div>
                <Transition name="region-details">
                    <div v-if="regionState[3]">
                        <div v-for="i in countRegion.conesul.reasons" class="reasons-outer">
                            <div v-if="i.total > 0" class="reasons">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div class="region-outer">
                <div class="region" @click="toggleReasons(4)"> 
                    <font-awesome-icon v-if="!regionState[4]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="regionState[4]" :icon="['fas', 'minus']" />
                    <label>Paraná: </label>
                    <p>{{ countRegion.pr.total }}</p>
                </div>
                <Transition name="region-details">
                    <div v-if="regionState[4]">
                        <div v-for="i in countRegion.pr.reasons" class="reasons-outer">
                            <div v-if="i.total > 0" class="reasons">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div class="region-outer">
                <div class="region" @click="toggleReasons(5)"> 
                    <font-awesome-icon v-if="!regionState[5]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="regionState[5]" :icon="['fas', 'minus']" />
                    <label>Goiás: </label>
                    <p>{{ countRegion.go.total }}</p>
                </div>
                <Transition name="region-details">
                    <div v-if="regionState[5]">
                        <div v-for="i in countRegion.go.reasons" class="reasons-outer">
                            <div v-if="i.total > 0" class="reasons">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div class="region-outer">
                <div class="region" @click="toggleReasons(6)">
                    <font-awesome-icon v-if="!regionState[6]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="regionState[6]" :icon="['fas', 'minus']" /> 
                    <label>Rio de Janeiro: </label>
                    <p>{{ countRegion.rj.total }}</p>
                </div>
                <Transition name="region-details">
                    <div v-if="regionState[6]">
                        <div v-for="i in countRegion.rj.reasons" class="reasons-outer">
                            <div v-if="i.total > 0" class="reasons">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div> 
                </Transition>
            </div>
            <div class="region-outer">
                <div class="region" @click="toggleReasons(7)">
                    <font-awesome-icon v-if="!regionState[7]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="regionState[7]" :icon="['fas', 'minus']" /> 
                    <label>Paraguay: </label>
                    <p>{{ countRegion.py.total }}</p>
                </div>
                <Transition name="region-details">
                    <div v-if="regionState[7]">
                        <div v-for="i in countRegion.py.reasons" class="reasons-outer">
                            <div v-if="i.total > 0" class="reasons">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div>
                </Transition> 
            </div>
            <div class="region-outer">
                <div class="region" @click="toggleReasons(8)">
                    <font-awesome-icon v-if="!regionState[8]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="regionState[8]" :icon="['fas', 'minus']" /> 
                    <label>Mato Grosso: </label>
                    <p>{{ countRegion.mt.total }}</p>
                </div>
                <Transition name="region-details">
                    <div v-if="regionState[8]">
                        <div v-for="i in countRegion.mt.reasons" class="reasons-outer">
                            <div v-if="i.total > 0" class="reasons">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div> 
                </Transition>
            </div>
        </div>
    </div>
</template>

<style scoped src="./ModalRegionCount.css">

</style>