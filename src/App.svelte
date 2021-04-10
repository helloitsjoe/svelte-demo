<script>
  import { Router, Link, Route } from 'svelte-routing';
  import { Header, Wrapper, Dates, Count, List, Form } from './components';

  export let today;
  export let isDev;

  const basepath = isDev ? '/' : '/svelte-demo';
  // TODO: dispatch
</script>

<main>
  <Header name="Svelte" />
  <Router {basepath}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="date">Dates</Link>
      <Link to="form">Form</Link>
      <Link to="list">List</Link>
      <Link to="count">Count</Link>
    </nav>
    <Wrapper>
      <Route path="date"><Dates {today} /></Route>
      <Route path="form"><Form /></Route>
      <Route path="count"><Count /></Route>
      <Route path="list"><List /></Route>
    </Wrapper>
  </Router>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  nav {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    margin: auto;
    flex-wrap: wrap;
  }

  :global(nav a) {
    flex: 1;
    min-width: 72px;
  }

  :global(nav * + *) {
    border-left: 1px solid lightgray;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
