<script setup lang="ts">
import XLSX from "xlsx";
import { ref, provide } from 'vue';
import Calendario from "@/components/calendario/Calendario.vue";
import RegionReason from '@/models/regionWithReason.js'
import ReasonRegion from '@/models/reasonWithRegion.js'

var file = null;
var home = ref(true);
var objData: Array<Array<any>>[31] = new Array();

var total = 0;
var countRegion = new RegionReason();
var countReasonRegion = new ReasonRegion();

provide('totalCountRegion', countRegion);
provide('reasonCount', countReasonRegion);

function print(event: any) {
  file = event.target.files ? event.target.files[0] : null
  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target?.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      var data: any = XLSX.utils.sheet_to_json(ws, { header: 1 });
      total = data.length - 1;
      for (let i = 1; i < data.length; i++) {
        let client = {
          'regiao': data[i][0],
          'filial': data[i][1],
          'dataCancelamento': data[i][2],
          'contrato': data[i][4],
          'nome': data[i][5],
          'dataCadastro': data[i][6],
          'categoria': data[i][8],
          'subCategoria': data[i][9],
          'mesPago': data[i][10]  
        }
        if(client.nome != undefined){
          countReasonRegion.defineReasonCountPlusRegion(client.categoria, client.regiao);
          countRegion.defineCountRegionPlusReason(client.regiao, client.categoria);
          let aux = client.dataCancelamento.slice(0, 2);
          if (aux < 10) {
            aux = aux.slice(1, 2);
            if (objData[aux] == undefined) {
              objData[aux] = new Array();
            }
            objData[aux].push(client);
          }
          else {
            if (objData[aux] == undefined) {
              objData[aux] = new Array();
            }
            objData[aux].push(client);
          }
        }
        else {
          total = total -1;
        }
      }
      home.value = false;
    }
    reader.readAsBinaryString(file);
  }
}

function downloadModel() {
  window.location.href='/src/assets/modelo_cancelamentos.xlsx'
}

</script>

<template>
  <div v-if="home" class="outer">
    <h1>Cancelamentos</h1>
    <!--<div>
      <label for="file">Selecionar Arquivo</label>
      <a class="download" href="https://docs.google.com/spreadsheets/d/1WY-d2KFQ5ewCNlz6olDjndwQkCOKauzG/edit?usp=sharing&ouid=101524040067790786365&rtpof=true&sd=true" target="_blank">Modelo de planilha</a>
    </div>-->
    <div class="buttons">
      <div class="download">
        <label for="file">Selecionar Arquivo</label>
        <input type="file" @change="print" id="file" />
      </div>
      <div class="download">
        <a  download="teste.xlsx" href="/src/assets/modelo_cancelamentos.xlsx" target="_blank">Baixar modelo</a>
      </div>
    </div>
    
      
    
  </div>
  <div v-if="!home">
    <Calendario :base="objData" :total="total" />
  </div>
</template>

<style scoped src="./Home.css"></style>
@/models/reasonWithRegion.js@/models/regionWithReason.js