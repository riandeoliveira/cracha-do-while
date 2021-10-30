// Objeto que armazena nomes de perfis de redes sociais.
// Ao trocar os nomes abaixo é possível alterar todo o programa.
const socialMediaLinks = {
    github: "riandeoliveira",
    youtube: "channel/UCcjZlAymGeV87aiaXMxBCsw",
    instagram: "rian.deoliveira",
    facebook: "RianOliveira2001",
    twitter: "_MrBachelor_",
}

// Atribui as redes sociais de acordo com as informações do objeto.
function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute("class");
        li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`;
    }
}

changeSocialMediaLinks();

// Usa a API do GitHub para pegar os dados de um usuário selecionado e preenche o crachá com as informações dele.
function getGitHubProfilesInfos() {
    const url = `https://api.github.com/users/${socialMediaLinks.github}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            userAvatar.src = data.avatar_url;
            userLink.href = data.html_url;
            userName.textContent = data.name;
            userLogin.textContent = data.login;
            userBio.textContent = data.bio;
        });
}

getGitHubProfilesInfos();