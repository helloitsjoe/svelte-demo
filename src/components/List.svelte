<script>
  import Language from './Language.svelte';

  const initialLanguages = [
    { name: 'JavaScript', color: 'red' },
    { name: 'Haskell', color: 'cornflowerblue' },
    { name: 'Elm', color: 'goldenrod' },
    { name: 'Python', color: 'magenta' },
    { name: 'Java', color: 'blueviolet' },
    { name: 'C++', color: 'lime' },
  ];

  let languages = [...initialLanguages];
  const removeFirst = () => {
    languages = languages.slice(1);
  };
  const reset = () => {
    languages = initialLanguages;
  };

  let breakList = false;
  $: getKey = (language, idx) => (breakList ? idx : language.name);
</script>

<h2>Languages:</h2>
<ul>
  {#each languages as language, idx (getKey(language, idx))}
    <Language initial={language} {idx} />
  {/each}
  <button on:click={removeFirst}>Remove first language</button>
  <button on:click={reset}>Reset</button>
  <label>
    <input type="checkbox" bind:checked={breakList} />
    Break list
  </label>
  <p>
    <em
      >Note: A broken list uses the index as a key for each item. Fixed list
      uses the lanugage name, which is unique and static.</em
    >
  </p>
</ul>

<style>
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
  }

  p {
    font-weight: normal;
    font-size: 90%;
  }
</style>
