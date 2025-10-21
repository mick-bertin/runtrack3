<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filtre Pokemon</title>
</head>

<body>
    <div id="formulaire-filtre">

        <label for="id">ID :</label>
        <input type="text" id="id" placeholder="Ex: 25">
        <br><br>

        <label for="nom">Nom :</label>
        <input type="text" id="nom" placeholder="Ex: Pikachu">
        <br><br>

        <label for="type">Type :</label>
        <select id="type">
            <option value="">Tous les types</option>
            <option value="Grass">Grass (Plante)</option>
            <option value="Poison">Poison</option>
            <option value="Fire">Fire (Feu)</option>
            <option value="Water">Water (Eau)</option>
            <option value="Electric">Electric (Électrik)</option>
            <option value="Bug">Bug (Insecte)</option>
            <option value="Flying">Flying (Vol)</option>
            <option value="Normal">Normal</option>
            <option value="Ground">Ground (Sol)</option>
            <option value="Fairy">Fairy (Fée)</option>
            <option value="Fighting">Fighting (Combat)</option>
            <option value="Psychic">Psychic (Psy)</option>
            <option value="Rock">Rock (Roche)</option>
            <option value="Steel">Steel (Acier)</option>
            <option value="Ice">Ice (Glace)</option>
            <option value="Ghost">Ghost (Spectre)</option>
        </select>
        <br><br>

        <input type="button" id="filtrer" value="Filtrer">
    </div>

    <hr>

    <h2>Résultats :</h2>
    <div id="resultats">
        <p>Cliquez sur "Filtrer" pour afficher la liste.</p>
    </div>

    <script src="script.js"></script>
</body>

</html>