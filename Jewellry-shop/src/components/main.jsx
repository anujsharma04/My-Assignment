import data from './Home.json';
 import './App.css'

function Main() {

  return (
    <div className='container'>
      {data.map((data, i) => <div key={i} className='mini-container'>
        <div className='image-container'>
          <img src={data.image} alt="Logo" />
        </div>
        <h1 className='data-text'>{data.title}</h1>
        <h2 className='data-text'>₹{data.price}</h2>
        <h2 className='data-text'>{data.rate}</h2>
        {/* <button>Order Now</button> */}
      </div>
      )}
    </div>
  )
}

export default Main;