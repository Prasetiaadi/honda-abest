import Navbar from './components/Navbar';
import Header from './components/header/Header';
import Product from './components/Product';
import Testimoni from './components/testimonials/Testimoni';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <Header />
      </section>
      <section>
        <Product />
      </section>
      <section>
        <Testimoni />
      </section>
      <Footer />
    </div>
  );
}

export default App;
