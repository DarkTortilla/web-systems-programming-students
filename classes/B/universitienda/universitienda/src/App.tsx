import './App.css'
import Button from './components/atoms/Button'
import ProductContainer from './products/components/ProductContainer'

const products = [
  {
    id: 1, 
    name: "p1", 
    price: 0, 
    description: '',
    stock: 0,
    imageUrl: "",
    isActive: true, createdAt: '', updatedAt: ''
  },
  {
    id: 2, 
    name: "p1", 
    price: 0,
    description: '',
    stock: 0,
    imageUrl: "",
    isActive: true, createdAt: '', updatedAt: ''
  },
  {
    id: 3, 
    name: "p1", 
    price: 0, 
    description: '',
    stock: 0,
    imageUrl: "",
    isActive: true, createdAt: '', updatedAt: ''
  },

];

function App() {
  return (
    <>
      <header>
        <form action="" id="search-form">
          <input type="search" required placeholder="buscar" />
          <Button text='buscar' fnClick={() => ({})} />
        </form>
        <nav className="main-navigation">
          <ul>
            <li>
              <a href=""><i>c</i></a>
            </li>
            <li>
              <a href=""><i>n</i></a>
            </li>
            <li>
              <a href=""><i>p</i></a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="layout">
        <aside id="left-aside">
          <nav>
            <ul className="navigation-menu">
              <li className="menu-item">
                <a href="">
                  Inicio
                </a>
              </li>
              <li className="menu-item"><a href="">Libros</a></li>
              <li className="menu-item"><a href="">Ropa</a></li>
              <li className="menu-item"><a href="">Accesorios</a></li>
            </ul>
          </nav>
        </aside>
        <main className="container">
          <section className="main-banner">
            <div className="cta-banner">
              <h1 className="banner-title">Orgullo gallo</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, neque, asperiores nisi, aut quisquam aliquid repellat
                officiis dicta odit assumenda ea molestias. Inventore sint dolorem
                deserunt veniam neque repellat ullam.
              </p>
              <Button text='Compra ahora' fnClick={() => ({})} />
            </div>
          </section>
          <section className="products-container">
            <h2 className="title">Nuevos ingresos</h2>
            <ProductContainer products={products} />
          </section>
        </main>
      </div>
      
      <footer>
        <div>
          <h2>Universitienda</h2>
          <p>derechos uaa</p>
        </div>
        <ul>
          <li><a href="">Contacto</a></li>
          <li><a href="">Ayuda</a></li>
          <li><a href="">Terminos y servicios</a></li>
          <li><a href="">politica y privacidad</a></li>
        </ul>
      </footer>
    </>
  )
}

export default App
