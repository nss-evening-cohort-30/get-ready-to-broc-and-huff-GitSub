 function createHeader() {
            const domString = `
                <nav class="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            `;
            
            const header = document.createElement('header');
            header.style.backgroundColor = '#C4C4C4';
            header.style.width = '100%';
            header.style.height = '96px';
            header.style.textAlign = 'left';
            header.style.padding = '20px';
            header.style.boxSizing = 'border-box';
            
            header.innerHTML = domString;
            
            document.body.insertBefore(header, document.body.firstChild);
        }
       createHeader();
