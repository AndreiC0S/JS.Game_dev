<script setup>

import {reactive, computed} from "vue"


let tabla = reactive([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],

]);

const valori = ['x', '0'];
let gameOver = false;
let indexMutare = 0


function equalsRow(indexRow){
    const line = tabla[indexRow]
    const ref = line[0];
    for(let i = 1; i < tabla[indexRow].length; i++){
        if(ref !== line[i]){
            return false;
        }
    }
    return true;
}
function equalsCol(indexCol){
    const line = tabla[indexCol]
    const ref = tabla[0][indexCol];
    if(ref === "") return;
    for(let i = 1; i < tabla.length; i++){
        if(ref !== tabla[i][indexCol]){
            return false;
        }
    }
    return true;
}
function principal(){
    const ref = tabla[0][0];
    if(ref === "") return;
    for (let i = 0; i < tabla.length; i++){
        if(ref !== tabla[i][i]) return false;
    }
    return true;

}

function secundar(){
    const ref = tabla[0][tabla.length-1];
    if(ref === "") return;
    for (let i = 1; i < tabla.length; i++){
        if(ref !== tabla[i][tabla.length - i - 1]) return false;
    }
    return true;

}

function endGame(){
    gameOver = true;
    alert(valori[indexMutare] + ' a castigat')
}
function clickCell(row,col,cellId){

    
    if(gameOver){
        return 
    }

    console.log('clicked cell:[', row, ']['+ col + ']');
    // valori[indexMutare]
    if(tabla[row][col] !== ''){
        //todo make it red
        return
    }
    tabla[row][col] = valori[indexMutare];

    const cellElem = document.getElementById(cellId);
    cellElem.classList.add('animate__animated', 'animate__heartBeat');
    // anime({
    //     targets: '#' + cellId,
    //     translateY: 50
    // });


    if(equalsRow(row) || 
       equalsCol(col) || 
       (row === col && principal()) || 
       (col === tabla.length - row - 1 && secundar())){
        endGame()
    }

    indexMutare++;
    if(indexMutare >= valori.length) {
        indexMutare = 0;
    }
    
}




</script>

<template>
    <div>
    <h1>&lt; X &amp; 0 &gt; &copy; 2023 </h1>

    <!-- Tabla -->
    <table>
        <tbody>
            <tr v-for="(row, indexRow ) in tabla " v-bind:key="indexRow"   >
                <td v-bind:id="'cell-' + indexRow + '-' + indexCol" v-for="(cell, indexCol) in row" class="cell " @click="clickCell(indexRow,indexCol,'cell-' + indexRow + '-' + indexCol) "  v-bind:key="indexCol">
                    <span v-if="cell !== '' ">
                        {{ cell }}
                    </span>
                    <span v-if="cell == '' ">_</span>
                    
                    
                </td>
            </tr>
        </tbody>
    </table>
    </div>

    
</template>

<style>

.cell{
    border: 1px solid black;
    background-color: white;
    padding: 1rem;
    font-size: 2rem;
    text-align: center;
    width: 100px;
    cursor: pointer;
}

</style>