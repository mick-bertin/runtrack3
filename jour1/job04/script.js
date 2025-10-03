function estBissextile(annee) {
  if (annee % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("est bissextile", estBissextile(2000));
