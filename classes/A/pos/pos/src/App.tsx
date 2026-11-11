
import './App.css'
import Button from './components/atoms/Button'
import Header from './components/organisms/Header'


function App() {
  return (
    <>
      <Header />        
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
