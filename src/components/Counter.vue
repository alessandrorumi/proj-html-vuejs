<!-- Ho aggiunto un attributo ref all'elemento <section> per ottenere un riferimento ad esso nell'istanza del componente (ref="counterSection").
  Ho aggiunto una nuova proprietà di dati chiamata isInViewport per tenere traccia se l'elemento è nella viewport.
  Ho aggiunto il metodo animateIfInViewport per verificare se l'elemento è nella viewport prima di chiamare animateCounter.
  Ho aggiunto il metodo handleIntersection, chiamato quando l'intersezione dell'elemento con la viewport cambia. Aggiorna la proprietà isInViewport in base allo stato di intersezione.
  Nel hook mounted, ho impostato un Intersection Observer per osservare l'elemento <section> e chiamare il metodo handleIntersection quando la sua intersezione con la viewport cambia.

Regola l'opzione threshold nella configurazione dell'Intersection Observer secondo le tue esigenze. Il threshold rappresenta la percentuale dell'elemento di destinazione che deve essere visibile affinché il callback venga attivato (qui è impostato su 0,5, il che significa che almeno il 50% dell'elemento deve essere visibile). -->


<script>
export default {
  data() {
    return {
      targetNumber1: 900,
      targetNumber2: 800,
      targetNumber3: 400,
      targetNumber4: 1001,
      start1: 0,
      start2: 0,
      start3: 0,
      start4: 0,
      isInViewport: false,
    };
  },
  methods: {
    animateIfInViewport() {
      if (this.isInViewport) {
        this.animateCounter();
      }
    },
    animateCounter() {
      const animationSpeed = 10;

      const interval1 = setInterval(() => {
        if (this.start1 < this.targetNumber1) {
          this.start1+=10;
        } else {
          clearInterval(interval1);
        }
      }, animationSpeed);

      const interval2 = setInterval(() => {
        if (this.start2 < this.targetNumber2) {
          this.start2+=10;
        } else {
          clearInterval(interval2);
        }
      }, animationSpeed);

      const interval3 = setInterval(() => {
        if (this.start3 < this.targetNumber3) {
          this.start3+=4;
        } else {
          clearInterval(interval3);
        }
      }, animationSpeed);

      const interval4 = setInterval(() => {
        if (this.start4 < this.targetNumber4) {
          this.start4+=11;
        } else {
          clearInterval(interval4);
        }
      }, animationSpeed);
    },
    handleIntersection(entries) {
      const entry = entries[0];
      this.isInViewport = entry.isIntersecting;
      this.animateIfInViewport();
    },
  },
  mounted() {
    // Utilizzo dell'Intersection Observer per rilevare quando l'elemento è nella viewport
    // La costante options contiene le opzioni di configurazione per l'oggetto IntersectionObserver, che è utilizzato per rilevare quando un elemento entra o esce dalla viewport. Ecco cosa fanno le varie opzioni:
    const options = {
      // root: L'elemento che è utilizzato come area di visualizzazione per l'intersezione. Se null, l'intersezione viene rilevata rispetto alla viewport del documento.
      root: null,
      // rootMargin: Margine intorno all'elemento root. Puoi pensarci come a un'estensione della root. Ad esempio, se rootMargin è impostato su '10px', l'intersezione sarà rilevata quando l'elemento target entra nella viewport o si trova a meno di 10 pixel all'esterno della root.
      rootMargin: '0px',
      // threshold: La soglia di intersezione, espressa come valore compreso tra 0 e 1. Questo rappresenta la percentuale di visibilità dell'elemento target necessaria per scatenare la callback. Un valore di 0.5 significa che almeno il 50% dell'elemento deve essere visibile.
      threshold: 0.5, // Modifica se necessario
      // Nel tuo caso, con threshold impostato su 0.5, la callback (il metodo handleIntersection nel tuo codice) verrà chiamata quando almeno il 50% dell'elemento target è visibile nella viewport. Puoi modificare questo valore in base alle tue esigenze, ad esempio, impostandolo su 0.8 per richiedere che almeno l'80% dell'elemento sia visibile per attivare la callback.
    };

    // Questa parte del codice crea un nuovo oggetto IntersectionObserver e lo utilizza per osservare l'elemento referenziato da this.$refs.counterSection. Ecco cosa fanno le due linee di codice:


    // const observer = new IntersectionObserver(this.handleIntersection, options);: Qui stai istanziando un nuovo oggetto IntersectionObserver. Questo oggetto richiede due argomenti principali:
    // this.handleIntersection: Questo è il callback che verrà chiamato ogni volta che l'elemento target entra o esce dalla viewport, o quando cambia il suo stato di intersezione. Nel tuo caso, il callback è il metodo handleIntersection definito nel componente.
    // options: Questo è l'oggetto di opzioni che hai definito precedentemente, contenente informazioni sulla configurazione dell'IntersectionObserver.
    const observer = new IntersectionObserver(this.handleIntersection, options);
    // observer.observe(this.$refs.counterSection);: Qui stai dicendo all'IntersectionObserver di iniziare ad osservare l'elemento referenziato da this.$refs.counterSection. Quando questo elemento entra o esce dalla viewport o cambia il suo stato di intersezione rispetto alle opzioni specificate, il callback handleIntersection verrà chiamato.
    observer.observe(this.$refs.counterSection);
    // In sostanza, questa configurazione consente di eseguire una certa logica (definita nel metodo handleIntersection) quando l'elemento con riferimento a this.$refs.counterSection diventa visibile nella viewport o cambia il suo stato di intersezione rispetto alle opzioni specificate. In questo contesto specifico, la logica che viene eseguita quando l'elemento è nella viewport è quella di impostare la proprietà isInViewport su true e chiamare il metodo animateIfInViewport, che a sua volta può attivare l'animazione del contatore (animateCounter).
  },
};
</script>

<template>
  <!-- Counter (Guitar) -->
  <div class="counter" ref="counterSection">
    <div class="card">
      <i class="fa-solid fa-child-reaching"></i>
      <h2>{{ start1 }}</h2>
      <h3>CONCERTS</h3>
    </div>
    <div class="card">
      <i class="fa-solid fa-rocket"></i>
      <h2>{{ start2 }}</h2>
      <h3>HAPPY CLIENTS</h3>
    </div>
    <div class="card">
      <i class="fa-solid fa-trophy"></i>
      <h2>{{ start3 }}</h2>
      <h3>MUSIC AWARDS</h3>
    </div>
    <div class="card">
      <i class="fa-solid fa-music"></i>
      <h2>{{ start4 }}</h2>
      <h3>TOTAL SONGS</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/partials/partials';
@import '../styles/partials/mixins';

.counter {
  min-height: 500px;
  position: relative;
  padding: 0 3rem;
  text-align: start;
  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    color: #fff;
    width: calc(25% - 2rem);
    margin: 0 1rem;
    text-align: center;

    h2 {
      font-size: 4rem;
    }

    i {
      font-size: 4rem;

      &:hover {
        color: $main_orange;
      }
    }
  }
}

/*background responsive */
@media all and (max-width: 1365px) {
  .counter {
    background-image: url(../assets/img/counter_parallax.jpg);
    background-position: center;
  }
}

@media all and (max-width: 767px) {
  .counter {
    flex-direction: column;

    .card {
      padding: 25px 0;
      width: 100%;
    }
  }
}
</style>