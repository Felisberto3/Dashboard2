import { FaPlug } from 'react-icons/fa'
import { HomeContainer } from './styles'
export default function Home() {
    return(
      <HomeContainer>
        <div className="card">
          <div className="cardHeader">
            <h5>
              <FaPlug/>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dicta hic,
            </h5>
            <button>
              Discutição
            </button>
            <button>
              Discussão
            </button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae amet voluptas provident sequi! Quia,
          </p>
        </div>

        <div className="card">
          <div className="cardHeader">
            <h5>
              <FaPlug/>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dicta hic,
            </h5>
            <button>
              Discutição
            </button>
            <button>
              Discussão
            </button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae amet voluptas provident sequi! Quia,
          </p>
        </div>

        <div className="card lastCard">
          <div className="cardHeader">
            <h5>
              <FaPlug/>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dicta hic,
            </h5>
          </div>
          <p className='lastone'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae amet voluptas provident sequi! Quia,
          </p>

          <details  >
            <div className="div">
            <table>
            <thead>
              <tr>
                <td className='numero'>n</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
              </tr>
            </thead>
            <tbody>
            <tr>
               <td className='numero'>n</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
              </tr>
              <tr>
               <td className='numero'>n</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
              </tr>
                <tr>
               <td className='numero'>n</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
                <td>empregados</td>
              </tr>
            </tbody>
           </table>
            </div>
          </details>
        </div>
        
      </HomeContainer>
    )
    
}