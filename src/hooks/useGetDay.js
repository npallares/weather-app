export const useGetDay = (fecha) => { 
        const dias = [
            'DOM',
            'LUN',
            'MAR',
            'MIE',
            'JUE',
            'VIE',
            'SAB',
          ];
        const numeroDia = new Date(fecha).getDay()
        return dias[numeroDia]
    
}
