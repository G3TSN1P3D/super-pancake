function generateManagerCard(manager) {
  const managerCard = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
            <p class="card-text">ID: ${manager.id}</p>
            <a href="mailto:${manager.email}" class="card-link">${manager.email}</a>
            <p>Office number: <span class="office">${manager.office}</span></p>
        </div>
    </div>
    `;
    return managerCard;
}
module.exports = generateManagerCard;
