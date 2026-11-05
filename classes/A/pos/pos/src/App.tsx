
import './App.css'
import Button from './components/atoms/Button'


function App() {

  return (
    <>
      <header >
        <nav className="header-navigation ">
          <a href="">Productos</a>
          <ul>
            <li><a href="">ventas</a></li>
            <li><a href="">inventario</a></li>
            <li><a href="">usuarios</a></li>
          </ul>
        </nav>
      </header>
      <section className="sidebar-layout">
        <div className="products-view">
          <form action="" className="search-form">
            <input type="text" />
            <Button text='buscar' fnClick={()=>({})}/>
          </form>
          <div className="products-container" id="products-container">

          </div>
          <div className="pagination">
            <button className="btn" > prev </button>
            <p className="page">1</p>
            <button className="btn"> next </button>
          </div>
        </div>
        <aside className="sidebar">
          <div className="cart-list">
            <span>aun no hay productos</span>
          </div>
          <div className="pay-section">

            <p className="total">Total: 0.00</p>
            <Button text='Proceder al pago' fnClick={()=>({})}/>
          </div>
        </aside>
      </section>
    </>
  )
}

export default App
