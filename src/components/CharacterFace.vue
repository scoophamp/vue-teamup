<template>
  <div class="face">
      <div class="eyes">
          <div class="left-eye eye"><div class="eye-bulb"></div></div>
          <div class="right-eye eye"><div class="eye-bulb"></div></div>
      </div>
      <div class="mouth"><div class="lips"><div class="tongue"></div></div></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

@keyframes asd {
	0% {
	
		transform: scale(1);
	}
	50% {
		
		transform: scale(0.823);
	}
	100% {
	
		transform: scale(1);
	}
}

.face{

margin-top:5px

}

.eyes{
    display: flex;
    justify-content: center;
    width: 100%;
}

.eye{
border-radius: 50%;
width: 10px;
height: 10px;
margin: 1px;
background:white;
border:1px solid black;

}

.eye-bulb{
border-radius: 50%;
width: 5px;
height: 5px;
margin: 1px;
background:black;

}

.mouth{
  display: flex;
    justify-content: center;
    width: 100%;
}
.lips{

    border-bottom-left-radius: 110px;  /* 100px of height + 10px of border */
    border-bottom-right-radius: 110px; /* 100px of height + 10px of border */
    border: 10px solid black;
    border-bottom: 0;
    width: 40px;
    height: 20px;
    margin: 1px;
    background:black;
     transform: scale(0);
    -webkit-animation: asd 3s ease-in-out infinite;
    animation: asd 3s ease-in-out infinite;

}

.tongue{

    border-bottom-left-radius: 110px;  
    border-bottom-right-radius: 110px; 
    border: 10px solid red;    
    border-bottom: 0;    
    margin: 1px;   
     transform: scale(0);
    -webkit-animation: asd 3s ease-in-out infinite;
    animation: asd 3s ease-in-out infinite;

}
</style>