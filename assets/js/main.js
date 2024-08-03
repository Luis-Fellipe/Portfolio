
function updateProfileInfo(profileData) {
    const foto = document.getElementById('profile.foto')
    foto.src = profileData.foto
    foto.alt = profileData.nome

    const nome = document.getElementById('profile.nome')
    nome.innerText = profileData.nome

    const perfil = document.getElementById('profile.perfil')
    perfil.innerText = profileData.perfil

    const local = document.getElementById('profile.local')
    local.innerText = profileData.local

    const wpp = document.getElementById('profile.wpp')
    wpp.innerText = profileData.wpp
    wpp.href = `tel:${profileData.wpp}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateHabilidades(profileData) {
    const habilidades = document.getElementById('profile.habilidades')

    habilidades.innerHTML = profileData.skills.habilidades.map(skill => `<li>${skill}</li>`).join('')
}

function updateFerramentas(profileData) {
    const ferramentas = document.getElementById('profile.skills.ferramentas')
    ferramentas.innerHTML = profileData.skills.ferramentas.map(ferramenta => `<li><img src="${ferramenta.logo}" alt="${ferramenta.nome}" title="${ferramenta.nome}"></li>`).join('')
}

function updateIdiomas(profileData) {
    const idiomas = document.getElementById('profile.idiomas')
    idiomas.innerHTML = profileData.idiomas.map(idioma => `<li>${idioma}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(projeto => {
        return `
            <li>
                <h3 ${projeto.git ? 'class="github"' : ''}>${projeto.nome}</h3>
                <a href="${projeto.url}" target="_blank">${projeto.url}</a>
            </li>
        `
    }).join('')
}

function updateExperiencia(profileData) {
    const experiencias = document.getElementById('profile.experienciaProfissional')
    experiencias.innerHTML = profileData.experiencias.map(experiencia => {
        return `
            <li>
                <h3 class="title">${experiencia.nome}</h3>
                <p class="data">${experiencia.data}</p>
                <p>${experiencia.descricao}</p>
            </li>
        `
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateHabilidades(profileData)
    updateFerramentas(profileData)
    updateIdiomas(profileData)
    updatePortfolio(profileData)
    updateExperiencia(profileData)
})()
