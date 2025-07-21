function calcularCrescimentoPopulacional() {
    let populacaoA = 80000;
    const taxaCrescimentoA = 0.03; 
    let populacaoB = 200000;
    const taxaCrescimentoB = 0.015; 
    let anos = 0;

    console.log(`População inicial de A: ${populacaoA.toFixed(0)} habitantes`);
  console.log(`População inicial de B: ${populacaoB.toFixed(0)} habitantes\n`);

  
  while (populacaoA < populacaoB) {
    populacaoA *= (1 + taxaCrescimentoA); // Aumenta a população de A
    populacaoB *= (1 + taxaCrescimentoB); // Aumenta a população de B
    anos++; // Incrementa o contador de anos

    console.log(`Ano ${anos}:`);
    console.log(`  População de A: ${populacaoA.toFixed(0)} habitantes`);
    console.log(`  População de B: ${populacaoB.toFixed(0)} habitantes\n`);
  }

  console.log(`Serão necessários ${anos} anos para que a população do país A ( ${populacaoA.toFixed(0)} habitantes) ultrapasse ou iguale a população do país B ( ${populacaoB.toFixed(0)} habitantes ) .`);
}
calcularCrescimentoPopulacional()