<template>
  <div>
<form @submit="onSubmit">

<input @keyup="onChange" ref="addChar" v-model="title" maxlength="12" autofocus  type="text" class="submitPlayerName" placeholder="Name...">

<button type="submit" :disabled="titleEmpty">+ Add player</button>

</form>


  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
name:"AddCharacter",
data(){

return {
    title: '',
    titleEmpty: true    
}

},

methods:{
    ...mapActions(["addCharacter"]),
    onSubmit(e){
        e.preventDefault();
        this.addCharacter(this.title)
        this.title = '';
        this.titleEmpty = true;
        this.$refs.addChar.focus()
    },
    onChange(e){     
     this.titleEmpty = (e.target.value === '') ? true : false;    
    }  
}
}
</script>

<style scoped>

.submitPlayerName{
   
    text-transform:capitalize;
    background: #15B4BC;
    font-weight: bold;
    outline:none;
}

button{
  background:#0B8943;
}

</style>

