function generateInternCard(internArray) {
    let internCard = ``;
    for (let i = 0; i < internArray.length; i++) {
        let intern = internArray[i];
        let card = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${intern.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                <p class="card-text">ID: ${intern.id}</p>
                <a href="mailto:${intern.email}" class="card-link">${intern.email}</a>
                <p>School: <span class="school">${intern.school}</span></p>
            </div>
        </div>
        `;
        internCard += card;
    }
    return internCard;
}
module.exports = generateInternCard;