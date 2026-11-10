import './App.css'
import Button from './components/atoms/Button'

const products = [{id: 1, name: '', price:0}, ]

function App() {
  return (
    <>
      <header id="header" className="header">
        <p className="logo"><span>L</span>UXE MOTORS</p>
        <nav>
          <ul>
            <li><a href="">inventario</a></li>
            <li><a href="">vende tu auto</a></li>
            <li>
              <a href="">financiamiento</a>
            </li>
          </ul>
        </nav>
        <a href="">Iniciar sesion</a>
      </header>
      <main className="main-banner">
        <div className="cta-banner">
          <h1>Encuentra tu proximo auto de lujo seminuevo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia,
            ad temporibus nisi perspiciatis sint doloremque deleniti nam minus
            accusantium voluptatum consequatur, id adipisci illo iure quibusdam
            facere repellat ea.
          </p>
          <form action="" className="search-form">
            <input type="search" required placeholder="buscar" />
            <Button  text='buscar' fnClick={()=>({})}  />
          </form>
        </div>
      </main>

      <section className="brands">
        <h2>Marcas</h2>
        <ul className="brands-list">
          <li className="brand-card"><img src="" alt="" /><span>nissan</span>  </li>
          <li className="brand-card"><img src="" alt="" /><span>ford</span></li>
          <li className="brand-card"><img src="" alt="" /><span>audi</span></li>
          <li className="brand-card"><img src="" alt="" /><span>chevrolet</span></li>
        </ul>
      </section>
      <section className='productContainer'>
        {products.map(
          p=>(
            <div className='card' key={p.id} >
              <p>{p.name}</p>
              <span>{p.price}</span>
              <Button text='ver detalle' fnClick={()=>({})}/>
            </div>
          ))}
      </section>

      <footer className="luxe-footer">
        <div>
          <p className="logo">LUXE MOTORS</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br/>
              Reprehenderit
          </p>
        </div>
        <div>
          <nav className="footer-nav">
            <p>compañia</p>
            <ul>
              <li><a href="">privacidad</a></li>
              <li><a href="">terminos</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <nav className="footer-nav">
            <p>visitanos</p>
            <ul>
              <li><a href="">susursales</a></li>
              <li><a href="">contacto</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <nav>
            <p>siguenos</p>
            <ul className="social-list">
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  )
}

export default App
