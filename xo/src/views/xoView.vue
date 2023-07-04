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
    
    const ref = tabla[0][indexCol];
    for(let i = 1; i < tabla.length; i++){
        if(ref !== tabla[i][indexCol]){
            return false;
        }
    }
    return true;
}
function principal(){
    const ref = tabla[0][0];
    for (let i = 0; i < tabla.length; i++){
        if(ref !== tabla[i][i]) return false;
    }
    return true;

}

function secundar(){
    const ref = tabla[0][tabla.length];
    for (let i = 1; i < tabla.length; i++){
        if(ref !== tabla[i][tabla.length- i - 1]) return false;
    }
    return true;

}
function clickCell(row,col){
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

    if(equalsRow(row) || equalsCol(col) || principal()|| secundar()){
        gameOver = true;
        alert(valori[indexMutare] + ' a castigat')
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
                <td v-for="(cell, indexCol) in row" class="cell" @click="clickCell(indexRow,indexCol) "  v-bind:key="indexCol">
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
    padding: 1rem;
    font-size: 2rem;
    text-align: center;
    width: 100px;
    cursor: pointer;
}

</style>