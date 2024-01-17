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
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Modifica se necessario
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$refs.counterSection);
  },
};
</script>

<template>
  <!-- Counter (Guitar) -->
  <section class="counter" ref="counterSection">
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
  </section>
</template>

<style lang="scss" scoped>
@import '../styles/partials/partials';
@import '../styles/partials/mixins';

.counter {
  background-image: url(../assets/img/counter_parallax.jpg);
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
</style>