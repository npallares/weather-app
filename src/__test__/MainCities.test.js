import {render, cleanup, screen, fireEvent} from "@testing-library/react"
import MainCities from "../components/citiesComponents/MainCities";

describe(`<MainCities/>`, ()=>{

    beforeEach(()=>{
        render(<MainCities/>)
    })

    afterEach(cleanup);

    it(`SELECT haga render correctamente`,()=>{

        const citySelect = screen.getByTestId(`city-Select`)

        expect(citySelect).toBeInTheDocument();

    })

    it(`OPCIONES del select hagan render`,()=>{

        const monaco = screen.getByRole('option',{name:/monaco/i})
        const orlando = screen.getByRole('option',{name:/orlando/i})
        const barcelona = screen.getByRole('option',{name:/barcelona/i})
        const auckland = screen.getByRole('option',{name:/auckland/i})
        const tokyo = screen.getByRole('option',{name:/tokyo/i})

        expect(monaco).toBeInTheDocument()
        expect(orlando).toBeInTheDocument()
        expect(barcelona).toBeInTheDocument()
        expect(auckland).toBeInTheDocument()
        expect(tokyo).toBeInTheDocument()

    })

    it(`DATA CORRECTA de peticion por SELECT`, async()=>{

        const citySelect = screen.getByTestId(`city-Select`)
                
        fireEvent.change(citySelect, { target: { value:1850147 } })
        
        const Ciudad = await screen.findByText("TOKYO")
        const Pais = await screen.findByText("JP -")
        const TempMax = await screen.findByText(/Temperatura Máxima/i)
        const TempMin = await screen.findByText(/Temperatura Mínima/i)
        const Presion = await screen.findByText(/Presión/i)
        const Humedad = await screen.findByText(/Humedad/i)
        
    })
   
})