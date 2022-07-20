import {cleanup, render, screen} from "@testing-library/react"
import App from "../App"


describe(`<App/>`, ()=>{

    beforeEach(()=>{
        render(<App />)
    })

    afterEach(cleanup);

    
    it(`App haga render correctamente`,()=>{
        
        const app = screen.getByTestId(`app`)
        
        expect(app).toBeInTheDocument();
        
        
    })

    it(`mainContainer haga render correctamente`,()=>{

        const mainContainer = screen.getByTestId(`mainContainer`)

        expect(mainContainer).toBeInTheDocument();

    })

})