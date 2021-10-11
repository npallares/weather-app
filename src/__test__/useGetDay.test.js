import { useGetDay } from "../hooks/useGetDay"

describe(`useGetDay()`,()=>{

    it(`useGetDay() devuelva el dia de la semana correcto`,()=>{

        expect(useGetDay("2021-10-23 00:00:00")).toBe("SAB")
        expect(useGetDay("2021-10-30 00:00:00")).toBe("SAB")
        expect(useGetDay("2021-10-21 00:00:00")).toBe("JUE")
        expect(useGetDay("2021-10-28 00:00:00")).toBe("JUE")

    })

})