<script setup lang="ts">
    import { inject, reactive } from 'vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    const countReason: any = inject('reasonCount');
    const emit = defineEmits(['closeModal']);

    var reasonState : Array<boolean[]>[9] = reactive([false, false, false, false, false, false, false, false, false]);

    function closeModal(){
        emit('closeModal');
    }

    function toggleRegions(index: number){
        reasonState[index] = !reasonState[index];
    }

</script>

<template>
    <div class="black-back" @click="closeModal">
        <div class="contract-base" @click.stop="">
            <div class="header">
                <h2>Motivos de cancelamentos</h2>
                <font-awesome-icon class="close" @click="closeModal" :icon="['fas', 'xmark']" />
            </div>
            <div div="reason-outer">
                <div class="reason" @click="toggleRegions(0)">
                    <font-awesome-icon v-if="!reasonState[0]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="reasonState[0]" :icon="['fas', 'minus']" />
                    <label>Sem condições financeiras: </label>
                    <p>{{ countReason.semCondicoes.total }}</p>
                </div>
                <Transition name="reason-details">
                    <div v-if="reasonState[0]">
                        <div v-for="i in countReason.semCondicoes.regions" class="region-outer">
                            <div v-if="i.total > 0" class="region">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div div="reason-outer">
                <div class="reason" @click="toggleRegions(1)">
                    <font-awesome-icon v-if="!reasonState[1]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="reasonState[1]" :icon="['fas', 'minus']" />
                    <label>Realizou contrato novo: </label>
                    <p>{{ countReason.contratoNovo.total }}</p>
                </div>
                <Transition name="reason-details">
                    <div v-if="reasonState[1]">
                        <div v-for="i in countReason.contratoNovo.regions" class="region-outer">
                            <div v-if="i.total > 0" class="region">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div div="reason-outer">
                <div class="reason" @click="toggleRegions(2)">
                    <font-awesome-icon v-if="!reasonState[2]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="reasonState[2]" :icon="['fas', 'minus']" />
                    <label>Se mudou de cidade: </label>
                    <p>{{ countReason.mudouCidade.total }}</p>
                </div>
                <Transition name="region-details">
                    <div v-if="reasonState[2]">
                        <div v-for="i in countReason.mudouCidade.regions" class="region-outer">
                            <div v-if="i.total > 0" class="region">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div div="reason-outer">
                <div class="reason" @click="toggleRegions(3)">
                    <font-awesome-icon v-if="!reasonState[3]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="reasonState[3]" :icon="['fas', 'minus']" />
                    <label>Foi para outra empresa: </label>
                    <p>{{ countReason.outraEmpresa.total }}</p>
                </div>
                <Transition name="reason-details">
                    <div v-if="reasonState[3]">
                        <div v-for="i in countReason.outraEmpresa.regions" class="region-outer">
                            <div v-if="i.total > 0" class="region">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div div="reason-outer">
                <div class="reason" @click="toggleRegions(4)">
                    <font-awesome-icon v-if="!reasonState[4]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="reasonState[4]" :icon="['fas', 'minus']" />
                    <label>Não tem mais interesse: </label>
                    <p>{{ countReason.semInteresse.total }}</p>
                </div>
                <Transition name="reason-details">
                    <div v-if="reasonState[4]">
                        <div v-for="i in countReason.semInteresse.regions" class="region-outer">
                            <div v-if="i.total > 0" class="region">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div div="reason-outer">
                <div class="reason" @click="toggleRegions(5)">
                    <font-awesome-icon v-if="!reasonState[5]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="reasonState[5]" :icon="['fas', 'minus']" />
                    <label>Insatisfação: </label>
                    <p>{{ countReason.insatisfacao.total }}</p>
                </div>
                <Transition name="reason-details">
                    <div v-if="reasonState[5]">
                        <div v-for="i in countReason.insatisfacao.regions" class="region-outer">
                            <div v-if="i.total > 0" class="region">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div div="reason-outer">
                <div class="reason" @click="toggleRegions(6)">
                    <font-awesome-icon v-if="!reasonState[6]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="reasonState[6]" :icon="['fas', 'minus']" />
                    <label>Titular faleceu: </label>
                    <p>{{ countReason.titularFalecido.total }}</p>
                </div>
                <Transition name="reason-details">
                    <div v-if="reasonState[6]">
                        <div v-for="i in countReason.titularFalecido.regions" class="region-outer">
                            <div v-if="i.total > 0" class="region">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div div="reason-outer">
                <div class="reason" @click="toggleRegions(7)">
                    <font-awesome-icon v-if="!reasonState[7]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="reasonState[7]" :icon="['fas', 'minus']" />
                    <label>Está em outro plano da Pax: </label>
                    <p>{{ countReason.outroPlanoNosso.total }}</p>
                </div>
                <Transition name="reason-details">
                    <div v-if="reasonState[7]">
                        <div v-for="i in countReason.outroPlanoNosso.regions" class="region-outer">
                            <div v-if="i.total > 0" class="region">
                                <label>{{ i.label }}:</label>
                                <label>{{ i.total }}</label>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div div="reason-outer">
                <div class="reason" @click="toggleRegions(8)">
                    <font-awesome-icon v-if="!reasonState[8]" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="reasonState[8]" :icon="['fas', 'minus']" />
                    <label>Outros motivos: </label>
                    <p>{{ countReason.outros.total }}</p>
                </div>
                <Transition name="reason-details">
                    <div v-if="reasonState[8]">
                        <div v-for="i in countReason.outros.regions" class="region-outer">
                            <div v-if="i.total > 0" class="region">
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

<style scoped src="./ModalReasonCount.css">

</style>