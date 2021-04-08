<!-- on:click is passed to the parent -->
<button on:click><slot /></button>

<style>
  button {
    /* box-sizing: border-box; */
    border: none;
    color: white;
    background-color: #0c5;
  }

  button:active {
    background-color: #095;
  }

  button:focus {
    /* outline: 2px solid blue; */
    outline: none;
    box-shadow: 0px 0px 0px 2px blue;
  }
</style>
