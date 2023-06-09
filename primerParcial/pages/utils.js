
function createPage(title, content) {
    let html;

    html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    //css
    html += '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">'
    html += '<link rel="stylesheet" href="/css/style.css">'

    html += '<title>' + title + '</title></head><body>'
    html += '<div id="app">'
    //nav
    html += 
        `<header class="navbar navbar-expand-md navbar-dark bd-navbar">
            <nav class="container-xxl flex-wrap flex-md-nowrap" aria-label="Main navigation">
                <a class="navbar-brand p-0 me-2" href="/"><img src="../public/img/logo.png" alt="logo del sitio" style="width: 39px;"></a>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path></svg>
                </button>
                <div class="navbar-collapse collapse justify-content-md-end" id="bdNavbar">
                    <ul class="navbar-nav flex-md-row flex-wrap bd-navbar-nav pt-2 py-md-0">
                        <li class="nav-item col-6 col-md-auto">
                            <a class="nav-link p-2" href="/">Inicio</a>
                        </li>
                        <li class="nav-item col-6 col-md-auto">
                            <a class="nav-link p-2"  href="/proyectos/mobile">Mobile</a>
                        </li>
                        <li class="nav-item col-6 col-md-auto">
                            <a class="nav-link p-2"  href="/proyectos/landingpage">Landing Page</a>
                        </li>
                        <li class="nav-item col-6 col-md-auto">
                            <a class="nav-link p-2"  href="/proyectos/webapp">Web App</a>
                        </li>
                        <li class="nav-item col-6 col-md-auto">
                            <a class="nav-link p-2"  href="/proyectos/ecommerce">e-Commerce</a>
                        </li>
                        <li class="nav-item col-6 col-md-auto">
                            <a class="nav-link p-2"  href="/proyectos/games">Games</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>`
    html+= '<main class="container">'
    html += content
    html+= '</main>'
    html += 
    `<footer class="bg-light">
        <p class="m-0">Micaela Guggiari &copy; 2023 | App Hibridas | Brian Lara</p>
    </footer>`
    html += '</div>'
    html += '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>'
    html += '</body> </html>'

    return html
}

export {
    createPage
}