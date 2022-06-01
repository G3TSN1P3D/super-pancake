function generateEngineerCard(engineerArray) {
    let engineerCard = ``;
    for (let i = 0; i < engineerArray.length; i++) {
        let engineer = engineerArray[i];
        let card = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${engineer.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                <p class="card-text">${engineer.id}</p>
                <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a>
                <a href="https://www.github.com/${engineer.github}" class="card-link">${engineer.github}</a>
            </div>
        </div>
        `;
        engineerCard += card;
    }
    return engineerCard;
}
module.exports = generateEngineerCard;