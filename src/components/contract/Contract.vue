<script setup lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    const props = defineProps(['client']);
    const emit = defineEmits(['back']);

    function closeModal() {
        emit('back');
    }
</script>

<template>
    <div class="black-back" @click="closeModal">
        <div class="contract-base" @click.stop="">
            <div class="header">
                <h2>Dados Cancelamento</h2>
                <font-awesome-icon class="close" @click="closeModal" :icon="['fas', 'xmark']" />
            </div>
            <div class="spacing">
                <div class="same-line">
                    <div>
                        <label>Filial</label>
                        <p>{{ props.client.filial }}</p>
                    </div>
                    <div>
                        <div>
                        <label>Contrato</label>
                        <p>{{ props.client.contrato }}</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="spacing">
                <label>Nome</label>
                <p>{{ props.client.nome }}</p>
            </div>
            <div class="spacing">
                <div class="same-line">
                    <div>
                        <label>Data de cancelamento</label>
                        <p>{{ props.client.dataCancelamento }}</p>
                    </div>
                    <div>
                        <label>Data de cadastro</label>
                        <p>{{ props.client.dataCadastro }}</p>
                    </div>
                </div>
            </div>
            <div class="spacing">
                <div class="same-line">
                    <div>
                        <label>Motivo cancelamento</label>
                        <p>{{ props.client.categoria }}</p>
                    </div>
                    <div>
                        <label>Sub categoria do cancelamento</label>
                        <p>{{ props.client.subCategoria ? props.client.subCategoria : '-' }}</p>
                    </div>
                </div>
            </div>
            <div class="spacing">
                <label>Ultimo mês pago</label>
                <p>{{ props.client.mesPago }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped src="./Contract.css"></style>