import { HeaderContainer } from "./styles"
export default function Header() {
    return(
       <HeaderContainer>
       <div className="firstLine">
            <form >
                <input type="text" placeholder="Pesquise aqui"/>
                <button type="submit">Pesquisar</button>
            </form>
            <div>
                <span>Editar </span>
                <span>G-email</span>
            </div>
       </div>
       <div className="secondLine">
          <span>Assinaturas</span>
            <div>
                <span>Detalhes </span>
                <span>Parilhar</span>
            </div>
       </div>
       </HeaderContainer>
    )
}